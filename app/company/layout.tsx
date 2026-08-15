import { generateRouteMetadata } from "../components/generateRouteMetadata";

export async function generateMetadata() {
  return generateRouteMetadata("/company");
}

export default function CompanyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
