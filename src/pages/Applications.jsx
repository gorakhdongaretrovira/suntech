import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/products";

const APPLICATION_TYPES = ["Namkeen", "Spices", "Powder", "Grains", "Snacks"];

const TYPE_META = {
  Namkeen: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <path d="M9 9h.01M15 9h.01"/>
      </svg>
    ),
    label: "Namkeen",
    desc: "Savoury snack production lines",
    count_label: "Namkeen Machines",
  },
  Spices: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    label: "Spices",
    desc: "Masala & spice blending units",
    count_label: "Spice Machines",
  },
  Powder: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Powder",
    desc: "Fine powder filling & sealing",
    count_label: "Powder Machines",
  },
  Grains: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <ellipse cx="12" cy="12" rx="4" ry="7"/>
        <path d="M12 5C8 3 4 5 4 9M12 19c-4 2-8 0-8-4M12 5c4-2 8 0 8 4M12 19c4 2 8 0 8-4"/>
      </svg>
    ),
    label: "Grains",
    desc: "Grain & seed handling",
    count_label: "Grain Machines",
  },
  Snacks: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    label: "Snacks",
    desc: "Snack food processing",
    count_label: "Snack Machines",
  },
};

export default function Applications() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryType = searchParams.get("type") || "Namkeen";
  const [active, setActive] = useState(queryType);
  const prevType = useRef(queryType);

  useEffect(() => {
    if (queryType !== prevType.current) {
      prevType.current = queryType;
      setActive(queryType);
    } else {
      setActive(queryType);
    }
  }, [queryType]);

  const handleFilter = (type) => {
    setActive(type);
    navigate(`/applications?type=${encodeURIComponent(type)}`, { replace: true });
  };

  const filteredProducts = products.filter((p) =>
    Array.isArray(p.application) && p.application.includes(active)
  );

  const meta = TYPE_META[active] || {};

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
          --blue-200: rgba(17,24,39,0.2);
          --blue-100: rgba(17,24,39,0.1);
          --blue-50:  rgba(17,24,39,0.05);
          --white:    #ffffff;
          --gray-50:  #f8fafc;
          --gray-100: #f1f5f9;
          --gray-200: #e2e8f0;
          --gray-400: #94a3b8;
          --gray-600: #475569;
          --gray-800: #1e293b;
        }

        .app-page {
          font-family: 'Barlow', sans-serif;
          background: var(--white);
        }

        /* ── TICKER ── */
        .app-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .app-ticker {
          display: flex;
          gap: 64px;
          animation: appTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes appTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .app-ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .app-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-400);
          flex-shrink: 0;
        }

        /* ── HERO ── */
        .app-hero {
          position: relative;
          background: var(--blue-900);
          padding: 72px 28px 0;
          overflow: hidden;
        }

        /* blueprint grid */
        .app-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        /* radial glow */
        .app-hero::after {
          content: '';
          position: absolute;
          top: -100px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 65%);
          pointer-events: none;
        }

        .app-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
          padding-bottom: 0;
        }

        .app-hero-top {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 48px;
        }

        .app-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--blue-400);
        }

        .app-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--blue-400);
        }

        .app-hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 800;
          color: var(--white);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .app-hero-title span { color: var(--blue-400); }

        .app-hero-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          margin: 6px 0 0;
          max-width: 520px;
          line-height: 1.75;
          font-weight: 300;
        }

        /* ── FILTER TABS (attached to hero bottom) ── */
        .app-filter-band {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 0;
          border-top: 1.5px solid rgba(255,255,255,0.07);
          margin-top: 40px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .app-filter-band::-webkit-scrollbar { display: none; }

        .app-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 18px 28px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          border-bottom: 3px solid transparent;
          background: transparent;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }

        .app-filter-btn svg { opacity: 0.5; transition: opacity 0.2s; }

        .app-filter-btn:hover {
          color: rgba(255,255,255,0.75);
          background: rgba(255,255,255,0.04);
        }

        .app-filter-btn:hover svg { opacity: 0.8; }

        .app-filter-btn.active {
          color: var(--white);
          border-bottom-color: var(--blue-400);
          background: rgba(59,130,246,0.08);
        }

        .app-filter-btn.active svg { opacity: 1; color: var(--blue-400); }

        /* ── CONTENT AREA ── */
        .app-content {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 28px 96px;
        }

        /* ── META BAR ── */
        .app-meta-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 0 28px;
          border-bottom: 1.5px solid var(--gray-200);
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .app-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-600);
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          padding: 6px 14px;
          border-radius: 5px;
        }

        .app-meta-pill svg { color: var(--blue-500); }

        .app-meta-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gray-200);
          flex-shrink: 0;
        }

        .app-meta-count {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--gray-400);
          text-transform: uppercase;
        }

        .app-meta-count strong {
          color: var(--blue-900);
        }

        .app-meta-desc {
          font-size: 13px;
          color: var(--gray-400);
        }

        /* ── GRID ── */
        .app-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
        }

        @media (min-width: 600px) { .app-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .app-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CARD ── */
        .app-card {
          position: relative;
          background: var(--white);
          border-right: 1.5px solid var(--gray-200);
          border-bottom: 1.5px solid var(--gray-200);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
          animation: appCardIn 0.45s cubic-bezier(0.22,1,0.36,1) both;
          overflow: hidden;
        }

        .app-card:nth-child(3n) { border-right: none; }
        @media (max-width: 999px) { .app-card:nth-child(2n) { border-right: none; } .app-card:nth-child(3n) { border-right: 1.5px solid var(--gray-200); } }
        @media (max-width: 599px) { .app-card { border-right: none; } }

        @keyframes appCardIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .app-card:hover {
          background: var(--blue-50);
          z-index: 2;
          box-shadow: 0 0 0 1.5px var(--blue-400) inset, 0 12px 40px rgba(37,99,235,0.08);
        }

        /* top accent line */
        .app-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--blue-500);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
          z-index: 3;
        }

        .app-card:hover::before { transform: scaleX(1); }

        /* ── CARD IMAGE ── */
        .app-card-img {
          height: 200px;
          background: var(--gray-50);
          position: relative;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1.5px solid var(--gray-200);
          overflow: hidden;
          transition: background 0.2s;
        }

        /* blueprint grid on image bg */
        .app-card-img::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        .app-card:hover .app-card-img {
          background: var(--blue-50);
          border-bottom-color: var(--blue-200);
        }

        .app-card-img img {
          max-height: 100%; max-width: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
          filter: drop-shadow(0 8px 20px rgba(10,22,40,0.1));
        }

        .app-card:hover .app-card-img img {
          transform: translateY(-6px) scale(1.05);
        }

        /* category badge */
        .app-card-cat {
          position: absolute;
          top: 12px; right: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 9px;
          border-radius: 4px;
          background: var(--gray-100);
          color: var(--gray-400);
          border: 1px solid var(--gray-200);
          z-index: 2;
          transition: background 0.2s, color 0.2s;
        }

        .app-card:hover .app-card-cat {
          background: var(--blue-500);
          color: var(--white);
          border-color: var(--blue-500);
        }

        /* ── CARD BODY ── */
        .app-card-body {
          padding: 20px 22px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .app-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: var(--blue-900);
          margin: 0;
          line-height: 1.15;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        .app-card-tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .app-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 3px;
          background: var(--blue-50);
          color: var(--blue-600);
          border: 1px solid var(--blue-200);
        }

        .app-card-desc {
          font-size: 12.5px;
          color: var(--gray-600);
          line-height: 1.7;
          margin: 0;
          flex: 1;
          font-weight: 400;
        }

        /* card footer */
        .app-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1.5px solid var(--gray-100);
          margin-top: auto;
        }

        .app-card-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-500);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }

        .app-card:hover .app-card-link { gap: 10px; }

        .app-card-arrow {
          width: 28px; height: 28px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .app-card:hover .app-card-arrow {
          background: var(--blue-600);
          border-color: var(--blue-600);
          transform: translateX(2px);
        }

        .app-card:hover .app-card-arrow svg { stroke: var(--white); }

        /* ── EMPTY STATE ── */
        .app-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 80px 24px;
          color: var(--gray-400);
        }

        .app-empty-icon {
          width: 64px; height: 64px;
          margin: 0 auto 20px;
          border-radius: 10px;
          background: var(--gray-100);
          border: 1.5px solid var(--gray-200);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-empty-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          color: var(--gray-600);
        }

        .app-empty-sub {
          font-size: 13px;
          font-weight: 400;
          color: var(--gray-400);
        }
      `}</style>

      <main className="app-page">

        {/* Ticker */}
        <div className="app-topband">
          <div className="app-ticker">
            {[...Array(2)].map((_, ri) =>
              ["Food Industry", "Pharma Packaging", "Agro Products", "FMCG Lines", "Custom Solutions", "ISO 9001 Certified", "500+ Installations", "40+ Cities"].map((t, i) => (
                <span className="app-ticker-item" key={`${ri}-${i}`}>
                  <span className="app-ticker-dot" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Hero + Filter */}
        <section className="app-hero">
          <div className="app-hero-inner">
            <div className="app-hero-top">
              <span className="app-eyebrow">Industry Applications</span>
              <h1 className="app-hero-title">Machines for <span>Every</span> Industry</h1>
              <p className="app-hero-sub">
                Select your industry below to discover packaging machines engineered for your specific production requirements.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="app-filter-band">
              {APPLICATION_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilter(type)}
                  className={`app-filter-btn${active === type ? " active" : ""}`}
                >
                  {TYPE_META[type]?.icon}
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>                                      
        
        {/* Content */}
        <div className="app-content">

          {/* Meta Bar */}
          <div className="app-meta-bar">
            <span className="app-meta-pill">
              {meta.icon}
              {meta.label}
            </span>
            <span className="app-meta-sep" />
            <span className="app-meta-count">
              <strong>{filteredProducts.length}</strong> Machine{filteredProducts.length !== 1 ? "s" : ""} Found
            </span>
            {meta.desc && (
              <>
                <span className="app-meta-sep" />
                <span className="app-meta-desc">{meta.desc}</span>
              </>
            )}
          </div>

          {/* Grid */}
          <div className="app-grid">
            {filteredProducts.length === 0 ? (
              <div className="app-empty">
                <div className="app-empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28" style={{ color: "#94a3b8" }}>
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                </div>
                <div className="app-empty-title">No Machines Found</div>
                <div className="app-empty-sub">No products matched for "{active}" — try another category.</div>
              </div>
            ) : (
              filteredProducts.map((product, index) => (
                <Link
                  to={`/product/${encodeURIComponent(product.name)}`}
                  key={index}
                  className="app-card"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="app-card-img">
                    <span className="app-card-cat">{product.category}</span>
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="app-card-body">
                    <h3 className="app-card-name">{product.name}</h3>

                    {product.application?.length > 0 && (
                      <div className="app-card-tags">
                        {product.application.map(tag => (
                          <span key={tag} className="app-tag">{tag}</span>
                        ))}
                      </div>
                    )}

                    <p className="app-card-desc">
                      {product.description || product.shortDesc}
                    </p>

                    <div className="app-card-footer">
                      <span className="app-card-link">
                        View Details
                        <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                          <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                        </svg>
                      </span>
                      <span className="app-card-arrow">
                        <svg viewBox="0 0 13 13" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                          <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

        </div>
      </main>
    </>
  );
}