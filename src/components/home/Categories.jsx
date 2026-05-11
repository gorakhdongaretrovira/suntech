import { useEffect, useRef } from "react";

const categories = [
  {
    title: "Packaging Machine",
    desc: "High-performance packaging machines for various industries with precision and efficiency.",
    img: `${import.meta.env.BASE_URL}products/Packaging Machine.png`,
    tag: "Precision",
    number: "01",
  },
  {
    title: "Sealing Machine",
    desc: "Advanced sealing solutions ensuring durability and product safety in packaging.",
    img: `${import.meta.env.BASE_URL}products/Sealing Machine.png`,
    tag: "Durability",
    number: "02",
  },
  {
    title: "Wrapping Machine",
    desc: "Efficient wrapping machines designed for secure and protective packaging.",
    img: `${import.meta.env.BASE_URL}products/Wrapping Machine.png`,
    tag: "Efficiency",
    number: "03",
  },
];

export default function Categories() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("cat-card--in");
        });
      },
      { threshold: 0.12 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
          --border:     rgba(255,255,255,0.07);
        }

        .cat-section {
          background: var(--off-white);
          padding: 80px 0 96px;
          font-family: 'Barlow', sans-serif;
        }

        .cat-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── HEADER ── */
        .cat-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .cat-header-left { display: flex; flex-direction: column; gap: 12px; }

        .cat-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand);
        }
        .cat-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: var(--blue-brand); border-radius: 2px;
        }

        .cat-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 900;
          color: var(--blue-dark);
          line-height: 1.0;
          letter-spacing: -.01em;
          text-transform: uppercase;
          margin: 0;
        }
        .cat-title span { color: var(--blue-brand); }

        .cat-subtitle {
          font-size: 14px;
          color: var(--text-muted);
          max-width: 400px;
          line-height: 1.75;
          margin: 0;
          font-weight: 400;
        }

        .cat-header-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--blue-brand); color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          padding: 13px 24px; border-radius: 4px; border: none;
          cursor: pointer; text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(18,81,163,0.3);
          transition: background .2s, transform .15s, box-shadow .2s;
          flex-shrink: 0;
        }
        .cat-header-cta:hover {
          background: var(--blue-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(18,81,163,0.4);
        }

        /* ── GRID ── */
        .cat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .cat-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── CARD ── */
        .cat-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          transition: box-shadow .3s, transform .3s, border-color .3s;
          box-shadow: 0 2px 12px rgba(18,81,163,0.05);
          position: relative;
        }
        .cat-card.cat-card--in {
          animation: catCardIn .5s ease forwards;
        }
        .cat-card:nth-child(2).cat-card--in { animation-delay: .1s; }
        .cat-card:nth-child(3).cat-card--in { animation-delay: .2s; }
        @keyframes catCardIn {
          to { opacity: 1; transform: translateY(0); }
        }
        .cat-card:hover {
          box-shadow: 0 12px 40px rgba(18,81,163,0.13);
          transform: translateY(-4px);
          border-color: var(--blue-brand);
        }

        /* top bar */
        .cat-card-bar {
          height: 4px;
          background: var(--border);
          transition: background .3s;
        }
        .cat-card:hover .cat-card-bar { background: var(--blue-brand); }

        /* number badge */
        .cat-card-num {
          position: absolute;
          top: 16px; left: 16px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 800;
          letter-spacing: .15em; color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1.5px solid var(--border);
          border-radius: 4px; padding: 3px 8px;
          z-index: 2;
        }

        /* image area */
        .cat-img-wrap {
          height: 220px;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 32px 32px;
          background: var(--off-white);
          border-bottom: 1px solid var(--border);
          position: relative;
          transition: background .3s;
          overflow: hidden;
        }
        .cat-card:hover .cat-img-wrap { background: rgba(17,24,39,0.05); }

        .cat-img-num-bg {
          position: absolute;
          bottom: -8px; right: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 80px; font-weight: 900;
          color: rgba(18,81,163,0.05);
          line-height: 1; pointer-events: none; user-select: none;
          transition: color .3s;
        }
        .cat-card:hover .cat-img-num-bg { color: rgba(18,81,163,0.09); }

        .cat-img {
          width: 70%; max-width: 190px; height: 100%;
          object-fit: contain; position: relative; z-index: 1;
          transition: transform .45s cubic-bezier(.25,1,.5,1);
          filter: drop-shadow(0 8px 20px rgba(18,81,163,0.12));
        }
        .cat-card:hover .cat-img { transform: translateY(-6px) scale(1.04); }

        /* body */
        .cat-body { padding: 24px 24px 28px; }

        .cat-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--blue-brand);
          background: var(--blue-pale);
          border: 1px solid var(--border);
          border-radius: 3px; padding: 4px 10px;
          margin-bottom: 12px;
        }
        .cat-tag::before {
          content: ''; width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        .cat-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px; font-weight: 900;
          color: var(--blue-dark);
          margin: 0 0 10px;
          line-height: 1.1; text-transform: uppercase;
          letter-spacing: .02em;
        }

        .cat-card-desc {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7; margin: 0 0 22px;
          font-weight: 400;
        }

        .cat-card-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase;
          color: var(--blue-brand); text-decoration: none;
          transition: gap .2s, color .2s;
        }
        .cat-card-link:hover { gap: 14px; color: var(--blue-light); }
        .cat-card-link svg { width: 13px; height: 13px; flex-shrink: 0; }

        /* ── FOOTER STRIP ── */
        .cat-footer {
          margin-top: 48px;
          background: var(--blue-dark);
          border-radius: 10px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
          position: relative; overflow: hidden;
        }
        .cat-footer::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .cat-footer-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .cat-stats { display: flex; gap: 0; position: relative; z-index: 1; }

        .cat-stat {
          display: flex; flex-direction: column; gap: 3px;
          padding: 0 28px 0 0;
          border-right: 1px solid rgba(255,255,255,0.08);
          margin-right: 28px;
        }
        .cat-stat:last-child { border-right: none; margin-right: 0; }

        .cat-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 28px; font-weight: 900;
          color: var(--white); line-height: 1;
        }
        .cat-stat-num span { color: var(--accent); }

        .cat-stat-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: rgba(192,215,245,0.45);
        }

        .cat-footer-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--blue-brand); color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          padding: 13px 24px; border-radius: 4px; border: none;
          cursor: pointer; text-decoration: none; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transition: background .2s, transform .15s;
          position: relative; z-index: 1;
        }
        .cat-footer-cta:hover { background: var(--blue-light); transform: translateY(-2px); }
        .cat-footer-cta svg { width: 14px; height: 14px; flex-shrink: 0; }
      `}</style>

      <section className="cat-section">
        <div className="cat-inner">

          {/* Header */}
          <div className="cat-header">
            <div className="cat-header-left">
              <span className="cat-eyebrow">Product Range</span>
              <h2 className="cat-title">
                Our <span>Machine</span><br />Categories
              </h2>
              <p className="cat-subtitle">
                Industrial-grade machines engineered for precision, reliability,
                and long-term performance across industries.
              </p>
            </div>
            <a href="#" className="cat-header-cta">
              View All Products
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Cards */}
          <div className="cat-grid">
            {categories.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="cat-card"
              >
                <div className="cat-card-bar" />
                <span className="cat-card-num">{item.number}</span>

                <div className="cat-img-wrap">
                  <span className="cat-img-num-bg">{item.number}</span>
                  <img src={item.img} alt={item.title} className="cat-img" />
                </div>

                <div className="cat-body">
                  <span className="cat-tag">{item.tag}</span>
                  <h3 className="cat-card-title">{item.title}</h3>
                  <p className="cat-card-desc">{item.desc}</p>
                  <a href="#" className="cat-card-link">
                    Explore Range
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="cat-footer">
            <div className="cat-footer-top" />
            <div className="cat-stats">
              <div className="cat-stat">
                <span className="cat-stat-num">30<span>+</span></span>
                <span className="cat-stat-label">Models</span>
              </div>
              <div className="cat-stat">
                <span className="cat-stat-num">40<span>+</span></span>
                <span className="cat-stat-label">Cities</span>
              </div>
              <div className="cat-stat">
                <span className="cat-stat-num">20<span>yr</span></span>
                <span className="cat-stat-label">Experience</span>
              </div>
            </div>
            <a href="#" className="cat-footer-cta">
              View All Products
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}