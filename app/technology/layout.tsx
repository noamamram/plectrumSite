import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology | Plectrum",
  description:
    "Working vibration prototypes for current validation work and FABTIVE, the patented active-fabric platform for continuous sensory integration.",
};

export default function TechnologyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
