import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Coreografía breve para la edición Xala / Axapusco.
 * Una entrada de portada, apariciones suaves y dos parallax. Nada más.
 * Todo se revierte al desmontar y se omite con prefers-reduced-motion.
 */
export function useSiteMotion(root: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    if (!root.current) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        /* ---------------- Portada ---------------- */
        const titleLines = gsap.utils.toArray<HTMLElement>(
          ".x-hero__title-mask > span",
        );

        gsap.set(titleLines, { yPercent: 112 });
        gsap.set(
          [
            ".x-hero__top",
            ".x-hero__eyebrow",
            ".x-hero__title-place",
            ".x-hero__lede",
            ".x-hero__actions",
            ".x-hero__foot",
          ],
          { opacity: 0, y: 16 },
        );
        gsap.set(".x-hero__media img", { scale: 1.14 });

        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
          delay: 0.1,
        });

        intro
          .to(
            ".x-hero__media img",
            { scale: 1.08, duration: 1.8, ease: "power2.out" },
            0,
          )
          .to(".x-hero__top", { opacity: 1, y: 0, duration: 0.7 }, 0.1)
          .to(".x-hero__eyebrow", { opacity: 1, y: 0, duration: 0.7 }, 0.25)
          .to(
            titleLines,
            { yPercent: 0, duration: 1.15, ease: "power4.out" },
            0.3,
          )
          .to(
            ".x-hero__title-place",
            { opacity: 1, y: 0, duration: 0.8 },
            0.65,
          )
          .to(".x-hero__lede", { opacity: 1, y: 0, duration: 0.8 }, 0.8)
          .to(".x-hero__actions", { opacity: 1, y: 0, duration: 0.8 }, 0.9)
          .to(".x-hero__foot", { opacity: 1, y: 0, duration: 0.8 }, 1.05);

        /* ---------------- Parallax ---------------- */
        gsap.to(".x-hero__media img", {
          yPercent: 3,
          ease: "none",
          scrollTrigger: {
            trigger: ".x-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        const band = document.querySelector<HTMLElement>(".x-band img");
        if (band) {
          gsap.fromTo(
            band,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: band.closest(".x-band") ?? band,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        }

        /* ---------------- Barra de avance ---------------- */
        gsap.to(".progress__bar", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.4,
          },
        });

        /* ---------------- Apariciones ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.set(item, { opacity: 0, y: 26 });
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              once: true,
            },
          });
        });

        /* ---------------- Refresco tras fuentes e imágenes ---------------- */
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        document.fonts?.ready.then(refresh).catch(() => undefined);

        return () => {
          window.removeEventListener("load", refresh);
        };
      }, root);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, [root]);
}
