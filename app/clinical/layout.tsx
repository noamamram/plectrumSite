import { generateRouteMetadata } from "../components/generateRouteMetadata";

export async function generateMetadata() {
  return generateRouteMetadata("/clinical");
}

export default function ClinicalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
