import type { SVGProps } from "react";

/**
 * Lightweight, consistent line-art icon set. Each icon inherits `currentColor`
 * and a 1.5 stroke so it sits comfortably inside the luxury feature grid.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PoolIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      <path d="M3 14c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      <path d="M8 12V6a2 2 0 0 1 4 0" />
      <path d="M8 9h4" />
    </svg>
  );
}

export function JacuzziIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M8 11V7a2 2 0 0 1 2-2" />
      <path d="M10 5h.01" />
      <path d="M8 4c.4.4.4 1 0 1.5M11 3.5c.4.4.4 1 0 1.5M14 4c.4.4.4 1 0 1.5" />
    </svg>
  );
}

export function ParkingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 16V8h3.2a2.4 2.4 0 0 1 0 4.8H9" />
    </svg>
  );
}

export function GardenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21v-7" />
      <path d="M12 14c-3 0-5-2-5-5 3 0 5 2 5 5z" />
      <path d="M12 11c0-3 2-5 5-5 0 3-2 5-5 5z" />
      <path d="M7 21h10" />
    </svg>
  );
}

export function BbqIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 8h14l-1.4 7a3 3 0 0 1-2.9 2.3H9.3A3 3 0 0 1 6.4 15z" />
      <path d="M9 20l-1 2M15 20l1 2" />
      <path d="M10 4c0 1-1 1-1 2M13 3c0 1-1 1-1 2" />
      <path d="M9 11h6" />
    </svg>
  );
}

export function OvenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 13a9 5 0 0 1 18 0v0H3z" />
      <path d="M3 13v3a9 5 0 0 0 18 0v-3" />
      <path d="M10 13c0-1.2 1-2 2-2.6" />
      <path d="M8 8c0-1 1-1.4 1-2.4M12 7c0-1 1-1.4 1-2.4" />
    </svg>
  );
}

export function WifiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M8 15.5a6 6 0 0 1 8 0" />
      <path d="M11 18.5a1.5 1.5 0 0 1 2 0" />
    </svg>
  );
}

export function BeachIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18" />
      <path d="M12 20V9" />
      <path d="M12 9a7 7 0 0 1 7 5H5a7 7 0 0 1 7-5z" />
      <path d="M12 9c0-2 1.5-4 4-4.5" />
    </svg>
  );
}

export function FireplaceIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 21v-5a4 4 0 0 1 8 0v5" />
      <path d="M12 13c-1 .8-1.5 1.6-1.5 2.5a1.5 1.5 0 0 0 3 0c0-.5-.2-1-.7-1.6.9.1 1.5-.3 1.5-1.1 0-1-.9-1.6-1.6-2.3-.3 1-.7 1.7-.7 2.5z" />
    </svg>
  );
}

export function LoungerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18h13l1-4-9 1z" />
      <path d="M16 14l3-1" />
      <path d="M5 18v2M14 18v2" />
      <circle cx="18.5" cy="7.5" r="1.5" />
    </svg>
  );
}

export function BoxingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3h6l-1 3H10z" />
      <path d="M12 6v3" />
      <path d="M8 9h8l-.6 7a2 2 0 0 1-2 1.8h-2.8a2 2 0 0 1-2-1.8z" />
      <path d="M10 17.8V21M14 17.8V21" />
    </svg>
  );
}

export function GrassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18" />
      <path d="M6 20c0-3-1-4-1-6 2 1 2 3 2 6" />
      <path d="M10 20c0-4-1-5-1-8 2 1.5 2 4 2 8" />
      <path d="M14 20c0-3 1-4 1-7-2 1-2 4-2 7" />
      <path d="M18 20c0-3 1-4 1-6-2 1-2 3-2 6" />
    </svg>
  );
}

export function FitnessIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9v6M20 9v6M2 11v2M22 11v2" />
      <rect x="4" y="8" width="3" height="8" rx="1" />
      <rect x="17" y="8" width="3" height="8" rx="1" />
      <path d="M7 12h10" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 19.05 4.9 9.86 9.86 0 0 0 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.24 8.23z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M16 6a3 3 0 0 1 0 5M21 20c0-2.5-1.6-4.3-4-4.8" />
    </svg>
  );
}

export function BedIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18V8M3 12h18a0 0 0 0 1 0 0v6M21 18v-3" />
      <path d="M3 12V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8.5h2.5M14 8.5V7a2 2 0 0 1 2-2h1M14 8.5V21M14 8.5h-2.5M14 12.5h2.5" />
    </svg>
  );
}
