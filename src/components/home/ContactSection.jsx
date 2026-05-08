import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("cs--in")),
      { threshold: 0.08 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text", required: true, half: true },
    { name: "email", label: "Email Address", type: "email", required: true, half: true },
    { name: "phone", label: "Phone Number", type: "text", required: false, half: true },
    { name: "subject", label: "Machine / Subject", type: "text", required: false, half: true },
    { name: "message", label: "Message", type: "textarea", required: false, half: false },
  ];

  const infos = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: "Factory Address",
      value: "MIDC Industrial Area, Bhiwandi, Maharashtra – 421302",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: "Sales Hotline",
      value: "+91 00111 11111",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <path d="M22 6l-10 7L2 6"/>
        </svg>
      ),
      label: "Email",
      value: "info@suntech.in",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      label: "WhatsApp",
      value: "+91 00111 11111",
    },
  ];

  const faqs = [
    { q: "Delivery time किती असतो?", a: "Standard machines: 4–6 weeks. Custom builds: 8–12 weeks." },
    { q: "Installation support मिळतो का?", a: "Yes — on-site installation + 1-year AMC available." },
    { q: "Demo मिळेल का?", a: "Factory demo किंवा video demo arrange करता येतो." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        :root {
          --blue-900: #111827;
          --blue-800: #0d1117;
          --blue-700: #1f2937;
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
          --gray-800: #1e293b;
          --accent:   #f59e0b;
        }

        /* ── TOP BAND ── */
        .cs-topband {
          background: var(--blue-900);
          padding: 14px 0;
          overflow: hidden;
        }

        .cs-ticker {
          display: flex;
          gap: 64px;
          animation: csTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes csTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .cs-ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cs-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-500);
          flex-shrink: 0;
        }

        /* ── SECTION ── */
        .cs-section {
          background: var(--white);
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* blueprint bg */
        .cs-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .cs-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 28px 96px;
          position: relative;
          z-index: 1;
        }

        /* ── HEADER ── */
        .cs-page-header {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 56px;
          opacity: 0;
          transform: translateY(20px);
        }

        .cs-page-header.cs--in {
          animation: csRise 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes csRise {
          to { opacity: 1; transform: translateY(0); }
        }

        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--blue-500);
        }

        .cs-eyebrow::before {
          content: '';
          display: block;
          width: 32px; height: 2px;
          background: var(--blue-500);
        }

        .cs-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(38px, 6vw, 62px);
          font-weight: 800;
          color: var(--blue-900);
          margin: 0;
          line-height: 0.95;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .cs-title span { color: var(--blue-500); }

        .cs-subtitle {
          font-size: 14px;
          color: var(--gray-600);
          margin: 6px 0 0;
          max-width: 500px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* ── BODY GRID ── */
        .cs-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }

        @media (min-width: 960px) {
          .cs-body {
            grid-template-columns: 380px 1fr;
            gap: 56px;
          }
        }

        /* ── LEFT PANEL ── */
        .cs-left {
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          transform: translateY(24px);
        }

        .cs-left.cs--in {
          animation: csRise 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
        }

        /* info card */
        .cs-info-card {
          background: var(--blue-900);
          border-radius: 10px 10px 0 0;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }

        .cs-info-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .cs-info-card::after {
          content: '';
          position: absolute;
          right: -40px; bottom: -40px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .cs-info-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--blue-400);
          margin: 0 0 24px;
          position: relative;
          z-index: 1;
        }

        .cs-infos {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .cs-info {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .cs-info-icon {
          width: 40px; height: 40px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .cs-info:hover .cs-info-icon {
          background: var(--blue-600);
          border-color: var(--blue-500);
        }

        .cs-info-icon svg {
          width: 17px; height: 17px;
          color: var(--blue-400);
        }

        .cs-info-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-top: 3px;
        }

        .cs-info-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .cs-info-value {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }

        /* hours strip */
        .cs-hours-strip {
          background: var(--blue-600);
          border-radius: 0 0 10px 10px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cs-hours-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #4ade80;
          flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(74,222,128,0.2);
          animation: csPulse 2s ease-in-out infinite;
        }

        @keyframes csPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(74,222,128,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(74,222,128,0.08); }
        }

        .cs-hours-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
        }

        /* FAQ accordion */
        .cs-faq {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1.5px solid var(--gray-200);
          border-radius: 10px;
          overflow: hidden;
        }

        .cs-faq-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gray-400);
          padding: 14px 18px 10px;
          border-bottom: 1.5px solid var(--gray-200);
        }

        .cs-faq-item {
          padding: 14px 18px;
          border-bottom: 1px solid var(--gray-100);
          cursor: pointer;
          transition: background 0.15s;
        }

        .cs-faq-item:last-child { border-bottom: none; }
        .cs-faq-item:hover { background: var(--blue-50); }

        .cs-faq-q {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--blue-900);
          letter-spacing: 0.2px;
        }

        .cs-faq-a {
          font-size: 12px;
          color: var(--gray-600);
          margin-top: 4px;
          line-height: 1.6;
        }

        /* ── RIGHT: FORM ── */
        .cs-right {
          opacity: 0;
          transform: translateY(24px);
        }

        .cs-right.cs--in {
          animation: csRise 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s forwards;
        }

        .cs-form-card {
          background: var(--white);
          border: 1.5px solid var(--gray-200);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(10,22,40,0.07);
        }

        /* form header */
        .cs-form-top {
          background: var(--blue-900);
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          position: relative;
          overflow: hidden;
        }

        .cs-form-top::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .cs-form-top-left {
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative;
          z-index: 1;
        }

        .cs-form-top-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: var(--white);
          margin: 0;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .cs-form-top-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
        }

        .cs-form-badge {
          position: relative;
          z-index: 1;
          background: rgba(74,222,128,0.12);
          border: 1.5px solid rgba(74,222,128,0.3);
          border-radius: 5px;
          padding: 6px 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4ade80;
          white-space: nowrap;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cs-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: csPulse 2s infinite;
        }

        /* step indicators */
        .cs-steps {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 0 32px;
          border-bottom: 1.5px solid var(--gray-100);
          background: var(--gray-50);
        }

        .cs-step {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 0;
          flex: 1;
          position: relative;
        }

        .cs-step:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%; transform: translateY(-50%);
          width: 24px; height: 1.5px;
          background: var(--gray-200);
        }

        .cs-step-num {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--blue-600);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cs-step-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--gray-400);
        }

        /* form body */
        .cs-form-body {
          padding: 32px;
        }

        .cs-fields {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        @media (min-width: 480px) {
          .cs-fields { grid-template-columns: 1fr 1fr; }
          .cs-field--full { grid-column: span 2; }
        }

        .cs-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }

        .cs-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gray-400);
          transition: color 0.2s;
        }

        .cs-field--focused .cs-label { color: var(--blue-500); }

        .cs-input-wrap {
          position: relative;
        }

        .cs-input,
        .cs-textarea {
          width: 100%;
          background: var(--gray-50);
          border: 1.5px solid var(--gray-200);
          border-radius: 7px;
          padding: 11px 14px;
          font-family: 'Barlow', sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          color: var(--blue-900);
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
          -webkit-appearance: none;
          resize: none;
        }

        .cs-input::placeholder,
        .cs-textarea::placeholder {
          color: var(--gray-400);
          font-weight: 300;
        }

        .cs-input:focus,
        .cs-textarea:focus {
          border-color: var(--blue-500);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(37,99,235,0.08);
        }

        .cs-textarea { min-height: 110px; }

        /* submit row */
        .cs-submit-row {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cs-note {
          font-size: 11px;
          color: var(--gray-400);
          font-weight: 400;
        }

        .cs-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--blue-600);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 13px 28px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, gap 0.2s, transform 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .cs-btn:hover {
          background: var(--blue-500);
          gap: 14px;
          transform: translateY(-1px);
        }

        .cs-btn svg { width: 14px; height: 14px; }

        /* success */
        .cs-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 56px 32px;
          text-align: center;
          animation: csRise 0.4s ease forwards;
        }

        .cs-success-icon {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: var(--blue-50);
          border: 2px solid var(--blue-200);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cs-success-icon svg {
          width: 26px; height: 26px;
          color: var(--blue-600);
        }

        .cs-success-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--blue-900);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cs-success-sub {
          font-size: 13px;
          color: var(--gray-600);
          margin: 0;
          line-height: 1.75;
          font-weight: 400;
          max-width: 300px;
        }

        /* ── BOTTOM MAP BAR ── */
        .cs-map-bar {
          margin-top: 48px;
          border: 1.5px solid var(--gray-200);
          border-radius: 10px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          background: var(--gray-50);
        }

        @media (max-width: 640px) { .cs-map-bar { grid-template-columns: 1fr; } }

        .cs-map-bar-left {
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cs-map-icon {
          width: 44px; height: 44px;
          border-radius: 8px;
          background: var(--blue-600);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cs-map-icon svg {
          width: 20px; height: 20px;
          color: var(--white);
        }

        .cs-map-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .cs-map-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gray-400);
        }

        .cs-map-addr {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--blue-900);
          letter-spacing: 0.2px;
        }

        .cs-map-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 24px;
          background: var(--blue-900);
          color: var(--white);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
        }

        .cs-map-btn:hover { background: var(--blue-600); gap: 12px; }
        .cs-map-btn svg { width: 13px; height: 13px; }

        @media (max-width: 640px) {
          .cs-map-btn { margin: 0 0 20px 28px; }
        }
      `}</style>

      {/* Ticker */}
      <div className="cs-topband">
        <div className="cs-ticker">
          {[...Array(2)].map((_, ri) =>
            ["24hr Response Guarantee", "On-Site Installation", "Free Demo Available", "Pan-India Delivery", "AMC Available", "Technical Support", "Custom Engineering", "ISO 9001 Certified"].map((t, i) => (
              <span className="cs-ticker-item" key={`${ri}-${i}`}>
                <span className="cs-ticker-dot" />
                {t}
              </span>
            ))
          )}
        </div>
      </div>

      <section className="cs-section">
        <div className="cs-inner">

          {/* Page Header */}
          <div className="cs-page-header" ref={(el) => { if (el) { const o = new IntersectionObserver(([e]) => e.isIntersecting && el.classList.add("cs--in"), {threshold:0.1}); o.observe(el); }}}>
            <span className="cs-eyebrow">Contact Us</span>
            <h2 className="cs-title">Get In <span>Touch</span></h2>
            <p className="cs-subtitle">
              Our sales engineers are ready to help you find the right packaging machine for your production line. Response within 24 hours.
            </p>
          </div>

          {/* Body */}
          <div className="cs-body">

            {/* LEFT */}
            <div className="cs-left" ref={leftRef}>
              <div className="cs-info-card">
                <p className="cs-info-card-title">Contact Details</p>
                <div className="cs-infos">
                  {infos.map((info, i) => (
                    <div className="cs-info" key={i}>
                      <div className="cs-info-icon">{info.icon}</div>
                      <div className="cs-info-text">
                        <span className="cs-info-label">{info.label}</span>
                        <span className="cs-info-value">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cs-hours-strip">
                <span className="cs-hours-dot" />
                <span className="cs-hours-text">Mon – Sat &nbsp;·&nbsp; 9:00 AM – 6:30 PM IST</span>
              </div>

              {/* FAQ */}
              <div className="cs-faq">
                <div className="cs-faq-title">Quick FAQs</div>
                {faqs.map((faq, i) => (
                  <div className="cs-faq-item" key={i}>
                    <div className="cs-faq-q">{faq.q}</div>
                    <div className="cs-faq-a">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="cs-right" ref={rightRef}>
              <div className="cs-form-card">

                <div className="cs-form-top">
                  <div className="cs-form-top-left">
                    <p className="cs-form-top-title">Send an Inquiry</p>
                    <p className="cs-form-top-sub">Fill the form — we respond within 24 hours</p>
                  </div>
                  <span className="cs-form-badge">
                    <span className="cs-badge-dot" />
                    Online
                  </span>
                </div>

                {/* Steps */}
                <div className="cs-steps">
                  {["Your Details", "Requirements", "Submit"].map((s, i) => (
                    <div className="cs-step" key={i}>
                      <span className="cs-step-num">{i + 1}</span>
                      <span className="cs-step-label">{s}</span>
                    </div>
                  ))}
                </div>

                {submitted ? (
                  <div className="cs-success">
                    <div className="cs-success-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="cs-success-title">Inquiry Sent!</p>
                    <p className="cs-success-sub">
                      Our sales team will contact you within 24 hours with the best solution.
                    </p>
                  </div>
                ) : (
                  <div className="cs-form-body">
                    <form onSubmit={handleSubmit}>
                      <div className="cs-fields">
                        {fields.map((f) => (
                          <div
                            key={f.name}
                            className={`cs-field${!f.half ? " cs-field--full" : ""}${focused === f.name ? " cs-field--focused" : ""}`}
                          >
                            <label className="cs-label">
                              {f.label}{f.required && " *"}
                            </label>
                            <div className="cs-input-wrap">
                              {f.type === "textarea" ? (
                                <textarea
                                  name={f.name}
                                  className="cs-textarea"
                                  placeholder={`Enter your ${f.label.toLowerCase()}`}
                                  value={form[f.name]}
                                  onChange={handleChange}
                                  onFocus={() => setFocused(f.name)}
                                  onBlur={() => setFocused(null)}
                                />
                              ) : (
                                <input
                                  type={f.type}
                                  name={f.name}
                                  className="cs-input"
                                  placeholder={`Enter ${f.label.toLowerCase()}`}
                                  value={form[f.name]}
                                  onChange={handleChange}
                                  onFocus={() => setFocused(f.name)}
                                  onBlur={() => setFocused(null)}
                                  required={f.required}
                                />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="cs-submit-row">
                        <span className="cs-note">* Required fields</span>
                        <button type="submit" className="cs-btn">
                          Send Inquiry
                          <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map Bar */}
          <div className="cs-map-bar">
            <div className="cs-map-bar-left">
              <div className="cs-map-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="cs-map-text">
                <span className="cs-map-label">Factory Location</span>
                <span className="cs-map-addr">MIDC Industrial Area, Bhiwandi, Maharashtra – 421302</span>
              </div>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="cs-map-btn">
              View on Map
              <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}