import { Aperture, ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { coverPhoto } from "../data/cover";
import { asset } from "../data/assets";
import { PhotoImage } from "./Photo";

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <picture className="hero-media">
      <source media="(max-width: 759px)" srcSet={asset("images/site/aerial-cover-mobile.webp")} width={900} height={1400} />
      <PhotoImage photo={coverPhoto} eager />
    </picture>
    <div className="hero-veil" aria-hidden="true" />
    <div className="hero-viewfinder" aria-hidden="true"><i /><i /><i /><i /><span><Aperture size={23} /></span></div>
    <svg className="hero-flight-line" viewBox="0 0 760 260" fill="none" aria-hidden="true" focusable="false"><path d="M-30 228C145 234 183 53 390 75S589 245 790-10" /><circle cx="390" cy="75" r="7" /></svg>
    <div className="shell hero-inner">
      <div className="hero-copy">
        <p className="hero-kicker"><Aperture size={17} aria-hidden="true" />Exploración · fotografía · Edomex</p>
        <h1 id="hero-title"><span>Edomex,</span><span>a otra altura.</span></h1>
        <p className="hero-lede">Una nueva perspectiva del Estado de México.<br /><span>Explora sus municipios. Descubre cada lugar.</span></p>
        <div className="hero-actions"><Link to="/#municipios" className="button button-primary">Explorar municipios<ArrowDown size={20} aria-hidden="true" /></Link><Link to="/#destacados" className="hero-featured-link">Lugares destacados<MoveUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
      <div className="hero-bottom">
        <Link to="/#municipios" className="hero-scroll"><span className="hero-scroll-icon"><ArrowDown size={18} aria-hidden="true" /></span><span>Una mirada.<br /><strong>Y empieza el viaje.</strong></span></Link>
        <a className="hero-location" href={coverPhoto.credit.url} target="_blank" rel="noreferrer"><span><small>Fotografía de referencia</small>{coverPhoto.caption}</span><ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </div>
    <div className="hero-progress" aria-hidden="true"><span /></div>
  </section>;
}