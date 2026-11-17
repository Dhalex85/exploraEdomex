import type { Photo } from "../data/types";

export function PhotoImage({
  photo, sizes = "100vw", eager = false,
}: { photo: Photo; sizes?: string; eager?: boolean }) {
  return <img
    src={photo.src} srcSet={photo.srcSet} sizes={sizes}
    width={photo.width} height={photo.height} alt={photo.alt}
    loading={eager ? "eager" : "lazy"} decoding="async"
    {...{ fetchpriority: eager ? "high" : undefined }}
  />;
}

export function PhotoCredit({ photo }: { photo: Photo }) {
  return <span className="photo-credit">
    Foto: {photo.credit.url ? <a href={photo.credit.url} target="_blank" rel="noreferrer">{photo.credit.author}</a> : photo.credit.author}
    {photo.credit.license && <> · {photo.credit.licenseUrl ? <a href={photo.credit.licenseUrl} target="_blank" rel="noreferrer">{photo.credit.license}</a> : photo.credit.license}</>}
  </span>;
}
