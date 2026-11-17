import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryItem } from "../data/content";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        onNavigate((index + 1) % items.length);
        return;
      }
      if (event.key === "ArrowLeft") {
        onNavigate((index - 1 + items.length) % items.length);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button, a[href]",
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — ${item.photo.location}`}
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        ref={closeRef}
        aria-label="Cerrar galería"
      >
        <X size={20} strokeWidth={1.4} aria-hidden="true" />
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={() => onNavigate((index - 1 + items.length) % items.length)}
        aria-label="Fotografía anterior"
      >
        <ArrowLeft size={20} strokeWidth={1.3} aria-hidden="true" />
      </button>

      <figure className="lightbox__figure">
        <div className="lightbox__media">
          <img
            src={item.photo.src}
            srcSet={item.photo.srcSet}
            sizes="92vw"
            width={item.photo.width}
            height={item.photo.height}
            alt={item.photo.alt}
            decoding="async"
          />
        </div>

        <figcaption className="lightbox__caption">
          <span className="meta lightbox__counter">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")} · {item.category}
          </span>
          <h3 className="lightbox__title serif">{item.title}</h3>
          <p className="lightbox__place">
            {item.photo.caption} · {item.photo.location}
          </p>
          <p className="lightbox__credit meta">
            Fotografía — {item.photo.credit.author} · {item.photo.credit.source}{" "}
            ·{" "}
            <a
              href={item.photo.credit.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.photo.credit.license}
            </a>
          </p>
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={() => onNavigate((index + 1) % items.length)}
        aria-label="Fotografía siguiente"
      >
        <ArrowRight size={20} strokeWidth={1.3} aria-hidden="true" />
      </button>
    </div>,
    document.body,
  );
}
