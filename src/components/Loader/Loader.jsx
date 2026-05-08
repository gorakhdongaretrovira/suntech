import { useEffect, useState, useRef } from "react";

/* ════════════════════════════════════════════
   PROFESSIONAL MANUFACTURING LOADER
   Dark steel · Industrial · Precision
════════════════════════════════════════════ */

const MSGS = [
  "Initializing systems",
  "Loading components",
  "Calibrating precision",
  "Syncing modules",
  "Systems ready",
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ══ ROOT ══ */
  .ld {
    position: fixed; inset: 0; z-index: 9999;
    background: #080C14;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Barlow', sans-serif;
    overflow: hidden;
  }

  /* ── Exit: vertical split wipe ── */
  .ld.ld-out {
    animation: ldExit 1s cubic-bezier(0.76,0,0.24,1) forwards;
    pointer-events: none;
  }
  @keyframes ldExit {
    0%   { opacity:1; transform: scaleY(1); }
    100% { opacity:0; transform: scaleY(0); transform-origin: top; }
  }

  /* ══ BG LAYERS ══ */

  /* Steel plate texture via repeating lines */
  .ld-steel {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(255,255,255,0.012) 3px,
        rgba(255,255,255,0.012) 4px
      );
  }

  /* Fine grid */
  .ld-grid {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%);
  }

  /* Central radial glow — deep orange */
  .ld-glow {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 48% 42% at 50% 50%,
        rgba(245,140,20,0.07) 0%,
        rgba(245,140,20,0.02) 50%,
        transparent 70%),
      radial-gradient(ellipse 70% 60% at 50% 50%,
        rgba(15,40,80,0.40) 0%,
        transparent 100%);
    animation: ldGlow 6s ease-in-out infinite;
  }
  @keyframes ldGlow {
    0%,100% { opacity:0.8; }
    50%     { opacity:1; }
  }

  /* Horizontal accent lines */
  .ld-hline {
    position: absolute; left:0; right:0; height:1px;
    z-index:1; pointer-events:none;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(245,140,20,0.15) 25%,
      rgba(245,140,20,0.22) 50%,
      rgba(245,140,20,0.15) 75%,
      transparent 100%
    );
  }
  .ld-hline-t { top: clamp(60px,10vh,100px); }
  .ld-hline-b { bottom: clamp(60px,10vh,100px); }

  /* Vertical accent lines */
  .ld-vline {
    position: absolute; top:0; bottom:0; width:1px;
    z-index:1; pointer-events:none;
    background: linear-gradient(to bottom,
      transparent 0%,
      rgba(255,255,255,0.04) 25%,
      rgba(255,255,255,0.06) 50%,
      rgba(255,255,255,0.04) 75%,
      transparent 100%
    );
  }
  .ld-vline-l { left: clamp(40px,8vw,80px); }
  .ld-vline-r { right: clamp(40px,8vw,80px); }

  /* Corner brackets — engineering style */
  .ld-bracket {
    position: absolute; z-index:2; pointer-events:none;
    width: clamp(28px,5vw,44px);
    height: clamp(28px,5vw,44px);
  }
  .ld-bracket svg { width:100%; height:100%; }
  .ld-bracket-tl { top:clamp(18px,3vw,30px);  left:clamp(18px,3vw,30px);  }
  .ld-bracket-tr { top:clamp(18px,3vw,30px);  right:clamp(18px,3vw,30px); transform:scaleX(-1); }
  .ld-bracket-bl { bottom:clamp(18px,3vw,30px); left:clamp(18px,3vw,30px);  transform:scaleY(-1); }
  .ld-bracket-br { bottom:clamp(18px,3vw,30px); right:clamp(18px,3vw,30px); transform:scale(-1); }

  /* Scanning line across full screen */
  .ld-scanner {
    position: absolute; left:0; right:0; height:1px;
    z-index:3; pointer-events:none;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(245,140,20,0.0) 10%,
      rgba(245,140,20,0.30) 50%,
      rgba(245,140,20,0.0) 90%,
      transparent 100%
    );
    animation: ldScanner 4s ease-in-out infinite;
  }
  @keyframes ldScanner {
    0%   { top:10%;  opacity:0; }
    5%   { opacity:1; }
    95%  { opacity:0.6; }
    100% { top:90%;  opacity:0; }
  }

  /* ══ BODY ══ */
  .ld-body {
    position:relative; z-index:10;
    display:flex; flex-direction:column; align-items:center;
    width: min(92vw, 360px);
    animation: ldBodyIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both;
  }
  @keyframes ldBodyIn {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ══ LOGO UNIT ══ */
  .ld-unit {
    position:relative;
    width: clamp(140px,38vw,172px);
    height: clamp(140px,38vw,172px);
    margin-bottom: clamp(28px,5vw,38px);
    display:flex; align-items:center; justify-content:center;
  }

  /* Outer dashed engineering ring */
  .ld-ro {
    position:absolute; inset:0; border-radius:50%;
    border: 1px dashed rgba(255,255,255,0.10);
    animation: ldSpin 22s linear infinite;
  }
  /* 4 tick marks */
  .ld-ro::before,.ld-ro::after {
    content:'';
    position:absolute;
    background: rgba(245,140,20,0.55);
    border-radius:1px;
  }
  .ld-ro::before { top:50%; left:-4px; width:8px; height:1.5px; }
  .ld-ro::after  { top:-4px; left:50%; width:1.5px; height:8px; transform:translateX(-50%); }

  /* Mid orange ring */
  .ld-rm {
    position:absolute; inset:14px; border-radius:50%;
    border: 1px solid rgba(245,140,20,0.20);
    animation: ldSpin 14s linear infinite reverse;
  }
  .ld-rm::before,.ld-rm::after {
    content:'';
    position:absolute;
    width:5px; height:5px; border-radius:50%;
    background:#F58C14; opacity:0.9;
    box-shadow: 0 0 8px #F58C14;
    top:50%; left:-2.5px;
  }
  .ld-rm::after { top:-2.5px; left:50%; transform:translateX(-50%); }

  @keyframes ldSpin { to { transform:rotate(360deg); } }

  /* Inner logo box — dark steel */
  .ld-box {
    position:absolute; inset:26px; border-radius:50%;
    background: linear-gradient(145deg, #111827 0%, #0D1420 100%);
    border: 1px solid rgba(255,255,255,0.10);
    display:flex; align-items:center; justify-content:center;
    overflow:hidden;
    box-shadow:
      0 0 0 1px rgba(245,140,20,0.08),
      0 12px 40px rgba(0,0,0,0.70),
      inset 0 1px 0 rgba(255,255,255,0.07),
      inset 0 -1px 0 rgba(0,0,0,0.40);
  }
  .ld-box::before {
    content:'';
    position:absolute; inset:0; border-radius:50%;
    background: radial-gradient(circle at 50% 25%, rgba(255,255,255,0.06) 0%, transparent 55%);
    pointer-events:none;
  }

  .ld-logo {
    width:70%; height:70%;
    object-fit:contain;
    position:relative; z-index:1;
    opacity:0;
    animation: ldLogoIn 0.8s cubic-bezier(0.34,1.4,0.64,1) 0.55s forwards;
    filter: brightness(1.05) drop-shadow(0 2px 10px rgba(0,0,0,0.40));
  }
  @keyframes ldLogoIn {
    from { opacity:0; transform:scale(0.70); }
    to   { opacity:1; transform:scale(1); }
  }

  /* Scan line inside logo box */
  .ld-scan {
    position:absolute; inset:26px; border-radius:50%;
    overflow:hidden; pointer-events:none; z-index:5;
  }
  .ld-scan::after {
    content:'';
    position:absolute; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,rgba(245,140,20,0.55),transparent);
    opacity:0;
    animation: ldScanBox 2.4s ease 0.9s infinite;
  }
  @keyframes ldScanBox {
    0%  { top:0%;   opacity:0; }
    8%  { opacity:0.9; }
    92% { opacity:0.5; }
    100%{ top:100%; opacity:0; }
  }

  /* Live status dot */
  .ld-dot {
    position:absolute; bottom:24px; right:24px;
    width:10px; height:10px; border-radius:50%;
    background:#22C55E;
    box-shadow: 0 0 0 2px #0D1420, 0 0 12px rgba(34,197,94,0.50);
    z-index:6;
    animation: ldDotPulse 2s ease-in-out infinite;
  }
  @keyframes ldDotPulse {
    0%,100%{ box-shadow: 0 0 0 2px #0D1420, 0 0 8px rgba(34,197,94,0.40); }
    50%    { box-shadow: 0 0 0 2px #0D1420, 0 0 22px rgba(34,197,94,0.65), 0 0 40px rgba(34,197,94,0.20); }
  }

  /* ══ WORDMARK ══ */
  .ld-name {
    font-family:'Barlow Condensed',sans-serif;
    font-size: clamp(28px,8vw,38px);
    font-weight:900; letter-spacing:0.22em;
    text-transform:uppercase;
    color:#F0EDE8;
    line-height:1;
    margin-bottom:8px;
    opacity:0;
    animation: ldFadeUp 0.55s ease 1.1s forwards;
    display:flex; align-items:center; gap:2px;
  }
  .ld-name-plain { color:#F0EDE8; }
  .ld-name-accent { color:#F58C14; }

  /* ── Divider ── */
  .ld-div {
    width:48px; height:2px;
    background:linear-gradient(90deg,transparent,rgba(245,140,20,0.60),transparent);
    margin: 0 auto 10px;
    opacity:0;
    animation: ldFadeUp 0.5s ease 1.25s forwards;
  }

  /* Tagline */
  .ld-tag {
    font-family:'Barlow Condensed',sans-serif;
    font-size: clamp(9px,2.2vw,10.5px);
    font-weight:600; letter-spacing:0.32em;
    text-transform:uppercase;
    color:rgba(240,237,232,0.28);
    margin-bottom:34px;
    opacity:0;
    animation: ldFadeUp 0.55s ease 1.4s forwards;
  }

  @keyframes ldFadeUp {
    from { opacity:0; transform:translateY(9px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ══ PROGRESS ══ */
  .ld-prog {
    width:100%;
    opacity:0;
    animation: ldFadeUp 0.5s ease 1.6s forwards;
  }

  /* Segment indicators */
  .ld-segs {
    display:flex; gap:3px; margin-bottom:10px;
  }
  .ld-seg {
    flex:1; height:2px; border-radius:1px;
    background:rgba(255,255,255,0.06);
    transition:background 0.3s ease, box-shadow 0.3s ease;
  }
  .ld-seg.on {
    background:#F58C14;
    box-shadow:0 0 6px rgba(245,140,20,0.45);
  }

  /* Track */
  .ld-track {
    position:relative; height:2px;
    background:rgba(255,255,255,0.06);
    border-radius:2px; overflow:visible;
    margin-bottom:13px;
  }
  /* tick marks */
  .ld-track::before {
    content:'';
    position:absolute; inset:0;
    background-image:repeating-linear-gradient(
      90deg,
      transparent 0px, transparent 19px,
      rgba(255,255,255,0.05) 19px, rgba(255,255,255,0.05) 20px
    );
  }
  .ld-fill {
    position:absolute; top:0; left:0; height:100%;
    background:linear-gradient(90deg,rgba(245,140,20,0.6),#F58C14);
    border-radius:2px;
    transition:width 0.055s linear;
    box-shadow:0 0 10px rgba(245,140,20,0.45);
  }
  .ld-cursor {
    position:absolute; top:50%;
    transform:translate(-50%,-50%);
    width:8px; height:8px; border-radius:50%;
    background:#F5A623;
    box-shadow:0 0 0 2px rgba(245,140,20,0.18), 0 0 14px rgba(245,140,20,0.55);
    transition:left 0.055s linear;
    z-index:2;
  }

  /* Footer */
  .ld-foot {
    display:flex; justify-content:space-between;
    align-items:center; gap:8px;
  }
  .ld-msg {
    font-family:'Barlow Condensed',sans-serif;
    font-size:clamp(8.5px,2vw,10px); font-weight:600;
    letter-spacing:0.24em; text-transform:uppercase;
    color:rgba(240,237,232,0.20);
    flex:1; min-width:0; overflow:hidden;
    text-overflow:ellipsis; white-space:nowrap;
  }
  .ld-pct {
    font-family:'Barlow Condensed',sans-serif;
    font-weight:700; font-size:clamp(13px,3.5vw,16px);
    letter-spacing:0.08em;
    color:rgba(245,140,20,0.75);
    flex-shrink:0;
  }

  /* ══ ARC PROGRESS SVG ══ */
  .ld-arc {
    position:absolute; inset:14px;
    border-radius:50%; pointer-events:none;
  }
`;

/* ─── ARC SVG ─────────────────────────────────────────────── */
function ArcProgress({ pct }) {
  const size = 200, cx = 100, cy = 100, r = 80;
  const circ   = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);
  return (
    <svg className="ld-arc" viewBox={`0 0 ${size} ${size}`}>
      {/* ghost track */}
      <circle cx={cx} cy={cy} r={r}
        fill="none" stroke="rgba(245,140,20,0.08)" strokeWidth="1.5"/>
      {/* orange arc */}
      <circle cx={cx} cy={cy} r={r}
        fill="none" stroke="#F58C14" strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition:"stroke-dashoffset 0.055s linear", opacity:0.60 }}
      />
      {/* inner fine ring */}
      <circle cx={cx} cy={cy} r={r - 9}
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>
    </svg>
  );
}

/* ─── BRACKET SVG ─────────────────────────────────────────── */
const Bracket = () => (
  <svg viewBox="0 0 44 44" fill="none">
    <path d="M4 26 L4 4 L26 4"
      stroke="rgba(245,140,20,0.28)" strokeWidth="1.2" strokeLinecap="round"/>
    {/* small dot at corner */}
    <circle cx="4" cy="4" r="2" fill="rgba(245,140,20,0.40)"/>
    {/* tick */}
    <line x1="4" y1="14" x2="8" y2="14"
      stroke="rgba(245,140,20,0.18)" strokeWidth="0.8"/>
    <line x1="14" y1="4" x2="14" y2="8"
      stroke="rgba(245,140,20,0.18)" strokeWidth="0.8"/>
  </svg>
);

/* ─── COMPONENT ─────────────────────────────────────────── */
export default function Loader({ onFinish }) {
  const [pct,  setPct]  = useState(0);
  const [msgI, setMsgI] = useState(0);
  const [out,  setOut]  = useState(false);
  const rafRef          = useRef(null);

  useEffect(() => {
    const DURATION = 3200;
    const start    = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const raw     = Math.min(elapsed / DURATION, 1);
      const eased   = 1 - Math.pow(1 - raw, 3);
      const p       = Math.round(eased * 100);

      setPct(p);
      setMsgI(Math.min(MSGS.length - 1, Math.floor(eased * MSGS.length)));

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setOut(true);
          setTimeout(() => onFinish?.(), 1000);
        }, 600);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onFinish]);

  const segs = [0, 20, 40, 60, 80];

  return (
    <>
      <style>{css}</style>
      <div className={`ld${out ? " ld-out" : ""}`}>

        {/* BG layers */}
        <div className="ld-steel"/>
        <div className="ld-grid"/>
        <div className="ld-glow"/>

        {/* Horizontal accent lines */}
        <div className="ld-hline ld-hline-t"/>
        <div className="ld-hline ld-hline-b"/>

        {/* Vertical lines */}
        <div className="ld-vline ld-vline-l"/>
        <div className="ld-vline ld-vline-r"/>

        {/* Engineering brackets */}
        <div className="ld-bracket ld-bracket-tl"><Bracket/></div>
        <div className="ld-bracket ld-bracket-tr"><Bracket/></div>
        <div className="ld-bracket ld-bracket-bl"><Bracket/></div>
        <div className="ld-bracket ld-bracket-br"><Bracket/></div>

        {/* Full-screen scanner */}
        <div className="ld-scanner"/>

        {/* BODY */}
        <div className="ld-body">

          {/* LOGO UNIT */}
          <div className="ld-unit">
            <div className="ld-ro"/>
            <div className="ld-rm"/>
            <ArcProgress pct={pct}/>
            <div className="ld-box">
              <img
                className="ld-logo"
                src="/logo.png"
                alt="SunTech"
                draggable={false}
              />
            </div>
            <div className="ld-scan"/>
            <div className="ld-dot"/>
          </div>

          {/* WORDMARK */}
          <p className="ld-name">
            <span className="ld-name-plain">Sun</span>
            <span className="ld-name-accent">Tech</span>
          </p>

          {/* Divider */}
          <div className="ld-div"/>
                 
          {/* Tagline */}
          <p className="ld-tag">Precision Packaging Systems</p>
        
          {/* PROGRESS */}
          <div className="ld-prog">
            <div className="ld-segs">
              {segs.map((threshold, i) => (
                <div key={i} className={`ld-seg${pct >= threshold ? " on" : ""}`}/>
              ))}
            </div>
            <div className="ld-track">
              <div className="ld-fill"   style={{ width:`${pct}%` }}/>
              <div className="ld-cursor" style={{ left:`${pct}%` }}/>
            </div>
            <div className="ld-foot">
              <span className="ld-msg">{MSGS[msgI]}</span>
              <span className="ld-pct">{String(pct).padStart(3,"0")}%</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}