export function Contour() {
  return (
    <div className="contour" aria-label="Esquema de altura del altiplano">
      <div className="contour__head">
        <span className="meta">Esquema de altura</span>
        <span className="meta">2 300 — 2 500 m</span>
      </div>

      <div className="contour__plot">
        <svg
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="contourFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B58A55" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#B58A55" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="contour__fill"
            d="M0 128 L0 180 L1200 180 L1200 96 C1140 94 1100 70 1040 72 C980 74 950 104 890 106 C830 108 800 82 740 78 C680 74 650 102 590 104 C530 106 500 76 440 72 C380 68 350 96 290 100 C230 104 200 88 140 92 C90 95 50 120 0 128 Z"
          />
          <path
            className="contour__line"
            d="M0 128 C50 120 90 95 140 92 C200 88 230 104 290 100 C350 96 380 68 440 72 C500 76 530 106 590 104 C650 102 680 74 740 78 C800 82 830 108 890 106 C950 104 980 74 1040 72 C1100 70 1140 94 1200 96"
          />
          <path
            className="contour__ghost"
            d="M0 146 C60 140 100 118 160 116 C220 114 250 128 310 124 C370 120 400 98 460 100 C520 102 550 126 610 126 C670 126 700 100 760 102 C820 104 850 128 910 126 C970 124 1000 100 1060 98 C1120 96 1160 116 1200 118"
          />
          <line
            className="contour__base"
            x1="0"
            y1="160"
            x2="1200"
            y2="160"
            strokeDasharray="2 7"
          />
          <line className="contour__tick" x1="300" y1="70" x2="300" y2="160" />
          <line className="contour__tick" x1="760" y1="76" x2="760" y2="160" />
          <line className="contour__tick" x1="1040" y1="70" x2="1040" y2="160" />
        </svg>

        <div className="contour__labels" aria-hidden="true">
          <span style={{ left: "25%" }}>2 340 m</span>
          <span style={{ left: "63%" }}>2 380 m</span>
          <span style={{ left: "87%" }}>2 350 m</span>
        </div>
      </div>

      <p className="contour__note">
        Lectura esquemática del altiplano. No es un mapa ni una medición
        topográfica.
      </p>
    </div>
  );
}
