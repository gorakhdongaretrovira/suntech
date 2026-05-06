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
    --off-white:  #f0f5fc;
    --text:       #1a2d4a;
    --text-muted: #6e8db5;
    --border:     rgba(17,24,39,0.12);
    --border-dk:  rgba(17,24,39,0.08);
  }

  html { scroll-behavior: smooth; }
  body { background: var(--off-white); color: var(--text); font-family: 'Barlow', sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

  /* ── Scroll reveal ── */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.in { opacity: 1; transform: none; }
  .reveal-d1 { transition-delay: .1s; }
  .reveal-d2 { transition-delay: .2s; }
  .reveal-d3 { transition-delay: .3s; }
  .reveal-d4 { transition-delay: .4s; }

  /* ── Tag pill ── */
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

  /* ── Section label ── */
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

  /* ── Stat card ── */
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

  /* ── Why card ── */
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

  /* ── Value row ── */
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

  /* ── Marquee ── */
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

  /* ── CTA Button ── */
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

  /* ── Hero blueprint grid ── */
  .hero-grid-bg {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
    background-image:
      linear-gradient(rgba(18,81,163,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(18,81,163,0.07) 1px, transparent 1px);
    background-size: 48px 48px;
  }
`;

const MARQUEE_ITEMS = [
  "Packaging Machinery","Pharmaceutical","Food & Beverage",
  "Manufacturing","Export Quality","ISO Certified",
  "Smart Automation","Custom Solutions","Established 2003",
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

export default function About() {
  useReveal();

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      <div style={{ minHeight: "100vh", overflowX: "hidden" }}>

        {/* ── HERO ── */}
        <section style={{ background: "var(--blue-dark)", position: "relative", padding: "100px 24px 80px", overflow: "hidden" }}>
          <div className="hero-grid-bg" />

          {/* accent corner */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 240, height: 240,
            background: "linear-gradient(225deg, rgba(245,166,35,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", textAlign: "center" }}>

            <div className="reveal" style={{ marginBottom: 20 }}>
              <span className="tag-pill" style={{ background: "rgba(245,166,35,0.12)", border: "1.5px solid rgba(245,166,35,0.3)", color: "var(--accent)" }}>
                Established 2003
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
              <span style={{ color: "var(--blue-light)" }}>SunTech</span>
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
              <button className="cta-btn">
                Our Story <ArrowIcon />
              </button>
              <button className="cta-btn-ghost">
                View Projects
              </button>
            </div>

          </div>
        </section>

        {/* ── MARQUEE ── */}
        <Marquee />

        {/* ── WHO WE ARE ── */}
        <section style={{ padding: "72px 24px", maxWidth: 760, margin: "0 auto" }}>
          <div className="section-label reveal">Who We Are</div>

          <h2
            className="reveal reveal-d1"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(32px, 7vw, 52px)",
              fontWeight: 900, lineHeight: 1.05,
              color: "var(--blue-dark)", textTransform: "uppercase",
              letterSpacing: "-.01em", marginBottom: 40,
            }}
          >
            Precision. Scale.<br />
            <span style={{ color: "var(--blue-brand)", fontStyle: "italic" }}>Reliability.</span>
          </h2>

          <div>
            <div className="value-row reveal reveal-d1">
              <div className="dot" />
              <p><strong>Our Mission</strong>Suntech is a leading manufacturer of packaging machinery, delivering cutting-edge solutions for food, pharmaceutical, and industrial sectors worldwide.</p>
            </div>
            <div className="value-row reveal reveal-d2">
              <div className="dot" style={{ background: "var(--accent)", borderColor: "rgba(245,166,35,0.3)" }} />
              <p><strong>Our Promise</strong>Efficient, durable, high-performance machines engineered to help businesses scale production without compromise.</p>
            </div>
            <div className="value-row reveal reveal-d3">
              <div className="dot" />
              <p><strong>Global Reach</strong>Trusted by manufacturers across 40+ Cities, our machines run millions of cycles in demanding environments every day.</p>
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
                Since 2003
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              <StatCard value="20+" label="Years Experience" delay={0} />
              <StatCard value="500+" label="Machines Delivered" delay={0.1} />
              <StatCard value="100+" label="Global Clients" delay={0.2} />
              <StatCard value="40+" label="Cities Served" delay={0.3} />
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>

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
              <WhyCard
                icon="⚙️"
                title="International Quality Standards"
                desc="Every machine is engineered with precision-grade materials and validated against global manufacturing benchmarks."
                delay={0}
              />
              <WhyCard
                icon="⚡"
                title="Smart Automation"
                desc="Proprietary control systems and IoT-ready architecture bring modern intelligence to production lines."
                delay={0.1}
              />
              <WhyCard
                icon="🛡️"
                title="End-to-End Support"
                desc="From installation to maintenance, our dedicated service team ensures zero downtime and maximum output."
                delay={0.2}
              />
              <WhyCard
                icon="🌍"
                title="Export-Grade Manufacturing"
                desc="Designed for global deployment — compliant with CE, ISO, and regional standards across 40+ Cities."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BAND ── */}
        <section style={{ padding: "0 24px 64px" }}>
          <div
            style={{
              maxWidth: 760, margin: "0 auto",
              background: "var(--blue-dark)",
              borderRadius: 12,
              border: "1.5px solid rgba(255,255,255,0.08)",
              padding: "56px 40px",
              textAlign: "center",
              position: "relative", overflow: "hidden",
            }}
          >
            {/* grid bg */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            {/* accent top border */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--blue-brand)" }} />

            <div
              className="reveal"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(28px, 6vw, 44px)",
                fontWeight: 900, lineHeight: 1.1,
                color: "#fff", textTransform: "uppercase",
                marginBottom: 16, position: "relative", zIndex: 1,
              }}
            >
              Ready to Scale<br />
              <span style={{ color: "var(--accent)" }}>Your Production?</span>
            </div>

            <p
              className="reveal reveal-d1"
              style={{
                color: "rgba(192,215,245,0.65)",
                fontSize: 15, marginBottom: 32,
                lineHeight: 1.7, position: "relative", zIndex: 1,
                fontWeight: 300,
              }}
            >
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
          borderTop: "2px solid var(--blue-brand)",
          background: "var(--blue-dark)",
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