import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site-frame">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
