import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { name: "Atta Packaging Machine", img: `${import.meta.env.BASE_URL}products/Packaging Machine.png`, tag: "Powder & Flour", num: "01", spec: "5–50 kg/bag" },
  { name: "Granules Packaging Machine", img: `${import.meta.env.BASE_URL}products/Packing Machine.png`, tag: "Granules", num: "02", spec: "100g–25 kg" },
  { name: "Flow Wrapping Machine", img: `${import.meta.env.BASE_URL}products/Wrapping Machine.png`, tag: "Wrapping", num: "03", spec: "Up to 120 ppm" },
  { name: "Masala Packaging Machine", img: `${import.meta.env.BASE_URL}products/Powder Packaging Machine.png`, tag: "Spices & Powder", num: "04", spec: "10g–1 kg" },
  { name: "Sealing Machine", img: `${import.meta.env.BASE_URL}products/Sealing Machine.png`, tag: "Sealing", num: "05", spec: "Continuous / Impulse" },
  { name: "Vacuum Packaging Machine", img: `${import.meta.env.BASE_URL}products/Vacuum Packaging Machine.png`, tag: "Vacuum", num: "06", spec: "99.9% Vacuum" },
];

export default function ProductsGrid() {
  const navigate = useNavigate();
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("pg--in")),
      { threshold: 0.08 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-900: #111827;
          --blue-800: #0d1117;
          --blue-700: #1f2937;
          --blue-600: #1f2937;
          --blue-500: #111827;
          --blue-400: #1f2937;
          --blue-300: rgba(17,24,39,0.3);
          --blue-100: rgba(17,24,39,0.1);
          --blue-50:  rgba(17,24,39,0.05);
          --white: #ffffff;
          --gray-50: #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-400: #94a3b8;
          --gray-600: #475569;
          --gray-800: #1e293b;
          --accent: #f59e0b;
        }

        .pg-section {
          background: var(--white);
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* ── TOP BAND ── */
        .pg-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .pg-ticker {
          display: flex;
          gap: 64px;
          animation: ticker 28s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .pg-ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .pg-ticker-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--blue-500);
          flex-shrink: 0;
        }

        /* ── MAIN INNER ── */
        .pg-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 28px 96px;
        }

        /* ── HEADER BLOCK ── */
        .pg-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(20px);
        }

        .pg-header.pg--in {
          animation: pgRise 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes pgRise {
          to { opacity: 1; transform: translateY(0); }
        }

        .pg-header-left {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--blue-500);
        }

        .pg-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background: var(--blue-500);
        }

        .pg-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 800;
          color: var(--blue-900);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .pg-title span {
          color: var(--blue-500);
        }

        .pg-subtitle {
          font-size: 14px;
          color: var(--gray-600);
          margin: 4px 0 0;
          max-width: 460px;
          line-height: 1.7;
          font-weight: 400;
        }

        .pg-header-stats {
          display: flex;
          gap: 32px;
          flex-shrink: 0;
        }

        @media (max-width: 700px) {
          .pg-header { grid-template-columns: 1fr; }
          .pg-header-stats { display: none; }
        }

        .pg-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }

        .pg-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--blue-900);
          line-height: 1;
        }

        .pg-stat-num span {
          color: var(--blue-500);
        }

        .pg-stat-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gray-400);
        }

        /* ── FILTER TABS ── */
        .pg-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .pg-tab {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 4px;
          border: 1.5px solid var(--gray-200);
          background: var(--white);
          color: var(--gray-600);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pg-tab:hover, .pg-tab.active {
          background: var(--blue-900);
          border-color: var(--blue-900);
          color: var(--white);
        }

        /* ── GRID ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
        }

        @media (max-width: 900px) { .pg-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .pg-grid { grid-template-columns: 1fr; } }

        /* ── CARD ── */
        .pg-card {
          background: var(--white);
          display: flex;
          flex-direction: column;
          position: relative;
          opacity: 0;
          transform: translateY(24px);
          border-right: 1.5px solid var(--gray-200);
          border-bottom: 1.5px solid var(--gray-200);
          cursor: pointer;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }

        .pg-card:nth-child(3n) { border-right: none; }
        @media (max-width: 900px) { .pg-card:nth-child(2n) { border-right: none; } .pg-card:nth-child(3n) { border-right: 1.5px solid var(--gray-200); } }
        @media (max-width: 560px) { .pg-card { border-right: none; } }

        .pg-card.pg--in { animation: pgRise 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .pg-card:nth-child(2).pg--in { animation-delay: 0.07s; }
        .pg-card:nth-child(3).pg--in { animation-delay: 0.14s; }
        .pg-card:nth-child(4).pg--in { animation-delay: 0.18s; }
        .pg-card:nth-child(5).pg--in { animation-delay: 0.24s; }
        .pg-card:nth-child(6).pg--in { animation-delay: 0.30s; }

        .pg-card:hover {
          background: var(--blue-50);
          z-index: 2;
          box-shadow: 0 0 0 1.5px var(--blue-400) inset, 0 12px 40px rgba(37,99,235,0.08);
        }

        /* ── NUMBER BADGE ── */
        .pg-num {
          position: absolute;
          top: 16px;
          left: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--gray-400);
          background: var(--gray-100);
          padding: 3px 8px;
          border-radius: 3px;
          z-index: 2;
        }

        .pg-card:hover .pg-num {
          background: var(--blue-500);
          color: var(--white);
        }

        /* ── CERTIFICATION BADGE ── */
        .pg-cert {
          position: absolute;
          top: 16px;
          right: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--blue-600);
          border: 1.5px solid var(--blue-200, #bfdbfe);
          background: var(--blue-50);
          padding: 3px 8px;
          border-radius: 3px;
        }

        /* ── IMAGE ZONE ── */
        .pg-img-zone {
          position: relative;
          height: 200px;
          background: var(--gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow: hidden;
          border-bottom: 1.5px solid var(--gray-200);
          transition: background 0.2s ease;
        }

        .pg-card:hover .pg-img-zone {
          background: var(--blue-50);
          border-bottom-color: var(--blue-200, #bfdbfe);
        }

        /* blueprint grid bg */
        .pg-img-zone::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .pg-img {
          width: 68%;
          max-width: 180px;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
          filter: drop-shadow(0 8px 24px rgba(10,22,40,0.12));
        }

        .pg-card:hover .pg-img {
          transform: translateY(-8px) scale(1.05);
        }

        /* ── BODY ── */
        .pg-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .pg-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-500);
        }

        .pg-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--blue-900);
          margin: 0;
          line-height: 1.15;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        /* spec row */
        .pg-spec {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--gray-600);
          font-weight: 500;
        }

        .pg-spec-icon {
          width: 14px;
          height: 14px;
          color: var(--blue-400);
          flex-shrink: 0;
        }

        .pg-divider {
          height: 1.5px;
          background: var(--gray-100);
        }

        /* ── ACTIONS ── */
        .pg-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 2px;
        }

        .pg-btn-inquiry {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue-600);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
        }

        .pg-btn-inquiry:hover {
          background: var(--blue-500);
          gap: 12px;
        }

        .pg-btn-inquiry svg { width: 13px; height: 13px; }

        .pg-btn-detail {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--gray-400);
          background: none;
          border: 1.5px solid var(--gray-200);
          border-radius: 5px;
          padding: 9px 14px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .pg-btn-detail:hover {
          color: var(--blue-600);
          border-color: var(--blue-300);
          background: var(--blue-50);
          gap: 8px;
        }

        .pg-btn-detail svg { width: 12px; height: 12px; }

        /* ── FOOTER CTA ── */
        .pg-footer {
          margin-top: 48px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 32px 40px;
          background: var(--blue-900);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .pg-footer { grid-template-columns: 1fr; }
          .pg-footer-cta { width: 100%; justify-content: center; }
        }

        /* blueprint lines on footer */
        .pg-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .pg-footer::after {
          content: '';
          position: absolute;
          right: -60px;
          top: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .pg-footer-text {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pg-footer-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-400);
        }

        .pg-footer-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: var(--white);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pg-footer-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin: 0;
          font-weight: 400;
        }

        .pg-footer-cta {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--blue-500);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
        }

        .pg-footer-cta:hover { background: var(--blue-400); gap: 14px; }
        .pg-footer-cta svg { width: 14px; height: 14px; }
      `}</style>

      {/* Ticker band */}
      <div className="pg-topband">
        <div className="pg-ticker">
          {[...Array(2)].map((_, ri) =>
            ["ISO 9001 Certified", "Made in India", "50+ Installations", "12+ Cities Served", "Custom Engineering", "After-Sales Support", "99.2% Uptime Record", "PLC Controlled", "Stainless Steel Construction"].map((t, i) => (
              <span className="pg-ticker-item" key={`${ri}-${i}`}>
                <span className="pg-ticker-dot" />
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      <section className="pg-section">
        <div className="pg-inner">

          {/* Header */}
          <div className="pg-header" ref={headerRef}>
            <div className="pg-header-left">
              <span className="pg-eyebrow">Machine Catalogue</span>
              <h2 className="pg-title">Our <span>Product</span> Range</h2>
              <p className="pg-subtitle">
                Industrial-grade packaging machines engineered for high throughput, accuracy, and long-term reliability across food, pharma, and agro sectors.
              </p>
            </div>
            <div className="pg-header-stats">
              <div className="pg-stat">
                <span className="pg-stat-num">500<span>+</span></span>
                <span className="pg-stat-label">Installations</span>
              </div>
              <div className="pg-stat">
                <span className="pg-stat-num">40<span>+</span></span>
                <span className="pg-stat-label">Cities</span>
              </div>
              <div className="pg-stat">
                <span className="pg-stat-num">6</span>
                <span className="pg-stat-label">Machine Types</span>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="pg-tabs">
            {["All Machines", "Powder & Flour", "Granules", "Wrapping", "Sealing", "Vacuum"].map((t, i) => (
              <button key={i} className={`pg-tab${i === 0 ? " active" : ""}`}>{t}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="pg-grid">
            {products.map((item, i) => (
              <div
                key={i}
                className="pg-card"
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <span className="pg-num">{item.num}</span>
                <span className="pg-cert">ISO 9001</span>

                {/* Image */}
                <div className="pg-img-zone">
                  <img src={item.img} alt={item.name} className="pg-img" />
                </div>

                {/* Body */}
                <div className="pg-body">
                  <span className="pg-tag">{item.tag}</span>
                  <h3 className="pg-name">{item.name}</h3>

                  {/* Spec */}
                  <div className="pg-spec">
                    <svg className="pg-spec-icon" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="1" y="1" width="12" height="12" rx="2"/>
                      <path d="M4 7h6M7 4v6" strokeLinecap="round"/>
                    </svg>
                    {item.spec}
                  </div>

                  <div className="pg-divider" />

                  <div className="pg-actions">
                    <button
                      className="pg-btn-inquiry"
                      onClick={() => navigate("/contact", { state: { product: item.name } })}
                    >
                      Inquiry
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="pg-btn-detail">
                      Details
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="pg-footer">
            <div className="pg-footer-text">
              <span className="pg-footer-eyebrow">Custom Engineering</span>
              <p className="pg-footer-title">Need a Custom Solution?</p>
              <p className="pg-footer-sub">We design and build machines to your exact production specifications.</p>
            </div>
            <a href="/contact" className="pg-footer-cta">
              Request a Quote
              <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}