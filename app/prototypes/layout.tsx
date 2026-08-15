import { generateRouteMetadata } from "../components/generateRouteMetadata";

export async function generateMetadata() {
  return generateRouteMetadata("/prototypes");
}

export default function PrototypesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
