// SALT & TIDE — Pacific Brutalist. Type-led reveal hook (IntersectionObserver, one-time).
import { useEffect } from "react";

export function useReveal(rootSelector: string = "[data-reveal-root]") {
  useEffect(() => {
    const root = document.querySelector(rootSelector) ?? document.body;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay ?? 0);
            window.setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        });
      },
      // Trigger early so content is visible by the time the user reaches it (and so screenshot tools see content).
      { rootMargin: "0px 0px 35% 0px", threshold: 0.01 }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: anything still hidden after 1.4s on the page becomes visible regardless
    const safety = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 1400);
    return () => { io.disconnect(); window.clearTimeout(safety); };
  }, [rootSelector]);
}
