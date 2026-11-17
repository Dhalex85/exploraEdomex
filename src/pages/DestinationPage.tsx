import { ArrowLeft, ArrowRight, Camera, Images, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getDestination, placePath } from "../data/destinations";
import { getMunicipality } from "../data/municipalities";
import { Gallery } from "../components/Gallery";
import { Breadcrumbs, type Crumb } from "../components/Breadcrumbs";
import { PhotoImage, PhotoCredit } from "../components/Photo";

export function NotFound() {
  return <div className="shell empty-page"><p className="section-kicker">Página no encontrada</p><h1>Hay otros lugares<br />por descubrir.</h1><p>Esta dirección no corresponde a un municipio o lugar de nuestra selección.</p><Link className="button button-primary" to="/">Volver al inicio<ArrowRight size={19} aria-hidden="true" /></Link></div>;
}
export function DestinationPage() {
  const { slug, municipalitySlug } = useParams();
  const destination = getDestination(slug ?? "");
  const municipality = getMunicipality(municipalitySlug ?? "");
  if (!destination || !municipality || destination.municipalitySlug !== municipality.slug) return <NotFound />;
  const { hero, location } = destination;
  const crumbs: Crumb[] = [
    { label: "Estado de México", to: "/" },
    { label: municipality.name, to: `/municipios/${municipality.slug}` },
    ...(location?.locality ? [{ label: location.locality }] : []),
    { label: destination.name },
  ];
  return <>
    {hero ? <>
      <section className="place-hero" aria-labelledby="place-title">
        <PhotoImage photo={hero} eager />
        <div className="place-hero-veil" aria-hidden="true" />
        <div className="shell place-hero-inner"><Breadcrumbs light items={crumbs} /><div className="place-hero-copy"><p className="location-kicker"><MapPin size={17} aria-hidden="true" />{municipality.name} · {destination.category}</p><h1 id="place-title">{destination.name}</h1><Link className="button button-light" to={`${placePath(destination)}#galeria`}><Images size={19} aria-hidden="true" />Abrir su galería</Link></div><p className="place-hero-caption">{hero.caption}</p></div>
      </section>
      <div className="shell cover-credit"><PhotoCredit photo={hero} /></div>
    </> : <div className="shell pending-place-heading"><Breadcrumbs items={crumbs} /><div className="pending-place-title"><p className="section-kicker">{municipality.name} · {location?.locality}</p><h1 id="place-title">{destination.name}</h1><span className="status">Ficha en preparación</span></div><div className="pending-cover"><Camera size={40} strokeWidth={1.2} aria-hidden="true" /><p>Las fotografías de este lugar<br />están por llegar.</p><span>Restaurante San Francisco · Xala</span></div></div>}
    <section className="shell destination-story section-space" aria-labelledby="story-title">
      <div><p className="section-kicker">{destination.status === "pending" ? "Axapusco · Xala" : "Conoce el lugar"}</p><h2 id="story-title">{destination.status === "pending" ? "Restaurante San Francisco" : "Una mirada desde el andén."}</h2></div>
      <div className="story-copy">{destination.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {destination.sources?.map((source) => <a className="source-link" key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title}<ArrowRight size={16} aria-hidden="true" /></a>)}
        {destination.practical && destination.practical.length > 0 && <dl className="practical-info">{destination.practical.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value} <a href={fact.sourceUrl} target="_blank" rel="noreferrer">Fuente</a></dd></div>)}</dl>}
      </div>
    </section>
    {destination.gallery.length > 0 ? <Gallery photos={destination.gallery} /> : <section className="shell pending-gallery" id="galeria" aria-labelledby="pending-gallery-title"><h2 id="pending-gallery-title">Galería por incorporar</h2><p>Mostraremos aquí las fotografías confirmadas del restaurante.</p><div className="pending-slots">{["Vista del restaurante", "Detalles del lugar", "Otra perspectiva"].map((label) => <div key={label}><Camera size={24} strokeWidth={1.3} aria-hidden="true" /><span>{label}</span><small>Fotografía pendiente</small></div>)}</div></section>}
    <div className="shell destination-return"><Link className="text-link" to={`/municipios/${municipality.slug}#lugares`}><ArrowLeft size={17} aria-hidden="true" />Volver a {municipality.name}</Link></div>
  </>;
}
