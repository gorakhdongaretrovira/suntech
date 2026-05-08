import { useEffect, useRef, useState } from "react";

const segments = [
  { id: 1,  label: "Packing\nMachine",       angle: 0   },
  { id: 2,  label: "Sealing\nMachine",       angle: 30  },
  { id: 3,  label: "Filling\nMachine",       angle: 60  },
  { id: 4,  label: "Coding\nMachine",        angle: 90  },
  { id: 5,  label: "Labelling\nMachine",     angle: 120 },
  { id: 6,  label: "Wrapping\nMachine",      angle: 150 },
  { id: 7,  label: "Shrinking\nMachine",     angle: 180 },
  { id: 8,  label: "Strapping\nMachine",     angle: 210 },
  { id: 9,  label: "Vacuum\nMachine",        angle: 240 },
  { id: 10, label: "Pulverizer\nMachine",    angle: 270 },
  { id: 11, label: "Food Processing\nMachine", angle: 300 },
  { id: 12, label: "Coding\nMachine",        angle: 330 },
];

const features = [
  {
    pos: "left",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h4M7 11h6" />
      </svg>
    ),
    title: "Infrastructure",
    desc: "3 sophisticated production units with modern machinery and QC systems.",
  },
  {
    pos: "left",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    title: "Trusted Brands",
    desc: "Marketed under recognized brands like Sampack, trusted across industries.",
  },
  {
    pos: "right",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Quality Standards",
    desc: "Compliant with international standards and regulations across all product lines.",
  },
  {
    pos: "right",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: "Market Presence",
    desc: "2 decades of experience with wide reach across India and global markets.",
  },
];

const N = 12;
const R_OUTER = 130;
const R_INNER = 52;
const GAP_DEG = 2;
const SLICE = 360 / N;

