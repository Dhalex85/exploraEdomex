import { Aperture, ArrowUpRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { getDestination, placePath } from "../data/destinations";
import { PhotoImage } from "./Photo";

// Editorial selection; adding municipalities never makes every place featured.
const selection = ["estacion-otumba", "restaurante-san-francisco"];

export function FeaturedPlaces() {
  return <section className="featured-places" id="destacados" aria-labelledby="featured-title"><div className="shell">
    <div className="section-heading"><div><p className="section-kicker">Lugares destacados</p><h2 id="featured-title">Acércate.<br /><em>Hay mucho por mirar.</em></h2></div><p>De municipio en municipio, una selección de lugares para explorar de cerca.</p></div>
    <div className="featured-grid">{selection.map((slug) => {
      const place = getDestination(slug);
      if (!place) return null;
      return <article key={place.id} className={`featured-place ${place.hero ? "" : "featured-place--pending"}`}>
        <Link to={placePath(place)} className="featured-place-link" aria-label={`Descubrir ${place.name}`}>
          {place.hero ? <><PhotoImage photo={place.hero} sizes="(min-width: 760px) 65vw, 100vw" /><span className="featured-reference"><Camera size={13} aria-hidden="true" />{place.hero.origin === "team" ? "Fotografía propia" : "Fotografía de referencia"}</span></> : <div className="featured-pending-art" aria-hidden="true"><span /><Aperture size={80} strokeWidth={.7} /></div>}
          <div className="featured-place-copy"><p>{place.location?.town}{place.location?.locality ? ` / ${place.location.locality}` : ""}</p><h3>{place.name}</h3><span className="featured-place-cta">{place.hero ? "Descubrir el lugar" : "Ver ficha en preparación"}<ArrowUpRight size={22} aria-hidden="true" /></span>{!place.hero && <small>Fotografías propias por incorporar</small>}</div>
        </Link>
      </article>;
    })}</div>
  </div></section>;
}
