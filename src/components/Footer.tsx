import { ArrowUp, ArrowUpRight } from "lucide-react";
import { edition, photographs } from "../data/content";

const creditList = Object.values(photographs).filter(
  (photo, index, all) =>
    all.findIndex((item) => item.credit.url === photo.credit.url) === index,
);

export function Footer() {
  return (
    <footer className="x-footer" id="creditos">
      <div className="x-shell">
        <div className="x-footer__top">
          <div className="x-footer__brand">
            <span className="x-footer__kicker">{edition.kicker}</span>
            <p className="x-footer__mark">
              Xala
              <em>Axapusco</em>
            </p>
            <p className="x-footer__tag">
              Una hacienda en el altiplano. Una guía para llegar sin prisa.
            </p>
          </div>

          <nav className="x-footer__cols" aria-label="Enlaces del pie">
            <div>
              <h2>Explorar</h2>
              <a href="#xala">El lugar</a>
              <a href="#galeria">Galería</a>
              <a href="#axapusco">Alrededores</a>
              <a href="#visita">Visita</a>
            </div>
            <div>
              <h2>Región</h2>
              <a href="#axapusco">Axapusco</a>
              <a href="#axapusco">Otumba</a>
              <a href="#axapusco">Teotihuacán</a>
            </div>
            <div>
              <h2>Información</h2>
              <a
                href={`${import.meta.env.BASE_URL}images/credits.md`}
                target="_blank"
                rel="noreferrer"
              >
                Créditos completos
              </a>
              <a href="#creditos">Nota editorial</a>
              <span>Contacto · próximamente</span>
            </div>
          </nav>
        </div>

        <div className="x-footer__next">
          <span className="meta">Explora Edomex crece</span>
          <p>
            Próximas ediciones: <em>Otumba</em> y <em>Teotihuacán</em>.
          </p>
        </div>

        <details className="x-footer__credits">
          <summary>
            <span className="meta">Créditos fotográficos</span>
            <span className="x-footer__summary-note">
              Todas las imágenes, documentadas
            </span>
          </summary>
          <ul>
            {creditList.map((photo) => (
              <li key={photo.credit.url}>
                <a href={photo.credit.url} target="_blank" rel="noreferrer">
                  {photo.credit.author}
                </a>
                <span>
                  {photo.caption} · {photo.location}
                </span>
                <span className="x-footer__license">
                  {photo.credit.source} · {photo.credit.license}
                </span>
              </li>
            ))}
          </ul>
        </details>

        <div className="x-footer__bottom">
          <span>© 2026 Explora Edomex</span>
          <span>
            Xala · Axapusco <ArrowUpRight size={11} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <a href="#top">
            <span>Volver arriba</span>
            <ArrowUp size={13} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
