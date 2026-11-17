import { useEffect, type RefObject } from "react";

/** Movement follows scrolling and the pointer; nothing loops or hides content. */
export function useHomeMotion(root: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let disposed = false;
    let loading = false;
    let media: { revert: () => void } | undefined;

    const start = async () => {
      if (!motion.matches || loading || media) return;
      loading = true;
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"), import("gsap/ScrollTrigger"),
        ]);
        if (disposed || !root.current) return;
        gsap.registerPlugin(ScrollTrigger);
        media = gsap.matchMedia();
        // matchMedia also reverts transforms immediately if the preference changes.
        (media as ReturnType<typeof gsap.matchMedia>).add({
          motion: "(prefers-reduced-motion: no-preference)",
          fine: "(hover: hover) and (pointer: fine) and (min-width: 901px)",
        }, (context) => {
          if (!context.conditions?.motion || !root.current) return;
          const hero = root.current.querySelector<HTMLElement>(".hero");
          const picture = root.current.querySelector<HTMLElement>(".hero-media");
          const cleanups: Array<() => void> = [];
          if (!hero || !picture) return;

          gsap.to(picture, {
            yPercent: 11, ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: .65 },
          });
          gsap.to(".hero-viewfinder", {
            y: -16, ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: .8 },
          });
          gsap.to(".hero-progress span", {
            scaleX: 1, ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
          // Scroll is the only driver on touchscreens; no tilt or pointer tracking.
          if (context.conditions.fine) {
            const image = picture.querySelector("img");
            if (image) {
              const x = gsap.quickTo(image, "x", { duration: 1.3, ease: "power3.out" });
              const y = gsap.quickTo(image, "y", { duration: 1.3, ease: "power3.out" });
              let box = hero.getBoundingClientRect();
              const measure = () => { box = hero.getBoundingClientRect(); };
              const move = (event: PointerEvent) => {
                x((event.clientX - box.left - box.width / 2) / box.width * 20);
                y((event.clientY - box.top - box.height / 2) / box.height * 14);
              };
              const reset = () => { x(0); y(0); };
              hero.addEventListener("pointerenter", measure);
              hero.addEventListener("pointermove", move);
              hero.addEventListener("pointerleave", reset);
              cleanups.push(() => {
                hero.removeEventListener("pointerenter", measure);
                hero.removeEventListener("pointermove", move);
                hero.removeEventListener("pointerleave", reset);
              });
            }
            root.current.querySelectorAll<HTMLElement>(".municipality-card-link").forEach((card) => {
              const rotateX = gsap.quickTo(card, "rotationX", { duration: .6, ease: "power3.out" });
              const rotateY = gsap.quickTo(card, "rotationY", { duration: .6, ease: "power3.out" });
              let box = card.getBoundingClientRect();
              const measure = () => { box = card.getBoundingClientRect(); };
              const move = (event: PointerEvent) => {
                rotateX((.5 - (event.clientY - box.top) / box.height) * 4);
                rotateY(((event.clientX - box.left) / box.width - .5) * 6);
              };
              const reset = () => { rotateX(0); rotateY(0); };
              card.addEventListener("pointerenter", measure);
              card.addEventListener("pointermove", move);
              card.addEventListener("pointerleave", reset);
              cleanups.push(() => {
                card.removeEventListener("pointerenter", measure);
                card.removeEventListener("pointermove", move);
                card.removeEventListener("pointerleave", reset);
              });
            });
          }
          return () => cleanups.forEach((cleanup) => cleanup());
        }, root);
      } catch {
        // The complete static experience remains usable if enhancement cannot load.
      } finally { loading = false; }
    };
    void start();
    motion.addEventListener("change", start);
    return () => {
      disposed = true;
      motion.removeEventListener("change", start);
      media?.revert();
    };
  }, [root]);
}
