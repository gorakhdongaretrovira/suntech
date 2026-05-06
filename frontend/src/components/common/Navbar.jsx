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
    background: #ffffff;
    border-bottom: 2px solid #111827;
    box-shadow: 0 2px 20px rgba(17,24,39,0.1);
    transition: box-shadow 0.3s;
  }
  .nb.scrolled {
    box-shadow: 0 4px 32px rgba(17,24,39,0.18);
  }

  .nb-inner {
    max-width: 1400px; margin: 0 auto;
    display: flex; align-items: center;
    height: 68px; padding: 0 28px;
    gap: 20px;
  }

  /* ── LOGO ── */
  .nb-logo {
    display: flex; align-items: center;
    text-decoration: none; flex-shrink: 0;
  }

  /* rectangular bordered container — pops on white bg */
  .nb-logo-box {
    display: flex; align-items: center; justify-content: center;
    height: 52px;
    padding: 5px 12px;
    border: 2px solid #111827;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 3px 3px 0px #111827;
    transition: box-shadow 0.18s, transform 0.18s;
    overflow: hidden;
  }
  .nb-logo-box:hover {
    box-shadow: 5px 5px 0px #111827;
    transform: translate(-1px, -1px);
  }
  .nb-logo-box img {
    height: 42px;
    width: auto;
    max-width: 170px;
    object-fit: contain;
    display: block;
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
    padding: 0 14px; height: 40px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: #111827; text-decoration: none;
    border-radius: 6px; white-space: nowrap;
    letter-spacing: 0.02em;
    transition: color 0.2s, background 0.2s;
    position: relative;
  }
  .nb-link:hover { color: #111827; background: rgba(17,24,39,0.05); }
  .nb-link.active { color: #111827; font-weight: 600; }
  .nb-link.active::after {
    content: '';
    position: absolute; bottom: 4px; left: 50%;
    transform: translateX(-50%);
    width: 4px; height: 4px; border-radius: 50%;
    background: #111827;
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
    display: flex; align-items: center; gap: 5px;
    padding: 0 14px; height: 40px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: #111827; background: none; border: none; cursor: pointer;
    border-radius: 6px; white-space: nowrap;
    letter-spacing: 0.02em;
    transition: color 0.2s, background 0.2s;
  }
  .nb-dd-btn:hover, .nb-dd-btn.open {
    color: #111827; background: rgba(17,24,39,0.05);
  }
  .nb-chevron { transition: transform 0.25s; flex-shrink: 0; }
  .nb-dd-btn.open .nb-chevron { transform: rotate(180deg); }

  /* ── DROPDOWN PANEL ── */
  .nb-dropdown {
    position: absolute; top: calc(100% + 12px); left: 50%;
    transform: translateX(-50%) translateY(8px);
    min-width: 210px;
    background: #ffffff;
    border: 1.5px solid rgba(17,24,39,0.1);
    border-top: 3px solid #111827;
    border-radius: 8px;
    padding: 8px 6px;
    box-shadow: 0 8px 40px rgba(17,24,39,0.12);
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
    position: absolute; top: -8px; left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-bottom-color: #111827;
    border-top: none;
  }

  .nb-dd-item {
    display: flex; align-items: center; gap: 10px;
    width: 100%; padding: 10px 14px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: #1f2937; text-decoration: none;
    background: none; border: none; cursor: pointer; text-align: left;
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;
  }
  .nb-dd-item::before {
    content: '';
    width: 5px; height: 5px; border-radius: 50%;
    background: rgba(17,24,39,0.12); flex-shrink: 0;
    transition: background 0.2s;
  }
  .nb-dd-item:hover { color: #111827; background: rgba(17,24,39,0.05); }
  .nb-dd-item:hover::before { background: #1f2937; }

  /* ── CTA BUTTON ── */
  .nb-cta {
    display: none;
    background: #1f2937; color: #ffffff;
    padding: 10px 22px; border-radius: 4px; border: none; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    white-space: nowrap; flex-shrink: 0;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 16px rgba(17,24,39,0.25);
  }
  .nb-cta:hover {
    background: #111827;
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(17,24,39,0.32);
  }
  @media (min-width: 960px) { .nb-cta { display: flex; align-items: center; } }

  /* ── HAMBURGER ── */
  .nb-ham {
    display: flex; flex-direction: column; justify-content: center; gap: 5px;
    width: 40px; height: 40px;
    background: rgba(17,24,39,0.08); border: 1.5px solid rgba(17,24,39,0.18);
    cursor: pointer; padding: 8px; border-radius: 6px;
    margin-left: auto; flex-shrink: 0;
    transition: background 0.2s;
  }
  .nb-ham:hover { background: rgba(17,24,39,0.14); }
  .nb-ham span {
    display: block; width: 100%; height: 2px;
    background: #111827; border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  .nb-ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nb-ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .nb-ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  @media (min-width: 960px) { .nb-ham { display: none; } }

  /* ── MOBILE OVERLAY ── */
  .nb-overlay {
    position: fixed; inset: 0; z-index: 98;
    background: rgba(17,24,39,0.8);
    backdrop-filter: blur(4px);
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s;
  }
  .nb-overlay.open { opacity: 1; pointer-events: auto; }

  /* ── MOBILE DRAWER ── */
  .nb-drawer {
    position: fixed; top: 68px; left: 0; right: 0; z-index: 99;
    background: #111827;
    border-bottom: 2px solid rgba(255,255,255,0.12);
    box-shadow: 0 8px 40px rgba(17,24,39,0.3);
    transform: translateY(-8px); opacity: 0; pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s;
    max-height: calc(100svh - 68px); overflow-y: auto;
  }
  .nb-drawer.open { transform: translateY(0); opacity: 1; pointer-events: auto; }

  .nb-mob-nav { padding: 8px 0; }

  .nb-mob-link {
    display: flex; align-items: center;
    padding: 13px 24px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px; font-weight: 500;
    color: #f8fafc; text-decoration: none;
    border-left: 3px solid transparent;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }
  .nb-mob-link:hover, .nb-mob-link.active {
    color: #ffffff; background: rgba(255,255,255,0.05);
    border-left-color: #f5a623;
  }

  .nb-mob-sep { height: 1px; margin: 4px 24px; background: rgba(255,255,255,0.08); }

  .nb-mob-dd-btn {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; padding: 13px 24px;
    background: none; border: none; cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-size: 14px; font-weight: 500;
    color: #f8fafc; border-left: 3px solid transparent;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }
  .nb-mob-dd-btn:hover, .nb-mob-dd-btn.open {
    color: #ffffff; background: rgba(255,255,255,0.05);
    border-left-color: #f5a623;
  }

  .nb-mob-sub {
    max-height: 0; overflow: hidden;
    transition: max-height 0.3s ease;
    background: rgba(255,255,255,0.03);
    border-left: 3px solid rgba(255,255,255,0.08);
    margin-left: 24px;
    border-radius: 0 0 4px 4px;
  }
  .nb-mob-sub.open { max-height: 400px; }

  .nb-mob-sub-item {
    display: flex; align-items: center; gap: 8px;
    width: 100%; padding: 11px 20px;
    font-family: 'Barlow', sans-serif;
    font-size: 13px; font-weight: 500;
    color: #d8e0ea; text-decoration: none;
    background: none; border: none; cursor: pointer; text-align: left;
    transition: color 0.2s, background 0.2s;
  }
  .nb-mob-sub-item::before {
    content: '';
    width: 4px; height: 4px; border-radius: 50%;
    background: rgba(255,255,255,0.32); flex-shrink: 0;
    transition: background 0.2s;
  }
  .nb-mob-sub-item:hover { color: #ffffff; background: rgba(255,255,255,0.05); }
  .nb-mob-sub-item:hover::before { background: #f5a623; }

  .nb-mob-cta-wrap {
    padding: 16px 24px 24px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .nb-mob-cta {
    width: 100%; padding: 14px;
    background: #1f2937; color: #ffffff;
    border: none; border-radius: 6px; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase;
    transition: background 0.2s;
  }
  .nb-mob-cta:hover { background: #374151; }
`;

const Chevron = () => (
  <svg className="nb-chevron" width="11" height="11" viewBox="0 0 24 24"
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

          {/* LOGO — rectangular bordered box */}
          <Link to="/" className="nb-logo" onClick={closeAll}>
            <div className="nb-logo-box">
              <img
                src="/logo.jpeg"
                alt="SunTech Packaging Machines"
                loading="eager"
                draggable="false"
              />
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <nav className="nb-links">

            <Link to="/" className={`nb-link${pathname === "/" ? " active" : ""}`} onClick={closeAll}>Home</Link>
            <Link to="/about" className={`nb-link${pathname === "/about" ? " active" : ""}`} onClick={closeAll}>About</Link>

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
                  <Link key={item.to} to={item.to} className="nb-dd-item" onClick={closeAll}>
                    {item.label}
                  </Link>
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
                  <Link key={m.to} to={m.to} className="nb-dd-item" onClick={closeAll}>
                    {m.label}
                  </Link>
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

          <Link to="/" className={`nb-mob-link${pathname === "/" ? " active" : ""}`} onClick={closeAll}>Home</Link>
          <Link to="/about" className={`nb-mob-link${pathname === "/about" ? " active" : ""}`} onClick={closeAll}>About</Link>

          <div className="nb-mob-sep" />

          {/* Applications */}
          <button className={`nb-mob-dd-btn${mobAppOpen ? " open" : ""}`}
            onClick={() => setMobAppOpen(o => !o)}>
            Applications <Chevron />
          </button>
          <div className={`nb-mob-sub${mobAppOpen ? " open" : ""}`}>
            {APPLICATION_TYPES.map(type => (
              <button key={type} className="nb-mob-sub-item" onClick={() => handleAppNav(type)}>
                {type}
              </button>
            ))}
          </div>

          {/* Media */}
          <button className={`nb-mob-dd-btn${mobMediaOpen ? " open" : ""}`}
            onClick={() => setMobMediaOpen(o => !o)}>
            Media <Chevron />
          </button>
          <div className={`nb-mob-sub${mobMediaOpen ? " open" : ""}`}>
            {MEDIA_ITEMS.map(item => (
              <Link key={item.to} to={item.to} className="nb-mob-sub-item" onClick={closeAll}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Machines */}
          <button className={`nb-mob-dd-btn${mobMachOpen ? " open" : ""}`}
            onClick={() => setMobMachOpen(o => !o)}>
            Machines <Chevron />
          </button>
          <div className={`nb-mob-sub${mobMachOpen ? " open" : ""}`}>
            {MACHINES.map(m => (
              <Link key={m.to} to={m.to} className="nb-mob-sub-item" onClick={closeAll}>
                {m.label}
              </Link>
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