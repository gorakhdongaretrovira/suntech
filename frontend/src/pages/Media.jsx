import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: "Product Videos",
    desc: "Watch live demonstrations of our packaging machines in real production environments.",
    tag: "Video Library",
    link: "/media/videos",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Customer Stories",
    desc: "Real testimonials and case studies from 500+ clients across India and abroad.",
    tag: "Testimonials",
    link: "/media/stories",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Factory Tours",
    desc: "Go inside our MIDC manufacturing facility and see our quality-first process firsthand.",
    tag: "Behind the Scenes",
    link: "/media/factory",
  },
];

const STATS = [
  { num: "500+", label: "Installations" },
  { num: "40+", label: "Cities" },
  { num: "15+", label: "Years" },
  { num: "99%", label: "Uptime" },
];

export default function Media() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-900: #111827;
          --blue-800: #0d1117;
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
        }

        .media-page {
          font-family: 'Barlow', sans-serif;
          background: var(--white);
          min-height: 100vh;
        }

        /* ── TICKER ── */
        .media-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .media-ticker {
          display: flex;
          gap: 64px;
          animation: mediaTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes mediaTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .media-ticker-item {
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

        .media-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-400);
          flex-shrink: 0;
        }

        /* ── HERO ── */
        .media-hero {
          position: relative;
          background: var(--blue-900);
          overflow: hidden;
        }

        .media-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .media-hero::after {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%);
          pointer-events: none;
        }

        .media-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 28px 64px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 48px;
        }

        @media (max-width: 768px) {
          .media-hero-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .media-hero-left {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .media-eyebrow {
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

        .media-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--blue-400);
        }

        .media-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 800;
          color: var(--white);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .media-title span { color: var(--blue-400); }

        .media-subtitle {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          margin: 4px 0 0;
          max-width: 500px;
          line-height: 1.75;
          font-weight: 300;
        }

        .media-cta-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .media-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 6px;
          background: var(--blue-500);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          transition: background 0.2s, gap 0.2s, transform 0.2s;
        }

        .media-btn-primary:hover {
          background: var(--blue-400);
          gap: 14px;
          transform: translateY(-1px);
        }

        .media-btn-primary svg { flex-shrink: 0; }

        .media-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 6px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.18);
          transition: border-color 0.2s, color 0.2s, gap 0.2s;
        }

        .media-btn-secondary:hover {
          border-color: rgba(255,255,255,0.45);
          color: var(--white);
          gap: 14px;
        }

        /* stats on right */
        .media-hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          flex-shrink: 0;
        }

        .media-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .media-stat:first-child { border-radius: 8px 0 0 0; }
        .media-stat:nth-child(2) { border-radius: 0 8px 0 0; }
        .media-stat:nth-child(3) { border-radius: 0 0 0 8px; }
        .media-stat:last-child { border-radius: 0 0 8px 0; }

        .media-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: var(--white);
          line-height: 1;
        }

        .media-stat-num span { color: var(--blue-400); }

        .media-stat-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── DIVIDER ── */
        .media-section-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 1220px;
          margin: 56px auto 0;
          padding: 0 28px 40px;
        }

        .media-divider-line {
          flex: 1;
          height: 1.5px;
          background: var(--gray-200);
        }

        .media-divider-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gray-400);
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .media-divider-label::before,
        .media-divider-label::after {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-400);
        }

        /* ── FEATURES ── */
        .media-features-wrap {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 28px 96px;
        }

        .media-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
        }

        @media (min-width: 700px) {
          .media-features { grid-template-columns: repeat(3, 1fr); }
        }

        .media-feat-card {
          background: var(--white);
          border-right: 1.5px solid var(--gray-200);
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: background 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .media-feat-card:last-child { border-right: none; }

        @media (max-width: 699px) {
          .media-feat-card {
            border-right: none;
            border-bottom: 1.5px solid var(--gray-200);
          }
          .media-feat-card:last-child { border-bottom: none; }
        }

        .media-feat-card:hover {
          background: var(--blue-50);
          z-index: 2;
          box-shadow: 0 0 0 1.5px var(--blue-400) inset;
        }

        .media-feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--blue-500);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
        }

        .media-feat-card:hover::before { transform: scaleX(1); }

        .media-feat-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .media-feat-icon {
          width: 48px; height: 48px;
          border-radius: 8px;
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue-500);
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .media-feat-card:hover .media-feat-icon {
          background: var(--blue-600);
          border-color: var(--blue-600);
          color: var(--white);
        }

        .media-feat-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-500);
          background: var(--blue-50);
          border: 1px solid var(--blue-200);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .media-feat-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: var(--blue-900);
          text-transform: uppercase;
          letter-spacing: 0.3px;
          line-height: 1.1;
        }

        .media-feat-desc {
          font-size: 13px;
          font-weight: 400;
          color: var(--gray-600);
          line-height: 1.7;
          flex: 1;
        }

        .media-feat-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--blue-500);
          margin-top: 4px;
          transition: gap 0.2s;
        }

        .media-feat-card:hover .media-feat-link { gap: 10px; }

        /* ── BOTTOM CTA ── */
        .media-bottom-cta {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 28px 96px;
        }

        .media-cta-block {
          background: var(--blue-900);
          border-radius: 10px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .media-cta-block { grid-template-columns: 1fr; }
          .media-cta-block-btn { width: 100%; justify-content: center; }
        }

        .media-cta-block::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .media-cta-block::after {
          content: '';
          position: absolute;
          right: -60px; top: -60px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
        }

        .media-cta-text {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .media-cta-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-400);
        }

        .media-cta-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: var(--white);
          margin: 0;
          text-transform: uppercase;
        }

        .media-cta-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin: 0;
        }

        .media-cta-block-btn {
          position: relative; z-index: 1;
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
          text-decoration: none;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .media-cta-block-btn:hover {
          background: var(--blue-400);
          gap: 14px;
        }
      `}</style>

      <main className="media-page">

        {/* Ticker */}
        <div className="media-topband">
          <div className="media-ticker">
            {[...Array(2)].map((_, ri) =>
              ["Product Demos", "Factory Tours", "Customer Stories", "Installation Videos", "Machine Walkthroughs", "Live Demos Available", "ISO 9001 Certified"].map((t, i) => (
                <span className="media-ticker-item" key={`${ri}-${i}`}>
                  <span className="media-ticker-dot" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Hero */}
        <section className="media-hero">
          <div className="media-hero-inner">
            <div className="media-hero-left">
              <span className="media-eyebrow">Media Center</span>
              <h1 className="media-title">
                See Our <span>Machines</span><br/>In Action
              </h1>
              <p className="media-subtitle">
                Browse product videos, factory tours, and real customer stories that demonstrate our industrial packaging solutions in real environments.
              </p>
              <div className="media-cta-group">
                <Link to="/media/videos" className="media-btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Watch Videos
                </Link>
                <Link to="/applications" className="media-btn-secondary">
                  Browse Applications
                  <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="media-hero-stats">
              {STATS.map((s, i) => (
                <div className="media-stat" key={i}>
                  <span className="media-stat-num">{s.num.replace(/[+%]/g, '')}<span>{s.num.match(/[+%]/)?.[0]}</span></span>
                  <span className="media-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="media-section-divider">
          <div className="media-divider-line" />
          <span className="media-divider-label">What You'll Find</span>
          <div className="media-divider-line" />
        </div>

        {/* Feature Cards */}
        <div className="media-features-wrap">
          <div className="media-features">
            {FEATURES.map((f, i) => (
              <Link to={f.link} className="media-feat-card" key={i}>
                <div className="media-feat-top">
                  <div className="media-feat-icon">{f.icon}</div>
                  <span className="media-feat-tag">{f.tag}</span>
                </div>
                <div className="media-feat-title">{f.title}</div>
                <div className="media-feat-desc">{f.desc}</div>
                <span className="media-feat-link">
                  Explore
                  <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="media-bottom-cta">
          <div className="media-cta-block">
            <div className="media-cta-text">
              <span className="media-cta-eyebrow">Book a Demo</span>
              <p className="media-cta-title">Want a Live Machine Demo?</p>
              <p className="media-cta-sub">Visit our factory or schedule a video walkthrough with our engineers.</p>
            </div>
            <Link to="/contact" className="media-cta-block-btn">
              Schedule Demo
              <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
              </svg>
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}