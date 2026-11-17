import { marqueeWords } from "../data/content";

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((group) => (
          <div className="marquee__group" key={group}>
            {marqueeWords.map((word, index) => (
              <span className="marquee__item" key={`${group}-${word}`}>
                <span className={index % 4 === 2 ? "is-outline" : undefined}>
                  {word}
                </span>
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
