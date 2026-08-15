"use client";

import { useEffect, useRef, useState } from "react";

export type ModelSceneMode = "hero" | "single" | "card";

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

export function ModelScene({
  mode = "hero",
  modelPath,
  poster = "/media/hero-products-v3.png",
  label = "Plectrum wearable prototype",
}: {
  mode?: ModelSceneMode;
  modelPath?: string;
  poster?: string;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(() => {
    if (typeof window === "undefined") return false;
    return !supportsWebGL();
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || fallback) return;

    if (!supportsWebGL()) {
      queueMicrotask(() => setFallback(true));
      return;
    }

    let active = true;
    let dispose: (() => void) | undefined;

    void import("./ModelSceneRuntime")
      .then(({ mountModelScene }) => {
        if (!active || !containerRef.current) return;
        dispose = mountModelScene(containerRef.current, mode, modelPath);
        if (containerRef.current.dataset.failed === "true") {
          setFallback(true);
        }
      })
      .catch(() => {
        if (active) setFallback(true);
      });

    return () => {
      active = false;
      dispose?.();
    };
  }, [fallback, mode, modelPath]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || fallback) return;

    const observer = new MutationObserver(() => {
      if (container.dataset.failed === "true") setFallback(true);
    });
    observer.observe(container, { attributes: true, attributeFilter: ["data-failed"] });
    return () => observer.disconnect();
  }, [fallback]);

  if (fallback) {
    return (
      <div className={`model-scene model-scene-${mode} model-scene-fallback`} role="img" aria-label={label}>
        {/* eslint-disable-next-line @next/next/no-img-element -- static poster fallback without next/image dependency */}
        <img src={poster} alt={label} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div
      className={`model-scene model-scene-${mode}`}
      ref={containerRef}
      aria-label={label}
      role="img"
    >
      <span className="model-scene-loading">3D model</span>
    </div>
  );
}
