"use client";

import { useId } from "react";

// Hand-built editorial artwork. Every section uses the same bottle-and-petal
// composition with a different palette, so the site reads as one campaign even
// with an empty product catalog.

const PALETTES = {
  "hero-1": { bg: "#4A1224", deep: "#211318", glow: "#C9A46A", glass: "#9B4056", petal: "#F3E3E3" },
  "hero-2": { bg: "#341021", deep: "#1B0E14", glow: "#C9A46A", glass: "#7A3A2A", petal: "#E8C9A0" },
  "hero-3": { bg: "#F3E3E3", deep: "#C9A46A", glow: "#FFFFFF", glass: "#9B4056", petal: "#FBF7F2" },
  floral: { bg: "#5A1B33", deep: "#2A0F1C", glow: "#D9A9B4", glass: "#9B4056", petal: "#F3E3E3" },
  "oud-woody": { bg: "#2A1420", deep: "#150B10", glow: "#C9A46A", glass: "#6E382C", petal: "#B98A5E" },
  fresh: { bg: "#E9E2D8", deep: "#9C8B76", glow: "#FFFFFF", glass: "#9B4056", petal: "#FBF7F2" },
  "sweet-gourmand": { bg: "#5B2530", deep: "#2A1118", glow: "#D9A05B", glass: "#A8543C", petal: "#F1D9BE" },
  "musk-attar": { bg: "#3A1F2C", deep: "#1B1017", glow: "#C9A46A", glass: "#8A5B4B", petal: "#EADFD4" },
  bakhoor: { bg: "#24131C", deep: "#120A0F", glow: "#B9783B", glass: "#6B3B2C", petal: "#C9A46A" },
  story: { bg: "#4A1224", deep: "#211318", glow: "#C9A46A", glass: "#9B4056", petal: "#F3E3E3" },
  login: { bg: "#3D1022", deep: "#1A0C13", glow: "#C9A46A", glass: "#9B4056", petal: "#F3E3E3" },
  signup: { bg: "#F3E3E3", deep: "#C9A46A", glow: "#FFFFFF", glass: "#9B4056", petal: "#FBF7F2" },
};

const PETALS = [
  { x: 140, y: 170, r: -28, s: 1.1 },
  { x: 250, y: 640, r: 34, s: 0.85 },
  { x: 1010, y: 230, r: 52, s: 1 },
  { x: 1090, y: 610, r: -18, s: 1.25 },
  { x: 420, y: 110, r: 68, s: 0.7 },
  { x: 840, y: 690, r: -46, s: 0.8 },
];

export default function BrandArt({ variant = "hero-1", className = "", alt = "" }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const p = PALETTES[variant] ?? PALETTES["hero-1"];
  const bg = `${uid}-bg`;
  const glow = `${uid}-glow`;
  const glass = `${uid}-glass`;
  const cap = `${uid}-cap`;

  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      role={alt ? "img" : "presentation"}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.bg} />
          <stop offset="100%" stopColor={p.deep} />
        </linearGradient>
        <radialGradient id={glow} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor={p.glow} stopOpacity="0.55" />
          <stop offset="60%" stopColor={p.glow} stopOpacity="0.12" />
          <stop offset="100%" stopColor={p.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={glass} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={p.glass} stopOpacity="0.55" />
          <stop offset="35%" stopColor={p.glass} stopOpacity="0.95" />
          <stop offset="70%" stopColor={p.deep} stopOpacity="0.9" />
          <stop offset="100%" stopColor={p.glass} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={cap} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3DFB8" />
          <stop offset="50%" stopColor={p.glow} />
          <stop offset="100%" stopColor="#8C6A38" />
        </linearGradient>
      </defs>

      <rect width="1200" height="800" fill={`url(#${bg})`} />
      <rect width="1200" height="800" fill={`url(#${glow})`} />

      {/* fine gold framing arcs */}
      <g fill="none" stroke={p.glow} strokeOpacity="0.45" strokeWidth="1.5">
        <circle cx="600" cy="430" r="300" />
        <circle cx="600" cy="430" r="330" strokeOpacity="0.18" />
        <path d="M60 120h240M900 120h240M60 700h240M900 700h240" />
      </g>

      {/* scattered petals */}
      <g fill={p.petal} fillOpacity="0.55">
        {PETALS.map((petal, index) => (
          <ellipse
            key={index}
            cx={petal.x}
            cy={petal.y}
            rx={58 * petal.s}
            ry={22 * petal.s}
            transform={`rotate(${petal.r} ${petal.x} ${petal.y})`}
          />
        ))}
      </g>

      {/* soft table shadow */}
      <ellipse cx="600" cy="668" rx="250" ry="34" fill={p.deep} fillOpacity="0.45" />

      {/* flanking bottles */}
      <g opacity="0.45">
        <rect x="338" y="470" width="104" height="170" rx="18" fill={`url(#${glass})`} />
        <rect x="362" y="438" width="56" height="34" rx="6" fill={`url(#${cap})`} />
        <rect x="758" y="490" width="104" height="150" rx="18" fill={`url(#${glass})`} />
        <rect x="782" y="460" width="56" height="32" rx="6" fill={`url(#${cap})`} />
      </g>

      {/* main bottle */}
      <g>
        <rect x="528" y="396" width="144" height="58" rx="10" fill={`url(#${cap})`} />
        <rect x="552" y="448" width="96" height="30" rx="6" fill={`url(#${glass})`} />
        <rect x="482" y="470" width="236" height="200" rx="30" fill={`url(#${glass})`} />
        <rect x="498" y="488" width="18" height="158" rx="9" fill="#FFFFFF" fillOpacity="0.22" />
        <rect x="530" y="536" width="140" height="78" rx="4" fill={p.deep} fillOpacity="0.35" />
        <path d="M556 575h88" stroke={p.glow} strokeWidth="2" strokeOpacity="0.8" />
        <circle cx="600" cy="556" r="7" fill="none" stroke={p.glow} strokeWidth="2" />
      </g>
    </svg>
  );
}
