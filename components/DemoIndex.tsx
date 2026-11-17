"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { DEMOS } from "@/lib/demos/registry";

/**
 * The five demo entries, shared by the home page, the work page, and the
 * services page. Deliberately an editorial list (the same rhythm as the
 * capability rows in globals.css) rather than a card grid.
 *
 * On a fine pointer the genuine demo screenshot follows the cursor as a
 * preview, so a visitor can see what a row opens before committing. The same
 * screenshot stays inline as a static thumbnail for touch devices, reduced
 * motion, and no-JS. The preview is decorative (`aria-hidden`) and the rows
 * read the same without it.
 */
export default function DemoIndex() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const activeDemo = activeId ? DEMOS.find((demo) => demo.id === activeId) ?? null : null;

  const movePreview = (event: ReactPointerEvent) => {
    const node = previewRef.current;
    if (!node) return;
    const gap = 20;
    const width = node.offsetWidth || 360;
    // Before React has painted the image, the node has no height yet. Estimate
    // from the 16:9 frame plus the caption so a first hover near the bottom
    // edge still flips up instead of overflowing.
    const height = node.offsetHeight > 40 ? node.offsetHeight : Math.round(width * (9 / 16)) + 34;
    let x = event.clientX + gap;
    let y = event.clientY + gap;
    if (x + width > window.innerWidth - 12) x = event.clientX - width - gap;
    if (y + height > window.innerHeight - 12) y = event.clientY - height - gap;
    x = Math.max(12, x);
    y = Math.max(12, y);
    node.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
  };

  const showPreview = (id: string, event: ReactPointerEvent) => {
    if (event.pointerType !== "mouse") return;
    setActiveId(id);
    movePreview(event);
  };

  useEffect(() => {
    // A fixed preview would otherwise linger over content while the page moves.
    const clear = () => setActiveId(null);
    window.addEventListener("scroll", clear, true);
    window.addEventListener("resize", clear);
    window.addEventListener("blur", clear);
    return () => {
      window.removeEventListener("scroll", clear, true);
      window.removeEventListener("resize", clear);
      window.removeEventListener("blur", clear);
    };
  }, []);

  useEffect(() => {
    // Warm the full-size screenshots once the page is idle, so the first hover
    // shows the image immediately instead of flashing an empty frame. Only
    // worth doing where the preview can actually appear.
    const capable = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (min-width: 901px)"
    ).matches;
    if (!capable) return;

    const warm = () => {
      DEMOS.forEach((demo) => {
        const image = new Image();
        image.src = demo.preview;
      });
    };
    const idle =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(warm, { timeout: 2000 })
        : window.setTimeout(warm, 1200);
    return () => {
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idle);
      window.clearTimeout(idle);
    };
  }, []);

  return (
    <>
      <div className="demo-index">
        {DEMOS.map((demo, index) => (
          <Link
            key={demo.id}
            className="demo-row reveal"
            href={demo.path}
            onPointerEnter={(event) => showPreview(demo.id, event)}
            onPointerMove={movePreview}
            onPointerLeave={() => setActiveId(null)}
            onPointerCancel={() => setActiveId(null)}
          >
            <span className="num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="demo-row-copy">
              <h3>{demo.name}</h3>
              <p className="demo-row-kind">{demo.kind}</p>
            </div>
            <div className="demo-row-detail">
              <p className="demo-row-tagline">{demo.tagline}</p>
              <p className="demo-row-meta">
                {demo.features.length} modules · Guided tour · {demo.tourNote}
              </p>
            </div>
            <img
              className="demo-row-thumb"
              src={demo.previewThumb}
              alt={demo.previewAlt}
              width={360}
              height={206}
              loading="lazy"
              decoding="async"
            />
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>

      <div
        className="demo-preview-float"
        ref={previewRef}
        data-active={activeDemo ? "true" : "false"}
        aria-hidden="true"
      >
        {activeDemo ? (
          <>
            <img
              src={activeDemo.preview}
              alt=""
              width={720}
              height={450}
              decoding="async"
            />
            <p className="demo-preview-caption">
              <span>{activeDemo.name}</span>
              <span>Sample data · runs in your browser</span>
            </p>
          </>
        ) : null}
      </div>
    </>
  );
}
