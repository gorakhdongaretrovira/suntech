import { useState } from "react";

const solutions = [
  {
    id: "food-snacks",
    name: "Food & Snacks Packaging",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M3 6h18M3 12h18M3 18h18"/><rect x="2" y="3" width="20" height="18" rx="2"/></svg>),
    title: "Food & Snacks Packaging Solutions",
    subtitle: "High-Speed Packaging for Namkeen, Chips & Processed Snacks",
    description: "Purpose-built packaging systems for namkeen, extruded snacks, chips, biscuits, and ready-to-eat products. Our machines handle fragile products gently while maintaining output speeds of up to 120 packs/min with minimal product breakage.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=700&q=85",
    subSolutions: ["Vertical Form Fill Seal (VFFS) Machines","Multi-head Combination Weigher Integration","Pillow Pouch & Gusseted Bag Packaging","Nitrogen Flushing Systems","Checkweigher & Metal Detector Lines"],
    features: ["Output: 20–120 packs/min depending on pack size","Servo-driven jaw system for precise seal integrity","Compatible with BOPP, Metalized, and Laminated films","PLC + HMI touchscreen with recipe storage","Quick changeover for multi-SKU production lines"],
    applications: ["Namkeen & Bhujia","Extruded Snacks & Puffed Rice","Potato Chips & Wafers","Biscuits & Cookies","Dry Fruits & Trail Mix"],
  },
  {
    id: "powder-spices",
    name: "Powder & Spices Packaging",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/><path d="M8 12h8M12 8v8"/></svg>),
    title: "Powder & Spices Packaging Solutions",
    subtitle: "Accurate Filling & Dust-Proof Sealing for Free-Flowing Powders",
    description: "Engineered for spices, masala blends, turmeric, chilli, flour, and other free-flowing or semi-free-flowing powders. Auger-based filling ensures precise grammage with ±0.5 g accuracy across all pack sizes.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=85",
    subSolutions: ["Auger Filling Machines (50g–5kg)","Pouch Form Fill Seal for Powders","Sachet & Stick Pack Packaging Lines","Vacuum Sealing & Desiccant Insertion","Bulk Bag & Stand-Up Pouch Systems"],
    features: ["Auger filler accuracy: ±0.3–0.5 g across all pack weights","Dust-containment filling head — zero contamination","Compatible with moisture-barrier and kraft laminate films","Anti-bridging agitator for lumpy or sticky powders","Speed: 15–80 packs/min (size dependent)"],
    applications: ["Red Chilli & Turmeric Powder","Mixed Masala & Curry Blends","Wheat Flour & Gram Flour","Coffee & Tea Powder","Detergent & Chemical Powders"],
  },
  {
    id: "grains-seeds",
    name: "Grains & Seeds Packaging",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><ellipse cx="12" cy="5" rx="4" ry="2"/><path d="M6 12c0-3 2.5-5 6-5s6 2 6 5c0 4-3 7-6 7s-6-3-6-7z"/></svg>),
    title: "Grains & Seeds Packaging Solutions",
    subtitle: "Volume & Weight-Based Packaging for Loose Granular Products",
    description: "Robust filling systems for rice, dal, pulses, wheat, seeds, and coarse granular materials. Multi-head weighers combined with bagging systems ensure speed and weight consistency across 500g to 50kg pack formats.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&q=85",
    subSolutions: ["10/14-Head Multihead Combination Weighers","Net-Weight Bagging Machines (500g–25kg)","Jaw-Sealing Pouch Packing for Pulses","FFS Bagging Lines with Conveyor Discharge","Stitching & Heat Seal for Woven PP Bags"],
    features: ["Weighing accuracy: ±1–2g on combination weighers","Handles granule sizes from 2mm to 30mm","Stainless steel contact parts — food-grade compliant","Auto bag-feed with empty-bag rejection system","Output: 500g–5kg packs at 40–80 bags/min"],
    applications: ["Basmati & Non-Basmati Rice","Toor, Moong & Chana Dal","Wheat, Jowar & Ragi","Sesame, Flaxseed & Sunflower Seeds","Fertilizer & Agricultural Granules"],
  },
  {
    id: "liquid-filling",
    name: "Liquid Filling Solutions",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 2v6M8 8l4-6 4 6"/><path d="M5 10h14l-1.5 10H6.5L5 10z"/></svg>),
    title: "Liquid Filling Solutions",
    subtitle: "Volumetric & Gravity Filling for Edible Oils, Sauces & Beverages",
    description: "Designed for thin-to-viscous liquids including edible oils, sauces, pickles, beverages, and industrial fluids. Our piston and flowmeter-based fillers deliver clean, drip-free filling with consistent volume accuracy.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85",
    subSolutions: ["Piston Filling Machines (50ml–5L)","Overflow & Gravity Fill Systems","Rotary Bottle Filling & Capping Lines","Pouch Filling & Sealing (Liquid Sachets)","Inline Bottle Washing, Filling & Labelling"],
    features: ["Volumetric accuracy: ±0.5% across all fill sizes","Drip-free nozzle design — no product wastage","Handles viscosity range: water to thick paste","SS 316 contact parts, CIP-compatible design","6–32 head configurations for high-speed lines"],
    applications: ["Edible Oils & Ghee","Tomato Ketchup & Sauces","Fruit Juices & Drinks","Pickle & Chutneys","Lubricants & Industrial Liquids"],
  },
  {
    id: "weighing-automation",
    name: "Weighing & Filling Automation",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/><line x1="12" y1="12" x2="12" y2="16"/></svg>),
    title: "Weighing & Filling Automation",
    subtitle: "Precision Dosing Systems & Automated Batch Weighing",
    description: "Integrated weighing and dosing solutions for high-throughput production floors. From single-head electronic weighers to 14-head combination systems, Suntech delivers consistent batch accuracy that reduces give-away and rework.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=85",
    subSolutions: ["Multi-head Combination Weighers (10/14/16 Head)","Linear Weighers for Sticky Products","Automatic Batch Weighing Hoppers","Loss-in-Weight Feeders for Dosing Lines","Checkweighers with Auto Rejection"],
    features: ["Weighing speed: up to 120 weighings/min (14-head)","Accuracy: ±0.1g–1g depending on product type","IP65 washdown rated — suitable for wet environments","Modbus/RS485 integration with upstream VFFS machines","Automatic tare compensation for film weight variation"],
    applications: ["Snacks & Fried Products","Frozen Vegetables & Seafood","Hardware & Industrial Components","Confectionery & Candies","Fresh Produce & Cut Vegetables"],
  },
  {
    id: "packaging-lines",
    name: "End-to-End Packaging Lines",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M5 12H2l3-8 3 8H5zm14 0h-3l3-8 3 8h-3z"/><path d="M5 12h14"/><circle cx="12" cy="12" r="2"/></svg>),
    title: "End-to-End Packaging Line Solutions",
    subtitle: "Turnkey Line Integration from Raw Material to Finished Carton",
    description: "Complete packaging line design, supply, installation, and commissioning. Suntech integrates feeding, weighing, filling, sealing, labelling, coding, and carton packing into a single synchronized production line.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=85",
    subSolutions: ["Fully Automatic Integrated Packaging Lines","Conveyor & Product Transfer Systems","Online Printing & Labelling (TTO / Inkjet / BOPP)","Carton Erecting, Packing & Sealing","SCADA-Ready Line Monitoring Panels"],
    features: ["Single-vendor turnkey supply — design to commissioning","Line speeds from 30 to 200+ packs/min","Modular design — expand capacity without full line replacement","CE-compliant electrical panels with safety interlocks","On-site installation, trial runs & operator training included"],
    applications: ["FMCG Snack & Namkeen Plants","Flour Mill Packaging Lines","Spice Processing & Packing Units","Edible Oil Bottling Plants","Agro-Processing & Seed Packaging"],
  },
];

