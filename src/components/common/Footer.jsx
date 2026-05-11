import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const TICKER_ITEMS = [
  "ISO 9001 Certified","Made in India","500+ Installations",
  "40+ Cities","Custom Engineering","After-Sales Support",
  "PLC Controlled","Stainless Steel Build","1-Year Warranty",
];

const NAV_LINKS = [
  { label: "Home",       to: "/" },
  { label: "About Us",   to: "/about" },
  { label: "Products",   to: "/products" },
  { label: "Projects",   to: "/projects" },
  { label: "Contact",    to: "/contact" },
];

const MACHINE_LINKS = [
  { label: "Atta Packaging",    to: "/machines/atta" },
  { label: "Granules Packing",  to: "/machines/granules" },
  { label: "Flow Wrapping",     to: "/machines/flow-wrap" },
  { label: "Masala Packaging",  to: "/machines/masala" },
  { label: "Vacuum Packaging",  to: "/machines/vacuum" },
];

const SERVICE_LINKS = [
  { label: "Installation", to: "/services/installation" },
  { label: "AMC / Service", to: "/services/amc" },
  { label: "Spare Parts",  to: "/services/spares" },
  { label: "Book a Demo",  to: "/services/demo" },
  { label: "Brochure",     to: "/brochure" },
];

export default function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        /* ── TOKENS ── */
        :root {
          --ft-bg:        #111827;
          --ft-bg-dark:   #0d1117;
          --ft-bg-card:   #1f2937;
          --ft-border:    rgba(255,255,255,0.07);
          --ft-border-s:  rgba(255,255,255,0.04);
          --ft-text:      rgba(255,255,255,0.85);
          --ft-muted:     rgba(255,255,255,0.38);
          --ft-dim:       rgba(255,255,255,0.18);
          --ft-orange:    #f5a623;
          --ft-orange-dk: #c27d10;
          --ft-orange-bg: rgba(245,166,35,0.10);
          --ft-orange-bd: rgba(245,166,35,0.25);
        }

        /* ── BASE ── */
        .ft {
          font-family: 'Barlow', sans-serif;
          background: var(--ft-bg);
          color: var(--ft-text);
          position: relative;
          overflow: hidden;
        }

        /* subtle grid */
        .ft::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none; z-index: 0;
        }

        .ft-z { position: relative; z-index: 1; }

        /* ── TICKER ── */
        .ft-ticker-wrap {
          overflow: hidden;
          border-bottom: 1px solid var(--ft-border);
          background: var(--ft-bg-dark);
        }
        .ft-ticker-track {
          display: flex; width: max-content;
          animation: ft-tick 30s linear infinite;
        }
        @keyframes ft-tick {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ft-ticker-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 11px 24px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--ft-muted); white-space: nowrap;
        }
        .ft-ticker-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--ft-orange); flex-shrink: 0;
        }

        /* ── INNER WRAP ── */
        .ft-inner {
          max-width: 1220px; margin: 0 auto;
          padding: 0 20px;
        }

        /* ── TOP ORANGE BAR ── */
        .ft-top-bar {
          height: 3px;
          background: var(--ft-orange);
        }

        /* ── BRAND SECTION ── */
        .ft-brand {
          padding: 36px 0 28px;
          border-bottom: 1px solid var(--ft-border);
          display: flex; flex-direction: column; gap: 24px;
        }
        @media (min-width: 768px) {
          .ft-brand {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 48px;
            padding: 48px 0 36px;
          }
        }

        /* ══════════════════════════════════════════
           FOOTER VIDEO LOGO  —  mobile-first
        ══════════════════════════════════════════ */
        .ft-logo {
          display: inline-flex; align-items: center;
          text-decoration: none; width: fit-content;
        }

        .ft-logo-box {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          /* mobile size */
          height: 52px;
          padding: 0;
          overflow: hidden;
          border-radius: 10px;

          /* dark-bg glass look */
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(245,166,35,0.22);

          box-shadow:
            0 0 0 0 rgba(245,166,35,0),
            3px 3px 0px var(--ft-orange),
            0 6px 24px rgba(0,0,0,0.45);

          transition:
            transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .ft-logo-box:hover {
          transform: translate(-2px, -2px);
          background: rgba(245,166,35,0.06);
          box-shadow:
            0 0 0 1px rgba(245,166,35,0.35),
            5px 5px 0px var(--ft-orange),
            0 10px 36px rgba(245,166,35,0.15);
        }

        /* glow overlay on hover */
        .ft-logo-box::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          background: radial-gradient(ellipse at 50% 50%, rgba(245,166,35,0.10) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .ft-logo-box:hover::after { opacity: 1; }

        /* VIDEO */
        .ft-logo-video {
          display: block;
          height: 52px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
          border-radius: inherit;
        }

        /* Desktop */
        @media (min-width: 768px) {
          .ft-logo-box {
            height: 62px;
            border-radius: 12px;
          }
          .ft-logo-video {
            height: 62px;
            max-width: 240px;
          }
        }

        .ft-desc {
          font-size: 13px; font-weight: 300;
          color: var(--ft-muted); line-height: 1.75;
          margin: 16px 0 0; max-width: 320px;
        }

        /* cert badges */
        .ft-certs { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
        .ft-cert {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--ft-orange);
          background: var(--ft-orange-bg);
          border: 1px solid var(--ft-orange-bd);
          padding: 4px 10px; border-radius: 3px;
        }

        /* stats */
        .ft-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 24px;
        }
        @media (min-width: 480px) {
          .ft-stats { grid-template-columns: repeat(4, auto); gap: 0 32px; }
        }
        .ft-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 34px; font-weight: 900;
          color: #fff; line-height: 1; display: block;
        }
        .ft-stat-num span { color: var(--ft-orange); }
        .ft-stat-lbl {
          font-size: 9px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--ft-muted); margin-top: 4px; display: block;
        }

        /* ── LINKS GRID ── */
        .ft-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 20px;
          padding: 32px 0 28px;
          border-bottom: 1px solid var(--ft-border);
        }
        @media (min-width: 640px) {
          .ft-links-grid { grid-template-columns: repeat(4, 1fr); gap: 36px 28px; }
        }

        .ft-col-head {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .3em; text-transform: uppercase;
          color: var(--ft-orange);
          margin-bottom: 16px;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-col-head::after {
          content: ''; flex: 1; height: 1.5px; max-width: 24px;
          background: var(--ft-orange-bd);
        }

        .ft-col-links {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .ft-col-links a {
          font-size: 13px; font-weight: 400;
          color: var(--ft-muted); text-decoration: none;
          display: inline-flex; align-items: center;
          transition: color .2s, padding-left .2s;
          letter-spacing: .01em;
          position: relative; padding-left: 0;
        }
        .ft-col-links a::before {
          content: '';
          display: inline-block; width: 0; height: 1.5px;
          background: var(--ft-orange);
          transition: width .22s, margin-right .22s;
          margin-right: 0; vertical-align: middle;
        }
        .ft-col-links a:hover { color: rgba(255,255,255,.88); }
        .ft-col-links a:hover::before { width: 10px; margin-right: 7px; }

        /* contact col full-width on mobile */
        .ft-contact-col { grid-column: 1 / -1; }
        @media (min-width: 640px) { .ft-contact-col { grid-column: auto; } }

        .ft-contact-list {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .ft-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 12.5px; font-weight: 400;
          color: var(--ft-muted); line-height: 1.5;
          transition: color .2s;
        }
        .ft-contact-item:hover { color: rgba(255,255,255,.75); }
        .ft-contact-ico {
          width: 30px; height: 30px; flex-shrink: 0;
          border-radius: 6px;
          background: var(--ft-bg-card);
          border: 1px solid rgba(245,166,35,0.18);
          display: flex; align-items: center; justify-content: center;
          margin-top: -1px;
          transition: background .2s, border-color .2s;
        }
        .ft-contact-item:hover .ft-contact-ico {
          background: var(--ft-orange-bg);
          border-color: var(--ft-orange-bd);
        }
        .ft-contact-ico svg {
          width: 13px; height: 13px;
          stroke: var(--ft-orange); fill: none;
          stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          display: flex; flex-direction: column;
          align-items: center; gap: 12px;
          padding: 18px 0 24px; text-align: center;
        }
        @media (min-width: 640px) {
          .ft-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .ft-copy {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--ft-dim);
        }

        .ft-bottom-right {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          justify-content: center;
        }
        @media (min-width: 640px) { .ft-bottom-right { justify-content: flex-end; } }

        .ft-made {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--ft-orange);
          background: var(--ft-orange-bg);
          border: 1px solid var(--ft-orange-bd);
          padding: 4px 10px; border-radius: 3px;
        }

        .ft-legal { display: flex; gap: 16px; }
        .ft-legal a {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: .15em; text-transform: uppercase;
          color: var(--ft-dim); text-decoration: none;
          transition: color .2s;
        }
        .ft-legal a:hover { color: rgba(255,255,255,.5); }
      `}</style>

      <footer className="ft">

        {/* Top orange accent bar */}
        <div className="ft-top-bar" />

        {/* Ticker */}
        <div className="ft-ticker-wrap">
          <div className="ft-ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <span className="ft-ticker-item" key={i}>
                <span className="ft-ticker-dot" />{t}
              </span>
            ))}
          </div>
        </div>

        <div className="ft-z">
          <div className="ft-inner">

            {/* Brand */}
            <div className="ft-brand">

              <div style={{ display: "flex", flexDirection: "column", maxWidth: 340 }}>

                {/* ── VIDEO LOGO ── */}
                <Link to="/" className="ft-logo">
                  <div className="ft-logo-box">
                    <video
                      ref={videoRef}
                      className="ft-logo-video"
                      src={`${import.meta.env.BASE_URL}videos/SUNTECH_logo3d.mp4`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      disableRemotePlayback
                      aria-label="SunTech Packaging Machines"
                    />
                  </div>
                </Link>

                <p className="ft-desc">
                  High-performance industrial packaging machines engineered for precision, speed, and long-term reliability across food, pharma &amp; agro sectors.
                </p>

                <div className="ft-certs">
                  <span className="ft-cert">ISO 9001</span>
                  <span className="ft-cert">CE Marked</span>
                  <span className="ft-cert">Make in India</span>
                </div>
              </div>

              {/* Stats */}
              <div className="ft-stats">
                {[
                  { num: "500", sup: "+", lbl: "Installations" },
                  { num: "40",  sup: "+", lbl: "Cities" },
                  { num: "15",  sup: "+", lbl: "Years Exp." },
                  { num: "99",  sup: "%", lbl: "Uptime" },
                ].map((s, i) => (
                  <div key={i}>
                    <span className="ft-stat-num">{s.num}<span>{s.sup}</span></span>
                    <span className="ft-stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Links Grid */}
            <div className="ft-links-grid">

              <div>
                <p className="ft-col-head">Navigate</p>
                <ul className="ft-col-links">
                  {NAV_LINKS.map(l => (
                    <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="ft-col-head">Machines</p>
                <ul className="ft-col-links">
                  {MACHINE_LINKS.map(l => (
                    <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="ft-col-head">Services</p>
                <ul className="ft-col-links">
                  {SERVICE_LINKS.map(l => (
                    <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Contact — full width on mobile */}
              <div className="ft-contact-col">
                <p className="ft-col-head">Contact</p>
                <ul className="ft-contact-list">
                  <li className="ft-contact-item">
                    <span className="ft-contact-ico">
                      <svg viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <span>MIDC Industrial Area, Bhiwandi,<br/>Maharashtra – 421302</span>
                  </li>
                  <li className="ft-contact-item">
                    <span className="ft-contact-ico">
                      <svg viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </span>
                    <span>+91 00111 11111</span>
                  </li>
                  <li className="ft-contact-item">
                    <span className="ft-contact-ico">
                      <svg viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <span>info@suntech.in</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="ft-bottom">
              <span className="ft-copy">© {new Date().getFullYear()} SunTech Packaging Machines. All rights reserved.</span>
              <div className="ft-bottom-right">
                <span className="ft-made">🇮🇳 Made in India</span>
                <div className="ft-legal">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Use</a>
                  <a href="#">Sitemap</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}