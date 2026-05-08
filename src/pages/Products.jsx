import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const SPECS = {
  "Collar Type VFFS Machine": {
    category: "Filling & Packaging",
    desc: "Vertical Form-Fill-Seal with collar former for free-flow powders, granules & seeds. Engineered for consistent pouch quality at high throughput.",
    specs: [
      { label: "Machine Type",     value: "Collar Type Vertical Form Fill Seal (VFFS)" },
      { label: "Material",         value: "SS 304 contact parts, MS frame" },
      { label: "Automation Grade", value: "Fully Automatic" },
      { label: "Power Source",     value: "Electric" },
      { label: "Voltage",          value: "380V / 50 Hz, Three Phase" },
      { label: "Motor Power",      value: "2.5 HP" },
      { label: "Pouch Size",       value: "50 g – 5 kg" },
      { label: "Speed",            value: "20–40 pouches/min" },
    ],
    features: [
      "PLC-controlled operation with HMI touchscreen",
      "Servo-driven film pulling for precision sealing",
      "Adjustable collar former for multiple pouch sizes",
      "Auto fault detection & alarm system",
      "Easy toolless changeover in under 15 minutes",
      "Hygienic SS 304 product contact surfaces",
    ],
    support: [
      { title: "Installation",  body: "Our engineers handle complete on-site installation, commissioning, and operator training." },
      { title: "Warranty",      body: "12-month comprehensive warranty on all mechanical and electrical components." },
      { title: "Spare Parts",   body: "Fast-ship spare parts with nationwide distribution network." },
      { title: "AMC Available", body: "Annual maintenance contracts for scheduled servicing and priority support." },
    ],
  },
};

const DEFAULT_SPECS = {
  category: "Industrial Machinery",
  desc: "Precision-engineered machine for consistent, high-volume production output. Built to international quality standards.",
  specs: [
    { label: "Automation Grade", value: "Fully Automatic" },
    { label: "Power Source",     value: "Electric" },
    { label: "Frame Material",   value: "MS / SS 304" },
  ],
  features: [
    "Heavy-duty industrial construction",
    "Easy operator interface",
    "Low maintenance design",
    "Available in custom configurations",
  ],
  support: [
    { title: "Installation", body: "On-site installation and commissioning by trained engineers." },
    { title: "Warranty",     body: "12-month warranty on all components." },
  ],
};

const TABS = ["Specs", "Features", "Support"];

