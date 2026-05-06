/**
 * Hero.jsx — SUNTECH Premium Manufacturing Hero
 * Mobile-first responsive: stacked layout on mobile, side-by-side on desktop
 * Map fully visible on mobile, text compact below
 * Colors: Navy #0B2A4A | Orange #FF8C00
 */

import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ══════════════════════════════════════════════════════════
   BRAND TOKENS
══════════════════════════════════════════════════════════ */
const NAVY   = "#111827";
const ORANGE = "#FF8C00";
const WHITE  = "#FFFFFF";

/* ══════════════════════════════════════════════════════════
   CITY DATA
══════════════════════════════════════════════════════════ */
const CITIES = [
  {
    id: "nagpur",
    label: "Nagpur",
    lat: 21.1458,
    lng: 79.0882,
    isHQ: true,
    installs: 87,
    machines: ["VFFS Machine", "Powder Filler", "Band Sealer"],
    since: 2008,
  },
  {
    id: "pune",
    label: "Pune",
    lat: 18.5204,
    lng: 73.8567,
    isHQ: false,
    installs: 96,
    machines: ["VFFS Machine", "Strapping Machine", "Coding Machine"],
    since: 2012,
  },
  {
    id: "mumbai",
    label: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
    isHQ: false,
    installs: 124,
    machines: ["Liquid Filler", "Label Applicator", "Vacuum Pack"],
    since: 2011,
  },
  {
    id: "nashik",
    label: "Nashik",
    lat: 19.9975,
    lng: 73.7898,
    isHQ: false,
    installs: 54,
    machines: ["Powder Filler", "Pouch Packaging", "Sealing Machine"],
    since: 2015,
  },
  {
    id: "aurangabad",
    label: "Aurangabad",
    lat: 19.8762,
    lng: 75.3433,
    isHQ: false,
    installs: 43,
    machines: ["VFFS Machine", "Nitrogen Flushing", "Labelling Machine"],
    since: 2017,
  },
];

const MAX_INSTALLS = Math.max(...CITIES.map((c) => c.installs));

