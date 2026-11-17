import { useReveal } from "../hooks/useReveal";

const REGIONS = [
  {
    name: "Nevado de Toluca",
    kind: "Alta montaña",
    desc: "Un cráter con dos lagunas a 4 200 metros. Se sube antes de que salga el sol y se baja con las manos frías.",
    lat: "19.11 N",
    lon: "99.76 O",
  },
  {
    name: "Valle de Bravo",
    kind: "Lago y sierra",
    desc: "Niebla sobre el agua, veleros al amanecer y un pueblo que huele a pan dulce desde las seis.",
    lat: "19.19 N",
    lon: "100.13 O",
  },
  {
    name: "Malinalco",
    kind: "Piedra tallada",
    desc: "Una pirámide excavada en la roca viva y callejones donde la buganvilia se come las paredes.",
    lat: "18.95 N",
    lon: "99.50 O",
  },
];

export default function Discovery() {
  const ref = useReveal();

  return (
    <section className="discovery" id="descubrimiento" aria-labelledby="discovery-title">
      <div className="wrap" ref={ref}>
        <div className="discovery-intro">
          <h2 className="statement reveal" id="discovery-title" data-delay="0">
            No es un mapa. Es un territorio que <em>se&nbsp;camina</em>.
          </h2>
          <p className="intro-copy reveal" data-delay="90">
            Dieciocho volcanes, ciento veinticinco pueblos y una capital que no duerme.
            Esto es lo que encontramos cuando dejamos de pasar de largo.
          </p>
        </div>

        <div className="regions" role="list">
          {REGIONS.map((region, index) => (
            <a
              className="region reveal"
              href="#descubrimiento"
              role="listitem"
              key={region.name}
              data-delay={String(120 + index * 90)}
            >
              <span>
                <span className="region-name">{region.name}</span>
                <span className="region-kind">{region.kind}</span>
              </span>
              <span className="region-desc">{region.desc}</span>
              <span className="region-coord">
                {region.lat}
                <br />
                {region.lon}
              </span>
            </a>
          ))}
        </div>

        <div className="discovery-foot reveal" data-delay="120">
          <span>Selección de la redacción, invierno 2026</span>
          <a className="link-quiet" href="#descubrimiento">
            Ver la guía completa
          </a>
        </div>
      </div>

      <div className="wrap">
        <footer className="site-foot">
          <span>Explora Edomex · Estado de México</span>
          <span>Proyecto editorial independiente</span>
          <span>© 2026</span>
        </footer>
      </div>
    </section>
  );
}
