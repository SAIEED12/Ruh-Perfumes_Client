// Hand-built brand lockup: rose-gold rosette + RUH wordmark.
export default function Logo({ inverse = false, compact = false }) {
  return (
    <span className="inline-flex items-center gap-2.5 no-underline">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="ruh-rosette" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F1D9A8" />
            <stop offset="50%" stopColor="#C9A46A" />
            <stop offset="100%" stopColor="#8C6A38" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="19" fill="none" stroke="url(#ruh-rosette)" strokeWidth="1" />
        <g fill="none" stroke="url(#ruh-rosette)" strokeWidth="1.1">
          {[0, 45, 90, 135].map((angle) => (
            <ellipse
              key={angle}
              cx="20"
              cy="20"
              rx="6"
              ry="15"
              transform={`rotate(${angle} 20 20)`}
            />
          ))}
        </g>
        <path d="M20 12.5 27.5 20 20 27.5 12.5 20Z" fill="url(#ruh-rosette)" />
        <circle cx="20" cy="20" r="2.4" fill={inverse ? "#4A1224" : "#FBF7F2"} />
      </svg>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-[22px] font-semibold tracking-[0.2em] ${
              inverse ? "text-ivory" : "text-bordeaux"
            }`}
          >
            RUH
          </span>
          <span className="mt-1 text-[8px] font-medium tracking-[0.36em] text-champagne">
            PERFUMES
          </span>
        </span>
      )}
    </span>
  );
}
