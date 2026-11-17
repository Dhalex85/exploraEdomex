import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/** Preserve each history entry, while new links still open at their destination. */
export function useRouteScroll() {
  const location = useLocation();
  const navigation = useNavigationType();
  const positions = useRef(new Map<string, { x: number; y: number }>());
  const activeKey = useRef(location.key);
  const previousPath = useRef(location.pathname);
  const restoring = useRef(false);

  useLayoutEffect(() => {
    const original = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const remember = () => {
      if (restoring.current) return;
      positions.current.set(activeKey.current, { x: window.scrollX, y: window.scrollY });
      if (positions.current.size > 100) positions.current.delete(positions.current.keys().next().value!);
    };
    window.addEventListener("scroll", remember, { passive: true });
    document.addEventListener("click", remember, true);
    document.addEventListener("keydown", remember, true);
    return () => {
      window.history.scrollRestoration = original;
      window.removeEventListener("scroll", remember);
      document.removeEventListener("click", remember, true);
      document.removeEventListener("keydown", remember, true);
    };
  }, []);

  useLayoutEffect(() => {
    restoring.current = true;
    activeKey.current = location.key;
    const frame = requestAnimationFrame(() => {
      const id = location.hash === "#destinos" ? "municipios" : location.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      const saved = navigation === "POP" ? positions.current.get(location.key) : undefined;
      if (saved) window.scrollTo({ left: saved.x, top: saved.y, behavior: "instant" });
      else if (target) {
        const content = target.querySelector<HTMLElement>(".section-heading, .explore-heading") ?? target;
        content.scrollIntoView({ behavior: "instant" });
      }
      else window.scrollTo({ top: 0, behavior: "instant" });

      if (target) {
        const heading = target.matches("h1,h2,h3") ? target : target.querySelector<HTMLElement>("h1,h2,h3");
        if (heading) {
          heading.setAttribute("tabindex", "-1");
          heading.classList.add("route-focus-target");
          heading.focus({ preventScroll: true });
        }
      } else if (previousPath.current !== location.pathname) {
        document.getElementById("contenido")?.focus({ preventScroll: true });
      }
      previousPath.current = location.pathname;
      positions.current.set(location.key, { x: window.scrollX, y: window.scrollY });
      restoring.current = false;
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key, navigation]);
}
