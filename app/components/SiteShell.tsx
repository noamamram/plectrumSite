import { BackToTop } from "./BackToTop";
import { DocumentMeta } from "./DocumentMeta";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { ScrollEffects } from "./ScrollEffects";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site-frame">
      <DocumentMeta />
      <ScrollEffects />
      <SiteHeader />
      {children}
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
