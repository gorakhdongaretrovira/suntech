import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "collect",
    num: "01",
    title: "Information We Collect",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    content: "We collect information you provide directly — name, email, phone number, company name, postal address — when you inquire or request a quote. We also collect technical data such as IP address, browser type, device identifiers, and usage data through cookies and analytics.",
  },
  {
    id: "use",
    num: "02",
    title: "How We Use Information",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
    content: "Your information is used to respond to inquiries and provide customer support, process orders and quotations, improve website experience through analytics, and send administrative updates. Where permitted, we may send marketing communications about our products and services.",
  },
  {
    id: "cookies",
    num: "03",
    title: "Cookies & Analytics",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="6" rx="2"/>
        <path d="M3 10h18M7 6V4M17 6V4"/>
      </svg>
    ),
    content: "We use cookies and tracking technologies to provide services, remember preferences, and analyse site usage. Third-party services such as Google Analytics may collect usage data. You can manage or disable cookies in your browser settings, though this may affect some functionality.",
  },
  {
    id: "protection",
    num: "04",
    title: "Data Protection",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
      </svg>
    ),
    content: "We employ reasonable administrative, technical, and physical safeguards to protect personal information from unauthorised access, loss, or misuse. Access to personal data is limited to employees and service providers who require it. No security measure is perfect or impenetrable.",
  },
  {
    id: "third",
    num: "05",
    title: "Third-Party Links",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    content: "Our website may include links to third-party websites including partners and vendors. We do not control those sites and are not responsible for their privacy practices. We encourage you to read the privacy policies of any third-party sites you visit.",
  },
  {
    id: "transfers",
    num: "06",
    title: "International Transfers",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    content: "If you are located outside India, information we collect may be transferred to, stored, and processed in India and other countries where our service providers operate. By using the site, you consent to such transfers.",
  },
  {
    id: "rights",
    num: "07",
    title: "Your Rights",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    content: "Depending on your jurisdiction, you may have rights to access, update, or delete your personal information. To exercise these rights, contact us using the information provided below. We will respond to your request within a reasonable timeframe.",
  },
];

