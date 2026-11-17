import { ArrowRight, Camera, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PhotoCredit, PhotoImage } from "../components/Photo";
import { getMunicipality } from "../data/municipalities";
import { getMunicipalityPlaces, placePath } from "../data/destinations";
import { NotFound } from "./DestinationPage";
import { OtumbaFilmHero } from "../components/OtumbaFilmHero";

export function MunicipalityPage() {
  const { municipalitySlug } = useParams();
  const municipality = getMunicipality(municipalitySlug ?? "");
  if (!municipality) return <NotFound />;
  const places = getMunicipalityPlaces(municipality.slug);
  return <>
    {municipality.slug === "otumba" ? <OtumbaFilmHero /> : <><section className={`municipality-hero municipality-hero--${municipality.slug}`} aria-labelledby="municipality-title">
      <PhotoImage photo={municipality.hero} eager />
      <div className="municipality-hero-veil" aria-hidden="true" />
      <div className="shell municipality-hero-inner">
        <Breadcrumbs light items={[{ label: "Estado de México", to: "/" }, { label: municipality.name }]} />
        <div><p className="location-kicker"><MapPin size={17} aria-hidden="true" />Estado de México</p><h1 id="municipality-title">{municipality.name}</h1><Link to={`/municipios/${municipality.slug}#lugares`} className="button button-light">Explorar sus lugares<ArrowRight size={20} aria-hidden="true" /></Link></div>
        <p className="municipality-hero-caption"><Camera size={14} aria-hidden="true" />{municipality.hero.caption}</p>
      </div>
    </section>
    <div className="shell cover-credit"><PhotoCredit photo={municipality.hero} /></div></>}
    <section className="shell municipal-places section-space" id="lugares" aria-labelledby="places-title">
      <div className="section-heading"><div><p className="section-kicker">Lugares de {municipality.name}</p><h2 id="places-title">Una parada<br />para descubrir.</h2></div><p>{municipality.description}</p></div>
      {places.map((place) => <article className={`place-feature ${place.status === "pending" ? "place-feature--pending" : ""}`} key={place.id}>
        <Link className="place-feature-media" to={placePath(place)} aria-label={`Ver ${place.name}`}>
          {place.hero ? <PhotoImage photo={place.hero} sizes="(min-width: 760px) 60vw, 100vw" /> : <div className="pending-photo"><Camera size={38} strokeWidth={1.2} aria-hidden="true" /><span>Restaurante San Francisco</span><small>Fotografías por incorporar</small></div>}
          <span className="round-arrow" aria-hidden="true"><ArrowRight size={25} /></span>
        </Link>
        <div className="place-feature-copy"><p className="section-kicker">{place.location?.locality ?? municipality.name} · {place.category}</p><h3><Link to={placePath(place)}>{place.name}</Link></h3><p>{place.summary}</p>{place.status === "pending" && <span className="status">Fotografías y descripción pendientes</span>}<Link className="button button-primary" to={placePath(place)}>{place.status === "pending" ? "Ver ficha en preparación" : "Descubrir el lugar"}<ArrowRight size={19} aria-hidden="true" /></Link></div>
      </article>)}
    </section>
  </>;
}
