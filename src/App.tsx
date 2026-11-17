import { useEffect, useRef } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { Footer } from "./components/Footer";
import { DestinationPage, NotFound } from "./pages/DestinationPage";
import { MunicipalityPage } from "./pages/MunicipalityPage";
import { getDestination, placePath } from "./data/destinations";
import { getMunicipality } from "./data/municipalities";
import { site } from "./data/site";

function RouteEffects() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    const destination = segments[2] === "lugares" ? getDestination(segments[3] ?? "") : undefined;
    const municipality = getMunicipality(segments[1] ?? "");
    const validPlace = destination?.municipalitySlug === municipality?.slug ? destination : undefined;
    const name = validPlace?.name ?? (segments.length === 2 ? municipality?.name : undefined);
    const title = name ? `${name} | EXPLORA EDOMEX` : location.pathname === "/" ? "EXPLORA EDOMEX | Descubre el Estado de México" : "Página no encontrada | EXPLORA EDOMEX";
    const description = validPlace?.summary ?? municipality?.description ?? site.description;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    const frame = requestAnimationFrame(() => {
      const id = location.hash === "#destinos" ? "municipios" : location.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) target.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
      if (previousPath.current !== location.pathname) {
        document.getElementById("contenido")?.focus({ preventScroll: true });
        previousPath.current = location.pathname;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
  return null;
}
function LegacyPlace() {
  const { slug } = useParams();
  const destination = getDestination(slug === "mi-restaurante" ? "restaurante-san-francisco" : slug ?? "");
  return destination ? <Navigate to={placePath(destination)} replace /> : <NotFound />;
}
function Layout() {
  return <>
    <RouteEffects />
    <a className="skip-link" href="#contenido" onClick={(event) => {
      event.preventDefault();
      document.getElementById("contenido")?.focus();
      document.getElementById("contenido")?.scrollIntoView();
    }}>Saltar al contenido</a>
    <Nav />
    <main id="contenido" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<><Hero /><Destinations /></>} />
        <Route path="/municipios/:municipalitySlug" element={<MunicipalityPage />} />
        <Route path="/municipios/:municipalitySlug/lugares/:slug" element={<DestinationPage />} />
        <Route path="/destinos/:slug" element={<LegacyPlace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>;
}
export default function App() {
  return <HashRouter><Layout /></HashRouter>;
}
