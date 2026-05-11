import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const APPLICATION_TYPES = ["Namkeen", "Spices", "Powder", "Grains", "Snacks"];

const MACHINES = [
  { label: "Weighing & Filling",  to: "/machines/weighing"  },
  { label: "Packaging Machines",  to: "/machines/packaging" },
  { label: "Sealing Machines",    to: "/machines/sealing"   },
  { label: "Labelling Machines",  to: "/machines/labelling" },
];

const MEDIA_ITEMS = [
  { label: "Media Home", to: "/media" },
  { label: "Videos",     to: "/media/videos" },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');

  * { box-sizing: border-box; }

  /* ── NAV BASE ── */
  .nb {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10, 14, 26, 0.72);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 2px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
    transition: background 0.35s, box-shadow 0.35s;
  }
  .nb.scrolled {
    background: rgba(8, 12, 22, 0.92);
    box-shadow: 0 4px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07);
  }

  /* animated gradient line at top */
  .nb::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #f5a623 30%, #ff6b35 60%, transparent 100%);
    background-size: 200% 100%;
    animation: shimmer 3s linear infinite;
    opacity: 0.8;
  }
  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position:  200% 0; }
  }

  .nb-inner {
    max-width: 1400px; margin: 0 auto;
    display: flex; align-items: center;
    height: 60px; padding: 0 14px;
    gap: 10px;
  }
  @media (min-width: 960px) {
    .nb-inner { height: 72px; padding: 0 28px; gap: 20px; }
  }

  /* ══════════════════════════════════════════
     LOGO VIDEO BOX  —  mobile-first
  ══════════════════════════════════════════ */
  .nb-logo {
    display: flex; align-items: center;
    text-decoration: none; flex-shrink: 0;
    /* push CTA / hamburger to right */
    margin-right: auto;
  }

  .nb-logo-box {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* mobile size */
    height: 44px;
    /* width auto via aspect ratio of video */
    padding: 0;
    overflow: hidden;
    border-radius: 10px;
    background: transparent;

    /* subtle glass ring */
    box-shadow:
      0 0 0 1px rgba(245,166,35,0.18),
      0 4px 18px rgba(0,0,0,0.35),
      0 1px 0 rgba(255,255,255,0.06) inset;

    transition:
      transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
      box-shadow 0.25s ease;
  }

  .nb-logo-box:hover {
    transform: translateY(-2px) scale(1.025);
    box-shadow:
      0 0 0 1.5px rgba(245,166,35,0.45),
      0 8px 32px rgba(245,166,35,0.18),
      0 2px 8px rgba(0,0,0,0.4),
      0 1px 0 rgba(255,255,255,0.10) inset;
  }

  /* glow pulse on hover */
  .nb-logo-box::after {
    content: '';
    position: absolute; inset: 0;
    border-radius: inherit;
    background: radial-gradient(ellipse at 50% 50%, rgba(245,166,35,0.12) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .nb-logo-box:hover::after { opacity: 1; }

  /* VIDEO element */
  .nb-logo-video {
    display: block;
    /* mobile: fit within 44px tall box */
    height: 44px;
    width: auto;
    max-width: 180px;
    object-fit: contain;
    border-radius: inherit;
    /* crisp playback */
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }

  /* Desktop overrides */
  @media (min-width: 960px) {
    .nb-logo-box {
      height: 56px;
      border-radius: 13px;
    }
    .nb-logo-video {
      height: 56px;
      max-width: 260px;
    }
  }

  /* ── DESKTOP NAV LINKS ── */
  .nb-links {
    display: none;
    align-items: center;
    flex: 1; justify-content: center;
    gap: 2px; list-style: none;
    margin: 0; padding: 0;
  }
  @media (min-width: 960px) { .nb-links { display: flex; } }

  .nb-link {
    display: flex; align-items: center;
    padding: 0 12px; height: 38px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(220,230,245,0.85); text-decoration: none;
    border-radius: 6px; white-space: nowrap;
    letter-spacing: 0.03em;
    transition: color 0.2s, background 0.2s;
    position: relative;
  }
  .nb-link:hover {
    color: #ffffff;
    background: rgba(255,255,255,0.08);
  }
  .nb-link.active { color: #ffffff; font-weight: 600; }
  .nb-link.active::after {
    content: '';
    position: absolute; bottom: 5px; left: 50%;
    transform: translateX(-50%);
    width: 18px; height: 2px; border-radius: 2px;
    background: linear-gradient(90deg, #f5a623, #ff6b35);
  }

  /* ── DROPDOWN WRAPPER ── */
  .nb-dd-wrap {
    position: relative;
    display: flex; align-items: center;
  }
  .nb-dd-wrap::after {
    content: '';
    position: absolute; top: 100%; left: 0; right: 0;
    height: 16px; background: transparent;
    pointer-events: auto; display: none;
  }
  .nb-dd-wrap:hover::after { display: block; }

  .nb-dd-btn {
    display: flex; align-items: center; gap: 4px;
    padding: 0 12px; height: 38px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(220,230,245,0.85); background: none; border: none; cursor: pointer;
    border-radius: 6px; white-space: nowrap;
    letter-spacing: 0.03em;
    transition: color 0.2s, background 0.2s;
  }
  .nb-dd-btn:hover, .nb-dd-btn.open {
    color: #ffffff;
    background: rgba(255,255,255,0.08);
  }
  .nb-chevron { transition: transform 0.25s; flex-shrink: 0; opacity: 0.7; }
  .nb-dd-btn.open .nb-chevron { transform: rotate(180deg); opacity: 1; }

  /* ── DROPDOWN PANEL ── */
  .nb-dropdown {
    position: absolute; top: calc(100% + 12px); left: 50%;
    transform: translateX(-50%) translateY(8px);
    min-width: 200px;
    background: rgba(12, 17, 35, 0.92);
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
    border: 1px solid rgba(255,255,255,0.1);
    border-top: 2px solid rgba(245,166,35,0.8);
    border-radius: 10px;
    padding: 6px 5px;
    box-shadow:
      0 16px 60px rgba(0,0,0,0.5),
      0 4px 16px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.06);
    opacity: 0; pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
    z-index: 200;
  }
  .nb-dropdown.open {
    opacity: 1; pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
  .nb-dropdown::before {
    content: '';
    position: absolute; top: -7px; left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-bottom-color: rgba(245,166,35,0.8);
    border-top: none;
  }

  .nb-dd-item {
    display: flex; align-items: center; gap: 10px;
    width: 100%; padding: 9px 14px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(210,225,245,0.9); text-decoration: none;
    background: none; border: none; cursor: pointer; text-align: left;
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;
  }
  .nb-dd-item::before {
    content: '';
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(255,255,255,0.2); flex-shrink: 0;
    transition: background 0.2s;
  }
  .nb-dd-item:hover { color: #ffffff; background: rgba(255,255,255,0.07); }
  .nb-dd-item:hover::before { background: #f5a623; }

  /* ── CTA BUTTON ── */
  .nb-cta {
    display: none;
    background: linear-gradient(135deg, #f5a623 0%, #ff6b35 100%);
    color: #0a0e1a;
    padding: 9px 20px; border-radius: 6px; border: none; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px; font-weight: 800;
    letter-spacing: 0.12em; text-transform: uppercase;
    white-space: nowrap; flex-shrink: 0;
    transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(245,166,35,0.35), 0 0 0 1px rgba(245,166,35,0.2);
  }
  .nb-cta:hover {
    opacity: 0.92; transform: translateY(-1px);
    box-shadow: 0 6px 28px rgba(245,166,35,0.45), 0 0 0 1px rgba(245,166,35,0.3);
  }
  @media (min-width: 960px) { .nb-cta { display: flex; align-items: center; } }

  /* ── HAMBURGER ── */
  .nb-ham {
    display: flex; flex-direction: column; justify-content: center; gap: 5px;
    width: 40px; height: 40px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    cursor: pointer; padding: 10px; border-radius: 8px;
    flex-shrink: 0;
    transition: background 0.2s, border-color 0.2s;
  }
  .nb-ham:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.2);
  }
  .nb-ham span {
    display: block; width: 100%; height: 2px;
    background: rgba(255,255,255,0.85); border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  .nb-ham.open {
    background: rgba(245,166,35,0.12);
    border-color: rgba(245,166,35,0.3);
  }
  .nb-ham.open span { background: #f5a623; }
  .nb-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nb-ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nb-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  @media (min-width: 960px) { .nb-ham { display: none; } }

  /* ── MOBILE OVERLAY ── */
  .nb-overlay {
    position: fixed; inset: 0; z-index: 98;
    background: rgba(5,8,20,0.75);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s;
  }
  .nb-overlay.open { opacity: 1; pointer-events: auto; }

  /* ── MOBILE DRAWER ── */
  .nb-drawer {
    position: fixed; top: 60px; left: 0; right: 0; z-index: 99;
    background: rgba(8, 13, 28, 0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
    transform: translateY(-6px); opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.25s;
    max-height: calc(100svh - 60px); overflow-y: auto;
  }
  @media (min-width: 960px) {
    .nb-drawer { top: 72px; max-height: calc(100svh - 72px); }
  }
  .nb-drawer.open { transform: translateY(0); opacity: 1; pointer-events: auto; }

  .nb-mob-nav { padding: 8px 0 4px; }

  .nb-mob-link {
    display: flex; align-items: center;
    padding: 13px 20px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px; font-weight: 500;
    color: rgba(200,215,240,0.85); text-decoration: none;
    border-left: 2px solid transparent;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }
  .nb-mob-link:hover, .nb-mob-link.active {
    color: #ffffff;
    background: rgba(255,255,255,0.04);
    border-left-color: #f5a623;
  }

  .nb-mob-sep {
    height: 1px; margin: 4px 20px;
    background: rgba(255,255,255,0.06);
  }

  .nb-mob-dd-btn {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; padding: 13px 20px;
    background: none; border: none; cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-size: 14px; font-weight: 500;
    color: rgba(200,215,240,0.85);
    border-left: 2px solid transparent;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }
  .nb-mob-dd-btn:hover, .nb-mob-dd-btn.open {
    color: #ffffff;
    background: rgba(255,255,255,0.04);
    border-left-color: #f5a623;
  }

  .nb-mob-sub {
    max-height: 0; overflow: hidden;
    transition: max-height 0.3s ease;
    background: rgba(255,255,255,0.02);
    border-left: 2px solid rgba(245,166,35,0.15);
    margin-left: 20px;
  }
  .nb-mob-sub.open { max-height: 400px; }

  .nb-mob-sub-item {
    display: flex; align-items: center; gap: 10px;
    width: 100%; padding: 11px 18px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: rgba(180,200,230,0.8); text-decoration: none;
    background: none; border: none; cursor: pointer; text-align: left;
    transition: color 0.2s, background 0.2s;
  }
  .nb-mob-sub-item::before {
    content: '';
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(255,255,255,0.2); flex-shrink: 0;
    transition: background 0.2s;
  }
  .nb-mob-sub-item:hover { color: #fff; background: rgba(255,255,255,0.04); }
  .nb-mob-sub-item:hover::before { background: #f5a623; }

  .nb-mob-cta-wrap {
    padding: 14px 20px 20px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .nb-mob-cta {
    width: 100%; padding: 14px;
    background: linear-gradient(135deg, #f5a623 0%, #ff6b35 100%);
    color: #0a0e1a;
    border: none; border-radius: 8px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px; font-weight: 800;
    letter-spacing: 0.14em; text-transform: uppercase;
    box-shadow: 0 4px 20px rgba(245,166,35,0.3);
    transition: opacity 0.2s, transform 0.15s;
  }
  .nb-mob-cta:hover { opacity: 0.9; transform: translateY(-1px); }
`;

const Chevron = () => (
  <svg className="nb-chevron" width="10" height="10" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function useHoverDropdown(delay = 130) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timer = useRef(null);
  const handleMouseEnter = () => { clearTimeout(timer.current); setOpen(true); };
  const handleMouseLeave = () => { timer.current = setTimeout(() => setOpen(false), delay); };
  useEffect(() => () => clearTimeout(timer.current), []);
  return { open, setOpen, ref, handleMouseEnter, handleMouseLeave };
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobMachOpen,  setMobMachOpen]  = useState(false);
  const [mobAppOpen,   setMobAppOpen]   = useState(false);
  const [mobMediaOpen, setMobMediaOpen] = useState(false);

  const mach  = useHoverDropdown();
  const app   = useHoverDropdown();
  const media = useHoverDropdown();

  const videoRef = useRef(null);
  const { pathname } = useLocation();
  const navigate     = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ensure video plays even after re-mount */
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setMobMachOpen(false); setMobAppOpen(false); setMobMediaOpen(false);
    mach.setOpen(false); app.setOpen(false); media.setOpen(false);
  };

  const handleAppNav = (type) => {
    navigate(`/applications?type=${encodeURIComponent(type)}`);
    closeAll();
  };

  return (
    <>
      <style>{css}</style>

      <div className={`nb-overlay${menuOpen ? " open" : ""}`} onClick={closeAll} />

      <header className={`nb${scrolled ? " scrolled" : ""}`}>
        <div className="nb-inner">

          {/* ── LOGO (video) ── */}
          <Link to="/" className="nb-logo" onClick={closeAll}>
            <div className="nb-logo-box">
              <video
                ref={videoRef}
                className="nb-logo-video"
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

          {/* DESKTOP LINKS */}
          <nav className="nb-links">
            <Link to="/"         className={`nb-link${pathname === "/"         ? " active" : ""}`} onClick={closeAll}>Home</Link>
            <Link to="/about"    className={`nb-link${pathname === "/about"    ? " active" : ""}`} onClick={closeAll}>About</Link>

            {/* Applications */}
            <div className="nb-dd-wrap" onMouseEnter={app.handleMouseEnter} onMouseLeave={app.handleMouseLeave}>
              <button className={`nb-dd-btn${app.open || pathname === "/applications" ? " open" : ""}`}>
                Applications <Chevron />
              </button>
              <div className={`nb-dropdown${app.open ? " open" : ""}`}
                onMouseEnter={app.handleMouseEnter} onMouseLeave={app.handleMouseLeave}>
                {APPLICATION_TYPES.map(type => (
                  <button key={type} className="nb-dd-item" onClick={() => handleAppNav(type)}>
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Media */}
            <div className="nb-dd-wrap" onMouseEnter={media.handleMouseEnter} onMouseLeave={media.handleMouseLeave}>
              <button className={`nb-dd-btn${media.open || pathname.startsWith("/media") ? " open" : ""}`}>
                Media <Chevron />
              </button>
              <div className={`nb-dropdown${media.open ? " open" : ""}`}
                onMouseEnter={media.handleMouseEnter} onMouseLeave={media.handleMouseLeave}>
                {MEDIA_ITEMS.map(item => (
                  <Link key={item.to} to={item.to} className="nb-dd-item" onClick={closeAll}>{item.label}</Link>
                ))}
              </div>
            </div>

            {/* Machines */}
            <div className="nb-dd-wrap" onMouseEnter={mach.handleMouseEnter} onMouseLeave={mach.handleMouseLeave}>
              <button className={`nb-dd-btn${mach.open ? " open" : ""}`}>
                Machines <Chevron />
              </button>
              <div className={`nb-dropdown${mach.open ? " open" : ""}`}
                onMouseEnter={mach.handleMouseEnter} onMouseLeave={mach.handleMouseLeave}>
                {MACHINES.map(m => (
                  <Link key={m.to} to={m.to} className="nb-dd-item" onClick={closeAll}>{m.label}</Link>
                ))}
              </div>
            </div>

            <Link to="/projects"  className={`nb-link${pathname === "/projects"  ? " active" : ""}`} onClick={closeAll}>Projects</Link>
            <Link to="/brochure"  className={`nb-link${pathname === "/brochure"  ? " active" : ""}`} onClick={closeAll}>Brochure</Link>
            <Link to="/faq"       className={`nb-link${pathname === "/faq"       ? " active" : ""}`} onClick={closeAll}>FAQ</Link>
            <Link to="/solutions" className={`nb-link${pathname === "/solutions" ? " active" : ""}`} onClick={closeAll}>Solutions</Link>
            <Link to="/contact"   className={`nb-link${pathname === "/contact"   ? " active" : ""}`} onClick={closeAll}>Contact</Link>
          </nav>

          {/* CTA */}
          <button className="nb-cta" onClick={() => navigate("/contact")}>Get a Quote</button>

          {/* HAMBURGER */}
          <button className={`nb-ham${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`nb-drawer${menuOpen ? " open" : ""}`}>
        <nav className="nb-mob-nav">

          <Link to="/"      className={`nb-mob-link${pathname === "/"      ? " active" : ""}`} onClick={closeAll}>Home</Link>
          <Link to="/about" className={`nb-mob-link${pathname === "/about" ? " active" : ""}`} onClick={closeAll}>About</Link>

          <div className="nb-mob-sep" />

          {/* Applications */}
          <button className={`nb-mob-dd-btn${mobAppOpen ? " open" : ""}`}
            onClick={() => setMobAppOpen(o => !o)}>
            Applications <Chevron />
          </button>
          <div className={`nb-mob-sub${mobAppOpen ? " open" : ""}`}>
            {APPLICATION_TYPES.map(type => (
              <button key={type} className="nb-mob-sub-item" onClick={() => handleAppNav(type)}>{type}</button>
            ))}
          </div>

          {/* Media */}
          <button className={`nb-mob-dd-btn${mobMediaOpen ? " open" : ""}`}
            onClick={() => setMobMediaOpen(o => !o)}>
            Media <Chevron />
          </button>
          <div className={`nb-mob-sub${mobMediaOpen ? " open" : ""}`}>
            {MEDIA_ITEMS.map(item => (
              <Link key={item.to} to={item.to} className="nb-mob-sub-item" onClick={closeAll}>{item.label}</Link>
            ))}
          </div>

          {/* Machines */}
          <button className={`nb-mob-dd-btn${mobMachOpen ? " open" : ""}`}
            onClick={() => setMobMachOpen(o => !o)}>
            Machines <Chevron />
          </button>
          <div className={`nb-mob-sub${mobMachOpen ? " open" : ""}`}>
            {MACHINES.map(m => (
              <Link key={m.to} to={m.to} className="nb-mob-sub-item" onClick={closeAll}>{m.label}</Link>
            ))}
          </div>

          <div className="nb-mob-sep" />

          <Link to="/projects"  className={`nb-mob-link${pathname === "/projects"  ? " active" : ""}`} onClick={closeAll}>Projects</Link>
          <Link to="/brochure"  className={`nb-mob-link${pathname === "/brochure"  ? " active" : ""}`} onClick={closeAll}>Brochure</Link>
          <Link to="/faq"       className={`nb-mob-link${pathname === "/faq"       ? " active" : ""}`} onClick={closeAll}>FAQ</Link>
          <Link to="/solutions" className={`nb-mob-link${pathname === "/solutions" ? " active" : ""}`} onClick={closeAll}>Solutions</Link>
          <Link to="/contact"   className={`nb-mob-link${pathname === "/contact"   ? " active" : ""}`} onClick={closeAll}>Contact</Link>

        </nav>

        <div className="nb-mob-cta-wrap">
          <button className="nb-mob-cta" onClick={() => { navigate("/contact"); closeAll(); }}>
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}