export default function ProductDetail() {
  const { name }   = useParams();
  const navigate   = useNavigate();
  const [tab, setTab]         = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const productName = decodeURIComponent(name || "");
  const product     = products.find(p => p.name === productName) || { name: productName, image: "" };
  const data        = SPECS[productName] || DEFAULT_SPECS;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --gd:    #111827;
          --gm:    #1f2937;
          --gl:    #f3f4f6;
          --ac:    #f5a623;
          --ac-bg: rgba(245,166,35,0.08);
          --ac-bd: rgba(245,166,35,0.25);
          --wh:    #ffffff;
          --bg:    #f9fafb;
          --tx:    #111827;
          --mu:    #6b7280;
          --bo:    #e5e7eb;
          --rad:   10px;
          --nav:   64px;
          --max:   1100px;
          --px:    20px;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pd {
          background: var(--bg);
          min-height: 100vh;
          font-family: 'Barlow', sans-serif;
          color: var(--tx);
          padding-top: var(--nav);
          padding-bottom: 80px;
        }

        /* ── BREADCRUMB ── */
        .pd-crumb {
          max-width: var(--max); margin: 0 auto;
          padding: 16px var(--px) 0;
          display: flex; align-items: center; gap: 8px;
          font-size: 11px; color: var(--mu);
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
        }
        .pd-crumb a { color: var(--mu); text-decoration: none; transition: color .2s; }
        .pd-crumb a:hover { color: var(--gd); }
        .pd-crumb-sep { opacity: .4; }
        .pd-crumb-cur { color: var(--ac); }

        /* ── HERO GRID ── */
        .pd-hero {
          max-width: var(--max); margin: 0 auto;
          padding: 28px var(--px) 0;
          display: grid; grid-template-columns: 1fr; gap: 32px;
        }
        @media (min-width: 820px) {
          .pd-hero { grid-template-columns: 1fr 1fr; align-items: start; gap: 56px; padding-top: 36px; }
        }

        /* IMAGE PANEL */
        .pd-img-panel { position: relative; }
        @media (min-width: 820px) {
          .pd-img-panel { position: sticky; top: calc(var(--nav) + 20px); }
        }

        .pd-img-main {
          background: var(--wh);
          border: 1.5px solid var(--bo);
          border-radius: var(--rad);
          overflow: hidden; aspect-ratio: 1/1;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .pd-img-main::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 65% at 50% 45%, rgba(255,255,255,0.7) 0%, transparent 100%);
          pointer-events: none; z-index: 1;
        }
        .pd-img-main img {
          width: 78%; height: 78%; object-fit: contain;
          position: relative; z-index: 2;
          filter: drop-shadow(0 14px 28px rgba(0,0,0,0.12));
          transition: transform .5s cubic-bezier(.22,1,.36,1), opacity .4s ease;
          opacity: 0;
        }
        .pd-img-main img.loaded { opacity: 1; transform: scale(1); }
        .pd-img-main img:not(.loaded) { transform: scale(0.94); }

        /* category badge */
        .pd-cat-badge {
          position: absolute; top: 14px; left: 14px; z-index: 3;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: var(--gd);
          background: var(--gl);
          border: 1px solid var(--bo);
          border-radius: 4px; padding: 5px 11px;
        }

        /* INFO PANEL */
        .pd-info { display: flex; flex-direction: column; gap: 0; }

        .pd-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(28px, 6vw, 46px); font-weight: 900;
          color: var(--gd); line-height: 1.0;
          letter-spacing: -.01em; text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pd-desc {
          font-size: 14px; line-height: 1.8;
          color: var(--mu); font-weight: 300;
          max-width: 480px; margin-bottom: 24px;
        }

        /* quick spec pills */
        .pd-quick { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
        .pd-qpill {
          display: flex; align-items: center; gap: 6px;
          background: var(--wh);
          border: 1.5px solid var(--bo);
          border-radius: 6px; padding: 7px 12px;
          font-size: 11.5px; color: var(--mu); font-weight: 400;
        }
        .pd-qpill-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--ac); flex-shrink: 0;
        }

        /* CTAs */
        .pd-ctas {
          display: flex; flex-direction: column;
          gap: 10px; margin-bottom: 28px;
        }
        @media (min-width: 400px) { .pd-ctas { flex-direction: row; flex-wrap: wrap; } }

        .pd-btn-p {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          background: var(--gd); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 6px; border: none;
          cursor: pointer; flex: 1; min-width: 140px;
          transition: background .2s, transform .18s, box-shadow .2s;
          box-shadow: 0 4px 18px rgba(17,24,39,0.2);
          text-decoration: none;
        }
        .pd-btn-p:hover { background: var(--gm); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(17,24,39,0.28); }

        .pd-btn-s {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px;
          background: transparent; color: var(--mu);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: .08em; text-transform: uppercase;
          padding: 14px 22px; border-radius: 6px;
          border: 1.5px solid var(--bo); cursor: pointer;
          transition: all .2s; text-decoration: none;
        }
        .pd-btn-s:hover { border-color: var(--gd); color: var(--gd); background: var(--gl); }

        .pd-btn-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 6px;
          border: 1.5px solid var(--bo); background: var(--wh);
          cursor: pointer; transition: all .2s; flex-shrink: 0; color: var(--mu);
        }
        .pd-btn-ico:hover { border-color: var(--ac); color: var(--ac); background: var(--ac-bg); }

        /* trust chips */
        .pd-trust {
          display: flex; flex-wrap: wrap; gap: 14px;
          padding-top: 22px; border-top: 1px solid var(--bo);
        }
        .pd-trust-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 11px; color: var(--mu); font-weight: 400;
        }
        .pd-trust-ico {
          width: 28px; height: 28px; border-radius: 6px;
          background: var(--gl);
          border: 1px solid var(--bo);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 13px;
        }

        /* ── TABS ── */
        .pd-tabs-wrap {
          max-width: var(--max); margin: 44px auto 0; padding: 0 var(--px);
        }
        .pd-tabs {
          display: flex; border-bottom: 1.5px solid var(--bo);
          overflow-x: auto; scrollbar-width: none;
        }
        .pd-tabs::-webkit-scrollbar { display: none; }

        .pd-tab {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          padding: 13px 22px; border: none; background: transparent;
          color: var(--mu); cursor: pointer; white-space: nowrap;
          position: relative; transition: color .18s;
        }
        .pd-tab::after {
          content: ''; position: absolute;
          bottom: -1.5px; left: 0; right: 0; height: 2px;
          background: var(--ac); transform: scaleX(0);
          transition: transform .22s cubic-bezier(.22,1,.36,1);
        }
        .pd-tab:hover { color: var(--gd); }
        .pd-tab.on { color: var(--gd); }
        .pd-tab.on::after { transform: scaleX(1); }

        .pd-tab-body { padding: 28px 0 0; }

        /* SPECS TABLE */
        .pd-spec-table {
          width: 100%; border-collapse: separate; border-spacing: 0;
          background: var(--wh);
          border: 1.5px solid var(--bo); border-radius: var(--rad); overflow: hidden;
        }
        .pd-spec-table tr { border-bottom: 1px solid var(--bo); transition: background .15s; }
        .pd-spec-table tr:last-child { border-bottom: none; }
        .pd-spec-table tr:hover { background: var(--gl); }
        .pd-spec-table td { padding: 13px 18px; font-size: 13px; vertical-align: middle; }
        .pd-spec-table td:first-child { color: var(--mu); font-weight: 400; width: 42%; border-right: 1px solid var(--bo); }
        .pd-spec-table td:last-child { color: var(--gd); font-weight: 600; }

        /* FEATURES */
        .pd-features { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 560px) { .pd-features { grid-template-columns: 1fr 1fr; } }

        .pd-feat-item {
          display: flex; align-items: flex-start; gap: 12px;
          background: var(--wh); border: 1.5px solid var(--bo);
          border-radius: var(--rad); padding: 16px 18px;
          transition: border-color .22s, transform .22s;
        }
        .pd-feat-item:hover { border-color: var(--gd); transform: translateY(-2px); }
        .pd-feat-ico {
          width: 32px; height: 32px; flex-shrink: 0;
          background: var(--gl); border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          color: var(--gd); margin-top: 1px;
        }
        .pd-feat-text { font-size: 13px; color: var(--mu); line-height: 1.65; font-weight: 300; }

        /* SUPPORT */
        .pd-support { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .pd-support { grid-template-columns: 1fr 1fr; } }

        .pd-supp-card {
          background: var(--wh); border: 1.5px solid var(--bo);
          border-radius: var(--rad); padding: 20px;
          border-top: 3px solid var(--ac);
          transition: box-shadow .25s;
        }
        .pd-supp-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,.07); }
        .pd-supp-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 16px; font-weight: 800;
          color: var(--gd); margin-bottom: 8px;
          text-transform: uppercase; letter-spacing: .04em;
        }
        .pd-supp-body { font-size: 13px; color: var(--mu); line-height: 1.72; font-weight: 300; }

        /* BOTTOM CTA */
        .pd-cta { max-width: var(--max); margin: 44px auto 0; padding: 0 var(--px); }
        .pd-cta-inner {
          background: var(--gd); border-radius: var(--rad);
          padding: 36px 28px;
          display: flex; flex-direction: column; gap: 20px;
          position: relative; overflow: hidden;
        }
        .pd-cta-inner::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .pd-cta-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--ac); }
        @media (min-width: 600px) {
          .pd-cta-inner { flex-direction: row; align-items: center; justify-content: space-between; padding: 36px 40px; }
        }
        .pd-cta-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(20px, 3.5vw, 28px); font-weight: 900;
          color: #fff; text-transform: uppercase; line-height: 1.1;
          position: relative; z-index: 1;
        }
        .pd-cta-title span { color: var(--ac); }
        .pd-cta-sub { font-size: 13px; color: rgba(255,255,255,.5); font-weight: 300; margin-top: 5px; position: relative; z-index: 1; }
        .pd-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--ac); color: var(--gd);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 5px; border: none;
          cursor: pointer; text-decoration: none; white-space: nowrap; flex-shrink: 0;
          position: relative; z-index: 1;
          transition: opacity .18s, transform .18s;
          box-shadow: 0 4px 16px rgba(0,0,0,.3);
        }
        .pd-cta-btn:hover { opacity: .9; transform: translateY(-2px); }
      `}</style>

      <div className="pd">

        {/* BREADCRUMB */}
        <nav className="pd-crumb">
          <a href="/">Home</a>
          <span className="pd-crumb-sep">›</span>
          <a href="/machines">Machines</a>
          <span className="pd-crumb-sep">›</span>
          <span className="pd-crumb-cur">{product.name}</span>
        </nav>

        {/* HERO */}
        <div className="pd-hero">

          {/* Image */}
          <div className="pd-img-panel">
            <div className="pd-img-main">
              <span className="pd-cat-badge">{data.category}</span>
              <img
                src={product.image} alt={product.name}
                className={imgLoaded ? "loaded" : ""}
                onLoad={() => setImgLoaded(true)}
              />
            </div>
          </div>

          {/* Info */}
          <div className="pd-info">
            <h1 className="pd-name">{product.name}</h1>
            <p className="pd-desc">{data.desc}</p>

            <div className="pd-quick">
              {(data.specs || []).slice(0, 3).map((s, i) => (
                <div className="pd-qpill" key={i}>
                  <div className="pd-qpill-dot" />
                  <strong style={{ fontSize: 11, color: "var(--gd)", marginRight: 3 }}>{s.label}:</strong>
                  {s.value}
                </div>
              ))}
            </div>

            <div className="pd-ctas">
              <button className="pd-btn-p" onClick={() => navigate("/contact", { state: { product: product.name } })}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Get a Quote
              </button>
              <button className="pd-btn-s">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M3 6l4 4 4-4M2 12h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Brochure
              </button>
              <button className="pd-btn-ico" title="Call us">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </button>
            </div>

            <div className="pd-trust">
              {[
                { icon: "✓", text: "12-Month Warranty" },
                { icon: "⚡", text: "Fast Delivery" },
                { icon: "🔧", text: "On-site Installation" },
                { icon: "♻", text: "AMC Available" },
              ].map((t, i) => (
                <div className="pd-trust-item" key={i}>
                  <div className="pd-trust-ico">{t.icon}</div>
                  {t.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="pd-tabs-wrap">
          <div className="pd-tabs">
            {TABS.map((label, i) => (
              <button key={i} className={`pd-tab${tab === i ? " on" : ""}`} onClick={() => setTab(i)}>
                {label}
              </button>
            ))}
          </div>

          <div className="pd-tab-body">
            {tab === 0 && (
              <table className="pd-spec-table">
                <tbody>
                  {(data.specs || []).map((s, i) => (
                    <tr key={i}><td>{s.label}</td><td>{s.value}</td></tr>
                  ))}
                </tbody>
              </table>
            )}
            {tab === 1 && (
              <div className="pd-features">
                {(data.features || []).map((f, i) => (
                  <div className="pd-feat-item" key={i}>
                    <div className="pd-feat-ico">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="pd-feat-text">{f}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === 2 && (
              <div className="pd-support">
                {(data.support || []).map((s, i) => (
                  <div className="pd-supp-card" key={i}>
                    <p className="pd-supp-title">{s.title}</p>
                    <p className="pd-supp-body">{s.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="pd-cta">
          <div className="pd-cta-inner">
            <div className="pd-cta-bar" />
            <div>
              <p className="pd-cta-title">Ready to order or need a <span>custom build?</span></p>
              <p className="pd-cta-sub">Our engineers will configure the right machine for your production line.</p>
            </div>
            <a href="/contact" className="pd-cta-btn">
              Request a Quote →
            </a>
          </div>
        </div>

      </div>
    </>
  );
}