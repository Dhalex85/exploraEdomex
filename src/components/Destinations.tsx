import { ArrowRight, Camera, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { municipalities } from "../data/municipalities";
import { getMunicipalityPlaces } from "../data/destinations";
import { PhotoImage } from "./Photo";

export function Destinations() {
  return <section className="municipalities" id="municipios" aria-labelledby="municipalities-title">
    <div className="shell">
      <div className="ornament-heading"><span aria-hidden="true" /><h2 id="municipalities-title"><MapPin size={27} aria-hidden="true" />Municipios destacados</h2><span aria-hidden="true" /></div>
      <div className="municipality-grid">
        {municipalities.map((municipality) => {
          const place = getMunicipalityPlaces(municipality.slug)[0];
          return <article className="municipality-card" key={municipality.slug}>
            <Link className="municipality-card-link" to={`/municipios/${municipality.slug}`} aria-label={`Explorar ${municipality.name}`}>
              <PhotoImage photo={municipality.card} sizes="(min-width: 760px) 50vw, 100vw" />
              <span className="card-photo-label"><Camera size={13} aria-hidden="true" />{municipality.coverLabel}</span>
              <div className="municipality-card-copy"><div><h3><MapPin size={25} aria-hidden="true" />{municipality.name}</h3><p>{place.location?.locality ? `${place.location.locality} · ` : ""}{place.name}</p></div><span className="round-arrow" aria-hidden="true"><ArrowRight size={25} /></span></div>
              <span className="card-ribbon" aria-hidden="true" />
            </Link>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
