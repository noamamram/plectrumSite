"use client";

import { useEffect, useRef } from "react";

export type ModelSceneMode = "hero" | "single" | "card";

export function ModelScene({
  mode = "hero",
  modelPath,
}: {
  mode?: ModelSceneMode;
  modelPath?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let active = true;
    let dispose: (() => void) | undefined;

    void import("./ModelSceneRuntime")
      .then(({ mountModelScene }) => {
        if (!active) return;
        dispose = mountModelScene(container, mode, modelPath);
      })
      .catch(() => {
        if (active) container.dataset.failed = "true";
      });

    return () => {
      active = false;
      dispose?.();
    };
  }, [mode, modelPath]);

  return (
    <div
      className={`model-scene model-scene-${mode}`}
      ref={containerRef}
      aria-label={
        mode === "hero"
          ? "Interactive 3D presentation of Plectrum prototypes"
          : "Interactive 3D Plectrum prototype"
      }
      role="img"
    >
      <span>3D model</span>
    </div>
  );
}
