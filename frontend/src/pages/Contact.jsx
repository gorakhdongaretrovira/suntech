import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const defaultForm = { name: "", email: "", phone: "", message: "" };
const WA_NUMBER = "919876543210";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@400;500&display=swap');

  /* ── RESET & BASE ── */
  .ct * { box-sizing: border-box; margin: 0; padding: 0; }
  .ct { font-family: 'DM Sans', sans-serif; background: #ffffff; color: #2d3a4a; }

  /* ── NOISE GRAIN OVERLAY ── */
  .ct::before {
    content: '';
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    opacity: 0.018;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 128px 128px;
  }

  /* ── PAGE SHELL ── */
  .ct-page {
    position: relative; z-index: 1;
    min-height: 100vh;
    padding: 80px 20px 0;
  }

  /* ── HERO BANNER ── */
  .ct-hero {
    max-width: 1180px; margin: 0 auto 64px;
    padding: 72px 56px;
    /* Lighter blue-navy */
    background: linear-gradient(135deg, #1a3252 0%, #1e3d62 60%, #163048 100%);
    border-radius: 28px;
    position: relative; overflow: hidden;
  }
  /* Amber corner glow */
  .ct-hero::before {
    content: '';
    position: absolute; top: -80px; right: -80px;
    width: 380px; height: 380px; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,160,32,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  /* Grid texture */
  .ct-hero::after {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 90% 100% at 100% 0%, rgba(0,0,0,0.7) 0%, transparent 65%);
    pointer-events: none;
  }

  .ct-hero-inner {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; gap: 14px;
  }
  .ct-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px; align-self: flex-start;
    font-family: 'DM Mono', monospace; font-size: 10.5px; letter-spacing: 3px; text-transform: uppercase;
    color: #e8a020;
    padding: 5px 14px; border-radius: 100px;
    border: 1px solid rgba(232,160,32,0.25);
    background: rgba(232,160,32,0.08);
  }
  .ct-hero-eyebrow::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: #e8a020; box-shadow: 0 0 7px #e8a020;
    animation: pulse-dot 2s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.7); }
  }

  .ct-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4.5vw, 52px); font-weight: 700;
    font-style: italic;
    line-height: 1.08; letter-spacing: -1.5px;
    color: #ffffff;
    max-width: 600px;
  }
  .ct-hero-title em { font-style: italic; color: #e8a020; }

  .ct-hero-sub {
    font-size: 15px; font-weight: 300;
    font-style: italic;
    color: rgba(255,255,255,0.5); line-height: 1.65;
    max-width: 460px;
  }

  .ct-hero-stats {
    display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px;
  }
  .ct-stat {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 16px; border-radius: 100px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    font-size: 12px; color: rgba(255,255,255,0.6); font-weight: 400;
    font-style: italic;
  }
  .ct-stat strong { color: #fff; font-weight: 600; margin-right: 2px; font-style: normal; }

  /* ── BODY GRID ── */
  .ct-body {
    max-width: 1180px; margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding-bottom: 80px;
  }
  @media (min-width: 900px) {
    .ct-body { grid-template-columns: 380px 1fr; }
  }

  /* ── INFO CARD ── */
  .ct-info {
    display: flex; flex-direction: column; gap: 0;
    border-radius: 24px; overflow: hidden;
    border: 1px solid rgba(14,28,47,0.1);
    box-shadow: 0 4px 40px rgba(14,28,47,0.07), 0 1px 3px rgba(14,28,47,0.06);
  }

  /* Map placeholder top half */
  .ct-map {
    height: 180px;
    /* Lighter blue for map too */
    background: linear-gradient(135deg, #1a3252 0%, #1e3d62 100%);
    position: relative; overflow: hidden;
    flex-shrink: 0;
  }
  .ct-map-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(232,160,32,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,160,32,0.07) 1px, transparent 1px);
    background-size: 32px 32px;
  }
  .ct-map-glow {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 180px; height: 180px; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,160,32,0.15) 0%, transparent 70%);
  }
  .ct-map-pin {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    display: flex; flex-direction: column; align-items: center; gap: 0;
  }
  .ct-map-pin-dot {
    width: 14px; height: 14px; border-radius: 50%;
    background: #e8a020; border: 2px solid #fff;
    box-shadow: 0 0 0 6px rgba(232,160,32,0.2), 0 0 20px rgba(232,160,32,0.4);
    animation: pin-pulse 2.2s ease-in-out infinite;
  }
  @keyframes pin-pulse {
    0%, 100% { box-shadow: 0 0 0 6px rgba(232,160,32,0.2), 0 0 20px rgba(232,160,32,0.4); }
    50%       { box-shadow: 0 0 0 12px rgba(232,160,32,0.08), 0 0 30px rgba(232,160,32,0.2); }
  }
  .ct-map-pin-line { width: 2px; height: 20px; background: linear-gradient(to bottom, #e8a020, transparent); }
  .ct-map-label {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, calc(-50% - 36px));
    font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    background: rgba(232,160,32,0.15); color: #e8a020;
    border: 1px solid rgba(232,160,32,0.3); border-radius: 100px;
    padding: 4px 10px; white-space: nowrap;
    backdrop-filter: blur(8px);
  }

  .ct-info-body { background: #fff; padding: 28px; display: flex; flex-direction: column; gap: 0; flex: 1; }

  .ct-info-row {
    padding: 18px 0;
    border-bottom: 1px solid rgba(14,28,47,0.06);
    display: flex; flex-direction: column; gap: 5px;
  }
  .ct-info-row:last-child { border-bottom: none; padding-bottom: 0; }
  .ct-info-row:first-child { padding-top: 0; }

  .ct-info-label {
    font-family: 'DM Mono', monospace; font-size: 9.5px; letter-spacing: 2.5px; text-transform: uppercase;
    color: #e8a020; font-weight: 500;
  }
  .ct-info-value {
    font-size: 15px; font-weight: 500;
    font-style: italic;
    color: #0e1c2f; line-height: 1.4;
    text-decoration: none; transition: color 0.2s;
  }
  .ct-info-value:hover { color: #e8a020; }

  /* WhatsApp CTA */
  .ct-wa-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; padding: 14px 20px; margin-top: 20px;
    /* Lighter blue */
    background: linear-gradient(135deg, #1a3252 0%, #1e3d62 100%);
    color: #fff;
    border: none; border-radius: 14px; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 600;
    font-style: italic;
    letter-spacing: 0.3px;
    text-decoration: none;
    position: relative; overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(26,50,82,0.3);
  }
  .ct-wa-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(232,160,32,0.15) 0%, transparent 60%);
    opacity: 0; transition: opacity 0.25s;
  }
  .ct-wa-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(26,50,82,0.38); }
  .ct-wa-btn:hover::before { opacity: 1; }

  .ct-wa-icon {
    width: 20px; height: 20px; border-radius: 50%;
    background: #25D366; display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* ── FORM CARD ── */
  .ct-form-card {
    background: #ffffff;
    border-radius: 24px; overflow: hidden;
    border: 1px solid rgba(14,28,47,0.1);
    box-shadow: 0 4px 40px rgba(14,28,47,0.07), 0 1px 3px rgba(14,28,47,0.06);
  }

  /* Form header */
  .ct-form-header {
    padding: 32px 36px 28px;
    border-bottom: 1px solid rgba(14,28,47,0.06);
    display: flex; align-items: center; gap: 16px;
  }
  .ct-form-header-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: rgba(232,160,32,0.08);
    border: 1px solid rgba(232,160,32,0.18);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .ct-form-header-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    font-style: italic;
    color: #0e1c2f; letter-spacing: -0.4px;
  }
  .ct-form-header-text p {
    font-size: 13px; color: #7a8b9a; font-weight: 300;
    font-style: italic;
    margin-top: 2px;
  }

  .ct-form-body { padding: 32px 36px 36px; }

  .ct-field-row { display: grid; grid-template-columns: 1fr; gap: 18px; margin-bottom: 18px; }
  @media (min-width: 560px) { .ct-field-row { grid-template-columns: 1fr 1fr; } }

  .ct-field { display: flex; flex-direction: column; gap: 7px; }
  .ct-label {
    font-size: 11.5px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase;
    color: #7a8b9a;
    font-style: italic;
  }
  .ct-required { color: #e8a020; margin-left: 2px; }

  .ct-input, .ct-textarea {
    width: 100%; background: #f9fafb;
    border: 1.5px solid rgba(14,28,47,0.1);
    border-radius: 12px; padding: 13px 16px;
    font-family: 'DM Sans', sans-serif; font-size: 14.5px; font-weight: 400;
    font-style: italic;
    color: #0e1c2f;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
  }
  .ct-input::placeholder, .ct-textarea::placeholder {
    color: rgba(14,28,47,0.25);
    font-style: italic;
  }
  .ct-input:focus, .ct-textarea:focus {
    background: #fff;
    border-color: #e8a020;
    box-shadow: 0 0 0 4px rgba(232,160,32,0.08);
  }
  .ct-input:hover:not(:focus), .ct-textarea:hover:not(:focus) {
    border-color: rgba(14,28,47,0.2);
    background: #fff;
  }

  .ct-textarea { resize: none; min-height: 130px; border-radius: 14px; line-height: 1.6; }

  .ct-char-count { font-size: 11px; color: rgba(14,28,47,0.25); text-align: right; margin-top: -4px; }

  /* Submit */
  .ct-submit {
    width: 100%; padding: 16px 24px; margin-top: 8px;
    /* Lighter blue */
    background: linear-gradient(135deg, #1a3252 0%, #1e3d62 100%);
    border: none; border-radius: 14px; cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-size: 14px; font-weight: 700;
    font-style: italic;
    letter-spacing: 0.5px;
    color: #fff;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    position: relative; overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px rgba(26,50,82,0.25);
  }
  .ct-submit::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 4px; background: linear-gradient(to bottom, #e8a020, #f5b830);
  }
  .ct-submit::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(232,160,32,0.12) 0%, transparent 50%);
    opacity: 0; transition: opacity 0.25s;
  }
  .ct-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 36px rgba(26,50,82,0.35); }
  .ct-submit:hover::after { opacity: 1; }
  .ct-submit:active { transform: translateY(0); }

  .ct-submit-arrow {
    width: 28px; height: 28px; border-radius: 50%;
    background: rgba(232,160,32,0.15); border: 1px solid rgba(232,160,32,0.3);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.2s, background 0.2s;
    flex-shrink: 0;
  }
  .ct-submit:hover .ct-submit-arrow { transform: translateX(3px); background: rgba(232,160,32,0.25); }

  .ct-trust {
    display: flex; align-items: center; gap: 6px; margin-top: 14px; justify-content: center;
    font-size: 11.5px; color: rgba(14,28,47,0.3);
    font-style: italic;
  }
  .ct-trust svg { flex-shrink: 0; }

  /* Success toast */
  .ct-toast {
    position: fixed; bottom: 28px; right: 28px; z-index: 9999;
    /* Lighter blue */
    background: linear-gradient(135deg, #1a3252 0%, #1e3d62 100%);
    color: #fff;
    padding: 14px 20px; border-radius: 14px;
    display: flex; align-items: center; gap: 12px;
    font-size: 13.5px; font-weight: 500;
    font-style: italic;
    box-shadow: 0 8px 40px rgba(26,50,82,0.35);
    border-left: 3px solid #e8a020;
    animation: toast-in 0.35s cubic-bezier(0.4,0,0.2,1);
    max-width: 320px;
  }
  @keyframes toast-in {
    from { opacity: 0; transform: translateY(16px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }

  /* ── FOOTER STRIP ── */
  .ct-footer-strip {
    max-width: 1180px; margin: 0 auto;
    padding: 24px 0 40px;
    border-top: 1px solid rgba(14,28,47,0.08);
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 12px;
  }
  .ct-footer-copy {
    font-size: 12px; color: rgba(14,28,47,0.3);
    font-style: italic;
  }
  .ct-footer-links { display: flex; gap: 20px; }
  .ct-footer-link {
    font-size: 12px; color: rgba(14,28,47,0.35); text-decoration: none;
    font-style: italic;
    transition: color 0.2s;
  }
  .ct-footer-link:hover { color: #e8a020; }

  /* ── RESPONSIVE TWEAKS ── */
  @media (max-width: 640px) {
    .ct-hero { padding: 40px 24px; border-radius: 20px; }
    .ct-hero-title { font-size: 26px; letter-spacing: -0.8px; }
    .ct-form-header { padding: 24px 20px 20px; }
    .ct-form-body { padding: 24px 20px 28px; }
    .ct-info-body { padding: 20px; }
    .ct-body { padding-bottom: 50px; }
    .ct-toast { right: 12px; bottom: 12px; left: 12px; max-width: none; }
    .ct-footer-strip { flex-direction: column; align-items: flex-start; padding-bottom: 60px; }
  }

  /* ── FIELD ENTER ANIM ── */
  @keyframes fieldIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ct-field { animation: fieldIn 0.4s cubic-bezier(0.4,0,0.2,1) both; }
  .ct-field:nth-child(1) { animation-delay: 0.05s; }
  .ct-field:nth-child(2) { animation-delay: 0.10s; }
  .ct-field:nth-child(3) { animation-delay: 0.15s; }
  .ct-field:nth-child(4) { animation-delay: 0.20s; }
`;

export default function Contact() {
  const location = useLocation();
  const [form, setForm]       = useState(defaultForm);
  const [toast, setToast]     = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const params  = new URLSearchParams(location.search);
    const product = params.get("product") || "";
    if (product) {
      setForm(c => ({ ...c, message: `I would like to inquire about the ${product}.` }));
    }
  }, [location.search]);

  const handleChange = field => e =>
    setForm(c => ({ ...c, [field]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);

    const lines = [
      `Hello SunTech Team,`,
      `My name is ${form.name}.`,
      form.message || "I would like to discuss my industrial requirements.",
      form.phone ? `Phone: ${form.phone}` : "",
      form.email ? `Email: ${form.email}` : "",
    ].filter(Boolean);

    setTimeout(() => {
      setSending(false);
      setToast(true);
      setTimeout(() => setToast(false), 3500);
      window.open(
        `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
        "_blank"
      );
    }, 600);
  };

  const msgLen = form.message.length;

  return (
    <>
      <style>{css}</style>

      <div className="ct">
        <main className="ct-page">

          {/* ── HERO ── */}
          <section className="ct-hero">
            <div className="ct-hero-inner">
              <span className="ct-hero-eyebrow">Get In Touch</span>
              <h1 className="ct-hero-title">
                Let's build your<br />
                <em>perfect solution</em>
              </h1>
              <p className="ct-hero-sub">
                Tell us your packaging requirements — we engineer machines to match every production demand.
              </p>
              <div className="ct-hero-stats">
                <div className="ct-stat"><strong>500+</strong> machines delivered</div>
                <div className="ct-stat"><strong>24hr</strong> response time</div>
                <div className="ct-stat"><strong>Pan India</strong> service</div>
              </div>
            </div>
          </section>

          {/* ── BODY ── */}
          <div className="ct-body">

            {/* INFO SIDEBAR */}
            <aside className="ct-info">
              {/* Decorative map */}
              <div className="ct-map">
                <div className="ct-map-grid" />
                <div className="ct-map-glow" />
                <div className="ct-map-pin">
                  <div className="ct-map-pin-dot" />
                  <div className="ct-map-pin-line" />
                </div>
                <div className="ct-map-label">Maharashtra, India</div>
              </div>

              <div className="ct-info-body">
                <div className="ct-info-row">
                  <span className="ct-info-label">Phone</span>
                  <a href="tel:+919876543210" className="ct-info-value">+91 98765 43210</a>
                </div>
                <div className="ct-info-row">
                  <span className="ct-info-label">Email</span>
                  <a href="mailto:info@suntech.com" className="ct-info-value">info@suntech.com</a>
                </div>
                <div className="ct-info-row">
                  <span className="ct-info-label">Address</span>
                  <span className="ct-info-value">Maharashtra, India</span>
                </div>
                <div className="ct-info-row">
                  <span className="ct-info-label">Working Hours</span>
                  <span className="ct-info-value">Mon – Sat · 9 AM – 7 PM</span>
                </div>

                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello SunTech Team, I would like to discuss my requirements.")}`}
                  target="_blank" rel="noreferrer"
                  className="ct-wa-btn"
                >
                  <span className="ct-wa-icon">
                    <svg viewBox="0 0 24 24" fill="#fff" width="12" height="12">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.849L.057 23.535a.75.75 0 00.916.917l5.688-1.465A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.75 9.75 0 1112 2.25 9.75 9.75 0 0112 21.75z"/>
                    </svg>
                  </span>
                  Chat on WhatsApp
                  <svg viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ marginLeft: "auto" }}>
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </a>
              </div>
            </aside>

            {/* FORM */}
            <section className="ct-form-card">
              <div className="ct-form-header">
                <div className="ct-form-header-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div className="ct-form-header-text">
                  <h2>Send us a message</h2>
                  <p>We'll get back to you within 24 hours</p>
                </div>
              </div>

              <div className="ct-form-body">
                <form onSubmit={handleSubmit}>

                  <div className="ct-field-row">
                    <div className="ct-field">
                      <label className="ct-label">Name <span className="ct-required">*</span></label>
                      <input
                        type="text" value={form.name} onChange={handleChange("name")}
                        required className="ct-input" placeholder="Your full name"
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-label">Email <span className="ct-required">*</span></label>
                      <input
                        type="email" value={form.email} onChange={handleChange("email")}
                        required className="ct-input" placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="ct-field" style={{ marginBottom: "18px" }}>
                    <label className="ct-label">Phone</label>
                    <input
                      type="tel" value={form.phone} onChange={handleChange("phone")}
                      className="ct-input" placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="ct-field" style={{ marginBottom: "4px" }}>
                    <label className="ct-label">Message</label>
                    <textarea
                      value={form.message} onChange={handleChange("message")}
                      className="ct-textarea"
                      placeholder="Tell us about your machine requirements, production capacity, or any questions…"
                      maxLength={500}
                    />
                    <span className="ct-char-count">{msgLen} / 500</span>
                  </div>

                  <button type="submit" className="ct-submit" disabled={sending}>
                    {sending ? (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" width="18" height="18" style={{ animation: "spin 1s linear infinite" }}>
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        </svg>
                        Opening WhatsApp…
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <span className="ct-submit-arrow">
                          <svg viewBox="0 0 16 16" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                            <path d="M3 8h10M9 4l4 4-4 4"/>
                          </svg>
                        </span>
                      </>
                    )}
                  </button>

                  <div className="ct-trust">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95.71-4.12L2 5.5l4.15-.75z"/>
                    </svg>
                    Your information is private and will only be shared via WhatsApp
                  </div>

                </form>
              </div>
            </section>
          </div>

          {/* FOOTER STRIP */}
          <div className="ct-footer-strip">
            <span className="ct-footer-copy">© 2025 SunTech Machines. All rights reserved.</span>
            <div className="ct-footer-links">
              <a href="/about" className="ct-footer-link">About</a>
              <a href="/solutions" className="ct-footer-link">Solutions</a>
              <a href="/applications" className="ct-footer-link">Applications</a>
            </div>
          </div>

        </main>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="ct-toast">
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#e8a020", flexShrink: 0 }} />
          WhatsApp is opening — message ready to send!
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}