import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prototypes | Plectrum",
  description:
    "Explore Plectrum's four functional vibration prototypes in 3D, distinct from the patented FABTIVE active-fabric platform.",
};

export default function PrototypesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
