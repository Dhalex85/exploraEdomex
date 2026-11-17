import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { homeHero } from "../data/municipalities";
import { PhotoImage } from "./Photo";

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-media"><PhotoImage photo={homeHero} eager /></div>
    <div className="hero-veil" aria-hidden="true" />
    <div className="shell hero-inner">
      <div className="hero-copy">
        <p className="hero-kicker">Explora · descubre · vive</p>
        <h1 id="hero-title"><span>Descubre el</span><strong>Estado de México</strong></h1>
        <p className="hero-lede">Dos municipios, nuevas miradas.<br />Acércate a sus lugares, fotografía a fotografía.</p>
        <Link to="/#municipios" className="button button-primary">Comienza a explorar<ArrowRight size={21} aria-hidden="true" /></Link>
      </div>
      <Link to="/municipios/axapusco" className="hero-location"><MapPin size={17} aria-hidden="true" /><span>{homeHero.caption}</span><ArrowRight size={16} aria-hidden="true" /></Link>
    </div>
  </section>;
}
