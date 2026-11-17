import { useRef } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Gallery } from "./components/Gallery";
import { Territory } from "./components/Territory";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";
import { useSiteMotion } from "./hooks/useSiteMotion";

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  useSiteMotion(root);

  return (
    <div ref={root} className="site">
      <a className="skip" href="#xala">
        Saltar al contenido
      </a>
      <div className="progress" aria-hidden="true">
        <span className="progress__bar" />
      </div>
      <div className="grain" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <Intro />
        <Gallery />
        <Territory />
        <Visit />
      </main>

      <Footer />
    </div>
  );
}
