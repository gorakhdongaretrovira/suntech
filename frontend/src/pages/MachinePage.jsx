import { Link, useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const machineData = {
  weighing: {
    title: "Weighing & Filling",
    titleItalic: "Machines",
    subtitle: "High-accuracy weighing and volumetric filling solutions for consistent, repeatable output on any production scale.",
    slugs: ["Liquid Filling Machine", "Collar Type VFFS Machine"],
  },
  packaging: {
    title: "Packaging",
    titleItalic: "Machines",
    subtitle: "Industrial-grade VFFS and pre-made pouch systems for powders, granules, solids and more.",
    slugs: [
      "Packaging Machine", "Packing Machine", "Powder Packaging Machine",
      "Pouch Packaging Machine", "Vacuum Packaging Machine",
      "Shrink Tunnel Packaging Machine", "Wrapping Machine",
      "Seeds Packaging Machine", "Scrubber Packaging Machine",
    ],
  },
  sealing: {
    title: "Sealing",
    titleItalic: "Machines",
    subtitle: "Durable continuous band and chamber-type sealing systems for airtight, tamper-evident closure.",
    slugs: ["Sealing Machine", "Nitrogen Flushing Machine"],
  },
  labelling: {
    title: "Labelling & Coding",
    titleItalic: "Machines",
    subtitle: "Precision self-adhesive labellers and high-speed inkjet coders for complete traceability.",
    slugs: ["Labelling Machine", "Coding Machine", "Coder Printer"],
  },
};

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="mp-card">
      <div className="mp-card-bar" />
      <div className="mp-card-img">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="mp-card-body">
        <div className="mp-card-tag">
          <span className="mp-tag-dot" />
          {product.specs?.["Machine Type"] || "Industrial Machine"}
        </div>
        <h3 className="mp-card-name">{product.name}</h3>
        <p className="mp-card-desc">{product.shortDesc}</p>
        <div className="mp-card-actions">
          <Link className="mp-btn-details" to={`/product/${product.name}`}>
            View Details
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="11" height="11">
              <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button className="mp-btn-inq" onClick={() => navigate("/contact", { state: { product: product.name } })}>
            Inquiry →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MachinePage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const cat = machineData[type?.toLowerCase()];

  if (!cat) {
    return (
      <div style={{ minHeight: "100vh", background: "#f0f5fc", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow', sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 48, margin: 0 }}>⚙️</p>
          <h2 style={{ marginTop: 16, fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, color: "#111827", textTransform: "uppercase" }}>
            Category Not Found
          </h2>
          <Link to="/products" style={{ marginTop: 20, display: "inline-block", background: "#1f2937", color: "#fff", padding: "12px 28px", borderRadius: 4, textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
            ← All Products
          </Link>
        </div>
      </div>
    );
  }

  const catProducts = cat.slugs.map(slug => products.find(p => p.name === slug)).filter(Boolean);
  const heroProduct = catProducts[0];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-dark:  #111827;
          --blue-brand: #111827;
          --blue-light: #1f2937;
          --blue-pale:  rgba(17,24,39,0.05);
          --accent:     #f5a623;
          --white:      #ffffff;
          --off-white:  #f0f5fc;
          --text:       #1a2d4a;
          --text-muted: #6e8db5;
          --border:     rgba(17,24,39,0.12);
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mp-page {
          background: var(--off-white);
          min-height: 100vh;
          font-family: 'Barlow', sans-serif;
          color: var(--text);
          padding-bottom: 80px;
        }

        /* ── BREADCRUMB ── */
        .mp-crumb {
          background: var(--blue-dark);
          padding: 12px 24px;
          display: flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
        }
        .mp-crumb a { color: rgba(192,215,245,0.6); text-decoration: none; transition: color .2s; }
        .mp-crumb a:hover { color: var(--accent); }
        .mp-crumb-sep { color: rgba(255,255,255,0.2); }
        .mp-crumb-cur { color: var(--accent); }

        /* ── HERO ── */
        .mp-hero {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 48px 24px;
        }
        .mp-hero-inner {
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr;
          gap: 40px; align-items: center;
        }
        @media (min-width: 780px) {
          .mp-hero-inner { grid-template-columns: 1fr 1fr; gap: 56px; }
        }

        .mp-hero-img {
          background: var(--off-white);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 32px; min-height: 240px; position: relative; overflow: hidden;
        }
        .mp-hero-img::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(18,81,163,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(18,81,163,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .mp-hero-img img {
          position: relative; z-index: 1;
          max-height: 220px; width: 100%; object-fit: contain;
          filter: drop-shadow(0 12px 24px rgba(18,81,163,0.12));
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .mp-hero-img:hover img { transform: scale(1.04); }

        .mp-hero-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1.5px solid var(--border);
          border-radius: 4px; padding: 5px 12px;
          margin-bottom: 16px;
        }
        .mp-hero-tag::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        .mp-hero-h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(32px, 5.5vw, 56px);
          font-weight: 900; color: var(--blue-dark);
          line-height: 1.0; letter-spacing: -.01em;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .mp-hero-h1 span { color: var(--blue-brand); display: block; }

        .mp-hero-sub {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.8; font-weight: 300; max-width: 420px;
          margin-bottom: 28px;
        }

        .mp-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .mp-btn-fill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          padding: 12px 24px; border-radius: 4px; border: none; cursor: pointer; text-decoration: none;
          box-shadow: 0 4px 16px rgba(18,81,163,0.3);
          transition: background .2s, transform .15s;
        }
        .mp-btn-fill:hover { background: var(--blue-light); transform: translateY(-2px); }
        .mp-btn-out {
          display: inline-flex; align-items: center;
          background: transparent; color: var(--text);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          padding: 12px 20px; border-radius: 4px;
          border: 1.5px solid var(--border); cursor: pointer; text-decoration: none;
          transition: border-color .2s, color .2s;
        }
        .mp-btn-out:hover { border-color: var(--blue-brand); color: var(--blue-brand); }

        /* ── SECTION ── */
        .mp-section {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }

        .mp-section-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
          border-bottom: 1px solid var(--border); padding-bottom: 16px;
        }
        .mp-section-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand);
          display: flex; align-items: center; gap: 8px;
        }
        .mp-section-label::before {
          content: ''; width: 24px; height: 2px;
          background: var(--blue-brand); border-radius: 2px;
        }
        .mp-section-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 26px; font-weight: 900;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: -.01em;
        }
        .mp-section-count {
          font-family: 'Barlow', sans-serif;
          font-size: 13px; color: var(--text-muted);
          font-weight: 400; margin-left: 4px;
        }

        /* ── CARDS GRID ── */
        .mp-grid {
          display: grid; grid-template-columns: 1fr; gap: 18px;
        }
        @media (min-width: 500px) { .mp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 800px) { .mp-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CARD ── */
        .mp-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px; overflow: hidden;
          display: flex; flex-direction: column;
          position: relative;
          box-shadow: 0 2px 10px rgba(18,81,163,0.04);
          transition: border-color .25s, box-shadow .3s, transform .3s;
        }
        .mp-card:hover {
          border-color: var(--blue-brand);
          box-shadow: 0 10px 36px rgba(18,81,163,0.12);
          transform: translateY(-4px);
        }
        .mp-card-bar {
          height: 3px; background: var(--border);
          transition: background .25s;
        }
        .mp-card:hover .mp-card-bar { background: var(--blue-brand); }

        .mp-card-img {
          height: 160px; background: var(--off-white);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; border-bottom: 1px solid var(--border);
        }
        .mp-card-img img {
          max-height: 120px; width: 100%; object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(18,81,163,0.1));
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .mp-card:hover .mp-card-img img { transform: scale(1.06) translateY(-3px); }

        .mp-card-body {
          padding: 16px 18px 18px;
          display: flex; flex-direction: column; flex: 1;
        }
        .mp-card-tag {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1px solid var(--border);
          border-radius: 3px; padding: 3px 8px;
          margin-bottom: 10px; width: fit-content;
        }
        .mp-tag-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }
        .mp-card-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 17px; font-weight: 900;
          color: var(--blue-dark); margin-bottom: 8px;
          text-transform: uppercase; letter-spacing: .02em; line-height: 1.1;
        }
        .mp-card-desc {
          font-size: 12.5px; color: var(--text-muted);
          line-height: 1.7; flex: 1; margin-bottom: 14px; font-weight: 400;
        }
        .mp-card-actions {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 12px; border-top: 1px solid var(--border); gap: 8px;
        }
        .mp-btn-details {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          color: var(--blue-brand); text-decoration: none;
          border: 1.5px solid var(--border);
          padding: 7px 12px; border-radius: 4px;
          transition: background .2s, color .2s, border-color .2s;
        }
        .mp-btn-details:hover {
          background: var(--blue-brand); color: #fff; border-color: var(--blue-brand);
        }
        .mp-btn-inq {
          display: inline-flex; align-items: center;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          color: #fff; background: var(--blue-brand);
          border: none; cursor: pointer;
          padding: 7px 14px; border-radius: 4px;
          transition: background .2s;
        }
        .mp-btn-inq:hover { background: var(--blue-light); }

        /* ── CTA BAND ── */
        .mp-cta {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }
        .mp-cta-inner {
          background: var(--blue-dark);
          border-radius: 10px; padding: 36px 40px;
          display: flex; flex-direction: column; gap: 20px;
          position: relative; overflow: hidden;
        }
        .mp-cta-inner::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        .mp-cta-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }
        @media (min-width: 600px) {
          .mp-cta-inner { flex-direction: row; align-items: center; justify-content: space-between; }
        }
        .mp-cta-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(20px, 3.5vw, 30px); font-weight: 900;
          color: #fff; text-transform: uppercase; line-height: 1.1;
          position: relative; z-index: 1;
        }
        .mp-cta-title span { color: var(--accent); }
        .mp-cta-sub {
          font-size: 13px; color: rgba(192,215,245,0.6);
          font-weight: 300; margin-top: 6px; position: relative; z-index: 1;
        }
        .mp-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: var(--blue-dark);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          padding: 14px 28px; border-radius: 4px; border: none; cursor: pointer;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
          position: relative; z-index: 1;
          transition: opacity .2s, transform .15s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .mp-cta-btn:hover { opacity: 0.9; transform: translateY(-2px); }
      `}</style>

      <div className="mp-page">

        {/* BREADCRUMB */}
        <nav className="mp-crumb">
          <a href="/">Home</a>
          <span className="mp-crumb-sep">›</span>
          <a href="/machines">Machines</a>
          <span className="mp-crumb-sep">›</span>
          <span className="mp-crumb-cur">{cat.title} {cat.titleItalic}</span>
        </nav>

        {/* HERO */}
        {heroProduct && (
          <div className="mp-hero">
            <div className="mp-hero-inner">
              <div className="mp-hero-img">
                <img src={heroProduct.image} alt={heroProduct.name} />
              </div>
              <div>
                <div className="mp-hero-tag">{cat.title} {cat.titleItalic}</div>
                <h1 className="mp-hero-h1">
                  {cat.title}
                  <span>{cat.titleItalic}</span>
                </h1>
                <p className="mp-hero-sub">{cat.subtitle}</p>
                <div className="mp-hero-btns">
                  <Link to="/contact" className="mp-btn-fill">
                    Get a Quote
                    <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                      <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link to="/machines" className="mp-btn-out">All Machines</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT GRID */}
        <section className="mp-section">
          <div className="mp-section-header">
            <span className="mp-section-label">Range</span>
            <h2 className="mp-section-title">
              All Machines
              <span className="mp-section-count">({catProducts.length})</span>
            </h2>
          </div>
          <div className="mp-grid">
            {catProducts.map(product => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mp-cta">
          <div className="mp-cta-inner">
            <div className="mp-cta-top" />
            <div>
              <p className="mp-cta-title">Need a <span>Custom</span> Specification?</p>
              <p className="mp-cta-sub">We engineer solutions to your exact production requirements.</p>
            </div>
            <Link to="/contact" className="mp-cta-btn">
              Request Custom Quote →
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}