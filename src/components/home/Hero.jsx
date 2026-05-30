/* ==========================================================================
   HERO.JSX — WHITE THEME VERSION — MOBILE FIXED
========================================================================== */

import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

const NAVY = "#111827";
const ORANGE = "#FF8C00";
const WHITE = "#FFFFFF";

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

/* ==========================================================================
   MARKER ICON
========================================================================== */

function buildMarkerIcon(city, screenW) {
  const sm = screenW < 480;

  const size = sm
    ? city.isHQ ? 26 : 16
    : screenW < 768
    ? city.isHQ ? 36 : 22
    : city.isHQ
    ? 44
    : Math.max(24, 18 + (city.installs / MAX_INSTALLS) * 14);

  const cx = size / 2;
  const rRing = cx * 0.8;
  const rFill = cx * 0.46;
  const rCore = cx * 0.22;

  const pulse = "";

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    ${pulse}
    <circle cx="${cx}" cy="${cx}" r="${rRing}" fill="none" stroke="${ORANGE}" stroke-width="1.1" opacity="0.25" />
    <circle cx="${cx}" cy="${cx}" r="${rFill}" fill="${ORANGE}" opacity="0.90" />
    <circle cx="${cx}" cy="${cx}" r="${rCore}" fill="white" opacity="0.96" />
  </svg>`;

  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

/* ==========================================================================
   POPUP CARD
========================================================================== */

function PopupCard({ city }) {
  const pct = Math.round((city.installs / MAX_INSTALLS) * 100);

  return (
    <div style={{
      fontFamily: "'Segoe UI',system-ui,sans-serif",
      minWidth: 170,
      padding: "11px 13px 10px",
      background: WHITE,
      borderRadius: 10,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
        <span style={{ fontWeight: 800, fontSize: 13, color: NAVY, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {city.label}
        </span>
        {city.isHQ && (
          <span style={{ fontSize: 8, fontWeight: 800, color: ORANGE, border: `1.5px solid ${ORANGE}`, borderRadius: 3, padding: "1px 5px", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            HQ
          </span>
        )}
      </div>

      <div style={{ fontSize: 9, color: "#888", marginBottom: 7 }}>Partner since {city.since}</div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginBottom: 7 }}>
        <span style={{ fontSize: 24, fontWeight: 900, color: ORANGE, lineHeight: 1 }}>{city.installs}</span>
        <span style={{ fontSize: 10, color: "#666", fontWeight: 600 }}>Installations</span>
      </div>

      <div style={{ height: 3, background: "rgba(0,0,0,0.08)", borderRadius: 2, marginBottom: 9, overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: 2, width: `${pct}%`, background: `linear-gradient(90deg, ${ORANGE}, #ffb347)` }} />
      </div>

      <div style={{ fontSize: 8, fontWeight: 700, color: "#aaa", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 5 }}>
        Machines
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        {city.machines.map((m) => (
          <li key={m} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: NAVY, fontWeight: 600 }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: ORANGE, flexShrink: 0, display: "inline-block" }} />
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================================================================
   MAP VIEW CONTROLLER
========================================================================== */

function MapViewController({ screenW }) {
  const map = useMap();

  useEffect(() => {
    let center, zoom;
    if (screenW < 480) {
      center = [19.8, 76.5];
      zoom   = 6.2;
    } else if (screenW < 768) {
      center = [20.0, 76.5];
      zoom   = 6.2;
    } else {
      center = [19.8, 76.2];
      zoom   = 6.8;
    }
    map.setView(center, zoom, { animate: false });
  }, [screenW, map]);

  return null;
}

/* ==========================================================================
   SMART MARKER — MOBILE TOUCH FIX
========================================================================== */

function SmartMarker({ city, screenW }) {
  const map        = useMap();
  const markerRef  = useRef(null);
  const hoverTimer = useRef(null);
  const isMobile   = screenW < 768;
  const icon       = buildMarkerIcon(city, screenW);

  const openPopup  = () => markerRef.current?.openPopup();
  const closePopup = () => markerRef.current?.closePopup();

  // ✅ FIX 1: marker interaction — touch साठी preventDefault added
  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const toggle = () => {
      if (markerRef.current?.isPopupOpen()) closePopup();
      else openPopup();
    };

    const onOver = () => { clearTimeout(hoverTimer.current); openPopup(); };
    const onOut  = () => { hoverTimer.current = setTimeout(closePopup, 220); };

    if (!isMobile) {
      marker.on("mouseover", onOver);
      marker.on("mouseout",  onOut);
    }

    marker.on("click", toggle);

    const el = marker.getElement?.();
    if (el) {
      el.style.pointerEvents = "auto";
      el.style.cursor        = "pointer";
      el.style.touchAction   = "manipulation";

      const onTouchStart = (e) => {
        e.stopPropagation();
        e.preventDefault();   // ✅ map ला touch जाऊ देत नाही
        toggle();
      };
      // ✅ passive: false — preventDefault() साठी जरुरी
      el.addEventListener("touchstart", onTouchStart, { passive: false });

      return () => {
        clearTimeout(hoverTimer.current);
        marker.off("mouseover", onOver);
        marker.off("mouseout",  onOut);
        marker.off("click",     toggle);
        el.removeEventListener("touchstart", onTouchStart);
      };
    }

    return () => {
      clearTimeout(hoverTimer.current);
      marker.off("mouseover", onOver);
      marker.off("mouseout",  onOut);
      marker.off("click",     toggle);
    };
  }, [isMobile]);

  // ✅ FIX 2: map click ने popup close होऊ नये जेव्हा marker touch केलं
  useEffect(() => {
    const fn = (e) => {
      if (e.originalEvent?.type === "touchstart") return; // ✅ touch असेल तर skip
      closePopup();
    };
    map.on("click", fn);
    return () => map.off("click", fn);
  }, [map]);

  return (
    <Marker
      ref={markerRef}
      position={[city.lat, city.lng]}
      icon={icon}
      zIndexOffset={city.isHQ ? 1000 : 0}
    >
      <Popup closeButton={false} autoClose={false} closeOnClick={false} maxWidth={210} className="hw-popup">
        <PopupCard city={city} />
      </Popup>
    </Marker>
  );
}

