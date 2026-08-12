import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical | Plectrum",
  description:
    "Professional sensory integration with working vibration prototypes and FABTIVE active fabric for continuous physical sensation.",
};

export default function ClinicalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
