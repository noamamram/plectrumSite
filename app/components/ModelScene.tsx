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
  posterPosition = "center center",
  label = "Plectrum wearable prototype",
  posterLabel,
  exploreHint,
  overviewHint,
}: {
  mode?: ModelSceneMode;
  modelPath?: string;
  poster?: string;
  /** CSS object-position used when falling back to the shared poster. */
  posterPosition?: string;
  label?: string;
  /** Accurate alt when the poster is a group image, not a single product. */
  posterLabel?: string;
  exploreHint?: string;
  overviewHint?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Always start false so SSR HTML matches the first client render (avoids React #418).
  const [fallback, setFallback] = useState(false);
  const [ready, setReady] = useState(false);
  const resolvedPosterLabel =
    posterLabel ??
    "Illustrative overview of Plectrum wearable prototypes";

  useEffect(() => {
    let active = true;
    let dispose: (() => void) | undefined;

    const activateFallback = () => {
      if (!active) return;
      setFallback(true);
      setReady(true);
    };

    // Defer capability checks so the first client render stays SSR-identical.
    const timer = window.setTimeout(() => {
      if (!active) return;
      if (!supportsWebGL()) {
        activateFallback();
        return;
      }

      const container = containerRef.current;
      if (!container) {
        activateFallback();
        return;
      }

      void import("./ModelSceneRuntime")
        .then(({ mountModelScene }) => {
          if (!active || !containerRef.current) return;
          dispose = mountModelScene(containerRef.current, mode, modelPath);
          if (containerRef.current.dataset.failed === "true") {
            activateFallback();
            return;
          }
          setReady(true);
        })
        .catch(() => {
          activateFallback();
        });
    }, 0);

    return () => {
      active = false;
      window.clearTimeout(timer);
      dispose?.();
    };
  }, [mode, modelPath]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || fallback) return;

    const observer = new MutationObserver(() => {
      if (container.dataset.failed === "true") {
        setFallback(true);
        setReady(true);
      }
    });
    observer.observe(container, { attributes: true, attributeFilter: ["data-failed"] });
    return () => observer.disconnect();
  }, [fallback]);

  const hint = fallback ? overviewHint : exploreHint;

  if (fallback) {
    return (
      <div
        className={`model-scene model-scene-${mode} model-scene-fallback`}
        role="img"
        aria-label={resolvedPosterLabel}
        data-ready={ready ? "true" : "false"}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static poster fallback without next/image dependency */}
        <img
          src={poster}
          alt={resolvedPosterLabel}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: posterPosition }}
        />
        {hint ? (
          <span className="prototype-hint model-scene-hint" aria-hidden="true">
            {hint}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`model-scene model-scene-${mode}`}
      ref={containerRef}
      aria-label={label}
      role="img"
      data-ready={ready ? "true" : "false"}
    >
      <span className="model-scene-loading">3D model</span>
      {hint ? (
        <span className="prototype-hint model-scene-hint" aria-hidden="true">
          {hint}
        </span>
      ) : null}
    </div>
  );
}
