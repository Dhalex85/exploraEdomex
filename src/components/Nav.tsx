import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Compass } from "lucide-react";
import { navLinks } from "../data/content";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setSolid(window.scrollY > 24);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: [0, 0.2, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = toggleRef.current;
    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <header className={`nav ${solid ? "is-solid" : ""}`.trim()}>
      <span className="nav__stripe" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>

      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label="Explora Edomex — inicio">
          <Wordmark />
        </a>

        <nav className="nav__links" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={active === id ? "is-current" : undefined}
                aria-current={active === id ? "location" : undefined}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <a href="#destinos" className="nav__cta">
          <Compass size={15} strokeWidth={1.5} aria-hidden="true" />
          <span>Ruta 01</span>
        </a>

        <button
          type="button"
          ref={toggleRef}
          className={`nav__toggle ${open ? "is-open" : ""}`.trim()}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav__toggle-label">{open ? "Cerrar" : "Menú"}</span>
          <span className="nav__toggle-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div
        id="menu-movil"
        ref={menuRef}
        className={`menu ${open ? "is-open" : ""}`.trim()}
        aria-hidden={!open}
      >
        <span className="menu__ghost" aria-hidden="true">
          Edomex
        </span>

        <nav className="menu__links" aria-label="Navegación móvil">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span className="menu__index">0{index + 1}</span>
              <span className="menu__label">{link.label}</span>
              <ArrowUpRight size={22} strokeWidth={1.3} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="menu__foot">
          <span>Axapusco · Otumba, México</span>
          <span>Edición 01 — 2026</span>
        </div>
      </div>
    </header>
  );
}
