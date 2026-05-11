import { useEffect, useRef, useState } from "react";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=Barlow:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --blue-dark:  #111827;
  --blue-mid:   #1f2937;
  --blue-brand: #111827;
  --blue-light: #1f2937;
  --blue-pale:  rgba(17,24,39,0.05);
  --accent:     #f5a623;
  --accent-lt:  #ffd07a;
  --white:      #ffffff;
  --off-white:  #ffffff;
  --text:       #1a2d4a;
  --text-muted: #6e8db5;
  --border:     rgba(17,24,39,0.12);
  --border-dk:  rgba(17,24,39,0.08);
}

html { scroll-behavior: smooth; }

body {
  background: #ffffff;
  color: var(--text);
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.in { opacity: 1; transform: none; }
  .reveal-d1 { transition-delay: .1s; }
  .reveal-d2 { transition-delay: .2s; }
  .reveal-d3 { transition-delay: .3s; }
  .reveal-d4 { transition-delay: .4s; }

  .tag-pill {
    display: inline-flex; align-items: center; gap: 7px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--blue-brand);
    background: var(--blue-pale);
    border: 1.5px solid var(--border);
    border-radius: 4px; padding: 6px 14px;
  }
  .tag-pill::before {
    content: '';
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); flex-shrink: 0;
  }

  .section-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .25em; text-transform: uppercase;
    color: var(--text-muted);
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 16px;
  }
  .section-label::after {
    content: ''; flex: 1; max-width: 60px; height: 2px;
    background: var(--blue-brand); border-radius: 2px;
  }

  .stat-card {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-top: 4px solid var(--blue-brand);
    border-radius: 10px;
    padding: 28px 20px;
    text-align: center;
    transition: transform .3s, box-shadow .3s, border-color .3s;
    box-shadow: 0 2px 12px rgba(18,81,163,0.05);
  }
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(18,81,163,0.12);
    border-color: var(--blue-brand);
  }
  .stat-card .val {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(2.4rem, 8vw, 3.2rem);
    font-weight: 900; line-height: 1;
    color: var(--blue-dark);
    margin-bottom: 6px; letter-spacing: -.01em;
  }
  .stat-card .val span { color: var(--accent); }
  .stat-card .lbl {
    font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
    color: var(--text-muted); font-weight: 600;
  }

  .why-card {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    padding: 28px 24px;
    display: flex; gap: 20px; align-items: flex-start;
    transition: transform .3s, box-shadow .3s, border-color .3s;
    box-shadow: 0 2px 12px rgba(18,81,163,0.04);
    position: relative; overflow: hidden;
  }
  .why-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
    background: var(--blue-brand);
    transform: scaleY(0); transform-origin: bottom;
    transition: transform .3s ease;
  }
  .why-card:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(18,81,163,0.1); border-color: var(--border-dk); }
  .why-card:hover::before { transform: scaleY(1); }
  .why-card .icon-wrap {
    width: 48px; height: 48px; border-radius: 8px; flex-shrink: 0;
    background: var(--blue-pale);
    border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }
  .why-card h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 17px; font-weight: 800; letter-spacing: .03em;
    color: var(--blue-dark); margin-bottom: 8px; text-transform: uppercase;
  }
  .why-card p { font-size: 14px; line-height: 1.7; color: var(--text-muted); font-weight: 400; }

  .value-row {
    display: flex; align-items: flex-start; gap: 16px;
    padding: 20px 0; border-bottom: 1px solid var(--border);
  }
  .value-row:last-child { border-bottom: none; }
  .value-row .dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--blue-brand); margin-top: 6px; flex-shrink: 0;
    border: 2px solid var(--border);
  }
  .value-row p { font-size: 15px; line-height: 1.65; color: var(--text-muted); }
  .value-row strong { color: var(--blue-dark); font-weight: 700; display: block; margin-bottom: 4px; font-family: 'Barlow Condensed', sans-serif; font-size: 16px; letter-spacing: .04em; text-transform: uppercase; }

  .marquee-wrap { overflow: hidden; position: relative; background: var(--blue-dark); }
  .marquee-wrap::before, .marquee-wrap::after {
    content: ''; position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2; pointer-events: none;
  }
  .marquee-wrap::before { left: 0; background: linear-gradient(90deg, var(--blue-dark), transparent); }
  .marquee-wrap::after  { right: 0; background: linear-gradient(-90deg, var(--blue-dark), transparent); }
  .marquee-track {
    display: flex; animation: marquee 26s linear infinite; width: max-content;
  }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .marquee-item {
    display: flex; align-items: center; gap: 12px; padding: 0 28px;
    white-space: nowrap; font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }
  .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

  .cta-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--blue-brand); color: var(--white);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    padding: 14px 28px; border-radius: 4px; border: none; cursor: pointer;
    box-shadow: 0 6px 24px rgba(18,81,163,0.35);
    transition: background .2s, transform .2s, box-shadow .2s;
  }
  .cta-btn:hover { background: var(--blue-light); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(18,81,163,0.45); }
  .cta-btn svg { transition: transform .2s; }
  .cta-btn:hover svg { transform: translateX(4px); }

  .cta-btn-ghost {
    display: inline-flex; align-items: center; gap: 10px;
    background: transparent; color: var(--white);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    padding: 14px 28px; border-radius: 4px;
    border: 1.5px solid rgba(255,255,255,0.3); cursor: pointer;
    transition: border-color .2s, background .2s, transform .2s;
  }
  .cta-btn-ghost:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.07); transform: translateY(-2px); }

  .hero-grid-bg {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
    background-image:
      linear-gradient(rgba(18,81,163,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(18,81,163,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* ── Vision / Mission cards ── */
  .vm-card {
    border-radius: 14px;
    padding: 32px 28px;
    position: relative;
    overflow: hidden;
    transition: transform .3s, box-shadow .3s;
  }
  .vm-card:hover { transform: translateY(-4px); }

  .vm-card-vision {
    background: #0d1526;
    border: 1.5px solid rgba(245,166,35,0.18);
    box-shadow: 0 8px 40px rgba(13,21,38,0.22);
  }
  .vm-card-mission {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-left: 5px solid var(--accent);
    box-shadow: 0 4px 24px rgba(17,24,39,0.07);
  }

  .vm-icon-wrap {
    width: 56px; height: 56px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 22px; flex-shrink: 0;
  }
  .vm-card-vision .vm-icon-wrap {
    background: rgba(245,166,35,0.14);
    border: 1.5px solid rgba(245,166,35,0.28);
  }
  .vm-card-mission .vm-icon-wrap {
    background: var(--blue-pale);
    border: 1.5px solid var(--border);
  }

  .vm-badge {
    display: inline-flex; align-items: center; gap: 7px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10px; font-weight: 800; letter-spacing: .28em; text-transform: uppercase;
    padding: 5px 12px; border-radius: 4px;
    margin-bottom: 16px;
  }
  .vm-badge::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0;
  }
  .vm-card-vision .vm-badge {
    background: rgba(245,166,35,0.12);
    border: 1px solid rgba(245,166,35,0.3);
    color: var(--accent);
  }
  .vm-card-vision .vm-badge::before { background: var(--accent); }
  .vm-card-mission .vm-badge {
    background: var(--blue-pale);
    border: 1px solid var(--border);
    color: var(--text-muted);
  }
  .vm-card-mission .vm-badge::before { background: var(--blue-brand); }

  .vm-heading {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(24px, 6vw, 32px);
    font-weight: 900; line-height: 1.05;
    letter-spacing: -.01em; text-transform: uppercase;
    margin-bottom: 12px;
  }
  .vm-card-vision .vm-heading { color: #ffffff; }
  .vm-card-mission .vm-heading { color: var(--blue-dark); }

  .vm-tagline {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(15px, 3.5vw, 18px);
    font-weight: 700; font-style: italic;
    line-height: 1.35; margin-bottom: 18px;
    padding: 14px 16px;
    border-radius: 8px;
  }
  .vm-card-vision .vm-tagline {
    color: var(--accent);
    background: rgba(245,166,35,0.08);
    border-left: 3px solid rgba(245,166,35,0.5);
  }
  .vm-card-mission .vm-tagline {
    color: var(--blue-brand);
    background: var(--blue-pale);
    border-left: 3px solid var(--blue-brand);
    opacity: 0.85;
  }

  .vm-body {
    font-size: 14px; line-height: 1.78; font-weight: 400; margin-bottom: 20px;
  }
  .vm-card-vision .vm-body { color: rgba(180,205,240,0.72); }
  .vm-card-mission .vm-body { color: var(--text-muted); }

  .vm-points {
    list-style: none;
    display: flex; flex-direction: column; gap: 11px;
  }
  .vm-points li {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 13.5px; line-height: 1.55;
  }
  .vm-card-vision .vm-points li { color: rgba(180,205,240,0.75); }
  .vm-card-mission .vm-points li { color: var(--text-muted); }
  .vm-points li::before {
    content: '';
    width: 6px; height: 6px; border-radius: 50%;
    margin-top: 5px; flex-shrink: 0;
  }
  .vm-card-vision .vm-points li::before { background: var(--accent); }
  .vm-card-mission .vm-points li::before { background: var(--blue-brand); }

  .vm-card-vision::after {
    content: '';
    position: absolute; top: -50px; right: -50px;
    width: 200px; height: 200px; border-radius: 50%;
    background: radial-gradient(circle, rgba(245,166,35,0.10) 0%, transparent 70%);
    pointer-events: none;
  }

  /* clients grid */
  .clients-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .client-card {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    padding: 16px 18px;
    display: flex; align-items: center; gap: 12px;
    transition: transform .25s, box-shadow .25s;
  }
  .client-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(17,24,39,0.09); }
  .client-icon {
    width: 40px; height: 40px; border-radius: 8px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
  }
  .client-card .client-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 13px; font-weight: 800;
    letter-spacing: .05em; text-transform: uppercase;
    color: var(--blue-dark); line-height: 1.2;
    margin-bottom: 2px;
  }
  .client-card .client-sector {
    font-size: 11px; color: var(--text-muted); font-weight: 500;
    letter-spacing: .04em;
  }

  /* ── FOUNDER / CEO SECTION ── */
  .founder-section {
    padding: 72px 24px;
    background: #ffffff;
    border-top: 1px solid var(--border);
  }
  .founder-card {
    background: #ffffff;
    border: 1.5px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 32px rgba(17,24,39,0.08);
    max-width: 760px;
    margin: 0 auto;
  }
  .founder-img-wrap {
    position: relative;
    width: 100%;
    background: #f0f4f8;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-height: 320px;
  }
  .founder-img-wrap img {
    width: 100%;
    height: 340px;
    object-fit: cover;
    object-position: top center;
    display: block;
  }
  .founder-img-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0; height: 80px;
    background: linear-gradient(transparent, #ffffff);
    pointer-events: none;
  }
  .founder-body {
    padding: 32px 28px 36px;
  }
  .founder-role-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue-pale);
    border: 1.5px solid var(--border);
    border-radius: 4px;
    padding: 5px 14px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10px; font-weight: 800; letter-spacing: .25em; text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 14px;
  }
  .founder-role-badge::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); flex-shrink: 0;
  }
  .founder-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(30px, 7vw, 44px);
    font-weight: 900; line-height: 1.0;
    color: var(--blue-dark);
    text-transform: uppercase;
    letter-spacing: -.01em;
    margin-bottom: 6px;
  }
  .founder-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 20px;
  }
  .founder-divider {
    width: 48px; height: 3px;
    background: var(--blue-brand);
    border-radius: 2px;
    margin-bottom: 20px;
  }
  .founder-bio {
    font-size: 14.5px; line-height: 1.78;
    color: var(--text-muted);
    font-weight: 400;
    margin-bottom: 28px;
  }
  .founder-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 28px;
  }
  .founder-stat {
    background: var(--blue-pale);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    padding: 16px 12px;
    text-align: center;
  }
  .founder-stat-val {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 26px; font-weight: 900;
    color: var(--blue-dark); line-height: 1;
    margin-bottom: 4px;
  }
  .founder-stat-val span { color: var(--accent); }
  .founder-stat-lbl {
    font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
    color: var(--text-muted); font-weight: 600;
  }
  .founder-quote {
    background: #0d1526;
    border-radius: 10px;
    padding: 20px 22px;
    border-left: 4px solid var(--accent);
    position: relative;
  }
  .founder-quote-mark {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 48px; font-weight: 900; line-height: 0.6;
    color: rgba(245,166,35,0.2);
    margin-bottom: 10px;
    display: block;
    user-select: none;
  }
  .founder-quote-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(16px, 4vw, 19px);
    font-weight: 700; font-style: italic;
    color: #ffffff;
    line-height: 1.4;
    margin-bottom: 12px;
  }
  .founder-quote-attr {
    font-size: 11px; letter-spacing: .15em; text-transform: uppercase;
    color: rgba(245,166,35,0.6);
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
  }

  /* pan-india presence */
  .presence-card {
    background: #0d1526;
    border: 1.5px solid rgba(245,166,35,0.16);
    border-radius: 14px;
    padding: 32px 24px;
    position: relative;
    overflow: hidden;
  }
  .presence-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--accent), rgba(245,166,35,0.3));
    border-radius: 14px 14px 0 0;
  }
  .presence-cities {
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px;
  }
  .city-tag {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 4px;
    padding: 6px 12px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    color: rgba(200,220,245,0.75);
    transition: background .2s, border-color .2s;
  }
  .city-tag:hover {
    background: rgba(245,166,35,0.12);
    border-color: rgba(245,166,35,0.3);
    color: var(--accent);
  }
  .city-tag::before {
    content: '📍';
    font-size: 10px;
  }

  @media (min-width: 600px) {
    .vm-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 20px; }
    .clients-grid { grid-template-columns: repeat(3, 1fr); }
    .founder-inner {
      display: grid;
      grid-template-columns: 280px 1fr;
    }
    .founder-img-wrap {
      min-height: 100%;
      height: auto;
    }
    .founder-img-wrap img {
      width: 100%; height: 100%; min-height: 460px;
    }
    .founder-img-overlay {
      top: 0; bottom: 0; left: auto; right: 0; width: 60px; height: auto;
      background: linear-gradient(90deg, transparent, #ffffff);
    }
  }