// Blue palette for segments
const COLORS = [
  "#111827","#1f2937","#111827","#1f2937",
  "#111827","#1f2937","#111827","#1f2937",
  "#111827","#1f2937","#111827","#1f2937",
];
const HOVER_COLOR = "#f5a623";

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function segmentPath(cx, cy, rInner, rOuter, startDeg, endDeg) {
  const s1 = polarToCartesian(cx, cy, rOuter, startDeg);
  const e1 = polarToCartesian(cx, cy, rOuter, endDeg);
  const s2 = polarToCartesian(cx, cy, rInner, endDeg);
  const e2 = polarToCartesian(cx, cy, rInner, startDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return [
    `M ${s1.x} ${s1.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${e1.x} ${e1.y}`,
    `L ${s2.x} ${s2.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${e2.x} ${e2.y}`,
    "Z",
  ].join(" ");
}

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null);
  const featureRefs = useRef([]);
  const wheelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("wcu--in"); }),
      { threshold: 0.1 }
    );
    featureRefs.current.forEach((el) => el && observer.observe(el));
    if (wheelRef.current) observer.observe(wheelRef.current);
    return () => observer.disconnect();
  }, []);

  const leftFeatures  = features.filter(f => f.pos === "left");
  const rightFeatures = features.filter(f => f.pos === "right");

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

        .wcu {
          background: var(--white);
          padding: 80px 0 96px;
          font-family: 'Barlow', sans-serif;
          overflow: hidden;
          border-top: 1px solid var(--border);
        }

        .wcu-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── HEADER ── */
        .wcu-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }

        .wcu-header-left { display: flex; flex-direction: column; gap: 10px; }

        .wcu-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand);
        }
        .wcu-eyebrow::before {
          content: '';
          width: 28px; height: 2px;
          background: var(--blue-brand); border-radius: 2px;
        }

        .wcu-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 900; color: var(--blue-dark);
          margin: 0; line-height: 1.0;
          letter-spacing: -.01em; text-transform: uppercase;
        }
        .wcu-title span { color: var(--blue-brand); }

        .wcu-subtitle {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.75; margin: 0; max-width: 440px; font-weight: 400;
        }

        /* ── BODY LAYOUT ── */
        .wcu-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 900px) {
          .wcu-body { grid-template-columns: 1fr auto 1fr; gap: 32px; }
        }
        @media (max-width: 899px) and (min-width: 600px) {
          .wcu-body { grid-template-columns: 1fr 1fr; }
          .wcu-wheel-wrap { grid-column: span 2; justify-self: center; }
        }

        /* ── FEATURE COLUMN ── */
        .wcu-col { display: flex; flex-direction: column; gap: 28px; }
        @media (min-width: 900px) {
          .wcu-col--left  { align-items: flex-end; text-align: right; }
          .wcu-col--right { align-items: flex-start; text-align: left; }
        }

        /* ── FEATURE CARD ── */
        .wcu-feat {
          display: flex; flex-direction: column; gap: 10px;
          opacity: 0; transform: translateY(18px);
          max-width: 220px;
          background: var(--off-white);
          border: 1.5px solid var(--border);
          border-radius: 10px; padding: 20px;
          transition: border-color .3s, box-shadow .3s, transform .3s;
          cursor: default;
        }
        .wcu-feat.wcu--in { animation: wcuFeatIn .5s ease forwards; }
        @keyframes wcuFeatIn { to { opacity: 1; transform: translateY(0); } }
        .wcu-feat:hover {
          border-color: var(--blue-brand);
          box-shadow: 0 8px 28px rgba(18,81,163,0.1);
          transform: translateY(-3px) !important;
        }

        .wcu-feat-icon-wrap {
          width: 44px; height: 44px; border-radius: 8px;
          background: var(--white);
          border: 1.5px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background .25s, border-color .25s;
        }
        .wcu-feat:hover .wcu-feat-icon-wrap {
          background: var(--blue-brand); border-color: var(--blue-brand);
        }
        .wcu-feat-icon-wrap svg {
          width: 20px; height: 20px; color: var(--blue-brand);
          transition: color .25s;
        }
        .wcu-feat:hover .wcu-feat-icon-wrap svg { color: #fff; }

        @media (min-width: 900px) {
          .wcu-col--left .wcu-feat { align-items: flex-end; }
          .wcu-col--left .wcu-feat-icon-wrap { align-self: flex-end; }
        }

        .wcu-feat-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 16px; font-weight: 800;
          color: var(--blue-dark); margin: 0;
          text-transform: uppercase; letter-spacing: .03em;
        }

        .wcu-feat-desc {
          font-size: 12.5px; color: var(--text-muted);
          line-height: 1.7; margin: 0; font-weight: 400;
        }

        /* ── WHEEL ── */
        .wcu-wheel-wrap {
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transform: scale(0.9);
        }
        .wcu-wheel-wrap.wcu--in {
          animation: wcuWheelIn .7s cubic-bezier(.25,1,.5,1) forwards;
          animation-delay: .1s;
        }
        @keyframes wcuWheelIn { to { opacity: 1; transform: scale(1); } }

        .wcu-wheel-svg {
          width: min(300px, 80vw); height: min(300px, 80vw);
          filter: drop-shadow(0 12px 36px rgba(18,81,163,0.18));
        }

        .wcu-seg { cursor: pointer; }

        .wcu-seg-text {
          font-family: 'Barlow', sans-serif;
          font-size: 6.5px; font-weight: 600;
          fill: rgba(255,255,255,0.92);
          text-anchor: middle; pointer-events: none;
          dominant-baseline: middle; letter-spacing: .2px;
        }

        /* ── STATS BAR ── */
        .wcu-stats {
          margin-top: 56px;
          background: var(--blue-dark);
          border-radius: 10px; overflow: hidden;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          position: relative;
        }
        @media (min-width: 640px) {
          .wcu-stats { grid-template-columns: repeat(4, 1fr); }
        }
        .wcu-stats::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .wcu-stats-top {
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: var(--blue-brand);
        }

        .wcu-stat {
          padding: 28px 24px; display: flex; flex-direction: column; gap: 4px;
          border-right: 1px solid rgba(255,255,255,0.07);
          position: relative; z-index: 1;
          transition: background .2s;
        }
        .wcu-stat:last-child { border-right: none; }
        .wcu-stat:hover { background: rgba(255,255,255,0.03); }

        .wcu-stat-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 32px; font-weight: 900;
          color: var(--white); line-height: 1;
        }
        .wcu-stat-val span { color: var(--accent); }

        .wcu-stat-lbl {
          font-size: 10px; font-weight: 700;
          letter-spacing: .18em; text-transform: uppercase;
          color: rgba(192,215,245,0.45);
        }
      `}</style>

      <section className="wcu">
        <div className="wcu-inner">

          {/* Header */}
          <div className="wcu-header">
            <div className="wcu-header-left">
              <span className="wcu-eyebrow">Our Strengths</span>
              <h2 className="wcu-title">Why <span>Choose</span> Us</h2>
              <p className="wcu-subtitle">
                From Nashik to global markets — our machines, brands, and service define industrial packaging excellence.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="wcu-body">

            {/* Left features */}
            <div className="wcu-col wcu-col--left">
              {leftFeatures.map((f, i) => (
                <div
                  key={i}
                  className="wcu-feat"
                  ref={(el) => (featureRefs.current[i] = el)}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="wcu-feat-icon-wrap">{f.icon}</div>
                  <h3 className="wcu-feat-title">{f.title}</h3>
                  <p className="wcu-feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Wheel */}
            <div className="wcu-wheel-wrap" ref={wheelRef}>
              <svg viewBox="0 0 320 320" className="wcu-wheel-svg" xmlns="http://www.w3.org/2000/svg">

                {/* Outer dashed ring */}
                <circle cx="160" cy="160" r="148" fill="none" stroke="#d0dff0" strokeWidth="1" strokeDasharray="4 4" />

                {/* Segments */}
                {segments.map((seg, i) => {
                  const startDeg = i * SLICE + GAP_DEG / 2;
                  const endDeg   = (i + 1) * SLICE - GAP_DEG / 2;
                  const midDeg   = (startDeg + endDeg) / 2;
                  const labelR   = (R_OUTER + R_INNER) / 2 + 4;
                  const lPos     = polarToCartesian(160, 160, labelR, midDeg);
                  const lines    = seg.label.split("\n");

                  return (
                    <g key={i} className="wcu-seg"
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}>
                      <path
                        d={segmentPath(160, 160, R_INNER, R_OUTER, startDeg, endDeg)}
                        fill={hovered === i ? HOVER_COLOR : COLORS[i]}
                        style={{ transition: "fill .2s ease" }}
                      />
                      {/* Segment number */}
                      <text
                        x={polarToCartesian(160, 160, R_OUTER - 10, midDeg).x}
                        y={polarToCartesian(160, 160, R_OUTER - 10, midDeg).y}
                        className="wcu-seg-text"
                        style={{ fontSize: "5px", opacity: 0.55 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </text>
                      {/* Label */}
                      {lines.map((line, li) => (
                        <text
                          key={li}
                          x={lPos.x}
                          y={lPos.y + (li - (lines.length - 1) / 2) * 8}
                          className="wcu-seg-text"
                        >
                          {line}
                        </text>
                      ))}
                    </g>
                  );
                })}

                {/* Center */}
                <circle cx="160" cy="160" r={R_INNER - 4} fill="#ffffff" filter="drop-shadow(0 2px 12px rgba(0,0,0,0.08))" />
                <circle cx="160" cy="160" r={R_INNER - 4} fill="none" stroke="#d0dff0" strokeWidth="1" />

                {/* Center text */}
                <text x="160" y="151"
                  fontFamily="'Barlow Condensed', sans-serif"
                  fontSize="7" fontWeight="700" fill="#6e8db5"
                  textAnchor="middle" dominantBaseline="middle"
                  letterSpacing="2">PRODUCT</text>
                <text x="160" y="162"
                  fontFamily="'Barlow Condensed', sans-serif"
                  fontSize="11" fontWeight="900" fill="#111827"
                  textAnchor="middle" dominantBaseline="middle"
                  letterSpacing="1">RANGE</text>
                <text x="160" y="173"
                  fontFamily="'Barlow Condensed', sans-serif"
                  fontSize="7" fontWeight="700" fill="#1f2937"
                  textAnchor="middle" dominantBaseline="middle"
                  letterSpacing="2">12 TYPES</text>
              </svg>
            </div>

            {/* Right features */}
            <div className="wcu-col wcu-col--right">
              {rightFeatures.map((f, i) => (
                <div
                  key={i}
                  className="wcu-feat"
                  ref={(el) => (featureRefs.current[i + 2] = el)}
                  style={{ animationDelay: `${(i + 2) * 0.12}s` }}
                >
                  <div className="wcu-feat-icon-wrap">{f.icon}</div>
                  <h3 className="wcu-feat-title">{f.title}</h3>
                  <p className="wcu-feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Stats bar */}
          <div className="wcu-stats">
            <div className="wcu-stats-top" />
            {[
              { val: "20", sup: "+", lbl: "Years Experience" },
              { val: "500", sup: "+", lbl: "Machines Installed" },
              { val: "40", sup: "+", lbl: "Cities Served" },
              { val: "98", sup: "%", lbl: "Client Retention" },
            ].map((s, i) => (
              <div key={i} className="wcu-stat">
                <span className="wcu-stat-val">{s.val}<span>{s.sup}</span></span>
                <span className="wcu-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}