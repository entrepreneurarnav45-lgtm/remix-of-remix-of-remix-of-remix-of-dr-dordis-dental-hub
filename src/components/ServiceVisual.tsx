import { useEffect, useState } from "react";

const palette = {
  tooth: "var(--color-card-foreground)",
  gum: "var(--color-accent)",
  highlight: "var(--color-primary)",
  muted: "var(--color-muted-foreground)",
};

function ImplantVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <defs>
        <linearGradient id="implantGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-muted-foreground)" />
        </linearGradient>
      </defs>
      <g className="service-implant">
        <rect x="85" y="10" width="30" height="55" rx="3" fill="url(#implantGrad)" />
        <path d="M100 65 L100 110" stroke="var(--color-border)" strokeWidth="4" strokeLinecap="round" className="implant-thread" />
        <ellipse cx="100" cy="112" rx="18" ry="6" fill="var(--color-accent)" className="implant-base" />
      </g>
    </svg>
  );
}

function SmileVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-smile">
        <path d="M40 60 Q100 110 160 60" fill="none" stroke={palette.tooth} strokeWidth="6" strokeLinecap="round" />
        <path d="M55 55 Q100 90 145 55" fill="none" stroke={palette.highlight} strokeWidth="3" strokeLinecap="round" className="smile-arc" />
        <circle cx="170" cy="35" r="4" fill={palette.gum} className="sparkle s1" />
        <circle cx="30" cy="40" r="3" fill={palette.gum} className="sparkle s2" />
        <circle cx="150" cy="25" r="2.5" fill={palette.highlight} className="sparkle s3" />
      </g>
    </svg>
  );
}

function RootCanalVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-rootcanal">
        <path d="M85 20 L90 100 L110 100 L115 20 Z" fill={palette.tooth} opacity="0.85" />
        <path d="M100 35 L100 90" stroke={palette.highlight} strokeWidth="3" strokeLinecap="round" className="canal-line" />
        <circle cx="100" cy="45" r="4" fill={palette.gum} className="canal-pulse" />
      </g>
    </svg>
  );
}

function WhiteningVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-whitening">
        <rect x="70" y="20" width="25" height="80" rx="4" fill="#D4A017" className="tooth-before" />
        <rect x="105" y="20" width="25" height="80" rx="4" fill={palette.tooth} className="tooth-after" />
        <path d="M95 30 L95 90" stroke={palette.gum} strokeWidth="2" strokeDasharray="4 4" className="whiten-beam" />
      </g>
    </svg>
  );
}

function CrownVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-crown">
        <path d="M75 55 L85 100 L115 100 L125 55 Z" fill={palette.tooth} />
        <path d="M70 35 L130 35 L125 55 L75 55 Z" fill={palette.highlight} className="crown-cap" />
        <path d="M70 55 L130 55" stroke={palette.gum} strokeWidth="2" className="crown-seam" />
      </g>
    </svg>
  );
}

function VeneerVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-veneer">
        <path d="M70 25 L75 95 L105 95 L110 25 Z" fill={palette.tooth} />
        <path d="M110 25 L112 95" stroke={palette.highlight} strokeWidth="3" fill="none" className="veneer-shell" />
        <rect x="108" y="25" width="10" height="70" rx="2" fill={palette.highlight} opacity="0.25" className="veneer-fill" />
      </g>
    </svg>
  );
}

function ProsthodonticVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-pros">
        <rect x="60" y="70" width="80" height="18" rx="4" fill={palette.highlight} className="bridge-base" />
        <rect x="75" y="55" width="12" height="22" rx="2" fill={palette.tooth} className="bridge-tooth t1" />
        <rect x="110" y="55" width="12" height="22" rx="2" fill={palette.tooth} className="bridge-tooth t2" />
        <rect x="92" y="50" width="16" height="16" rx="2" fill={palette.gum} className="bridge-pontic" />
      </g>
    </svg>
  );
}

function FillingVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-filling">
        <path d="M75 30 L80 90 L120 90 L125 30 Z" fill={palette.tooth} />
        <circle cx="100" cy="55" r="10" fill={palette.highlight} className="filling-material" />
        <path d="M90 55 L110 55 M100 45 L100 65" stroke={palette.tooth} strokeWidth="2" className="filling-cross" />
      </g>
    </svg>
  );
}

function DentureVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-denture">
        <path d="M55 50 Q100 35 145 50 Q145 80 100 90 Q55 80 55 50 Z" fill="none" stroke={palette.highlight} strokeWidth="3" className="denture-frame" />
        <circle cx="75" cy="58" r="5" fill={palette.tooth} className="denture-tooth d1" />
        <circle cx="95" cy="54" r="5" fill={palette.tooth} className="denture-tooth d2" />
        <circle cx="115" cy="54" r="5" fill={palette.tooth} className="denture-tooth d3" />
        <circle cx="135" cy="58" r="5" fill={palette.tooth} className="denture-tooth d4" />
      </g>
    </svg>
  );
}

function PreventiveVisual() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" aria-hidden="true">
      <g className="service-preventive">
        <path d="M100 25 L115 45 L140 45 L125 62 L132 85 L100 72 L68 85 L75 62 L60 45 L85 45 Z" fill="none" stroke={palette.highlight} strokeWidth="3" strokeLinejoin="round" className="shield-outline" />
        <path d="M90 58 L98 66 L112 50" fill="none" stroke={palette.gum} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="check-stroke" />
      </g>
    </svg>
  );
}

const visuals = [
  ImplantVisual,
  SmileVisual,
  RootCanalVisual,
  WhiteningVisual,
  CrownVisual,
  VeneerVisual,
  ProsthodonticVisual,
  FillingVisual,
  DentureVisual,
  PreventiveVisual,
];

export function ServiceVisual({ index, title }: { index: number; title: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const Visual = visuals[index] ?? visuals[9];
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-md bg-muted ${mounted ? "service-visual-active" : ""}`} aria-label={`${title} treatment visualization`}>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <Visual />
      </div>
    </div>
  );
}
