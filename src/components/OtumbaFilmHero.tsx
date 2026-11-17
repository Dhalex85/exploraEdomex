import { useEffect, useRef, useState } from "react";
import { ArrowDown, Aperture, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../data/assets";
import { Breadcrumbs } from "./Breadcrumbs";
import "../styles/otumba-film.css";

export function OtumbaFilmHero() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const fullVideo = asset("videos/otumba/primera-edicion.mp4");

  useEffect(() => {
    const element = video.current;
    return () => { element?.pause(); };
  }, []);

  const play = async () => {
    const element = video.current;
    if (!element) return;
    setFailed(false);
    setStarted(true);
    try {
      await element.play();
      if (video.current === element) element.focus({ preventScroll: true });
    } catch {
      if (video.current !== element) return;
      setStarted(false);
      setFailed(true);
    }
  };

  return <section className="otumba-film-hero" aria-labelledby="municipality-title">
    <div className="shell otumba-film-layout">
      <div className="otumba-film-copy">
        <Breadcrumbs items={[{ label: "Estado de México", to: "/" }, { label: "Otumba" }]} />
        <p className="otumba-film-kicker"><Aperture size={18} aria-hidden="true" />Una película de EXPLORA EDOMEX</p>
        <h1 id="municipality-title">Otumba.<em>Desde el aire.</em></h1>
        <p className="otumba-film-lede">Vías, luz y otra forma de mirar Otumba. Un recorrido aéreo filmado por nuestro equipo.</p>
        <p className="otumba-film-meta"><span>Primera edición</span><i aria-hidden="true" /><span>1 min 16 s</span><i aria-hidden="true" /><span>Video sin audio</span></p>
        <Link to="/municipios/otumba#lugares" className="button button-primary">Explorar sus lugares<ArrowDown size={19} aria-hidden="true" /></Link>
      </div>
      <figure className="otumba-film-figure">
        <div className="otumba-film-frame">
          <video ref={video} width={608} height={1080} controls={started} playsInline preload="none" poster={asset("videos/otumba/primera-edicion-poster.webp")} tabIndex={started ? 0 : -1} aria-label="Video aéreo de Otumba, primera edición" aria-describedby="otumba-video-description" onError={(event) => { if (started && event.target === event.currentTarget) { setFailed(true); setStarted(false); } }}>
            <source src={asset("videos/otumba/primera-edicion-mobile.mp4")} media="(max-width: 759px)" type="video/mp4" />
            <source src={fullVideo} type="video/mp4" />
            <a href={fullVideo}>Abrir el video de Otumba</a>
          </video>
          {!started && <button type="button" className="otumba-film-play" onClick={() => void play()} aria-label="Reproducir video de Otumba"><span className="otumba-film-play-icon"><Play size={25} aria-hidden="true" /></span><span className="otumba-film-play-title">Otumba en movimiento.</span><span className="otumba-film-play-label">Reproducir película · 01:16</span></button>}
        </div>
        <figcaption><span>Imágenes propias · EXPLORA EDOMEX</span><span>Primera edición</span></figcaption>
        <details className="otumba-film-description"><summary>Descripción del video</summary><p id="otumba-video-description">Video sin audio. Tomas aéreas en Otumba: vías ferroviarias, un tren, construcciones junto a las vías y una estructura circular de ladrillo rodeada de vegetación.</p></details>
        {failed && <p className="otumba-film-error" role="alert">No se pudo reproducir aquí. <a href={fullVideo}>Abrir el archivo de video</a>.</p>}
      </figure>
    </div>
  </section>;
}
