const projects = [
  {
    title: "Namkeen Packaging Setup",
    desc: "Complete automatic packaging line installed for a leading snack industry client — tailored for high-volume, airtight output.",
    tag: "Snack Industry",
    year: "2024",
    stat: "1200 packs/hr",
    num: "01",
  },
  {
    title: "Spices Packing Unit",
    desc: "High-speed powder packing solution with precision filling mechanisms, ensuring zero spillage and consistent weight accuracy.",
    tag: "Spice Industry",
    year: "2023",
    stat: "±0.5g precision",
    num: "02",
  },
  {
    title: "Flour Packaging Line",
    desc: "Multi-head weigher integration for a flour mill — fully automated from conveyor feed to sealed pouch output.",
    tag: "Flour Mill",
    year: "2024",
    stat: "2 tonne/day",
    num: "03",
  },
];

export default function Projects() {
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
          --border:     rgba(255,255,255,0.07);
        }
        * { box-sizing: border-box; }

        .proj-hero {
          background: var(--blue-dark);
          padding: 72px 24px 56px;
          position: relative; overflow: hidden;
        }
        .proj-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
        .proj-hero-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .proj-hero-inner { max-width: 1160px; margin: 0 auto; position: relative; z-index: 1; }

        .proj-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 20px;
        }
        .proj-eyebrow::before {
          content: ''; width: 28px; height: 2px;
          background: var(--accent); border-radius: 2px;
        }

        .proj-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(44px, 8vw, 80px);
          font-weight: 900; color: #fff;
          text-transform: uppercase; line-height: 1.0;
          letter-spacing: -.01em; margin-bottom: 16px;
        }
        .proj-title span { color: var(--blue-light); display: block; }

        .proj-subtitle {
          font-size: 15px; color: rgba(192,215,245,0.65);
          font-weight: 300; line-height: 1.7; max-width: 480px;
        }

        /* ── GRID ── */
        .proj-grid {
          padding: 48px 24px 64px;
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr; gap: 20px;
        }
        @media (min-width: 640px) {
          .proj-grid { grid-template-columns: 1fr 1fr; }
          .proj-card:first-child { grid-column: 1 / -1; }
        }
        @media (min-width: 900px) {
          .proj-grid { grid-template-columns: repeat(3, 1fr); }
          .proj-card:first-child { grid-column: auto; }
        }

        /* ── CARD ── */
        .proj-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px; padding: 28px 24px;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 10px rgba(17,24,39,0.04);
          transition: box-shadow .3s, transform .3s, border-color .3s;
        }
        .proj-card:hover {
          box-shadow: 0 12px 40px rgba(17,24,39,0.12);
          transform: translateY(-4px);
          border-color: var(--blue-brand);
        }
        .proj-card::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--blue-brand);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform .3s ease;
        }
        .proj-card:hover::before { transform: scaleY(1); }

        .proj-card-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 20px;
        }
        .proj-card-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1px solid var(--border);
          border-radius: 3px; padding: 4px 10px;
        }
        .proj-card-tag::before {
          content: ''; width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }
        .proj-card-year {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; color: var(--text-muted);
          letter-spacing: .08em;
        }

        .proj-card-num {
          position: absolute; bottom: 20px; right: 20px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 56px; font-weight: 900;
          color: rgba(17,24,39,0.05); line-height: 1;
          pointer-events: none; user-select: none;
        }

        .proj-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(20px, 4vw, 26px); font-weight: 900;
          color: var(--blue-dark); margin-bottom: 12px;
          text-transform: uppercase; letter-spacing: .02em; line-height: 1.1;
        }
        .proj-card-desc {
          font-size: 13.5px; color: var(--text-muted);
          line-height: 1.75; margin-bottom: 20px; font-weight: 400;
        }
        .proj-card-stat {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px; font-weight: 800;
          color: var(--blue-brand);
          border-top: 1.5px solid var(--border);
          padding-top: 14px; width: 100%;
          letter-spacing: .04em; text-transform: uppercase;
        }
        .proj-card-stat::before {
          content: '↗';
          color: var(--accent); font-size: 16px;
        }

        /* ── FOOTER NOTE ── */
        .proj-footer {
          max-width: 1160px; margin: 0 auto;
          padding: 0 24px 48px;
          display: flex; align-items: center; gap: 14px;
        }
        .proj-footer-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase;
          color: var(--text-muted);
        }
        .proj-footer-line { flex: 1; height: 1px; background: var(--border); }
      `}</style>

      <div className="proj-hero">
        <div className="proj-hero-bar" />
        <div className="proj-hero-inner">
          <div className="proj-eyebrow">Our Work</div>
          <h1 className="proj-title">
            Featured
            <span>Projects</span>
          </h1>
          <p className="proj-subtitle">
            Real installations. Proven results across India's food processing sector.
          </p>
        </div>
      </div>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <div className="proj-card" key={i}>
            <div className="proj-card-top">
              <span className="proj-card-tag">{p.tag}</span>
              <span className="proj-card-year">{p.year}</span>
            </div>
            <span className="proj-card-num">{p.num}</span>
            <h3 className="proj-card-title">{p.title}</h3>
            <p className="proj-card-desc">{p.desc}</p>
            <span className="proj-card-stat">{p.stat}</span>
          </div>
        ))}
      </div>

      <div className="proj-footer">
        <div className="proj-footer-line" />
        <span className="proj-footer-text">{projects.length} projects shown · More available on request</span>
      </div>
    </main>
  );
}