import { Chapter } from "./Chapter";
import { Contour } from "./Contour";
import { Figure } from "./Figure";
import { photographs } from "../data/content";

export function Region() {
  return (
    <section className="region" id="destinos" data-reveal>
      <div className="shell">
        <Chapter number="02" name="Primera región" end="Axapusco · Otumba" />

        <div className="region__head">
          <h2 className="region__title display" data-reveal-item>
            Dos pueblos,
            <br />
            un mismo horizonte.
          </h2>

          <div className="region__lede" data-reveal-item>
            <p>
              Al noreste del Valle de México, donde el llano empieza a
              levantarse, está nuestra primera ruta. No venimos a confirmar lo
              que ya sabes: venimos a mirar despacio un territorio que se
              recorre a escala humana.
            </p>
            <p>
              Axapusco y Otumba comparten la luz de la misma tarde. Lo demás se
              descubre pueblo por pueblo.
            </p>
          </div>
        </div>
      </div>

      <div className="shell">
        <Figure
          photo={photographs.altiplano}
          className="region__band"
          sizes="100vw"
        />
      </div>

      <div className="shell">
        <article className="region__place region__place--axapusco">
          <div className="place__body">
            <div className="place__head">
              <h3 className="place__name display">Axapusco</h3>
              <p className="place__meta meta">
                19.72° N — 98.75° O
                <br />
                2 350 m s. n. m.
              </p>
            </div>

            <div className="place__grid">
              <p className="place__tagline display">
                El silencio tiene otra textura.
              </p>

              <div className="place__copy">
                <p>
                  Casas de teja, muros de adobe y un horizonte que se pierde
                  entre cerros. Axapusco es el punto donde el altiplano se
                  despeina y el tiempo se mide en recorridos, no en minutos.
                </p>
                <p>
                  Aquí la palabra «cerca» significa otra cosa: un camino de
                  tierra, una barda de piedra, la luz que cae de lado sobre el
                  maguey.
                </p>
              </div>
            </div>
          </div>
        </article>

        <Contour />

        <article className="region__place region__place--otumba">
          <Figure
            photo={photographs.otumba}
            className="place__figure"
            sizes="(max-width: 900px) 100vw, 34vw"
          />

          <div className="place__body">
            <div className="place__head">
              <h3 className="place__name display">Otumba</h3>
              <p className="place__meta meta">
                19.70° N — 98.75° O
                <br />
                2 350 m s. n. m.
              </p>
            </div>

            <div className="place__grid">
              <p className="place__tagline display">
                La plaza como punto de partida.
              </p>

              <div className="place__copy">
                <p>
                  Un jardín, un quiosco y el tiempo suficiente para mirar.
                  Otumba se descubre caminando: en su plaza, en su tianguis y en
                  las historias de burros que ya son parte de la memoria del
                  pueblo.
                </p>
                <p>
                  Su nombre aparece en los libros de historia; su vida diaria,
                  en cambio, sucede en voz baja, entre el mercado y la sombra de
                  los árboles.
                </p>
              </div>
            </div>
          </div>
        </article>

        <p className="region__note">
          <span className="meta">Nota editorial</span>
          Todas las fotografías de esta edición están documentadas con su
          ubicación real. Las imágenes señaladas como ambientales no
          corresponden a un sitio específico de la región: funcionan como
          atmósfera visual.
        </p>
      </div>
    </section>
  );
}
