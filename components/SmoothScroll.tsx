"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Inertial page scrolling for wheel and trackpad input.
 *
 * Each wheel event adds distance to a target. A critically damped,
 * time-corrected follow moves the real scroll position towards that target:
 * the page keeps gliding after the gesture, but never overshoots or jiggles
 * back. Native scrolling is deliberately kept for touch (which already has
 * momentum), reduced motion, keyboard, anchors, form controls, nested scroll
 * areas, the intro lock and the mobile drawer.
 */

const FOLLOW = 0.115;
const FRAME_MS = 1000 / 60;
const MAX_FRAME_MS = 48;
const EPSILON = 0.3;
const SYNC_TOLERANCE = 2;

function wheelPixels(event: WheelEvent): number {
  if (event.deltaMode === 1) return event.deltaY * 18;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

function shouldUseNativeScroll(target: EventTarget | null, delta: number): boolean {
  let element = target instanceof Element ? target : null;

  while (element && element !== document.documentElement) {
    if (element.closest("[data-native-scroll]")) return true;

    const overflowY = window.getComputedStyle(element).overflowY;
    if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") {
      const max = element.scrollHeight - element.clientHeight;
      if (max > 1) {
        const atTop = element.scrollTop <= 1;
        const atBottom = element.scrollTop >= max - 1;
        if ((delta < 0 && !atTop) || (delta > 0 && !atBottom)) return true;
      }
    }

    element = element.parentElement;
  }

  return false;
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || typeof window.requestAnimationFrame !== "function") return;

    root.dataset.inertiaScroll = "on";

    let current = window.scrollY;
    let target = current;
    let previousTime = 0;
    let frame = 0;
    let running = false;

    const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);
    const clamp = (value: number) => Math.min(maxScroll(), Math.max(0, value));

    const reset = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      running = false;
      previousTime = 0;
      current = window.scrollY;
      target = current;
    };

    const tick = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, MAX_FRAME_MS) : FRAME_MS;
      previousTime = time;

      const limit = maxScroll();
      if (target > limit) target = limit;
      else if (target < 0) target = 0;

      const factor = 1 - Math.pow(1 - FOLLOW, elapsed / FRAME_MS);
      current += (target - current) * factor;

      if (Math.abs(target - current) < EPSILON) {
        current = target;
        running = false;
        frame = 0;
        previousTime = 0;
        window.scrollTo({ top: current, behavior: "instant" });
        return;
      }

      window.scrollTo({ top: current, behavior: "instant" });
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      previousTime = 0;
      frame = window.requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.defaultPrevented || event.ctrlKey || reduceMotion.matches) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (root.dataset.intro === "on" || document.body.classList.contains("nav-open")) return;

      const delta = wheelPixels(event);
      if (delta === 0) return;

      if (shouldUseNativeScroll(event.target, delta)) return;

      const element = event.target;
      if (
        element instanceof Element &&
        element.closest("select, textarea, input, [contenteditable='true']")
      ) {
        return;
      }

      event.preventDefault();

      if (!running) {
        current = window.scrollY;
        target = current;
      }

      target = clamp(target + delta);
      start();
    };

    const onScroll = () => {
      // Our own writes land within a pixel of `current`. A larger difference
      // means the browser, a keyboard key or an anchor moved the page.
      if (Math.abs(window.scrollY - current) <= SYNC_TOLERANCE) return;
      reset();
    };

    const onMotionChange = () => {
      if (reduceMotion.matches) {
        reset();
        delete root.dataset.inertiaScroll;
      } else {
        root.dataset.inertiaScroll = "on";
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", reset);
    window.addEventListener("hashchange", reset);
    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", reset);
      window.removeEventListener("hashchange", reset);
      reduceMotion.removeEventListener("change", onMotionChange);
      delete root.dataset.inertiaScroll;
    };
  }, [pathname]);

  return null;
}