/* ══════════════════════════════════════════════════════════
   MARKER ICON BUILDER
══════════════════════════════════════════════════════════ */
function buildMarkerIcon(city, isMobile) {
  const baseSize = isMobile ? (city.isHQ ? 36 : 22) : (city.isHQ ? 44 : Math.max(24, 18 + (city.installs / MAX_INSTALLS) * 14));
  const size  = baseSize;
  const cx    = size / 2;
  const rRing = cx * 0.80;
  const rFill = cx * 0.46;
  const rCore = cx * 0.22;

  const pulse = city.isHQ
    ? `<circle cx="${cx}" cy="${cx}" r="${rRing}" fill="${ORANGE}" opacity="0">
         <animate attributeName="r"       values="${rRing*0.65};${rRing*1.5}" dur="2.2s" repeatCount="indefinite"/>
         <animate attributeName="opacity" values="0.45;0"                    dur="2.2s" repeatCount="indefinite"/>
       </circle>`
    : "";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    ${pulse}
    <circle cx="${cx}" cy="${cx}" r="${rRing}" fill="none" stroke="${ORANGE}" stroke-width="1.1" opacity="0.25"/>
    <circle cx="${cx}" cy="${cx}" r="${rFill}" fill="${ORANGE}" opacity="0.90"/>
    <circle cx="${cx}" cy="${cx}" r="${rCore}" fill="white"   opacity="0.96"/>
  </svg>`;

  return L.divIcon({
    html: svg,
    className: "",
    iconSize:   [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

/* ══════════════════════════════════════════════════════════
   POPUP CARD CONTENT
══════════════════════════════════════════════════════════ */
function PopupCard({ city }) {
  const pct = Math.round((city.installs / MAX_INSTALLS) * 100);
  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      minWidth: 190,
      padding: "14px 16px 12px",
      background: WHITE,
      borderRadius: 12,
      boxShadow: "0 8px 32px rgba(11,42,74,0.18)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
        <span style={{ fontWeight: 800, fontSize: 15, color: NAVY, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {city.label}
        </span>
        {city.isHQ && (
          <span style={{
            fontSize: 9, fontWeight: 800, color: ORANGE,
            border: `1.5px solid ${ORANGE}`, borderRadius: 4,
            padding: "2px 7px", letterSpacing: "0.18em", textTransform: "uppercase",
          }}>HQ</span>
        )}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.38)", marginBottom: 10, letterSpacing: "0.04em" }}>
        Partner since {city.since}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
        <span style={{ fontSize: 28, fontWeight: 900, color: ORANGE, lineHeight: 1 }}>{city.installs}</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>Installations</span>
      </div>
      <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginBottom: 12, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 2, width: `${pct}%`,
          background: `linear-gradient(90deg, ${ORANGE}, #ffb347)`,
        }} />
      </div>
      <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 6 }}>
        Machines Installed
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
        {city.machines.map((m) => (
          <li key={m} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: NAVY, fontWeight: 600 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: ORANGE, flexShrink: 0, display: "inline-block" }} />
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   GLOBAL CSS
══════════════════════════════════════════════════════════ */
const GLOBAL_CSS = `
  .leaflet-popup-content-wrapper {
    padding: 0 !important;
    border-radius: 12px !important;
    box-shadow: none !important;
    background: transparent !important;
  }
  .leaflet-popup-content { margin: 0 !important; line-height: 1 !important; }
  .leaflet-popup-tip-container { display: none !important; }
  .leaflet-popup-close-button {
    top: 8px !important; right: 8px !important;
    color: rgba(255,255,255,0.6) !important; font-size: 16px !important;
    font-weight: 400 !important; z-index: 10;
  }
  .leaflet-popup-close-button:hover { color: ${ORANGE} !important; }
  .leaflet-container { background: #111827 !important; }

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes badgePop {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes statCount {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blinkDot {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  /* ── DESKTOP: overlay layout ── */
  .hero-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 560px;
    overflow: hidden;
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: ${NAVY};
  }

  .hero-map-layer {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  /* Desktop veils */
  .hero-veil-left {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      105deg,
      rgba(17,24,39,0.92) 0%,
      rgba(17,24,39,0.76) 36%,
      rgba(17,24,39,0.22) 62%,
      rgba(17,24,39,0.02) 100%
    );
  }
  .hero-veil-bottom {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 120px;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(to top, rgba(17,24,39,0.55) 0%, transparent 100%);
  }
  .hero-veil-top {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 80px;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(17,24,39,0.35) 0%, transparent 100%);
  }

  .hero-dot-grid {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 28px 28px;
  }

  .hero-text-panel {
    position: absolute;
    z-index: 10;
    top: 0; left: 0; bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px clamp(24px, 5vw, 72px);
    max-width: 540px;
  }

  .hero-legend {
    position: absolute;
    bottom: 18px; right: 18px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(17,24,39,0.15);
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${NAVY};
    box-shadow: 0 4px 18px rgba(17,24,39,0.2);
  }

  /* ── MOBILE: stacked layout ── */
  @media (max-width: 640px) {
    .hero-wrap {
      height: auto;
      min-height: 100svh;
      display: flex;
      flex-direction: column;
    }

    /* Map takes top portion, fixed height */
    .hero-map-layer {
      position: relative !important;
      inset: unset !important;
      width: 100%;
      height: 52vmax;
      min-height: 260px;
      max-height: 360px;
      flex-shrink: 0;
      z-index: 0;
    }

    /* Hide desktop veils on mobile */
    .hero-veil-left,
    .hero-veil-bottom,
    .hero-veil-top,
    .hero-dot-grid {
      display: none !important;
    }

    /* Text panel becomes normal flow below map */
    .hero-text-panel {
      position: relative !important;
      inset: unset !important;
      max-width: 100%;
      background: ${NAVY};
      padding: 22px 20px 28px;
      justify-content: flex-start;
      flex: 1;
    }

    /* Legend goes inside map layer on mobile */
    .hero-legend {
      bottom: 8px;
      right: 8px;
      padding: 6px 10px;
      font-size: 9px;
      gap: 7px;
      border-radius: 8px;
    }
  }

  /* Stat grid responsive */
  .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: rgba(17,24,39,0.65);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(17,24,39,0.3);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  @media (max-width: 640px) {
    .hero-stats {
      grid-template-columns: repeat(4, 1fr);
      background: rgba(17,24,39,0.45);
      margin-bottom: 16px;
    }
  }

  /* CTA row */
  .hero-ctas {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  @media (max-width: 380px) {
    .hero-ctas { flex-direction: column; }
    .hero-ctas a { text-align: center; }
  }

  /* Certs */
  .hero-certs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* Headline */
  .hero-headline {
    font-size: clamp(38px, 7vw, 80px);
    font-weight: 900;
    line-height: 0.95;
    color: ${WHITE};
    margin: 0 0 14px;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 24px rgba(0,0,0,0.35);
  }
  @media (max-width: 640px) {
    .hero-headline {
      font-size: clamp(32px, 9vw, 46px);
      margin-bottom: 10px;
      line-height: 1.0;
    }
  }

  /* Description */
  .hero-desc {
    font-size: clamp(12px, 1.8vw, 15px);
    line-height: 1.75;
    color: rgba(255,255,255,0.60);
    font-weight: 400;
    margin-bottom: 20px;
    max-width: 390px;
  }
  @media (max-width: 640px) {
    .hero-desc {
      font-size: 13px;
      margin-bottom: 16px;
      max-width: 100%;
    }
  }

  /* Badge */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,140,0,0.15);
    border: 1px solid rgba(255,140,0,0.4);
    border-radius: 4px;
    padding: 5px 12px;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: ${ORANGE};
    margin-bottom: 16px;
    width: fit-content;
    animation: badgePop 0.5s 0.1s both;
  }
  @media (max-width: 640px) {
    .hero-badge {
      font-size: 8px;
      padding: 4px 10px;
      margin-bottom: 12px;
      letter-spacing: 0.18em;
    }
  }

  /* Divider */
  .hero-divider {
    width: 40px;
    height: 3px;
    background: ${ORANGE};
    border-radius: 2px;
    margin-bottom: 14px;
    opacity: 0.7;
  }
  @media (max-width: 640px) {
    .hero-divider { margin-bottom: 10px; }
  }

  /* Stat items */
  .hero-stat-item {
    padding: 12px 6px 10px;
    text-align: center;
    border-right: 1px solid rgba(17,24,39,0.35);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .hero-stat-num {
    font-size: clamp(16px, 2.5vw, 26px);
    font-weight: 900;
    color: ${WHITE};
    line-height: 1;
  }
  .hero-stat-lbl {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
  }
  @media (max-width: 640px) {
    .hero-stat-num { font-size: 18px; }
    .hero-stat-lbl { font-size: 7px; letter-spacing: 0.08em; }
    .hero-stat-item { padding: 10px 4px 8px; }
  }

  /* Cert chips */
  .hero-cert-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: rgba(17,24,39,0.6);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(17,24,39,0.35);
    border-radius: 100px;
    padding: 4px 10px;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.38);
  }
  @media (max-width: 640px) {
    .hero-cert-chip {
      font-size: 8px;
      padding: 3px 9px;
    }
  }
`;

/* ══════════════════════════════════════════════════════════
   MAIN HERO COMPONENT
══════════════════════════════════════════════════════════ */
export default function Hero() {
  const [loaded, setLoaded]     = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("style");
    tag.textContent = GLOBAL_CSS;
    document.head.appendChild(tag);

    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const t = setTimeout(() => setLoaded(true), 180);
    return () => {
      clearTimeout(t);
      document.head.removeChild(tag);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Properly initialize and resize Leaflet map
  useEffect(() => {
    if (!mapRef.current) return;
    
    // Small timeout to ensure Leaflet has finished initial render
    const resizeTimer = setTimeout(() => {
      mapRef.current?.invalidateSize();
    }, 300);

    // Handle window resize
    const handleResize = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded]);

  // Map config differs: mobile centers slightly differently, higher zoom
  const mapCenter = isMobile ? [19.6, 76.0] : [19.8, 76.2];
  const mapZoom   = isMobile ? 6.2 : 7;

  function MarkerWithHover({ city }) {
    const icon = buildMarkerIcon(city, isMobile);
    return (
      <Marker
        position={[city.lat, city.lng]}
        icon={icon}
        zIndexOffset={city.isHQ ? 1000 : 0}
      >
        <Popup autoClose maxWidth={220}>
          <PopupCard city={city} />
        </Popup>
      </Marker>
    );
  }

  return (
    <section className="hero-wrap">

      {/* ── MAP ── */}
      <div className="hero-map-layer">
       <MapContainer
  ref={mapRef}
          center={mapCenter}
          zoom={mapZoom}
          zoomControl={false}
          attributionControl={false}
          dragging={isMobile}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
          touchZoom={isMobile}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom={19}
          />
          {CITIES.map((city) => (
            <MarkerWithHover key={city.id} city={city} />
          ))}
        </MapContainer>

        {/* Legend — visible in both layouts */}
        <div className="hero-legend" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease 0.8s" }}>
          <LegendDot color={ORANGE} pulse /> HQ — Nagpur
          <span style={{ width: 1, height: 12, background: "rgba(17,24,39,0.3)", display: "inline-block" }} />
          <span style={{ color: ORANGE, fontWeight: 800 }}>
            {CITIES.reduce((a, c) => a + c.installs, 0)} Total
          </span>
        </div>
      </div>

      {/* Desktop-only veils */}
      <div className="hero-veil-left"   aria-hidden="true" style={{ opacity: 0.85 }} />
      <div className="hero-veil-bottom" aria-hidden="true" style={{ opacity: 0.70 }} />
      <div className="hero-veil-top"    aria-hidden="true" style={{ opacity: 0.60 }} />
      <div className="hero-dot-grid"    aria-hidden="true" style={{ opacity: 0.04 }} />

      {/* ── TEXT PANEL ── */}
      <div
        className="hero-text-panel"
        style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1)",
        }}
      >
        {/* Badge */}
        <div className="hero-badge">
          <span style={{
            display: "inline-block", width: 6, height: 6,
            borderRadius: "50%", background: ORANGE,
            animation: "blinkDot 2s infinite",
          }} />
          Industrial Packaging Solutions
        </div>

        {/* Headline */}
        <h6 className="hero-headline" style={{ fontFamily: "'Inter', sans-serif" }}>
          Engineering
          <br />
          <span style={{ color: ORANGE, fontStyle: "italic" }}>Precision</span>
          <br />
          Machines
        </h6>

        {/* Divider */}
        <div className="hero-divider" />

        {/* Desc */}
        <p className="hero-desc">
          SUNTECH delivers industrial-grade packaging machinery built for
          speed, scale, and reliability — trusted by manufacturers across
          Maharashtra and 40+ Cities worldwide.
        </p>

        {/* Stats */}
        <div className="hero-stats">
          {[
            { value: "500+", label: "Installs" },
            { value: "40+",  label: "Cities" },
            { value: "99%",  label: "Uptime" },
            { value: "24h",  label: "Support" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className="hero-stat-item"
              style={{
                animation: loaded ? `statCount 0.6s ${0.3 + i * 0.1}s both` : "none",
              }}
            >
              <span className="hero-stat-num">{value}</span>
              <span className="hero-stat-lbl">{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-ctas">
          <CTAButton primary href="/machines">Explore Machines →</CTAButton>
          <CTAButton primary={false} href="/contact">Request a Quote</CTAButton>
        </div>

        {/* Certs */}
        <div className="hero-certs">
          {["ISO 9001", "CE Mark", "FSSAI", "Export Ready"].map((c) => (
            <span key={c} className="hero-cert-chip">✓ {c}</span>
          ))}
        </div>
      </div>

    </section>
  );
}

/* ── CTA Button ── */
function CTAButton({ primary, href, children }) {
  const [hovered, setHovered] = useState(false);
  const base = primary
    ? {
        background: hovered ? "#e67e00" : ORANGE,
        color: WHITE,
        border: "none",
        boxShadow: hovered ? "0 8px 24px rgba(255,140,0,0.45)" : "0 4px 16px rgba(255,140,0,0.35)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }
    : {
        background: hovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.10)",
        color: WHITE,
        border: `1.5px solid rgba(255,255,255,${hovered ? 0.55 : 0.28})`,
        boxShadow: "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        backdropFilter: "blur(8px)",
      };

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        padding: "11px 22px",
        borderRadius: 6,
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        fontSize: 12, fontWeight: 700,
        letterSpacing: "0.06em", textTransform: "uppercase",
        textDecoration: "none",
        transition: "all 0.22s ease",
        cursor: "pointer",
        whiteSpace: "nowrap",
        ...base,
      }}
    >
      {children}
    </a>
  );
}

/* ── Legend dot ── */
function LegendDot({ color, pulse }) {
  return (
    <span style={{
      display: "inline-block",
      width: 8, height: 8, borderRadius: "50%",
      background: color,
      marginRight: 4,
      boxShadow: pulse ? `0 0 0 3px rgba(255,140,0,0.22)` : "none",
      animation: pulse ? "blinkDot 2s infinite" : "none",
    }} />
  );
}