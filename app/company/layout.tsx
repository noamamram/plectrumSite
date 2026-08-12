import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Plectrum",
  description:
    "Plectrum combines software, clinical practice and wearable prototypes while developing FABTIVE active fabric.",
};

export default function CompanyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
