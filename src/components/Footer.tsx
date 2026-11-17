import { ArrowUp } from "lucide-react";
import { photographs } from "../data/content";

const creditList = Object.values(photographs).filter(
  (photo, index, all) => all.findIndex((item) => item.credit.url === photo.credit.url) === index,
);

export function Footer() {
  return (
    <footer className="footer" id="creditos">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__mark display" aria-label="Explora Edomex">
              Explora
              <br />
              <span>Edomex</span>
              <i className="dot">.</i>
            </p>
            <p className="footer__tag">
              Más que destinos, experiencias que merecen ser descubiertas.
            </p>
          </div>

          <nav className="footer__cols" aria-label="Enlaces del pie">
            <div className="footer__col">
              <h2 className="meta">Explorar</h2>
              <a href="#descubrir">Descubrir</a>
              <a href="#universos">Universos</a>
              <a href="#explorar">Comenzar a explorar</a>
            </div>
            <div className="footer__col">
              <h2 className="meta">Región</h2>
              <a href="#destinos">Axapusco</a>
              <a href="#destinos">Otumba</a>
              <a href="#cultura">Teotihuacán</a>
            </div>
            <div className="footer__col">
              <h2 className="meta">Información</h2>
              <a href="#destinos">Aviso editorial</a>
              <span className="footer__muted">Contacto · próximamente</span>
              <a
                href="/images/credits.md"
                target="_blank"
                rel="noreferrer"
              >
                Créditos completos
              </a>
            </div>
          </nav>
        </div>

        <details className="footer__credits">
          <summary>
            <span className="meta">Créditos fotográficos</span>
            <span className="footer__summary-note">
              Diez fotografías, todas documentadas
            </span>
          </summary>
          <ul>
            {creditList.map((photo) => (
              <li key={photo.credit.url}>
                <a
                  href={photo.credit.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {photo.credit.author}
                </a>
                <span>
                  {photo.caption} · {photo.location}
                </span>
                <span className="footer__license">
                  {photo.credit.source} · {photo.credit.license}
                </span>
              </li>
            ))}
          </ul>
        </details>

        <div className="footer__bottom">
          <span>© 2026 Explora Edomex</span>
          <span className="footer__made">Hecho en el Estado de México</span>
          <a href="#top">
            Volver arriba
            <ArrowUp size={13} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
