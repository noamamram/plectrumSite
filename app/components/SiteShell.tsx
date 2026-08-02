import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { ScrollEffects } from "./ScrollEffects";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site-frame">
      <ScrollEffects />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
