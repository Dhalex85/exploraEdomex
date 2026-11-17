export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`wordmark ${className}`.trim()}>
      <span className="wordmark__mark" aria-hidden="true">
        ✦
      </span>
      <span className="wordmark__explora">Explora</span>
      <span className="wordmark__edomex">Edomex</span>
    </span>
  );
}
