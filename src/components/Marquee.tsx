import { marqueeWords } from "../data/content";

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((group) => (
          <div className="marquee__group" key={group}>
            {marqueeWords.map((word, index) => (
              <span className="marquee__item" key={`${group}-${word}`}>
                <span>{word}</span>
                <i className={index % 3 === 1 ? "is-outline" : undefined}>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
