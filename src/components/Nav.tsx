import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { edition, navLinks } from "../data/content";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setSolid(window.scrollY > 40);
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
      { rootMargin: "-44% 0px -48% 0px", threshold: [0, 0.2, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = toggleRef.current;
    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    const links = Array.from(
      menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
    );
    const focusTimer = window.setTimeout(() => firstLink?.focus(), 80);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !links.length) return;

      const first = links[0];
      const last = links[links.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <header
      className={`x-nav ${solid ? "is-solid" : ""} ${open ? "is-menu-open" : ""}`.trim()}
    >
      <div className="x-nav__inner">
        <a className="x-brand" href="#top" aria-label="Xala, Axapusco — inicio">
          <span className="x-brand__kicker">{edition.kicker}</span>
          <span className="x-brand__mark">
            <span className="x-brand__name">Xala</span>
            <span className="x-brand__place">Axapusco</span>
          </span>
        </a>

        <nav className="x-nav__links" aria-label="Navegación principal">
          {navLinks.map((link, index) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={active === id ? "is-current" : undefined}
                aria-current={active === id ? "location" : undefined}
              >
                <span className="x-nav__index">0{index + 1}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <a className="x-nav__cta" href="#visita">
          <span>Planear visita</span>
          <ArrowUpRight size={14} strokeWidth={1.4} aria-hidden="true" />
        </a>

        <button
          type="button"
          ref={toggleRef}
          className={`x-nav__toggle ${open ? "is-open" : ""}`.trim()}
          aria-expanded={open}
          aria-controls="xala-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Cerrar" : "Menú"}</span>
          <span className="x-nav__toggle-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div
        id="xala-menu"
        ref={menuRef}
        className={`x-menu ${open ? "is-open" : ""}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!open}
      >
        <div className="x-menu__head">
          <span className="meta">{edition.kicker}</span>
          <span className="meta x-menu__place">
            <MapPin size={12} strokeWidth={1.5} aria-hidden="true" />
            {edition.place} · {edition.region}
          </span>
        </div>

        <nav className="x-menu__links" aria-label="Navegación móvil">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span className="x-menu__index">0{index + 1}</span>
              <span className="x-menu__label">{link.label}</span>
              <ArrowUpRight size={22} strokeWidth={1.2} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="x-menu__foot">
          <span>{edition.altitude}</span>
          <span>{edition.distance}</span>
        </div>
      </div>
    </header>
  );
}
