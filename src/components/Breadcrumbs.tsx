import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
export type Crumb = { label: string; to?: string };
export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  return <nav className={`breadcrumbs ${light ? "breadcrumbs--light" : ""}`} aria-label="Ruta de navegación"><ol>
    {items.map((item, index) => <li key={`${index}-${item.label}`}>
      {index > 0 && <ChevronRight size={12} aria-hidden="true" />}
      {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current={index === items.length - 1 ? "page" : undefined}>{item.label}</span>}
    </li>)}
  </ol></nav>;
}
