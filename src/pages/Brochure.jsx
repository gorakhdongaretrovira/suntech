export default function Brochure() {
  return (
    <main style={{ minHeight: "100vh", background: "#f0f5fc", fontFamily: "'Barlow', sans-serif", margin: 0, padding: 0 }}>
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
        * { box-sizing: border-box; }

        .bro-page {
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 80px 24px;
          position: relative;
        }

        .bro-hero {
          background: var(--blue-dark);
          border-radius: 12px;
          padding: 56px 48px;
          text-align: center;
          width: 100%; max-width: 560px;
          position: relative; overflow: hidden;
          box-shadow: 0 16px 56px rgba(18,81,163,0.2);
          margin-bottom: 24px;
        }
        .bro-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        .bro-hero-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .bro-eyebrow {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--accent);
          background: rgba(245,166,35,0.12);
          border: 1.5px solid rgba(245,166,35,0.3);
          border-radius: 4px; padding: 5px 12px;
          margin-bottom: 20px; position: relative; z-index: 1;
        }
        .bro-eyebrow::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        .bro-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(44px, 10vw, 72px);
          font-weight: 900; color: #fff;
          text-transform: uppercase; letter-spacing: -.01em;
          line-height: 1.0; margin-bottom: 8px;
          position: relative; z-index: 1;
        }
        .bro-title span { color: var(--blue-light); display: block; }

        .bro-sub {
          font-size: 14px; color: rgba(192,215,245,0.65);
          font-weight: 300; line-height: 1.75;
          max-width: 360px; margin: 0 auto 36px;
          position: relative; z-index: 1;
        }

        .bro-download-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: var(--accent); color: var(--blue-dark);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 15px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
          padding: 16px 36px; border-radius: 4px; border: none; cursor: pointer;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(245,166,35,0.35);
          transition: opacity .2s, transform .15s;
          position: relative; z-index: 1;
        }
        .bro-download-btn:hover { opacity: .92; transform: translateY(-2px); }
        .bro-download-icon { transition: transform .3s; }
        .bro-download-btn:hover .bro-download-icon { transform: translateY(3px); }

        /* ── PREVIEW CARD ── */
        .bro-preview {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 28px 28px;
          width: 100%; max-width: 560px;
          position: relative;
          box-shadow: 0 4px 20px rgba(18,81,163,0.06);
        }
        .bro-preview-badge {
          position: absolute; top: -12px; right: 20px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 3px;
        }
        .bro-preview-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 18px; font-weight: 900;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: .03em; margin-bottom: 4px;
        }
        .bro-preview-meta {
          font-size: 13px; color: var(--text-muted); margin-bottom: 20px;
          font-weight: 400;
        }
        .bro-includes {
          border-top: 1px solid var(--border);
          padding-top: 16px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .bro-inc-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: var(--text);
        }
        .bro-inc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--blue-brand); flex-shrink: 0;
        }

        .bro-footnote {
          margin-top: 24px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: var(--text-muted); text-align: center;
        }
      `}</style>

      <div className="bro-page">

        <div className="bro-hero">
          <div className="bro-hero-top" />
          <div className="bro-eyebrow">Resources</div>
          <h1 className="bro-title">
            Our
            <span>Brochure</span>
          </h1>
          <p className="bro-sub">
            A complete overview of our packaging machines, technical specs, and installation capabilities.
          </p>
          <a href="/suntech_brochure.pdf" target="_blank" rel="noopener noreferrer" className="bro-download-btn">
            <svg className="bro-download-icon" viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M10 3v10M10 13l-3-3M10 13l3-3M3 16h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Brochure
          </a>
        </div>

        <div className="bro-preview">
          <div className="bro-preview-badge">PDF</div>
          <div className="bro-preview-title">Company Brochure 2024</div>
          <div className="bro-preview-meta">Packaging Machinery — Complete Product Catalogue</div>
          <div className="bro-includes">
            {[
              "Machine specifications & models",
              "Technical drawings & dimensions",
              "Pricing tiers & delivery terms",
              "After-sales support details",
            ].map((item, i) => (
              <div className="bro-inc-item" key={i}>
                <div className="bro-inc-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <p className="bro-footnote">— Available in English &amp; Hindi upon request</p>

      </div>
    </main>
  );
}