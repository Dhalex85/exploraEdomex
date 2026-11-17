import { Link } from "react-router-dom";
import { asset } from "../../data/assets";

export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link className={`brand ${className}`.trim()} to="/" aria-label="EXPLORA EDOMEX — inicio" translate="no">
      <img
        className="brand__logo"
        src={asset("images/logo.png")}
        width={2172}
        height={724}
        alt="EXPLORA EDOMEX"
        decoding="async"
      />
    </Link>
  );
}
