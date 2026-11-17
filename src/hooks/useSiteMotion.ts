import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Una sola coreografía para toda la página.
 * - La entrada del hero es el único momento "de carga".
 * - El resto del movimiento responde al scroll.
 * - Todo se revierte al desmontar y se omite con prefers-reduced-motion.
 */
export function useSiteMotion(root: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    if (!root.current) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        /* ---------------- Hero ---------------- */
        const heroLines = gsap.utils.toArray<HTMLElement>(
          ".hero__title .line > span",
        );

        gsap.set(heroLines, { yPercent: 115 });
        gsap.set([".hero__meta", ".hero__sub-row", ".hero__foot"], {
          opacity: 0,
          y: 18,
        });
        gsap.set(".hero__media img", { scale: 1.12 });
        gsap.set(".hero__veil", { opacity: 0 });

        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
          delay: 0.15,
        });

        intro
          .to(".hero__veil", { opacity: 1, duration: 1.6, ease: "power1.out" }, 0)
          .to(".hero__media img", { scale: 1, duration: 2.4, ease: "power2.out" }, 0)
          .to(".hero__meta", { opacity: 1, y: 0, duration: 0.9 }, 0.2)
          .to(
            heroLines,
            { yPercent: 0, duration: 1.25, ease: "power4.out", stagger: 0.11 },
            0.4,
          )
          .to(".hero__sub-row", { opacity: 1, y: 0, duration: 0.9 }, 1.15)
          .to(".hero__foot", { opacity: 1, y: 0, duration: 0.9 }, 1.3);

        /* ---------------- Parallax ---------------- */
        gsap.to(".hero__media img", {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.fromTo(
          ".finale__media img",
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: ".finale",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );

        /* ---------------- Progress rail ---------------- */
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

        /* ---------------- Reveals ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-reveal-item]").forEach((item) => {
          gsap.set(item, { opacity: 0, y: 26 });
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          });
        });

        /* ---------------- Image plates ---------------- */
        gsap.utils.toArray<HTMLElement>("[data-plate]").forEach((plate) => {
          const image = plate.querySelector<HTMLImageElement>("img");
          if (!image) return;

          gsap.set(plate, { clipPath: "inset(0 0 100% 0)" });
          gsap.set(image, { scale: 1.1 });

          gsap
            .timeline({
              scrollTrigger: { trigger: plate, start: "top 86%", once: true },
            })
            .to(plate, {
              clipPath: "inset(0 0 0% 0)",
              duration: 1.2,
              ease: "power3.inOut",
            })
            .to(image, { scale: 1, duration: 1.7, ease: "power2.out" }, 0);

          gsap.fromTo(
            image,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: plate,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        });

        /* ---------------- Altitude line ---------------- */
        const contour = document.querySelector<SVGPathElement>(
          ".contour__line",
        );
        if (contour) {
          const length = contour.getTotalLength();
          gsap.set(contour, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(contour, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".contour",
              start: "top 84%",
              once: true,
            },
          });
        }
      }, root);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, [root]);
}
