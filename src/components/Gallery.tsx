import { useCallback, useState } from "react";
import { Expand } from "lucide-react";
import type { Photo } from "../data/types";
import { PhotoImage, PhotoCredit } from "./Photo";
import { Lightbox } from "./Lightbox";

export function Gallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  return <section className="gallery-section section-space" id="galeria" aria-labelledby="gallery-title">
    <div className="shell">
      <div className="section-heading gallery-heading">
        <div><p className="section-kicker">Mira más de cerca</p><h2 id="gallery-title">Galería fotográfica</h2></div>
        <p>Abre una fotografía para verla completa.</p>
      </div>
      <div className={`photo-grid${photos.length === 1 ? " photo-grid--single" : ""}${photos.every((photo) => photo.origin === "team") ? " photo-grid--originals" : ""}`}>
        {photos.map((photo, index) => <figure className={`photo-item photo-item--${index + 1}`} key={photo.id}>
          <button className="photo-open" type="button" onClick={() => setActive(index)} aria-label={`Ampliar: ${photo.caption}`} aria-haspopup="dialog">
            <PhotoImage photo={photo} sizes={index === 0 ? "100vw" : "(min-width: 760px) 50vw, 100vw"} />
            <span className="photo-expand" aria-hidden="true"><Expand size={20} /></span>
          </button>
          <figcaption><span className="photo-caption">{photo.caption}</span><PhotoCredit photo={photo} /></figcaption>
        </figure>)}
      </div>
    </div>
    {active !== null && <Lightbox photos={photos} index={active} onClose={close} onNavigate={setActive} />}
  </section>;
}
