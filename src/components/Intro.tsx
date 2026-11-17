import { ArrowUpRight } from "lucide-react";
import { Figure } from "./Figure";
import { photographs } from "../data/content";

export function Intro() {
  return (
    <section className="intro section--paper" id="descubrir">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-tag">
            <i aria-hidden="true" />
            01 — Descubrir
          </span>
          <span className="meta section-head__side">Explora Edomex · Edición 01</span>
        </div>

        <div className="intro__grid">
          <h2 className="intro__title" data-reveal>
            <span className="intro__title-sans">El altiplano</span>
            <span className="intro__title-serif">tiene otra</span>
            <span className="intro__title-outline">velocidad.</span>
          </h2>

          <div className="intro__aside" data-reveal>
            <p>
              Una hacienda azul, magueyes y un horizonte que se despeina. Esto
              es el Edomex que no aparece en los letreros de la carretera.
            </p>

            <ul className="pill-list" aria-label="Temas de esta edición">
              <li>Bosque de niebla</li>
              <li>Hacienda azul</li>
              <li>2 350 m</li>
            </ul>

            <a className="link-arrow" href="#destinos">
              <span>Conocer los pueblos</span>
              <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="intro__mosaic">
          <Figure
            photo={photographs.intro}
            className="intro__photo intro__photo--tall"
            sizes="(max-width: 980px) 100vw, 38vw"
          />
          <Figure
            photo={photographs.axapuscoHaciendaLateral}
            className="intro__photo intro__photo--wide"
            sizes="(max-width: 980px) 100vw, 48vw"
          />

          <div className="intro__block" data-reveal>
            <span className="intro__block-num">01</span>
            <span className="intro__block-label">
              Primera edición
              <br />
              Altiplano mexicano
            </span>
            <span className="intro__block-star" aria-hidden="true">
              ✦
            </span>
          </div>

          <span className="intro__sticker meta" aria-hidden="true">
            19.72° N
            <br />
            98.75° O
          </span>
        </div>
      </div>
    </section>
  );
}