export default function PrivacyPolicy() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — SunTech";
  }, []);

  return (
    <div style={{
      background: "#ffffff",
      minHeight: "100vh",
      color: "#1a1f2e",
      fontFamily: "'Barlow', sans-serif",
      overflowX: "hidden",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        .pp-hero-line {
          width: 36px;
          height: 2px;
          background: #f5a623;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .pp-section-row {
          border-top: 1px solid #e8eaee;
          transition: background 0.25s;
        }
        .pp-section-row:last-child {
          border-bottom: 1px solid #e8eaee;
        }
        .pp-section-row.open {
          background: #fffbf4;
        }

        .pp-toggle-btn {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 18px 0;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          color: #1a1f2e;
        }

        .pp-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #f5a623;
          min-width: 22px;
          flex-shrink: 0;
        }

        .pp-icon {
          color: #c8ccd6;
          flex-shrink: 0;
          transition: color 0.25s;
        }
        .open .pp-icon { color: #f5a623; }

        .pp-title {
          flex: 1;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(15px, 3.5vw, 17px);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #1a1f2e;
          transition: color 0.25s;
        }
        .open .pp-title { color: #c8860f; }

        .pp-chevron {
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          color: #c8ccd6;
        }
        .open .pp-chevron { transform: rotate(180deg); color: #f5a623; }

        .pp-body {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
          max-height: 0;
        }
        .pp-body.open { max-height: 400px; }

        .pp-contact-card:hover {
          border-color: #f5a623 !important;
          background: #fffbf4 !important;
        }

        .pp-cta:hover {
          background: #e09618 !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.12s; }
        .fade-up-3 { animation-delay: 0.18s; }
        .fade-up-4 { animation-delay: 0.24s; }
      `}</style>

      {/* ── Hero ── */}
      <div style={{
        borderBottom: "1px solid #e8eaee",
        padding: "clamp(36px,7vw,64px) clamp(20px,6vw,48px) clamp(28px,5vw,48px)",
        background: "#ffffff",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          {/* Eyebrow */}
          <div className="fade-up fade-up-1" style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
            <span className="pp-hero-line" />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#f5a623",
            }}>SunTech Packaging Machines</span>
          </div>

          {/* Title — reduced from clamp(44px,13vw,88px) to clamp(30px,7vw,52px) */}
          <h1 className="fade-up fade-up-2" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(30px, 7vw, 52px)",
            fontWeight: 800,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "0.01em",
            color: "#1a1f2e",
            marginBottom: 16,
          }}>
            Privacy{" "}
            <span style={{ color: "#f5a623" }}>Policy</span>
          </h1>

          {/* Date + badge */}
          <div className="fade-up fade-up-3" style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9ea4b0",
            }}>Last updated: May 27, 2026</span>
            <span style={{
              display: "inline-block",
              padding: "2px 9px",
              border: "1px solid #f5a623",
              borderRadius: 2,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#c8860f",
              background: "#fff8ec",
            }}>v1.0</span>
          </div>
        </div>
      </div>

      {/* ── Intro strip ── */}
      <div style={{
        background: "#fff8ec",
        borderBottom: "1px solid #fde8b8",
        padding: "clamp(18px,4vw,28px) clamp(20px,6vw,48px)",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p className="fade-up fade-up-4" style={{
            fontSize: "clamp(13px,3vw,15px)",
            lineHeight: 1.85,
            color: "#4a5068",
            margin: 0,
          }}>
            <strong style={{ color: "#c8860f", fontWeight: 600 }}>SunTech Packaging Machines</strong> is committed to protecting the privacy of visitors and customers. This policy describes how we collect, use, and protect your personal information when you visit suntechpac.com or interact with us.
          </p>
        </div>
      </div>

      {/* ── Accordion ── */}
      <div style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "clamp(24px,5vw,44px) clamp(20px,6vw,48px)",
      }}>
        {sections.map((sec) => {
          const isOpen = openId === sec.id;
          return (
            <div key={sec.id} className={`pp-section-row${isOpen ? " open" : ""}`}>
              <button
                className="pp-toggle-btn"
                onClick={() => setOpenId(isOpen ? null : sec.id)}
                aria-expanded={isOpen}
              >
                <span className="pp-num">{sec.num}</span>
                <span className="pp-icon">{sec.icon}</span>
                <span className="pp-title">{sec.title}</span>
                <svg
                  className="pp-chevron"
                  width="17" height="17" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className={`pp-body${isOpen ? " open" : ""}`}>
                <p style={{
                  margin: "0 0 22px",
                  paddingLeft: "clamp(0px,4vw,36px)",
                  fontSize: "clamp(13px,3vw,14px)",
                  lineHeight: 1.85,
                  color: "#5a6070",
                }}>
                  {sec.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Contact ── */}
      <div style={{
        borderTop: "1px solid #e8eaee",
        padding: "clamp(32px,7vw,56px) clamp(20px,6vw,48px)",
        background: "#f7f8fa",
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span className="pp-hero-line" style={{ width: 28 }} />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#f5a623",
            }}>Contact</span>
          </div>

          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(22px,5vw,36px)",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            color: "#1a1f2e",
            marginBottom: 24,
            lineHeight: 1.1,
          }}>
            Questions?{" "}
            <span style={{ color: "#9ea4b0" }}>We're here.</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 10,
            marginBottom: 28,
          }}>
            {[
              {
                label: "Email",
                value: "privacy@suntech.in",
                href: "mailto:privacy@suntech.in",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
              },
              {
                label: "Phone",
                value: "+91 89750 91999",
                href: "tel:+918975091999",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l1.94-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
                  </svg>
                ),
              },
              {
                label: "Address",
                value: "MIDC Bhiwandi, MH – 421302",
                href: null,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href || undefined}
                className="pp-contact-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "15px 16px",
                  background: "#ffffff",
                  border: "1px solid #e8eaee",
                  borderRadius: 6,
                  textDecoration: "none",
                  color: "#2d3347",
                  cursor: item.href ? "pointer" : "default",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                <span style={{
                  width: 36, height: 36,
                  background: "#fff8ec",
                  border: "1px solid #fde8b8",
                  borderRadius: 6,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </span>
                <div>
                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#c8860f",
                    marginBottom: 2,
                  }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "#4a5068" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <Link
            to="/contact"
            className="pp-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 26px",
              background: "#f5a623",
              color: "#1a1f2e",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 4,
              transition: "background 0.2s",
            }}
          >
            Contact Us
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        borderTop: "1px solid #e8eaee",
        padding: "18px clamp(20px,6vw,48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 6,
        background: "#ffffff",
      }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#b8bcc8",
        }}>
          © {new Date().getFullYear()} SunTech Packaging Machines
        </span>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#b8bcc8",
        }}>
          All rights reserved
        </span>
      </div>
    </div>
  );
}