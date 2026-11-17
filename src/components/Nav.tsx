import { useCallback, useEffect, useRef, useState } from "react";
import { Aperture, ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Brand } from "./brand/Brand";
import { getMunicipality, municipalities } from "../data/municipalities";

export function Nav() {
  const location = useLocation();
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const dropdown = useRef<HTMLDetailsElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const sentinel = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);
  const home = location.pathname === "/";
  const segments = location.pathname.split("/").filter(Boolean);
  const municipality = segments[0] === "municipios" ? getMunicipality(segments[1] ?? "") : undefined;
  const municipalitiesActive = Boolean(municipality) || home && ["#municipios", "#destinos"].includes(location.hash);
  const featuredActive = home && location.hash === "#destacados";
  const homeActive = home && !municipalitiesActive && !featuredActive;

  const closeMenus = useCallback((restoreFocus = true) => {
    const modalWasOpen = Boolean(dialog.current?.open);
    const dropdownWasOpen = Boolean(dropdown.current?.open);
    dialog.current?.close();
    if (dropdown.current) dropdown.current.open = false;
    setOpen(false);
    if (restoreFocus && modalWasOpen) trigger.current?.focus({ preventScroll: true });
    else if (restoreFocus && dropdownWasOpen) dropdown.current?.querySelector("summary")?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setRaised(!entry.isIntersecting));
    if (sentinel.current) observer.observe(sentinel.current);
    const outside = (event: PointerEvent) => {
      if (dropdown.current?.open && !dropdown.current.contains(event.target as Node)) dropdown.current.open = false;
    };
    document.addEventListener("pointerdown", outside);
    return () => { observer.disconnect(); document.removeEventListener("pointerdown", outside); };
  }, []);
  useEffect(() => { closeMenus(false); }, [location.key, closeMenus]);
  useEffect(() => {
    if (!open || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    closeButton.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => {
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const onChange = () => {
      if (dropdown.current) dropdown.current.open = false;
      if (!desktop.matches || !dialog.current?.open) return;
      closeMenus(false);
      document.querySelector<HTMLElement>(".site-header .brand")?.focus({ preventScroll: true });
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [closeMenus]);

  return <>
    <span className="nav-sentinel" ref={sentinel} aria-hidden="true" />
    <header className={`site-header ${home ? "site-header--over-hero" : ""} ${!home || raised ? "site-header--solid" : ""}`}>
      <div className="shell header-inner">
        <Brand />
        <nav className="site-nav" aria-label="Navegación principal">
          <Link to="/" className={homeActive ? "is-current" : undefined} aria-current={homeActive ? "page" : undefined}>Inicio</Link>
          <details className={`municipality-menu ${municipalitiesActive ? "is-current" : ""}`} ref={dropdown} onKeyDown={(event) => {
            if (event.key === "Escape") { event.preventDefault(); closeMenus(); }
          }}>
            <summary aria-current={municipalitiesActive ? "location" : undefined}>Municipios<ChevronDown size={16} aria-hidden="true" /></summary>
            <div className="municipality-dropdown" id="municipality-dropdown">
              <div className="dropdown-intro"><span>Estado de México</span><Link to="/#municipios" onClick={() => closeMenus(false)}>Ver municipios<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
              <div className="dropdown-grid">{municipalities.map((item) => <Link key={item.slug} className={`dropdown-place dropdown-place--${item.slug}`} to={`/municipios/${item.slug}`} aria-current={municipality?.slug === item.slug ? segments.length === 2 ? "page" : "location" : undefined} onClick={() => closeMenus(false)}>
                <img src={item.card.src} srcSet={item.card.srcSet} sizes="80px" width={item.card.width} height={item.card.height} alt="" loading="lazy" decoding="async" />
                <span><strong>{item.name}</strong><small>Explorar sus lugares</small></span><ArrowUpRight size={17} aria-hidden="true" />
              </Link>)}</div>
            </div>
          </details>
          <Link to="/#destacados" className={`nav-featured ${featuredActive ? "is-current" : ""}`} aria-current={featuredActive ? "location" : undefined}>Lugares destacados<ArrowUpRight size={16} aria-hidden="true" /></Link>
        </nav>
        <div className="header-actions"><button className="nav-menu-trigger" type="button" ref={trigger} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="navigation-dialog" aria-haspopup="dialog"><span>Menú</span><Menu size={21} aria-hidden="true" /></button></div>
      </div>
    </header>
    <dialog id="navigation-dialog" className="navigation-dialog" ref={dialog} aria-labelledby="navigation-title" onCancel={(event) => { event.preventDefault(); closeMenus(); }} onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const controls = event.currentTarget.querySelectorAll<HTMLElement>("a[href], summary, button:not([disabled])");
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeMenus();
    }}>
      <div className="navigation-panel-top"><Brand /><button type="button" ref={closeButton} onClick={() => closeMenus()} aria-label="Cerrar navegación"><X size={24} aria-hidden="true" /></button></div>
      <div className="navigation-panel-content">
        <p className="menu-region">Estado de México</p><h2 id="navigation-title">Explora Edomex.</h2>
        <nav aria-label="Navegación móvil">
          <Link className="menu-home" to="/" aria-current={homeActive ? "page" : undefined} onClick={() => closeMenus(false)}>Inicio<ArrowUpRight size={18} aria-hidden="true" /></Link>
          <details className="mobile-municipalities" open>
            <summary>Municipios<ChevronDown size={18} aria-hidden="true" /></summary>
            <div className="menu-municipalities">{municipalities.map((item) => <Link key={item.slug} className={`menu-place menu-place--${item.slug}`} to={`/municipios/${item.slug}`} aria-current={municipality?.slug === item.slug ? segments.length === 2 ? "page" : "location" : undefined} onClick={() => closeMenus(false)}>
              <img src={item.card.src} srcSet={item.card.srcSet} sizes="92px" width={item.card.width} height={item.card.height} alt="" loading="lazy" decoding="async" />
              <span className="menu-place-copy"><strong>{item.name}</strong><span>Explorar sus lugares</span>{municipality?.slug === item.slug && <small>Estás aquí</small>}</span><ArrowUpRight size={21} aria-hidden="true" />
            </Link>)}</div>
            <Link className="menu-all" to="/#municipios" onClick={() => closeMenus(false)}>Ver municipios<ArrowRight size={17} aria-hidden="true" /></Link>
          </details>
          <Link className="menu-explore" to="/#destacados" onClick={() => closeMenus(false)}><Aperture size={19} aria-hidden="true" />Lugares destacados<ArrowUpRight size={20} aria-hidden="true" /></Link>
        </nav>
      </div>
    </dialog>
  </>;
}
