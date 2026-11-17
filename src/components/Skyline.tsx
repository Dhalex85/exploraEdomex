const TREES = [
  { x: 34, base: 596, h: 44, w: 9 },
  { x: 62, base: 590, h: 30, w: 7 },
  { x: 88, base: 584, h: 52, w: 10 },
  { x: 118, base: 580, h: 26, w: 6 },
  { x: 147, base: 576, h: 36, w: 8 },
  { x: 1470, base: 556, h: 30, w: 7 },
  { x: 1496, base: 552, h: 46, w: 9 },
  { x: 1524, base: 548, h: 28, w: 6 },
  { x: 1552, base: 546, h: 40, w: 8 },
  { x: 1580, base: 544, h: 24, w: 5 },
];

/** Jagged distant treeline along the very bottom edge. */
function forestPath() {
  let d = "M0,620 L0,608 ";
  for (let x = 0; x <= 1600; x += 18) {
    const peak = 594 - ((x * 7919) % 13) - ((x % 54 === 0) ? 6 : 0);
    d += `L${x},606 L${x + 9},${peak} L${x + 18},606 `;
  }
  return `${d}L1600,620 Z`;
}

export default function Skyline() {
  return (
    <svg viewBox="0 0 1600 620" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7C887F" stopOpacity="0.95" />
          <stop offset="48%" stopColor="#4E5C55" />
          <stop offset="100%" stopColor="#2F3D37" />
        </linearGradient>

        <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22322C" />
          <stop offset="100%" stopColor="#131F1B" />
        </linearGradient>

        <linearGradient id="near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A1613" />
          <stop offset="100%" stopColor="#040B09" />
        </linearGradient>

        <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B98A" stopOpacity="0" />
          <stop offset="50%" stopColor="#F0C494" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E8B98A" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="mist" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#DCC9B0" stopOpacity="0" />
          <stop offset="30%" stopColor="#DCC9B0" stopOpacity="0.4" />
          <stop offset="68%" stopColor="#DCC9B0" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#DCC9B0" stopOpacity="0" />
        </linearGradient>

        <filter id="soft" x="-20%" y="-60%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="16" />
        </filter>

        <filter id="snowBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.7" />
        </filter>
      </defs>

      {/* warm haze lifting off the valley */}
      <rect x="0" y="404" width="1600" height="64" fill="url(#haze)" opacity="0.5" filter="url(#soft)" />

      {/* far range: the volcano carries the silhouette */}
      <path
        d="M0,486 C 90,480 160,470 240,474 C 310,477 350,458 410,462 C 470,466 505,446 560,450 C 615,454 645,436 700,440 C 745,443 775,424 820,420 C 860,416 880,398 905,388 C 925,380 940,398 960,412 C 990,432 1030,440 1075,444 C 1110,447 1130,430 1150,404 C 1170,372 1190,300 1232,294 C 1272,288 1296,352 1318,392 C 1336,424 1360,436 1400,440 C 1450,445 1500,432 1550,436 C 1575,438 1588,436 1600,438 L1600,620 L0,620 Z"
        fill="url(#far)"
      />

      {/* snow on the upper flanks */}
      <g filter="url(#snowBlur)" opacity="0.72">
        <path
          d="M1206,340 C 1216,318 1226,300 1232,294 C 1240,300 1250,320 1260,342 C 1246,332 1222,331 1206,340 Z"
          fill="#F7F0E6"
        />
        <path d="M1188,372 L1200,362 L1204,376 Z" fill="#EFE7DA" opacity="0.55" />
        <path d="M1266,376 L1276,364 L1280,380 Z" fill="#EFE7DA" opacity="0.45" />
      </g>

      {/* mist between ranges */}
      <rect x="-60" y="492" width="1720" height="54" fill="url(#mist)" opacity="0.32" filter="url(#soft)" />

      {/* mid range */}
      <path
        d="M0,540 C 90,534 160,528 230,532 C 300,536 330,516 386,508 C 430,502 470,470 500,468 C 528,466 552,496 590,512 C 640,532 700,530 780,534 C 860,538 920,524 995,530 C 1065,535 1120,516 1200,522 C 1280,528 1340,518 1420,526 C 1500,534 1550,528 1600,532 L1600,620 L0,620 Z"
        fill="url(#mid)"
      />

      {/* foreground ridge */}
      <path
        d="M0,590 C 120,576 224,562 330,568 C 424,574 500,552 604,556 C 706,560 786,546 886,551 C 986,556 1064,542 1164,548 C 1264,554 1344,540 1444,548 C 1524,554 1570,548 1600,552 L1600,620 L0,620 Z"
        fill="url(#near)"
      />

      {/* distant forest edge */}
      <path d={forestPath()} fill="#030A08" opacity="0.9" />

      {/* framing pines */}
      <g fill="#020807">
        {TREES.map((t) => (
          <path key={`${t.x}-${t.h}`} d={`M${t.x},${t.base} L${t.x - t.w},${t.base} L${t.x},${t.base - t.h} Z`} />
        ))}
      </g>
    </svg>
  );
}
