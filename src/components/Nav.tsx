import { useEffect, useRef } from "react";
import { Home, Images, MapPin, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Brand } from "./brand/Brand";

const links = [
  { label: "Inicio", to: "/", Icon: Home },
  { label: "Municipios", to: "/#municipios", Icon: MapPin },
  { label: "Fotografías", to: "/municipios/otumba/lugares/estacion-otumba#galeria", Icon: Images },
];
export function Nav() {
  const location = useLocation();
  const menu = useRef<HTMLDetailsElement>(null);
  const home = location.pathname === "/";
  useEffect(() => {
    if (menu.current?.open) {
      if (menu.current.contains(document.activeElement)) menu.current.querySelector("summary")?.focus({ preventScroll: true });
      menu.current.open = false;
    }
  }, [location.key]);
  return <header className={`site-header ${home ? "site-header--over-hero" : ""}`}>
    <div className="shell header-inner">
      <Brand />
      <nav className="site-nav" aria-label="Navegación principal">
        {links.map(({ label, to, Icon }, index) => <Link key={to} to={to} className={(index === 0 && home) || (index === 1 && !home) ? "is-current" : undefined} aria-current={index === 0 && home ? "page" : undefined}><Icon size={19} aria-hidden="true" /><span>{label}</span></Link>)}
      </nav>
      <details ref={menu} className="mobile-nav" onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}>
        <summary aria-label="Navegación"><Menu size={23} aria-hidden="true" /><span>Menú</span></summary>
        <nav aria-label="Navegación móvil">{links.map(({ label, to, Icon }) => <Link to={to} key={to}><Icon size={19} aria-hidden="true" />{label}</Link>)}</nav>
      </details>
    </div>
  </header>;
}
