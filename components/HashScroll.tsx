"use client";

import { useEffect } from "react";

/** How long to keep re-asserting the scroll position, in ms. */
const SETTLE_WINDOW = 2500;
const TICK = 100;

/**
 * Scrolls to the `#section` in the URL on a fresh page load.
 *
 * Two things fight the browser's own hash scroll on this page: the App Router
 * resets to the top during hydration, and the images above the target load
 * afterwards, shifting the layout out from under it. So rather than scrolling
 * once, re-assert the position until it holds still — and stop immediately if
 * the visitor starts scrolling themselves.
 */
export default function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let takenOver = false;
    let settled = 0;
    const takeOver = () => {
      takenOver = true;
    };

    const opts = { passive: true } as const;
    window.addEventListener("wheel", takeOver, opts);
    window.addEventListener("touchmove", takeOver, opts);
    window.addEventListener("keydown", takeOver);

    const started = Date.now();
    const timer = window.setInterval(() => {
      const el = document.getElementById(id);
      if (takenOver || !el || Date.now() - started > SETTLE_WINDOW) {
        window.clearInterval(timer);
        return;
      }

      const want = el.getBoundingClientRect().top + window.scrollY - getOffset(el);
      if (Math.abs(window.scrollY - want) < 2) {
        // Hold for a few ticks in case a late image shifts things again.
        if (++settled >= 3) window.clearInterval(timer);
        return;
      }

      settled = 0;
      window.scrollTo({ top: want, behavior: "instant" as ScrollBehavior });
    }, TICK);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("wheel", takeOver);
      window.removeEventListener("touchmove", takeOver);
      window.removeEventListener("keydown", takeOver);
    };
  }, []);

  return null;
}

/** Respect the section's `scroll-mt-*` so it clears the sticky navbar. */
function getOffset(el: Element) {
  const value = parseFloat(getComputedStyle(el).scrollMarginTop);
  return Number.isFinite(value) ? value : 0;
}
