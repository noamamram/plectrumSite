import { chromium } from "playwright";

const base = "http://127.0.0.1:3456";
const widths = [1440, 1280, 1024, 820, 768, 430, 390, 360];
const pages = ["/", "/technology", "/clinical", "/prototypes", "/company"];
const langs = [
  { code: "en", dir: "ltr" },
  { code: "he", dir: "rtl" },
  { code: "ar", dir: "rtl" },
];

const browser = await chromium.launch({ headless: true });
const results = [];

for (const lang of langs) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await context.addCookies([{ name: "plectrum-language", value: lang.code, url: base }]);
  const page = await context.newPage();
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  const htmlLang = await page.locator("html").getAttribute("lang");
  const htmlDir = await page.locator("html").getAttribute("dir");
  const title = await page.title();
  results.push({
    check: `lang-cookie-${lang.code}`,
    ok: htmlLang === lang.code && htmlDir === lang.dir,
    detail: `${htmlLang}/${htmlDir} title=${title}`,
  });

  const bodyText = await page.locator("body").innerText();
  results.push({
    check: `no-fabtive-colon-${lang.code}`,
    ok: !bodyText.includes("FABTIVE :") && !bodyText.includes("ACTIVE FABRIC"),
    detail: "ok",
  });

  const fabtive = page.locator(".fabtive-mark");
  if (await fabtive.count()) {
    const label = await fabtive.getAttribute("aria-label");
    results.push({
      check: `fabtive-lockup-${lang.code}`,
      ok: Boolean(label && label.includes("FABTIVE")),
      detail: label,
    });
  }

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of pages) {
      await page.goto(`${base}${path}`, { waitUntil: "domcontentloaded" });
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth };
      });
      if (overflow.scrollWidth > overflow.clientWidth + 1) {
        results.push({
          check: "overflow",
          ok: false,
          detail: `${lang.code} ${path} @${width} ${JSON.stringify(overflow)}`,
        });
      }

      if (path === "/" && width <= 820) {
        const order = await page.evaluate(() => {
          const copy = document.querySelector(".hero-copy");
          const visual = document.querySelector(".hero-products-visual");
          const disc = document.querySelector(".hero-media-disclaimer");
          if (!copy || !visual || !disc) return null;
          return {
            cy: copy.getBoundingClientRect().top,
            vy: visual.getBoundingClientRect().top,
            dy: disc.getBoundingClientRect().top,
          };
        });
        if (order && !(order.cy < order.vy && order.vy < order.dy)) {
          results.push({
            check: "hero-order",
            ok: false,
            detail: `${lang.code} @${width} ${JSON.stringify(order)}`,
          });
        }
      }

      const overlays = await page.evaluate(() =>
        [...document.querySelectorAll(".media-disclaimer")].map((el) => ({
          pos: getComputedStyle(el).position,
          className: el.className,
        })),
      );
      const bad = overlays.filter((o) => o.pos === "absolute" || o.pos === "fixed");
      if (bad.length) {
        results.push({
          check: "disclaimer-overlay",
          ok: false,
          detail: `${lang.code} ${path} @${width} ${JSON.stringify(bad)}`,
        });
      }
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  await page.locator(".menu-toggle").click();
  await page.locator(".main-nav.is-open").waitFor({ state: "visible", timeout: 3000 });
  await page.locator(".mobile-partner-cta").scrollIntoViewIfNeeded();
  results.push({
    check: `mobile-cta-${lang.code}`,
    ok: await page.locator(".mobile-partner-cta").isVisible(),
    detail: await page.locator(".mobile-partner-cta").innerText(),
  });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(250);
  results.push({
    check: `escape-close-${lang.code}`,
    ok: (await page.locator(".main-nav.is-open").count()) === 0,
    detail: "escape",
  });

  await context.close();
}

{
  const context = await browser.newContext();
  await context.addInitScript(() => {
    const proto = HTMLCanvasElement.prototype;
    const original = proto.getContext;
    proto.getContext = function (type, attrs) {
      if (String(type).toLowerCase().includes("webgl")) return null;
      return original.call(this, type, attrs);
    };
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto(`${base}/prototypes`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  const fallback = await page.locator(".model-scene-fallback").count();
  const webglSpam = errors.filter((e) => /WebGLRenderer|THREE\.WebGL/i.test(e));
  results.push({
    check: "webgl-fallback",
    ok: fallback > 0 && webglSpam.length === 0,
    detail: `fallback=${fallback} spam=${webglSpam.length} errors=${errors.length}`,
  });
  await context.close();
}

await browser.close();
const fails = results.filter((r) => r.ok === false);
const passes = results.filter((r) => r.ok !== false);
console.log(JSON.stringify({ pass: passes.length, fail: fails.length, fails, samplePasses: passes.slice(0, 20) }, null, 2));
process.exit(fails.length ? 1 : 0);
