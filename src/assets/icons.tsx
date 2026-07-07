import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/* ---- Category icons ---- */

export const CategoryIcon = ({ name, ...props }: { name: string } & IconProps) => {
  const map: Record<string, JSX.Element> = {
    building: (
      <>
        <rect x="4" y="3" width="10" height="18" rx="1.5" />
        <path d="M14 8h6v13h-6" />
        <path d="M7.5 7h3M7.5 11h3M7.5 15h3M17 12h0M17 16h0" />
      </>
    ),
    bell: (
      <>
        <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
        <path d="M10.5 20a1.8 1.8 0 0 0 3 0" />
      </>
    ),
    pulse: (
      <>
        <path d="M3 12h4l2-5 3 10 2.5-7 1.5 2h5" />
      </>
    ),
    scale: (
      <>
        <path d="M12 4v16M7 20h10" />
        <path d="M12 6 5 8m7-2 7 2" />
        <path d="M5 8 3 13a2.4 2.4 0 0 0 4 0L5 8Zm14 0-2 5a2.4 2.4 0 0 0 4 0l-2-5Z" />
      </>
    ),
    calculator: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 7h8M8 11h0M12 11h0M16 11h0M8 15h0M12 15h0M16 15v2M8 18h4" />
      </>
    ),
    megaphone: (
      <>
        <path d="M4 10v4l10 4V6L4 10Z" />
        <path d="M14 8a4 4 0 0 1 0 8M6 14v3a2 2 0 0 0 3.4 1.4" />
      </>
    ),
    hardhat: (
      <>
        <path d="M4 16a8 8 0 0 1 16 0" />
        <path d="M10 8.2V6a2 2 0 0 1 4 0v2.2" />
        <path d="M3 16h18v2H3z" />
      </>
    ),
    cart: (
      <>
        <circle cx="9" cy="20" r="1.2" />
        <circle cx="17" cy="20" r="1.2" />
        <path d="M3 4h2l2.4 11.3a1.5 1.5 0 0 0 1.5 1.2h7.7a1.5 1.5 0 0 0 1.5-1.2L20 8H6" />
      </>
    ),
    cap: (
      <>
        <path d="M12 4 2 9l10 5 10-5-10-5Z" />
        <path d="M6 11v4c0 1.6 2.7 3 6 3s6-1.4 6-3v-4" />
      </>
    ),
    zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    sparkles: (
      <>
        <path d="M12 3l1.7 4.6L18 9l-4.3 1.4L12 15l-1.7-4.6L6 9l4.3-1.4L12 3Z" />
        <path d="M18.5 14l.8 2.1 2.2.8-2.2.8-.8 2.1-.8-2.1-2.2-.8 2.2-.8.8-2.1Z" />
      </>
    ),
    branch: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="9" r="2" />
        <path d="M8 6h4a3 3 0 0 1 3 3M6 8v8" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
      </>
    ),
    headset: (
      <>
        <path d="M5 13a7 7 0 0 1 14 0" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
        <path d="M19 19a3.5 3.5 0 0 1-3.5 3H13" />
      </>
    ),
  }
  return (
    <svg {...base} {...props}>
      {map[name] ?? map.building}
    </svg>
  )
}

/* ---- Small UI icons ---- */

export const ArrowRight = (props: IconProps) => (
  <svg {...base} width={18} height={18} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (props: IconProps) => (
  <svg {...base} width={16} height={16} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Check = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m5 12.5 4 4 10-10" />
  </svg>
)

export const Minus = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M6 12h12" />
  </svg>
)

export const Star = ({ filled = true, ...props }: { filled?: boolean } & IconProps) => (
  <svg
    {...base}
    strokeWidth={1.4}
    fill={filled ? 'currentColor' : 'none'}
    {...props}
  >
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.9L12 17l-5.2 2.7 1-5.9L3.5 9.7l5.9-.9L12 3.5Z" />
  </svg>
)

export const Mail = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const Search = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
)

export const Beaker = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M9 3h6M10 3v6L5.5 17A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3" />
    <path d="M7.5 14h9" />
  </svg>
)

export const Shield = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3 5 6v5c0 4.2 2.8 7.5 7 9 4.2-1.5 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Layers = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 16.5l9 5 9-5" />
  </svg>
)

export const Gavel = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m9 11 4-4M7.5 9.5 13 15M15 4l5 5M4 20h8" />
    <path d="m6 12 3 3-2 2-3-3 2-2Z" />
  </svg>
)
