import { useState } from "react";

const faqs = [
  { q: "What is delivery time?",        a: "2–4 weeks depending on machine type and customization requirements. Express delivery options are available on request." },
  { q: "Do you provide customization?", a: "Yes — every machine can be tailored to your specific production needs, from hopper size to sealing type and output speed." },
  { q: "Do you provide service?",       a: "Absolutely. We offer full post-installation support, scheduled maintenance, and on-site assistance across India." },
  { q: "What industries do you serve?", a: "We cater to namkeen, spices, grains, flour, rice, and a wide range of dry food packaging industries." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

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
          --border:     rgba(17,24,39,0.12);
        }
        * { box-sizing: border-box; }

        .faq-hero {
          background: var(--blue-dark);
          padding: 72px 24px 56px;
          position: relative; overflow: hidden;
        }
        .faq-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
        .faq-hero-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }
        .faq-hero-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }

        .faq-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 18px;
        }
        .faq-eyebrow::before {
          content: ''; width: 28px; height: 2px;
          background: var(--accent); border-radius: 2px;
        }
        .faq-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(36px, 7vw, 64px);
          font-weight: 900; color: #fff;
          text-transform: uppercase; letter-spacing: -.01em; line-height: 1.0;
          margin-bottom: 14px;
        }
        .faq-title span { color: var(--blue-light); display: block; }
        .faq-subtitle {
          font-size: 15px; color: rgba(192,215,245,0.65);
          font-weight: 300; line-height: 1.7;
        }

        /* ── LIST ── */
        .faq-list {
          padding: 48px 24px 32px;
          max-width: 760px; margin: 0 auto;
          display: flex; flex-direction: column; gap: 0;
        }

        .faq-item {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 8px; overflow: hidden;
          margin-bottom: 12px;
          box-shadow: 0 2px 10px rgba(18,81,163,0.04);
          transition: border-color .25s, box-shadow .25s;
        }
        .faq-item.is-open {
          border-color: var(--blue-brand);
          box-shadow: 0 6px 24px rgba(18,81,163,0.1);
        }

        .faq-question {
          width: 100%; background: none; border: none;
          padding: 22px 24px;
          display: flex; justify-content: space-between; align-items: center;
          cursor: pointer; text-align: left; gap: 16px;
        }
        .faq-q-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(17px, 3.5vw, 21px); font-weight: 800;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: .03em; line-height: 1.2; flex: 1;
        }
        .faq-item.is-open .faq-q-text { color: var(--blue-brand); }

        .faq-icon {
          width: 32px; height: 32px; border-radius: 6px;
          border: 1.5px solid var(--border);
          background: var(--off-white);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all .25s;
          color: var(--text-muted); font-size: 18px;
          font-family: 'Barlow', sans-serif; font-weight: 300;
        }
        .faq-icon.open {
          background: var(--blue-brand); border-color: var(--blue-brand);
          color: #fff; transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease, padding .3s ease;
        }
        .faq-answer.open {
          max-height: 220px; padding-bottom: 24px;
        }
        .faq-a-text {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.8; font-weight: 400;
          border-left: 3px solid var(--blue-brand);
          padding: 0 24px 0 20px; margin-left: 24px;
        }

        /* ── FOOTER CTA ── */
        .faq-footer {
          max-width: 760px; margin: 0 auto;
          padding: 16px 24px 56px;
        }
        .faq-footer-card {
          background: var(--blue-dark);
          border-radius: 10px; padding: 32px 28px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          position: relative; overflow: hidden;
        }
        .faq-footer-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
        }
        .faq-footer-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }
        .faq-footer-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px; font-weight: 800; color: #fff;
          text-transform: uppercase; letter-spacing: .02em;
          position: relative; z-index: 1;
        }
        .faq-footer-text span { color: var(--accent); }
        .faq-footer-sub {
          font-size: 13px; color: rgba(192,215,245,0.6);
          font-weight: 300; margin-top: 4px;
          position: relative; z-index: 1;
        }
        .faq-contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          padding: 12px 24px; border-radius: 4px; border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transition: background .2s; position: relative; z-index: 1;
        }
        .faq-contact-btn:hover { background: var(--blue-light); }
      `}</style>

      {/* HERO */}
      <div className="faq-hero">
        <div className="faq-hero-bar" />
        <div className="faq-hero-inner">
          <div className="faq-eyebrow">Support &amp; Information</div>
          <h1 className="faq-title">
            Frequently
            <span>Asked Questions</span>
          </h1>
          <p className="faq-subtitle">Everything you need to know about our packaging solutions.</p>
        </div>
      </div>

      {/* FAQ LIST */}
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div className={`faq-item${open === i ? " is-open" : ""}`} key={i}>
            <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span className="faq-q-text">{item.q}</span>
              <span className={`faq-icon${open === i ? " open" : ""}`}>+</span>
            </button>
            <div className={`faq-answer${open === i ? " open" : ""}`}>
              <p className="faq-a-text">{item.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="faq-footer">
        <div className="faq-footer-card">
          <div className="faq-footer-top" />
          <div>
            <div className="faq-footer-text">Still have <span>questions?</span></div>
            <div className="faq-footer-sub">Our team is happy to walk you through every detail before you invest.</div>
          </div>
          <button className="faq-contact-btn">Contact Our Team →</button>
        </div>
      </div>
    </main>
  );
}