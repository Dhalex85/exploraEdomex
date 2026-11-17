import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { DestinationPage, NotFound } from "./pages/DestinationPage";
import { MunicipalityPage } from "./pages/MunicipalityPage";
import { getDestination, placePath } from "./data/destinations";
import { getMunicipality } from "./data/municipalities";
import { site } from "./data/site";
import { useRouteScroll } from "./hooks/useRouteScroll";

function RouteEffects() {
  const location = useLocation();
  useRouteScroll();
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
  }, [location.pathname]);
  return null;
}
function LegacyPlace() {
  const { slug } = useParams();
  const destination = getDestination(slug === "mi-restaurante" ? "restaurante-san-francisco" : slug ?? "");
  return destination ? <Navigate to={placePath(destination)} replace /> : <NotFound />;
}
function Layout() {
  const home = useLocation().pathname === "/";
  return <>
    <RouteEffects />
    <a className="skip-link" href="#contenido" onClick={(event) => {
      event.preventDefault();
      document.getElementById("contenido")?.focus();
      document.getElementById("contenido")?.scrollIntoView();
    }}>Saltar al contenido</a>
    <Nav />
    <main id="contenido" className={`page-main ${home ? "page-main--home" : ""}`} tabIndex={-1}>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