`;

const MARQUEE_ITEMS = [
  "Packaging Machinery","Pharmaceutical","Food & Beverage",
  "Manufacturing","Export Quality","ISO Certified",
  "Smart Automation","Custom Solutions","Established 2011",
  "Pan India Presence","200+ Projects","9+ Clients",
];

const CLIENTS = [
  { icon: "💊", name: "Cipla Ltd", sector: "Pharmaceutical" },
  { icon: "🧴", name: "Marico", sector: "FMCG" },
  { icon: "🌾", name: "ITC Agro", sector: "Food & Agri" },
  { icon: "🏭", name: "Godrej Industries", sector: "Manufacturing" },
  { icon: "🥛", name: "Amul Co-op", sector: "Dairy & Food" },
  { icon: "⚗️", name: "Sun Pharma", sector: "Pharmaceutical" },
];

const CLIENT_ICON_COLORS = [
  { bg: "rgba(17,24,39,0.06)", border: "rgba(17,24,39,0.12)" },
  { bg: "rgba(245,166,35,0.10)", border: "rgba(245,166,35,0.25)" },
  { bg: "rgba(17,24,39,0.06)", border: "rgba(17,24,39,0.12)" },
  { bg: "rgba(245,166,35,0.10)", border: "rgba(245,166,35,0.25)" },
  { bg: "rgba(17,24,39,0.06)", border: "rgba(17,24,39,0.12)" },
  { bg: "rgba(245,166,35,0.10)", border: "rgba(245,166,35,0.25)" },
];

const CITIES = [
  "Mumbai", "Pune", "Delhi NCR", "Ahmedabad", "Surat",
  "Hyderabad", "Chennai", "Bengaluru", "Kolkata", "Nagpur",
  "Nashik", "Vadodara",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(target, duration = 1400, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const num = parseInt(target);
    const step = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(prog * num));
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return val;
}

function StatCard({ value, label, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const num = parseInt(value);
  const suffix = value.replace(String(num), "");
  const counted = useCounter(num, 1400, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="val">{visible ? counted : 0}<span>{suffix}</span></div>
      <div className="lbl">{label}</div>
    </div>
  );
}

function WhyCard({ icon, title, desc, delay = 0 }) {
  return (
    <div className="why-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="icon-wrap">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-wrap" style={{ padding: "14px 0" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />{item}
          </div>
        ))}
      </div>
    </div>
  );
}

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── FOUNDER SECTION ── */
function FounderSection() {
  return (
    <section className="founder-section">
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        <div className="section-label reveal">Leadership</div>
        <h2
          className="reveal reveal-d1"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(30px, 6vw, 48px)",
            fontWeight: 900, lineHeight: 1.05,
            color: "var(--blue-dark)", textTransform: "uppercase",
            letterSpacing: "-.01em", marginBottom: 32,
          }}
        >
          The Vision<br />
          <span style={{ color: "#f5a623" }}>Behind The Machine.</span>
        </h2>

        <div className="founder-card reveal reveal-d2">
          <div className="founder-inner">

            {/* Image */}
            <div className="founder-img-wrap">
              <img
                src="/ceo.jpg"
                alt="Founder & CEO — Suntech Packaging"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.style.background = "#0d1526";
                  e.target.parentNode.style.minHeight = "220px";
                  const placeholder = document.createElement("div");
                  placeholder.style.cssText = "display:flex;flex-direction:column;align-items:center;justify-content:center;height:220px;gap:12px;";
                  placeholder.innerHTML = '<div style="font-size:64px;">👷</div><div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(245,166,35,0.6);">Photo Coming Soon</div>';
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
              <div className="founder-img-overlay" />
            </div>

            {/* Body */}
            <div className="founder-body">
              <div className="founder-role-badge">Founder &amp; CEO</div>

              <div className="founder-name">Shrinivas Reddy</div>
              <div className="founder-title">Founder &amp; Chief Executive Officer</div>

              <div className="founder-divider" />

              <p className="founder-bio">
                With over <strong style={{ color: "var(--blue-dark)" }}>14 years</strong> of deep-rooted expertise in industrial
                packaging machinery, Shrinivas Reddy founded Suntech with one conviction —
                that Indian manufacturers deserve world-class automation without
                world-class price tags. Under his leadership, Suntech has grown from
                a single workshop to a trusted name across 9+ industries and 12+ cities.
                His hands-on approach to engineering and relentless focus on after-sales
                support have become the DNA of every machine the company builds.
              </p>

              {/* Mini stats */}
              <div className="founder-stats">
                <div className="founder-stat">
                  <div className="founder-stat-val">14<span>+</span></div>
                  <div className="founder-stat-lbl">Years Experience</div>
                </div>
                <div className="founder-stat">
                  <div className="founder-stat-val">200<span>+</span></div>
                  <div className="founder-stat-lbl">Projects Delivered</div>
                </div>
                <div className="founder-stat">
                  <div className="founder-stat-val">9<span>+</span></div>
                  <div className="founder-stat-lbl">Industries Served</div>
                </div>
              </div>

              {/* Quote */}
              <div className="founder-quote">
                <span className="founder-quote-mark">"</span>
                <p className="founder-quote-text">
                  A machine is only as good as the team that stands behind it — we don't just build equipment, we build partnerships.
                </p>
                <div className="founder-quote-attr">— Shrinivas Reddy, Founder &amp; CEO</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PAN INDIA PRESENCE ── */
function PanIndiaSection() {
  return (
    <section style={{ padding: "0 24px 72px", background: "#ffffff" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        <div className="section-label reveal">Our Reach</div>
        <h2
          className="reveal reveal-d1"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(30px, 6vw, 48px)",
            fontWeight: 900, lineHeight: 1.05,
            color: "var(--blue-dark)", textTransform: "uppercase",
            letterSpacing: "-.01em", marginBottom: 32,
          }}
        >
          Pan India<br />
          <span style={{ color: "#f5a623" }}>Presence.</span>
        </h2>

        <div className="presence-card reveal reveal-d2">

          {/* Header row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(36px, 8vw, 52px)",
                fontWeight: 900, lineHeight: 1,
                color: "#ffffff",
                marginBottom: 6,
              }}>
                12<span style={{ color: "#f5a623" }}>+</span>
              </div>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 12, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase",
                color: "rgba(200,220,245,0.5)",
              }}>Cities Across India</div>
            </div>

            <div style={{ display: "flex", gap: 20 }}>
              {[
                { val: "9+", lbl: "Industries" },
                { val: "200+", lbl: "Projects" },
              ].map(({ val, lbl }) => (
                <div key={lbl} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 900,
                    color: "#f5a623", lineHeight: 1, marginBottom: 4,
                  }}>{val}</div>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 10, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase",
                    color: "rgba(200,220,245,0.45)",
                  }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "20px 0" }} />

          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 12, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase",
            color: "rgba(245,166,35,0.6)", marginBottom: 4,
          }}>
            Active Locations
          </div>

          <div className="presence-cities">
            {CITIES.map((city) => (
              <span className="city-tag" key={city}>{city}</span>
            ))}
          </div>

          
        </div>

      </div>
    </section>
  );
}

export default function About() {
  useReveal();

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      <div style={{ minHeight: "100vh", overflowX: "hidden", background: "#ffffff" }}>

        {/* ── HERO ── */}
        <section style={{ background: "#0d1526", position: "relative", padding: "100px 24px 80px", overflow: "hidden" }}>
          <div className="hero-grid-bg" />

          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 240, height: 240,
            background: "linear-gradient(225deg, rgba(245,166,35,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", textAlign: "center" }}>

            <div className="reveal" style={{ marginBottom: 20 }}>
              <span className="tag-pill" style={{ background: "rgba(245,166,35,0.12)", border: "1.5px solid rgba(245,166,35,0.3)", color: "#f5a623" }}>
                Established 2011
              </span>
            </div>

            <h1
              className="reveal reveal-d1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(52px, 12vw, 88px)",
                fontWeight: 900, lineHeight: 1.0,
                color: "#fff", textTransform: "uppercase",
                letterSpacing: "-.01em", marginBottom: 24,
              }}
            >
              About<br />
              <span style={{ color: "#f5a623" }}>SunTech</span>
            </h1>

            <p
              className="reveal reveal-d2"
              style={{
                fontSize: 16, lineHeight: 1.75,
                color: "rgba(192,215,245,0.72)",
                marginBottom: 40, maxWidth: 440, margin: "0 auto 40px",
                fontWeight: 300,
              }}
            >
              Engineering the future of packaging — with decades of precision, innovation, and trust.
            </p>

            <div className="reveal reveal-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <button className="cta-btn">Our Story <ArrowIcon /></button>
              <button className="cta-btn-ghost">View Projects</button>
            </div>

          </div>
        </section>

        {/* ── MARQUEE ── */}
        <Marquee />

        {/* ── WHO WE ARE ── */}
        <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto", background: "#ffffff" }}>
          <div className="section-label reveal">Who We Are</div>

          <h2
            className="reveal reveal-d1"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(32px, 7vw, 52px)",
              fontWeight: 900, lineHeight: 1.05,
              color: "#111827", textTransform: "uppercase",
              letterSpacing: "-.01em", marginBottom: 40,
            }}
          >
            Precision. Scale.<br />
            <span style={{ color: "#111827", fontStyle: "italic" }}>Reliability.</span>
          </h2>

          <div>
            <div className="value-row reveal reveal-d1">
              <div className="dot" />
              <p>
                <strong>Who We Are</strong>
                Suntech is a leading manufacturer of packaging machinery,
                delivering cutting-edge solutions for food, pharmaceutical, and industrial
                sectors across India and beyond.
              </p>
            </div>
            <div className="value-row reveal reveal-d2">
              <div className="dot" style={{ background: "#f5a623", borderColor: "rgba(245,166,35,0.3)" }} />
              <p>
                <strong>Our Difference</strong>
                Efficient, durable, high-performance machines engineered
                to help businesses scale production without compromise.
              </p>
            </div>
          </div>
        </section>

        {/* ── TAGLINE BANNER ── */}
        <section style={{ padding: "0 24px 64px", background: "#ffffff" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div
              className="reveal"
              style={{
                background: "#0d1526",
                borderRadius: 14,
                border: "1.5px solid rgba(245,166,35,0.18)",
                padding: "44px 36px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#f5a623", borderRadius: "14px 14px 0 0" }} />

              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 72, fontWeight: 900, lineHeight: 0.7,
                color: "rgba(245,166,35,0.18)",
                marginBottom: 16, position: "relative", zIndex: 1,
                userSelect: "none",
              }}>"</div>

              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(22px, 5.5vw, 34px)",
                fontWeight: 800, fontStyle: "italic",
                lineHeight: 1.25, color: "#ffffff",
                position: "relative", zIndex: 1,
                marginBottom: 20, letterSpacing: "-.01em",
              }}>
                We don't just deliver machines —<br />
                <span style={{ color: "#f5a623" }}>we engineer the future of production.</span>
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, position: "relative", zIndex: 1 }}>
                <div style={{ width: 28, height: 1.5, background: "rgba(245,166,35,0.4)", borderRadius: 2 }} />
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 11, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase",
                  color: "rgba(245,166,35,0.6)",
                }}>
                  Suntech Packaging · Est. 2011
                </span>
                <div style={{ width: 28, height: 1.5, background: "rgba(245,166,35,0.4)", borderRadius: 2 }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section style={{ padding: "0 24px 72px", background: "#ffffff" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>

            <div className="section-label reveal">Our Purpose</div>
            <h2
              className="reveal reveal-d1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(30px, 6vw, 48px)",
                fontWeight: 900, lineHeight: 1.05,
                color: "var(--blue-dark)", textTransform: "uppercase",
                letterSpacing: "-.01em", marginBottom: 32,
              }}
            >
              What Drives<br />
              <span style={{ color: "#f5a623" }}>Everything We Build.</span>
            </h2>

            <div className="vm-grid reveal reveal-d2" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              <div className="vm-card vm-card-vision">
                <div className="vm-icon-wrap"><span style={{ fontSize: 26 }}>🔭</span></div>
                <div className="vm-badge">Vision</div>
                <div className="vm-heading">India's Most Trusted<br />Packaging Partner</div>
                <div className="vm-tagline">"Building machines that build businesses — one shift at a time."</div>
                <p className="vm-body">
                  To be the most reliable and innovative packaging machinery manufacturer in India —
                  empowering manufacturers at every scale with technology that is precise, durable, and built for what comes next.
                </p>
                <ul className="vm-points">
                  <li>Lead packaging automation across India and South Asia</li>
                  <li>Set the benchmark for after-sales service and machine uptime</li>
                  <li>Make export-grade machinery accessible to manufacturers of every size</li>
                </ul>
              </div>

              <div className="vm-card vm-card-mission">
                <div className="vm-icon-wrap"><span style={{ fontSize: 26 }}>🎯</span></div>
                <div className="vm-badge">Mission</div>
                <div className="vm-heading">Precision Engineering,<br />Zero Compromise</div>
                <div className="vm-tagline">"Cost-effective. Low maintenance. Maximum output — every single shift."</div>
                <p className="vm-body">
                  To deliver industrial-grade packaging machinery that reduces downtime, lowers operational costs, and maximises
                  production output — backed by continuous R&amp;D and a team that stays with you long after installation.
                </p>
                <ul className="vm-points">
                  <li>Engineer every machine to exceed international quality standards</li>
                  <li>Provide end-to-end support from installation to yearly maintenance</li>
                  <li>Continuously innovate through research and real customer feedback</li>
                  <li>Deliver on-time, every time — with zero excuses</li>
                </ul>
              </div>

            </div>

            {/* Core values strip */}
            <div
              className="reveal reveal-d3"
              style={{
                marginTop: 20,
                background: "var(--white)",
                border: "1.5px solid var(--border)",
                borderRadius: 10,
                padding: "24px 20px",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px 12px",
              }}
            >
              {[
                { icon: "⚙️", label: "Engineering First", bg: "rgba(17,24,39,0.06)", border: "rgba(17,24,39,0.12)" },
                { icon: "🤝", label: "Customer Trust",    bg: "rgba(245,166,35,0.10)", border: "rgba(245,166,35,0.25)" },
                { icon: "🔬", label: "Continuous R&D",   bg: "rgba(17,24,39,0.06)", border: "rgba(17,24,39,0.12)" },
                { icon: "🛡️", label: "Zero Downtime",    bg: "rgba(245,166,35,0.10)", border: "rgba(245,166,35,0.25)" },
              ].map(({ icon, label, bg, border }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 7, flexShrink: 0,
                    background: bg, border: `1.5px solid ${border}`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  }}>{icon}</div>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 13, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase",
                    color: "var(--blue-dark)",
                  }}>{label}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: "0 24px 72px", background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", paddingTop: 56 }}>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
              <div className="section-label reveal" style={{ marginBottom: 0 }}>By The Numbers</div>
              <div className="reveal" style={{
                background: "var(--blue-dark)", color: "rgba(255,255,255,0.5)",
                padding: "6px 16px", borderRadius: "4px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase",
              }}>
                Since 2011
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              <StatCard value="14+"  label="Years Experience"     delay={0}   />
              <StatCard value="200+" label="Projects Completed"   delay={0.1} />
              <StatCard value="9+"   label="Industries Served"    delay={0.2} />
              <StatCard value="12+"  label="Cities Pan India"     delay={0.3} />
            </div>
          </div>
        </section>

        {/* ── FOUNDER / CEO ── */}
        <FounderSection />

        {/* ── PAN INDIA PRESENCE ── */}
        <PanIndiaSection />

        {/* ── CLIENTS ── */}
        <section style={{ padding: "0 24px 72px", background: "#ffffff", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", paddingTop: 56 }}>

            <div className="section-label reveal">Our Clients</div>
            <h2
              className="reveal reveal-d1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(28px, 6vw, 44px)",
                fontWeight: 900, lineHeight: 1.05,
                color: "var(--blue-dark)", textTransform: "uppercase",
                letterSpacing: "-.01em", marginBottom: 32,
              }}
            >
              Trusted By<br />
              <span style={{ color: "#f5a623" }}>Industry Leaders.</span>
            </h2>

            <div className="clients-grid reveal reveal-d2">
              {CLIENTS.map((c, i) => (
                <div className="client-card" key={c.name}>
                  <div className="client-icon" style={{ background: CLIENT_ICON_COLORS[i].bg, border: `1.5px solid ${CLIENT_ICON_COLORS[i].border}`, borderRadius: 8 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="client-name">{c.name}</div>
                    <div className="client-sector">{c.sector}</div>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="reveal reveal-d3"
              style={{
                marginTop: 20, textAlign: "center",
                fontSize: 13, color: "var(--text-muted)",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: ".08em", textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              + 90 more manufacturers across India
            </p>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section style={{ padding: "0 24px 72px", background: "#ffffff", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", paddingTop: 56 }}>

            <div style={{ marginBottom: 40 }}>
              <div className="section-label reveal">Why Choose Us</div>
              <h2
                className="reveal reveal-d1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(30px, 6vw, 48px)",
                  fontWeight: 900, lineHeight: 1.05,
                  color: "var(--blue-dark)", textTransform: "uppercase",
                  letterSpacing: "-.01em",
                }}
              >
                Built Different,<br />
                <span style={{ color: "var(--blue-brand)" }}>By Design.</span>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <WhyCard icon="⚙️" title="International Quality Standards" desc="Every machine is engineered with precision-grade materials and validated against global manufacturing benchmarks." delay={0} />
              <WhyCard icon="⚡" title="Smart Automation" desc="Proprietary control systems and IoT-ready architecture bring modern intelligence to production lines." delay={0.1} />
              <WhyCard icon="🛡️" title="End-to-End Support" desc="From installation to maintenance, our dedicated service team ensures zero downtime and maximum output." delay={0.2} />
              <WhyCard icon="🌍" title="Export-Grade Manufacturing" desc="Designed for global deployment — compliant with CE, ISO, and regional standards across 12+ cities." delay={0.3} />
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BAND ── */}
        <section style={{ padding: "0 24px 64px", background: "#ffffff" }}>
          <div
            style={{
              maxWidth: 760, margin: "0 auto",
              background: "#0d1526",
              borderRadius: 14,
              border: "1.5px solid rgba(245,166,35,0.14)",
              padding: "56px 40px",
              textAlign: "center",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#f5a623" }} />

            <div className="reveal" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(28px, 6vw, 44px)",
              fontWeight: 900, lineHeight: 1.1,
              color: "#fff", textTransform: "uppercase",
              marginBottom: 16, position: "relative", zIndex: 1,
            }}>
              Ready to Scale<br />
              <span style={{ color: "#f5a623" }}>Your Production?</span>
            </div>

            <p className="reveal reveal-d1" style={{
              color: "rgba(192,215,245,0.65)",
              fontSize: 15, marginBottom: 32,
              lineHeight: 1.7, position: "relative", zIndex: 1,
              fontWeight: 300,
            }}>
              Talk to our engineering team and discover the right solution for your line.
            </p>

            <div className="reveal reveal-d2" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button className="cta-btn">Get in Touch <ArrowIcon /></button>
              <button className="cta-btn-ghost">View Brochure</button>
            </div>
          </div>
        </section>

        {/* ── FOOTER NOTE ── */}
        <footer style={{
          borderTop: "2px solid #f5a623",
          background: "#0d1526",
          padding: "20px 24px",
          textAlign: "center",
          color: "rgba(192,215,245,0.4)",
          fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase",
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
        }}>
          © {new Date().getFullYear()} Suntech Packaging · All Rights Reserved
        </footer>

      </div>
    </>
  );
}