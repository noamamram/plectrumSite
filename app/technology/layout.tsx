import { generateRouteMetadata } from "../components/generateRouteMetadata";

export async function generateMetadata() {
  return generateRouteMetadata("/technology");
}

export default function TechnologyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