/* ==========================================================================
   MAP RESIZER
========================================================================== */

function MapResizer() {
  const map = useMap();
  useEffect(() => {
    const fn = () => map.invalidateSize();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [map]);
  return null;
}

/* ==========================================================================
   MAIN COMPONENT
========================================================================== */

export default function Hero() {
  const [screenW, setScreenW] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setScreenW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const initialCenter = [19.8, 76.2];
  const initialZoom   = 6.8;

  return (
    <section className="hw">

      <div className="hw-map">
        <MapContainer
          center={initialCenter}
          zoom={initialZoom}
          zoomControl={false}
          attributionControl={false}
          scrollWheelZoom={false}
          dragging={true}
          doubleClickZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <MapViewController screenW={screenW} />
          <MapResizer />

          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
          />

          {CITIES.map((city) => (
            <SmartMarker key={city.id} city={city} screenW={screenW} />
          ))}
        </MapContainer>
      </div>

      <div className="hw-veil-l" />
      <div className="hw-dots" />

      <div className="hw-text">
        <div className="hw-badge">● INDUSTRIAL PACKAGING SOLUTIONS</div>

        <h3 className="hw-h1">
          Engineering
          <br />
          <span style={{ color: ORANGE, fontStyle: "italic" }}>Precision</span>
          <br />
          Machines
        </h3>

        <div className="hw-div" />

        <p className="hw-desc">
          SUNTECH delivers industrial-grade packaging machinery built for speed,
          scale, and reliability — trusted by manufacturers across Maharashtra
          and 12+ cities worldwide.
        </p>

        <div className="hw-stats">
          {[
            { value: "50+", label: "Installs" },
            { value: "12+", label: "Cities"   },
            { value: "99%", label: "Uptime"   },
            { value: "24h", label: "Support"  },
          ].map(({ value, label }) => (
            <div key={label} className="hw-stat">
              <span className="hw-stat-n">{value}</span>
              <span className="hw-stat-l">{label}</span>
            </div>
          ))}
        </div>

        <div className="hw-ctas">
          <a href="/machines" className="hw-btn hw-btn-p">Explore Machines →</a>
          <a href="/contact"  className="hw-btn hw-btn-s">Request a Quote</a>
        </div>

        <div className="hw-certs">
          {["ISO 9001", "CE Mark", "FSSAI", "Export Ready"].map((c) => (
            <span key={c} className="hw-chip">✓ {c}</span>
          ))}
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .leaflet-container { background: #f0f0f0; }

        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .leaflet-popup-content { margin: 0; }
        .leaflet-popup-tip { background: white; }

        .leaflet-marker-pane,
        .leaflet-marker-pane * {
          pointer-events: auto !important;
        }

        /* ── SECTION ── */
        .hw {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 600px;
          overflow: hidden;
          background: #f7f8fa;
          font-family: 'Inter', sans-serif;
        }

        .hw-map {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .hw-map .leaflet-container {
          width: 100%;
          height: 100%;
        }

        /* ── VEIL ── */
        .hw-veil-l {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            rgba(247,248,250,0.92) 0%,
            rgba(247,248,250,0.75) 28%,
            rgba(247,248,250,0.30) 58%,
            rgba(247,248,250,0.04) 100%
          );
        }

        /* ── DOTS ── */
        .hw-dots {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image: radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── TEXT PANEL — DESKTOP ── */
        .hw-text {
          position: absolute;
          z-index: 10;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: min(92%, 520px);
          padding-top:    clamp(20px, 3vh, 40px);
          padding-bottom: clamp(18px, 4vh, 42px);
          padding-left:   clamp(16px, 4vw, 72px);
          padding-right:  clamp(16px, 3vw, 32px);
          pointer-events: none;
        }

        .hw-text .hw-badge,
        .hw-text .hw-h1,
        .hw-text .hw-div,
        .hw-text .hw-desc,
        .hw-text .hw-stats,
        .hw-text .hw-stat,
        .hw-text .hw-ctas,
        .hw-text .hw-btn,
        .hw-text .hw-certs,
        .hw-text .hw-chip,
        .hw-text a,
        .hw-text button {
          pointer-events: auto;
        }

        .hw-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          background: rgba(255,140,0,0.10);
          border: 1px solid rgba(255,140,0,0.30);
          border-radius: 4px;
          padding: 4px 10px;
          font-size: clamp(0.42rem, 1vw, 0.54rem);
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${ORANGE};
          margin-bottom: 10px;
        }

        .hw-h1 {
          font-size: clamp(2.4rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 0.88;
          color: ${NAVY};
          margin: 0 0 clamp(6px, 1vh, 10px);
          letter-spacing: -0.04em;
          text-wrap: balance;
          max-width: 100%;
          text-shadow: none;
        }

        .hw-div {
          width: clamp(24px, 5vw, 40px);
          height: 3px;
          background: ${ORANGE};
          border-radius: 2px;
          margin-bottom: clamp(6px, 1.2vh, 12px);
        }

        .hw-desc {
          font-size: clamp(0.72rem, 1.7vw, 0.92rem);
          line-height: 1.45;
          color: rgba(17,24,39,0.60);
          margin-bottom: clamp(8px, 1.6vh, 16px);
          max-width: 92%;
        }

        .hw-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          background: rgba(255,255,255,0.90);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
        }

        .hw-stat {
          padding: 8px 4px;
          text-align: center;
          border-right: 1px solid rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .hw-stat:last-child { border-right: none; }

        .hw-stat-n {
          font-size: clamp(0.82rem, 2vw, 1.5rem);
          font-weight: 900;
          color: ${NAVY};
          line-height: 1;
        }

        .hw-stat-l {
          font-size: clamp(0.38rem, 1vw, 0.54rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(17,24,39,0.38);
        }

        .hw-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 10px;
        }

        .hw-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 14px;
          border-radius: 5px;
          font-size: clamp(0.56rem, 1.4vw, 0.72rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease;
          border: none;
        }

        .hw-btn:hover { transform: translateY(-1px); }

        .hw-btn-p {
          background: ${ORANGE};
          color: ${WHITE};
          box-shadow: 0 8px 22px rgba(255,140,0,0.28);
        }

        .hw-btn-s {
          background: rgba(17,24,39,0.07);
          color: ${NAVY};
          border: 1px solid rgba(17,24,39,0.18);
        }

        .hw-certs {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .hw-chip {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          background: rgba(255,255,255,0.75);
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: 100px;
          padding: 3px 8px;
          font-size: clamp(0.40rem, 1vw, 0.54rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(17,24,39,0.50);
        }

        /* =====================================================
           MOBILE — Samsung Galaxy / 360px wide
        ===================================================== */
        @media (max-width: 479px) {
          .leaflet-container { transform: none; }

          .hw {
            min-height: 100svh;
            display: flex;
            flex-direction: column;
          }

          .hw-map {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 62%;
            filter: brightness(1.02) contrast(1.02);
          }

          .hw-veil-l {
            background: linear-gradient(
              180deg,
              rgba(247,248,250,0.30) 0%,
              rgba(247,248,250,0.60) 50%,
              rgba(247,248,250,1.00) 62%,
              rgba(247,248,250,1.00) 100%
            );
          }

          .hw-dots { display: none; }

          .hw-text {
            position: absolute;
            top: 60%;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            max-width: 100%;
            padding: 14px 20px 20px;
            justify-content: flex-start;
            background: #f7f8fa;
            border-top: 1px solid rgba(0,0,0,0.06);
            overflow-y: auto;
          }

          .hw-badge {
            font-size: 0.42rem;
            margin-bottom: 6px;
          }

          .hw-h1 {
            font-size: 1.75rem;
            line-height: 0.92;
            letter-spacing: -0.03em;
            margin-bottom: 6px;
          }

          .hw-div { margin-bottom: 6px; }

          .hw-desc {
            font-size: 0.72rem;
            max-width: 100%;
            margin-bottom: 10px;
          }

          .hw-stats { margin-bottom: 10px; }

          .hw-stat-n { font-size: 1rem; }
          .hw-stat-l { font-size: 0.42rem; }

          .hw-ctas { margin-bottom: 8px; gap: 6px; }

          .hw-btn {
            font-size: 0.6rem;
            padding: 8px 12px;
          }

          .hw-certs { gap: 4px; }
          .hw-chip { font-size: 0.38rem; padding: 2px 6px; }

          .leaflet-popup { z-index: 9999 !important; }

          .leaflet-popup-content-wrapper {
            transform: scale(0.88);
            transform-origin: bottom center;
          }
        }

        /* Medium phones 480-767 */
        @media (min-width: 480px) and (max-width: 767px) {
          .hw-text {
            width: 100%;
            max-width: 100%;
            padding-left: 24px;
            padding-right: 24px;
          }

          .hw-h1 { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}