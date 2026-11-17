import { useEffect, useRef } from "react";

/**
 * Adds `is-in` to every `.reveal` inside the container once it enters view.
 * Delays are read from `data-delay` so staggering stays declarative.
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (!items.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      items.forEach((item) => item.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay ?? "0";
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-in");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return ref;
}
