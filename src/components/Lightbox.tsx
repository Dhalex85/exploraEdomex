import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { Photo } from "../data/types";
import { PhotoImage, PhotoCredit } from "./Photo";

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ photos, index, onClose, onNavigate }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = photos[index];

  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, []);

  if (!photo) return null;
  return createPortal(<dialog
    ref={dialog}
    className="lightbox"
    aria-label="Visor de fotografías"
    aria-describedby="lightbox-caption"
    onCancel={(event) => { event.preventDefault(); onClose(); }}
    onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={(event) => {
      if (event.key === "ArrowRight") { event.preventDefault(); onNavigate((index + 1) % photos.length); }
      if (event.key === "ArrowLeft") { event.preventDefault(); onNavigate((index - 1 + photos.length) % photos.length); }
    }}
  >
    <div className="lightbox-top"><span aria-live="polite">Fotografía {index + 1} de {photos.length}</span><button type="button" onClick={onClose} aria-label="Cerrar galería" autoFocus><X size={24} aria-hidden="true" /></button></div>
    <figure className="lightbox-figure">
      <PhotoImage photo={photo} eager sizes="94vw" />
      <figcaption id="lightbox-caption"><span className="photo-caption" aria-live="polite">{photo.caption}</span><PhotoCredit photo={photo} /></figcaption>
    </figure>
    <div className="lightbox-controls"><button type="button" onClick={() => onNavigate((index - 1 + photos.length) % photos.length)} aria-label="Fotografía anterior"><ArrowLeft size={21} aria-hidden="true" /><span>Anterior</span></button><span className="lightbox-hint">← → para explorar · Esc para cerrar</span><button type="button" onClick={() => onNavigate((index + 1) % photos.length)} aria-label="Fotografía siguiente"><span>Siguiente</span><ArrowRight size={21} aria-hidden="true" /></button></div>
  </dialog>, document.body);
}
