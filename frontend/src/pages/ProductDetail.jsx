import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("specs");
  const [bookmarked, setBookmarked] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);

  const product = products.find((p) => p.name === name);

  if (!product) {
    return (
      <div style={styles.notFound}>
        <div style={styles.notFoundCard}>
          <div style={styles.notFoundIcon}>⚠</div>
          <h2 style={styles.notFoundTitle}>Product Not Found</h2>
          <p style={styles.notFoundSub}>We couldn't locate this product.</p>
          <button onClick={() => navigate(-1)} style={styles.btnPrimary}>
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const specEntries = Object.entries(product.specs || {});

  const defaultFeatures = [
    "Industrial-grade stainless steel construction",
    "Precision-machined components for long service life",
    "Wide operating temperature & voltage range",
    "Compliant with FSSAI, CE & ISO standards",
    "Low maintenance with easy-clean design",
    "Energy-efficient motor technology",
  ];

  const supportItems = [
    {
      emoji: "📄",
      label: "Datasheet",
      sub: "Download product PDF",
      color: "#0ea5e9",
      bg: "rgba(14,165,233,0.08)",
    },
    {
      emoji: "🔧",
      label: "Installation Guide",
      sub: "Step-by-step setup manual",
      color: "#10b981",
      bg: "rgba(16,185,129,0.08)",
    },
    {
      emoji: "📞",
      label: "Technical Support",
      sub: "Talk to an engineer",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.08)",
    },
    {
      emoji: "🛡",
      label: "Warranty Information",
      sub: "Coverage & return policy",
      color: "#8b5cf6",
      bg: "rgba(139,92,246,0.08)",
    },
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuoteOpen(false);
      setFormData({ name: "", contact: "", requirement: "" });
    }, 2000);
  };

  return (
    <main style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .pd-back-btn:hover { background: rgba(255,255,255,0.12) !important; }
        .pd-icon-btn:hover { background: rgba(255,255,255,0.1) !important; border-color: rgba(255,255,255,0.3) !important; }
        .pd-tab:hover { color: #f0f0f0 !important; }
        .pd-spec-row:hover td { background: rgba(232,160,32,0.06) !important; }
        .pd-feat-row:hover { background: rgba(232,160,32,0.04) !important; }
        .pd-support-btn:hover { background: rgba(255,255,255,0.04) !important; }
        .pd-quote-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 28px rgba(232,160,32,0.45) !important; }
        .pd-quote-btn:active { transform: translateY(0px); }
        .pd-action-icon:hover { border-color: #e8a020 !important; color: #e8a020 !important; }

        input:focus, textarea:focus {
          outline: none;
          border-color: #e8a020 !important;
          background: rgba(232,160,32,0.04) !important;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes sheetUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .pd-hero { animation: slideUp 0.5s ease both; }
        .pd-content { animation: slideUp 0.5s 0.1s ease both; opacity: 0; animation-fill-mode: forwards; }
        .pd-sidebar { animation: slideUp 0.5s 0.15s ease both; opacity: 0; animation-fill-mode: forwards; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 2px; }
      `}</style>

      {/* ── STICKY HEADER ── */}
      <header style={styles.header}>
        <button
          className="pd-back-btn"
          onClick={() => navigate(-1)}
          style={styles.backBtn}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        <div style={styles.breadcrumb}>
          <span style={styles.breadcrumbItem}>Products</span>
          <span style={styles.breadcrumbSep}>›</span>
          <span style={styles.breadcrumbCurrent}>
            {product.category || "Machine"}
          </span>
        </div>

        <div style={styles.headerActions}>
          <button
            className="pd-icon-btn"
            onClick={() => setBookmarked(!bookmarked)}
            style={styles.iconBtn}
            title={bookmarked ? "Remove bookmark" : "Bookmark"}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill={bookmarked ? "#e8a020" : "none"}>
              <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                stroke={bookmarked ? "#e8a020" : "rgba(255,255,255,0.5)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="pd-icon-btn" style={styles.iconBtn} title="Share">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <circle cx="18" cy="5" r="2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <circle cx="6" cy="12" r="2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <circle cx="18" cy="19" r="2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              <path d="M8.5 10.5L15.5 6.5M8.5 13.5L15.5 17.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <div style={styles.layout}>

        {/* ── LEFT: HERO PANEL ── */}
        <aside className="pd-hero" style={styles.heroPan}>

          {/* Category badge */}
          {product.category && (
            <div style={styles.categoryBadge}>{product.category}</div>
          )}

          {/* Product Image */}
          <div style={styles.imageWrap}>
            <div style={styles.imageGlow} />
            <div style={styles.imageGrid} />
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImg}
            />
          </div>

          {/* Product Title & Desc */}
          <div style={styles.heroMeta}>
            <h1 style={styles.productTitle}>{product.name}</h1>
            <p style={styles.productDesc}>{product.description}</p>
          </div>

          {/* CTA Buttons */}
          <div style={styles.ctaGroup}>
            <button
              className="pd-quote-btn"
              onClick={() => setQuoteOpen(true)}
              style={styles.btnPrimary}
            >
              Get a Quote
            </button>
            <div style={styles.secondaryCtas}>
              <button
                className="pd-action-icon"
                style={styles.actionIconBtn}
                title="Call us"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call Us
              </button>
              <button
                className="pd-action-icon"
                style={styles.actionIconBtn}
                title="Print"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-6 0h.008v.008H12V10.5Zm-3 0h.008v.008H9V10.5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Print
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div style={styles.trustRow}>
            {["FSSAI", "CE", "ISO 9001"].map((badge) => (
              <span key={badge} style={styles.trustBadge}>{badge}</span>
            ))}
          </div>
        </aside>

        {/* ── RIGHT: TABS + CONTENT ── */}
        <section className="pd-content" style={styles.contentPan}>

          {/* Tab bar */}
          <div style={styles.tabBar}>
            {["specs", "features", "support"].map((tab) => (
              <button
                key={tab}
                className="pd-tab"
                onClick={() => setActiveTab(tab)}
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === tab ? styles.tabBtnActive : {}),
                }}
              >
                {tab === "specs" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                )}
                {tab === "features" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {tab === "support" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && <span style={styles.tabPip} />}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={styles.tabContent}>

            {/* ── SPECS ── */}
            {activeTab === "specs" && (
              <div style={styles.specsWrap}>
                {specEntries.length === 0 ? (
                  <p style={styles.emptyMsg}>No specifications available.</p>
                ) : (
                  <>
                    <p style={styles.tabIntro}>
                      Technical specifications for {product.name}. All values are subject to standard tolerances.
                    </p>
                    <table style={styles.specTable}>
                      <tbody>
                        {specEntries.map(([key, value], i) => (
                          <tr
                            key={key}
                            className="pd-spec-row"
                            style={{
                              ...styles.specRow,
                              background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                            }}
                          >
                            <td style={styles.specKey}>
                              <span style={styles.specDot} />
                              {key.replace(/_/g, " ")}
                            </td>
                            <td style={styles.specVal}>{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            )}

            {/* ── FEATURES ── */}
            {activeTab === "features" && (
              <div style={styles.featWrap}>
                <p style={styles.tabIntro}>
                  Engineered for industrial performance, reliability, and ease of maintenance.
                </p>
                <div style={styles.featGrid}>
                  {(product.features || defaultFeatures).map((feat, i) => (
                    <div
                      key={i}
                      className="pd-feat-row"
                      style={styles.featCard}
                    >
                      <span style={styles.featCheck}>✓</span>
                      <span style={styles.featText}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── SUPPORT ── */}
            {activeTab === "support" && (
              <div style={styles.supportWrap}>
                <p style={styles.tabIntro}>
                  Access documentation, technical assistance, and warranty details for your product.
                </p>
                <div style={styles.supportGrid}>
                  {supportItems.map(({ emoji, label, sub, color, bg }) => (
                    <button
                      key={label}
                      className="pd-support-btn"
                      style={styles.supportCard}
                    >
                      <span style={{ ...styles.supportIcon, background: bg, color }}>
                        {emoji}
                      </span>
                      <div style={styles.supportText}>
                        <p style={styles.supportLabel}>{label}</p>
                        <p style={styles.supportSub}>{sub}</p>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginLeft: "auto", flexShrink: 0, opacity: 0.3 }}>
                        <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ── QUOTE MODAL ── */}
      {quoteOpen && (
        <div style={styles.modalOverlay} onClick={() => setQuoteOpen(false)}>
          <div style={styles.modalSheet} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div>
                <h3 style={styles.modalTitle}>Request a Quote</h3>
                <p style={styles.modalSub}>{product.name}</p>
              </div>
              <button
                onClick={() => setQuoteOpen(false)}
                style={styles.modalClose}
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div style={styles.successState}>
                <div style={styles.successIcon}>✓</div>
                <p style={styles.successText}>Request sent successfully!</p>
                <p style={styles.successSub}>Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={styles.formInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email / Phone</label>
                  <input
                    type="text"
                    placeholder="your@email.com or +91 XXXXX"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    style={styles.formInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Requirement</label>
                  <textarea
                    placeholder="Quantity, customization, delivery location..."
                    rows={3}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    style={{ ...styles.formInput, resize: "none", lineHeight: "1.6" }}
                  />
                </div>
                <button
                  className="pd-quote-btn"
                  onClick={handleSubmit}
                  style={{ ...styles.btnPrimary, width: "100%", marginTop: "8px" }}
                >
                  Send Request →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

// ── STYLES ──────────────────────────────────────────────
const C = {
  bg: "#0f1117",
  surface: "#161b27",
  surfaceHover: "#1c2333",
  border: "rgba(255,255,255,0.07)",
  borderLight: "rgba(255,255,255,0.04)",
  text: "#f0f2f5",
  textMuted: "rgba(240,242,245,0.45)",
  textDim: "rgba(240,242,245,0.28)",
  accent: "#e8a020",
  accentDark: "#c47d0e",
  accentGlow: "rgba(232,160,32,0.18)",
};

const styles = {
  page: {
    minHeight: "100vh",
    background: C.bg,
    color: C.text,
    fontFamily: "'Outfit', sans-serif",
    backgroundImage: `
      radial-gradient(ellipse 80% 50% at 20% -20%, rgba(232,160,32,0.06) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 110%, rgba(14,165,233,0.04) 0%, transparent 60%)
    `,
  },

  // HEADER
  header: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    background: "rgba(15,17,23,0.85)",
    backdropFilter: "blur(16px)",
    borderBottom: `1px solid ${C.border}`,
    height: "56px",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  },
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: C.textMuted,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 500,
    fontFamily: "'Outfit', sans-serif",
    padding: "6px 10px",
    borderRadius: "8px",
    transition: "all 0.15s",
  },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    flex: 1,
    justifyContent: "center",
  },
  breadcrumbItem: {
    fontSize: "12px",
    color: C.textDim,
    fontWeight: 400,
  },
  breadcrumbSep: {
    color: C.textDim,
    fontSize: "12px",
  },
  breadcrumbCurrent: {
    fontSize: "12px",
    color: C.accent,
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  headerActions: {
    display: "flex",
    gap: "6px",
  },
  iconBtn: {
    width: "34px",
    height: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: `1px solid rgba(255,255,255,0.1)`,
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.15s",
  },

  // LAYOUT
  layout: {
    display: "grid",
    gridTemplateColumns: "380px 1fr",
    gap: "0",
    minHeight: "calc(100vh - 56px)",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "32px 32px 60px",
    gap: "32px",
  },

  // HERO PANEL (LEFT)
  heroPan: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
    position: "sticky",
    top: "88px",
    height: "fit-content",
  },
  categoryBadge: {
    display: "inline-flex",
    alignSelf: "flex-start",
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: C.accent,
    background: C.accentGlow,
    border: `1px solid rgba(232,160,32,0.2)`,
    padding: "4px 10px",
    borderRadius: "20px",
    marginBottom: "16px",
  },
  imageWrap: {
    position: "relative",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: "20px",
    overflow: "hidden",
    aspectRatio: "1 / 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px",
    marginBottom: "20px",
  },
  imageGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,
    backgroundSize: "32px 32px",
  },
  imageGlow: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "220px",
    height: "120px",
    background: "radial-gradient(ellipse, rgba(232,160,32,0.15) 0%, transparent 70%)",
    filter: "blur(20px)",
  },
  productImg: {
    position: "relative",
    zIndex: 2,
    maxWidth: "100%",
    maxHeight: "280px",
    objectFit: "contain",
    filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.5))",
    transition: "transform 0.3s ease",
  },
  heroMeta: {
    marginBottom: "20px",
  },
  productTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.75rem",
    fontWeight: 700,
    color: C.text,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    marginBottom: "10px",
  },
  productDesc: {
    fontSize: "0.875rem",
    color: C.textMuted,
    lineHeight: 1.7,
    fontWeight: 300,
  },
  ctaGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "16px",
  },
  btnPrimary: {
    background: `linear-gradient(135deg, ${C.accent} 0%, ${C.accentDark} 100%)`,
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "14px 24px",
    fontSize: "14px",
    fontWeight: 700,
    fontFamily: "'Outfit', sans-serif",
    cursor: "pointer",
    letterSpacing: "0.02em",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 20px rgba(232,160,32,0.3)",
  },
  secondaryCtas: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
  },
  actionIconBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    background: "transparent",
    border: `1px solid ${C.border}`,
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "12.5px",
    fontWeight: 500,
    color: C.textMuted,
    fontFamily: "'Outfit', sans-serif",
    cursor: "pointer",
    transition: "all 0.15s",
  },
  trustRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  trustBadge: {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.08em",
    color: C.textDim,
    border: `1px solid ${C.borderLight}`,
    borderRadius: "6px",
    padding: "4px 10px",
    background: "rgba(255,255,255,0.02)",
  },

  // CONTENT PANEL (RIGHT)
  contentPan: {
    display: "flex",
    flexDirection: "column",
    minHeight: "500px",
  },
  tabBar: {
    display: "flex",
    gap: "4px",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: "14px",
    padding: "5px",
    marginBottom: "20px",
  },
  tabBtn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px",
    padding: "10px 16px",
    borderRadius: "10px",
    border: "none",
    background: "transparent",
    color: C.textMuted,
    fontSize: "13px",
    fontWeight: 500,
    fontFamily: "'Outfit', sans-serif",
    cursor: "pointer",
    transition: "all 0.2s ease",
    position: "relative",
  },
  tabBtnActive: {
    background: `rgba(232,160,32,0.12)`,
    color: C.accent,
    fontWeight: 600,
  },
  tabPip: {
    position: "absolute",
    bottom: "6px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "18px",
    height: "2px",
    background: C.accent,
    borderRadius: "1px",
  },
  tabContent: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: "16px",
    overflow: "hidden",
    flex: 1,
  },

  // SPECS
  specsWrap: { padding: "0" },
  tabIntro: {
    fontSize: "13px",
    color: C.textMuted,
    lineHeight: 1.6,
    padding: "20px 24px 0",
    marginBottom: "12px",
    fontWeight: 300,
  },
  specTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  specRow: {
    borderBottom: `1px solid ${C.borderLight}`,
    transition: "background 0.15s",
  },
  specKey: {
    padding: "14px 24px",
    fontSize: "12.5px",
    fontWeight: 500,
    color: C.textMuted,
    textTransform: "capitalize",
    width: "42%",
    verticalAlign: "middle",
  },
  specDot: {
    display: "inline-block",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: C.accentDark,
    marginRight: "10px",
    verticalAlign: "middle",
    opacity: 0.6,
  },
  specVal: {
    padding: "14px 24px",
    fontSize: "13.5px",
    fontWeight: 600,
    color: C.text,
    textAlign: "right",
    verticalAlign: "middle",
  },
  emptyMsg: {
    padding: "60px 24px",
    textAlign: "center",
    color: C.textDim,
    fontSize: "14px",
  },

  // FEATURES
  featWrap: { padding: "0 0 8px" },
  featGrid: {
    padding: "8px 20px 16px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
  },
  featCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.02)",
    border: `1px solid ${C.borderLight}`,
    borderRadius: "12px",
    cursor: "default",
    transition: "background 0.15s",
  },
  featCheck: {
    flexShrink: 0,
    width: "20px",
    height: "20px",
    borderRadius: "6px",
    background: C.accentGlow,
    border: `1px solid rgba(232,160,32,0.25)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: C.accent,
    fontSize: "11px",
    fontWeight: 700,
    marginTop: "1px",
  },
  featText: {
    fontSize: "13px",
    color: C.textMuted,
    lineHeight: 1.55,
    fontWeight: 400,
  },

  // SUPPORT
  supportWrap: { padding: "0 0 8px" },
  supportGrid: {
    padding: "8px 16px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  supportCard: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.02)",
    border: `1px solid ${C.borderLight}`,
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background 0.15s",
    textAlign: "left",
    fontFamily: "'Outfit', sans-serif",
    width: "100%",
  },
  supportIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    flexShrink: 0,
  },
  supportText: { flex: 1, minWidth: 0 },
  supportLabel: {
    fontSize: "14px",
    fontWeight: 600,
    color: C.text,
    marginBottom: "2px",
  },
  supportSub: {
    fontSize: "12px",
    color: C.textMuted,
  },

  // MODAL
  modalOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    animation: "fadeIn 0.2s ease",
  },
  modalSheet: {
    width: "100%",
    maxWidth: "480px",
    background: "#1a2035",
    border: `1px solid ${C.border}`,
    borderRadius: "20px",
    padding: "28px",
    animation: "slideUp 0.3s ease",
    boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "24px",
  },
  modalTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.4rem",
    fontWeight: 700,
    color: C.text,
  },
  modalSub: {
    fontSize: "12px",
    color: C.textMuted,
    marginTop: "4px",
  },
  modalClose: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${C.border}`,
    color: C.textMuted,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    transition: "all 0.15s",
    fontFamily: "'Outfit', sans-serif",
  },
  formGroup: { marginBottom: "16px" },
  formLabel: {
    display: "block",
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: C.textDim,
    marginBottom: "7px",
  },
  formInput: {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${C.border}`,
    borderRadius: "10px",
    padding: "12px 14px",
    fontSize: "13.5px",
    color: C.text,
    fontFamily: "'Outfit', sans-serif",
    transition: "all 0.15s",
    display: "block",
  },
  successState: {
    textAlign: "center",
    padding: "20px 0",
    animation: "fadeIn 0.3s ease",
  },
  successIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "rgba(16,185,129,0.12)",
    border: "1px solid rgba(16,185,129,0.25)",
    color: "#10b981",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  successText: {
    fontSize: "17px",
    fontWeight: 700,
    color: C.text,
    fontFamily: "'Syne', sans-serif",
    marginBottom: "6px",
  },
  successSub: {
    fontSize: "13px",
    color: C.textMuted,
  },

  // NOT FOUND
  notFound: {
    minHeight: "100vh",
    background: C.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Outfit', sans-serif",
  },
  notFoundCard: {
    textAlign: "center",
    padding: "48px 40px",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: "20px",
  },
  notFoundIcon: {
    fontSize: "32px",
    marginBottom: "16px",
  },
  notFoundTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.4rem",
    fontWeight: 700,
    color: C.text,
    marginBottom: "8px",
  },
  notFoundSub: {
    fontSize: "14px",
    color: C.textMuted,
    marginBottom: "24px",
  },
};