export default function Solutions() {
  const [active, setActive] = useState(solutions[0]);
  const [animKey, setAnimKey] = useState(0);

  const handleSelect = (sol) => {
    if (sol.id === active.id) return;
    setActive(sol);
    setAnimKey(k => k + 1);
  };

  const activeIndex = solutions.findIndex(s => s.id === active.id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

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
          --sidebar-w:  280px;
        }

        .sol-root {
          font-family: 'Barlow', sans-serif;
          background: var(--off-white);
          min-height: 100vh; color: var(--text);
        }

        /* ── HEADER ── */
        .sol-header {
          background: var(--blue-dark);
          padding: 56px 32px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .sol-header::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 40px 40px; pointer-events: none;
        }
        .sol-header-bar { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

        .sol-header-badge {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
          color: var(--accent);
          background: rgba(245,166,35,0.12); border: 1.5px solid rgba(245,166,35,0.3);
          border-radius: 4px; padding: 5px 12px; margin-bottom: 18px;
          position: relative; z-index: 1;
        }
        .sol-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
        .sol-header-sub {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .3em; text-transform: uppercase;
          color: rgba(192,215,245,0.45); margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .sol-header-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(34px, 5vw, 60px); font-weight: 900;
          color: #fff; text-transform: uppercase;
          letter-spacing: -.01em; line-height: 1.0; margin-bottom: 14px;
          position: relative; z-index: 1;
        }
        .sol-header-title span { color: var(--blue-light); }
        .sol-header-desc {
          font-size: 14px; color: rgba(192,215,245,0.6);
          font-weight: 300; max-width: 520px; margin: 0 auto;
          line-height: 1.7; position: relative; z-index: 1;
        }

        /* ── LAYOUT ── */
        .sol-layout {
          display: grid;
          grid-template-columns: var(--sidebar-w) 1fr;
          min-height: calc(100vh - 220px);
        }
        @media (max-width: 860px) {
          .sol-layout { grid-template-columns: 1fr; }
        }

        /* ── SIDEBAR ── */
        .sol-sidebar {
          border-right: 1.5px solid var(--border);
          background: var(--white);
          padding: 28px 0;
          position: sticky; top: 0;
          height: 100vh; overflow-y: auto;
        }
        @media (max-width: 860px) {
          .sol-sidebar {
            position: static; height: auto;
            border-right: none; border-bottom: 1.5px solid var(--border);
            padding: 12px 0 0;
          }
        }
        .sol-sidebar-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .25em; text-transform: uppercase;
          color: var(--text-muted);
          padding: 0 20px 14px;
          border-bottom: 1px solid var(--border); margin-bottom: 6px;
        }
        .sol-nav {
          display: flex; flex-direction: column;
        }
        @media (max-width: 860px) {
          .sol-nav { flex-direction: row; overflow-x: auto; padding: 0 12px 4px; gap: 0; scrollbar-width: none; }
          .sol-nav::-webkit-scrollbar { display: none; }
        }

        .sol-nav-item {
          display: flex; align-items: center; gap: 12px;
          width: 100%; padding: 13px 20px;
          border: none; background: transparent; cursor: pointer;
          text-align: left; position: relative;
          border-left: 3px solid transparent;
          transition: background .2s, border-color .2s;
        }
        .sol-nav-item:hover { background: var(--blue-pale); }
        .sol-nav-item.active {
          background: var(--blue-pale); border-left-color: var(--blue-brand);
        }
        @media (max-width: 860px) {
          .sol-nav-item {
            flex-direction: column; gap: 4px; align-items: center;
            border-left: none; border-bottom: 2px solid transparent;
            padding: 8px 14px; flex-shrink: 0; white-space: nowrap;
          }
          .sol-nav-item.active { background: transparent; border-bottom-color: var(--blue-brand); }
        }

        .sol-nav-icon {
          color: var(--text-muted); flex-shrink: 0;
          transition: color .2s;
        }
        .sol-nav-item.active .sol-nav-icon, .sol-nav-item:hover .sol-nav-icon { color: var(--blue-brand); }

        .sol-nav-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px; font-weight: 700; color: var(--text);
          text-transform: uppercase; letter-spacing: .03em; line-height: 1.2;
          transition: color .2s;
        }
        .sol-nav-item.active .sol-nav-label { color: var(--blue-brand); }

        .sol-nav-arrow {
          margin-left: auto; color: var(--blue-brand);
          opacity: 0; transform: translateX(-4px);
          transition: all .2s; flex-shrink: 0;
        }
        .sol-nav-item.active .sol-nav-arrow { opacity: 1; transform: translateX(0); }
        @media (max-width: 860px) { .sol-nav-arrow { display: none; } }

        /* ── CONTENT ── */
        .sol-content {
          padding: 40px 48px 72px;
          background: var(--off-white); overflow-y: auto;
        }
        @media (max-width: 860px) { .sol-content { padding: 28px 16px 56px; } }

        @keyframes solFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sol-panel {
          animation: solFadeUp .35s cubic-bezier(.22,1,.36,1) both;
          max-width: 760px;
        }

        /* Counter */
        .sol-counter {
          display: flex; align-items: center; gap: 12px; margin-bottom: 18px;
        }
        .sol-counter-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .1em;
          color: var(--blue-brand);
        }
        .sol-counter-line { flex: 1; max-width: 40px; height: 2px; background: var(--blue-brand); opacity: .4; border-radius: 2px; }
        .sol-counter-cat {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--text-muted);
        }

        /* Title */
        .sol-panel-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(26px, 4vw, 44px); font-weight: 900;
          color: var(--blue-dark); text-transform: uppercase;
          letter-spacing: -.01em; line-height: 1.0; margin-bottom: 6px;
        }
        .sol-panel-subtitle {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
          color: var(--blue-brand); margin-bottom: 20px;
        }
        .sol-panel-desc {
          font-size: 14px; font-weight: 300; line-height: 1.85;
          color: var(--text-muted); margin-bottom: 28px;
          border-left: 3px solid var(--blue-brand);
          padding-left: 18px;
        }

        /* Image */
        .sol-img-wrap {
          height: 240px; border-radius: 10px; overflow: hidden;
          margin-bottom: 28px; background: var(--border);
          border: 1.5px solid var(--border); position: relative;
        }
        .sol-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
        .sol-img-wrap:hover .sol-img { transform: scale(1.04); }
        .sol-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,31,60,.4) 0%, transparent 50%);
          pointer-events: none;
        }
        .sol-img-tag {
          position: absolute; bottom: 14px; left: 14px;
          background: var(--blue-brand); color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 3px;
        }

        /* Two-col grid */
        .sol-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        @media (max-width: 600px) { .sol-grid { grid-template-columns: 1fr; } }

        .sol-card {
          background: var(--white); border: 1.5px solid var(--border);
          border-radius: 8px; padding: 20px;
        }
        .sol-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
          color: var(--blue-brand); margin-bottom: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .sol-card-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }

        .sol-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .sol-list-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; font-weight: 300; color: var(--text-muted); line-height: 1.5;
        }
        .sol-list-item::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--blue-brand); flex-shrink: 0; margin-top: 6px;
        }

        .sol-feat-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; font-weight: 300; color: var(--text-muted); line-height: 1.5;
        }
        .sol-feat-check {
          width: 16px; height: 16px; border-radius: 50%;
          background: var(--blue-brand); color: #fff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        /* Apps */
        .sol-apps { display: flex; flex-wrap: wrap; gap: 8px; }
        .sol-app-tag {
          padding: 5px 14px; background: var(--white);
          border: 1.5px solid var(--border); border-radius: 4px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
          color: var(--text-muted);
          transition: border-color .2s, color .2s, background .2s; cursor: default;
        }
        .sol-app-tag:hover {
          border-color: var(--blue-brand); color: var(--blue-brand); background: var(--blue-pale);
        }

        /* CTA row */
        .sol-cta-row {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-top: 28px; padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .sol-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; background: var(--blue-brand); color: #fff;
          border: none; border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(18,81,163,0.3);
          transition: background .2s, transform .15s;
        }
        .sol-btn-primary:hover { background: var(--blue-light); transform: translateY(-2px); }
        .sol-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 20px; background: transparent; color: var(--text);
          border: 1.5px solid var(--border); border-radius: 4px; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          transition: border-color .2s, color .2s;
        }
        .sol-btn-ghost:hover { border-color: var(--blue-brand); color: var(--blue-brand); }

        /* Progress */
        .sol-progress { display: flex; gap: 6px; margin-top: 32px; }
        .sol-prog-item {
          flex: 1; height: 3px; border-radius: 3px;
          background: var(--border); cursor: pointer;
          transition: background .3s;
        }
        .sol-prog-item.active { background: var(--blue-brand); }
        .sol-prog-item:hover:not(.active) { background: var(--text-muted); }
      `}</style>

      <div className="sol-root">

        {/* HEADER */}
        <header className="sol-header">
          <div className="sol-header-bar" />
          <div className="sol-header-badge">
            <span className="sol-badge-dot" />
            Suntech Engineering Pvt. Ltd.
          </div>
          <p className="sol-header-sub">Packaging Machinery Solutions</p>
          <h1 className="sol-header-title">
            Industrial <span>Packaging</span><br />Solutions
          </h1>
          <p className="sol-header-desc">
            Specialised packaging machinery for food, spices, grains, liquids, and automated production lines — engineered for Indian &amp; global manufacturing standards.
          </p>
        </header>

        {/* BODY */}
        <div className="sol-layout">

          {/* SIDEBAR */}
          <aside className="sol-sidebar">
            <p className="sol-sidebar-title">Solution Categories</p>
            <div className="sol-nav">
              {solutions.map(sol => (
                <button
                  key={sol.id}
                  className={`sol-nav-item${active.id === sol.id ? " active" : ""}`}
                  onClick={() => handleSelect(sol)}
                  onMouseEnter={() => handleSelect(sol)}
                >
                  <span className="sol-nav-icon">{sol.icon}</span>
                  <span className="sol-nav-label">{sol.name}</span>
                  <span className="sol-nav-arrow">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </aside>

          {/* CONTENT */}
          <main className="sol-content">
            <div key={animKey} className="sol-panel">

              <div className="sol-counter">
                <span className="sol-counter-num">{String(activeIndex + 1).padStart(2,"0")} / {String(solutions.length).padStart(2,"0")}</span>
                <span className="sol-counter-line" />
                <span className="sol-counter-cat">Suntech Solutions</span>
              </div>

              <h2 className="sol-panel-title">{active.title}</h2>
              <p className="sol-panel-subtitle">{active.subtitle}</p>
              <p className="sol-panel-desc">{active.description}</p>

              <div className="sol-img-wrap">
                <img src={active.image} alt={active.title} className="sol-img" />
                <div className="sol-img-overlay" />
                <span className="sol-img-tag">Suntech Machinery</span>
              </div>

              <div className="sol-grid">
                <div className="sol-card">
                  <p className="sol-card-title">Sub-Solutions</p>
                  <ul className="sol-list">
                    {active.subSolutions.map((s, i) => (
                      <li key={i} className="sol-list-item">{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="sol-card">
                  <p className="sol-card-title">Key Features</p>
                  <ul className="sol-list">
                    {active.features.map((f, i) => (
                      <li key={i} className="sol-feat-item">
                        <span className="sol-feat-check">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="sol-card" style={{ marginBottom: 0 }}>
                <p className="sol-card-title">Industries &amp; Applications</p>
                <div className="sol-apps">
                  {active.applications.map((app, i) => (
                    <span key={i} className="sol-app-tag">{app}</span>
                  ))}
                </div>
              </div>

              <div className="sol-cta-row">
                <button className="sol-btn-primary">
                  Request Quotation
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="sol-btn-ghost">View Brochure</button>
                <button className="sol-btn-ghost">Talk to an Engineer</button>
              </div>

              <div className="sol-progress">
                {solutions.map((sol, i) => (
                  <div
                    key={sol.id}
                    className={`sol-prog-item${active.id === sol.id ? " active" : ""}`}
                    onClick={() => handleSelect(sol)}
                    title={sol.name}
                  />
                ))}
              </div>

            </div>
          </main>

        </div>
      </div>
    </>
  );
}