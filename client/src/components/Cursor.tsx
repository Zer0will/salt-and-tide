// SALT & TIDE — Pacific Brutalist. Custom cursor: tiny kelp dot + difference-blend ring that grows on links.
import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      const w = ring.classList.contains("is-link") ? 28 : 15;
      ring.style.transform = `translate3d(${rx - w}px, ${ry - w}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const overables = "a, button, [role='button'], input, textarea, select, .filter-pill, .chip";
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(overables)) ring.classList.add("is-link");
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(overables)) ring.classList.remove("is-link");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
