import type { ReactNode } from "react";

/** Keep USB‑C on one line using a non-breaking hyphen (U+2011). */
export function TextWithNoBreak({ text }: { text: string }): ReactNode {
  const parts = text.split(/(USB-C)/g);
  if (parts.length === 1) return text;

  return parts.map((part, index) =>
    part === "USB-C" ? (
      <span key={index} className="no-break">
        USB‑C
      </span>
    ) : (
      part
    ),
  );
}
