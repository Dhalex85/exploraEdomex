import type { Photograph } from "../data/content";

type FigureProps = {
  photo: Photograph;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
};

export function Figure({
  photo,
  className = "",
  sizes = "(max-width: 900px) 100vw, 50vw",
  priority = false,
  showCaption = true,
}: FigureProps) {
  return (
    <figure className={`plate ${className}`.trim()} data-plate>
      <div className="plate__media">
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={sizes}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...{ fetchpriority: priority ? "high" : "auto" }}
        />
      </div>
      {showCaption && (
        <figcaption className="plate__cap">
          <span className="plate__dot" aria-hidden="true" />
          <span>{photo.location}</span>
          <span className="plate__cap-detail">{photo.caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
