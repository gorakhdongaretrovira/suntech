import videos from "../data/videos";

const REAL_VIDEO = {
  youtubeId: "z72m41Uln2Q",
  title: "Automatic Kurkure / Namkeen Packing Machine",
  desc: "Watch our fully automatic namkeen packing machine in action — precision filling, sealing, and packaging for high-speed production lines.",
};

const css = `
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

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .vid-page {
    font-family: 'Barlow', sans-serif;
    background: var(--off-white);
    min-height: 100vh;
  }

  /* ── HERO HEADER ── */
  .vid-hero {
    background: var(--blue-dark);
    padding: 64px 24px 56px;
    text-align: center;
    position: relative; overflow: hidden;
  }
  .vid-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 40px 40px; pointer-events: none;
  }
  .vid-hero-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); }

  .vid-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--accent);
    background: rgba(245,166,35,0.12);
    border: 1.5px solid rgba(245,166,35,0.3);
    border-radius: 4px; padding: 6px 14px;
    margin-bottom: 20px; position: relative; z-index: 1;
  }
  .vid-hero-eyebrow::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); animation: blink 2s infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }

  .vid-hero-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 900; color: #fff;
    text-transform: uppercase; letter-spacing: -.01em;
    line-height: 1.0; margin-bottom: 14px;
    position: relative; z-index: 1;
  }
  .vid-hero-title span { color: var(--blue-light); }

  .vid-hero-sub {
    font-size: 15px; color: rgba(192,215,245,0.65);
    font-weight: 300; line-height: 1.7;
    max-width: 480px; margin: 0 auto;
    position: relative; z-index: 1;
  }

  /* ── WRAP ── */
  .vid-wrap {
    max-width: 1160px; margin: 0 auto; padding: 48px 24px 80px;
  }

  /* ── SECTION LABEL ── */
  .vid-section-label {
    display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
  }
  .vid-label-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase;
    color: var(--blue-brand); white-space: nowrap;
    display: flex; align-items: center; gap: 8px;
  }
  .vid-label-text::before {
    content: ''; width: 24px; height: 2px;
    background: var(--blue-brand); border-radius: 2px;
  }
  .vid-label-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase;
    color: var(--accent);
    background: rgba(245,166,35,0.1);
    border: 1px solid rgba(245,166,35,0.3);
    border-radius: 4px; padding: 4px 10px;
  }
  .vid-label-badge::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--accent); animation: blink 2s infinite;
  }
  .vid-label-line { flex: 1; height: 1px; background: var(--border); }

  /* ── FEATURED CARD ── */
  .vid-featured {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: 10px; overflow: hidden;
    box-shadow: 0 4px 24px rgba(18,81,163,0.08);
    margin-bottom: 48px;
    transition: box-shadow .3s, transform .3s;
    position: relative;
  }
  .vid-featured-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--blue-brand); z-index: 2; }
  .vid-featured:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 48px rgba(18,81,163,0.13);
  }
  .vid-featured-frame {
    width: 100%; aspect-ratio: 16/9;
    background: var(--blue-dark); display: block;
  }
  .vid-featured-body {
    padding: 24px 28px;
    display: flex; align-items: flex-start; justify-content: space-between;
    gap: 20px; border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .vid-featured-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px; font-weight: 900;
    color: var(--blue-dark); text-transform: uppercase;
    letter-spacing: .02em; margin-bottom: 6px;
  }
  .vid-featured-desc {
    font-size: 13.5px; color: var(--text-muted);
    font-weight: 300; line-height: 1.7; max-width: 540px;
  }
  .vid-yt-link {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 20px; border-radius: 4px;
    background: var(--blue-brand); color: #fff;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    text-decoration: none; white-space: nowrap; flex-shrink: 0;
    transition: background .2s, transform .15s;
    box-shadow: 0 4px 14px rgba(18,81,163,0.3);
  }
  .vid-yt-link:hover { background: var(--blue-light); transform: translateY(-2px); }

  /* ── MORE VIDEOS ── */
  .vid-grid {
    display: grid; grid-template-columns: 1fr; gap: 20px;
  }
  @media (min-width: 640px)  { .vid-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .vid-grid { grid-template-columns: repeat(3, 1fr); } }

  .vid-card {
    background: var(--white);
    border: 1.5px solid var(--border);
    border-radius: 10px; overflow: hidden;
    box-shadow: 0 2px 10px rgba(18,81,163,0.04);
    transition: border-color .25s, box-shadow .3s, transform .3s;
    position: relative;
  }
  .vid-card:hover {
    border-color: var(--blue-brand);
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(18,81,163,0.12);
  }
  .vid-card-bar {
    height: 3px; background: var(--border); transition: background .25s;
  }
  .vid-card:hover .vid-card-bar { background: var(--blue-brand); }
  .vid-card-frame {
    width: 100%; aspect-ratio: 16/9;
    background: var(--blue-dark); display: block;
  }
  .vid-card-body {
    padding: 18px 20px 20px; border-top: 1px solid var(--border);
  }
  .vid-card-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px; font-weight: 800;
    color: var(--blue-dark); text-transform: uppercase;
    letter-spacing: .02em; margin-bottom: 8px; line-height: 1.2;
  }
  .vid-card-desc {
    font-size: 12.5px; color: var(--text-muted);
    font-weight: 300; line-height: 1.7;
  }

  /* ── EMPTY ── */
  .vid-empty {
    text-align: center; padding: 64px 24px;
    background: var(--white); border: 1.5px solid var(--border);
    border-radius: 10px;
  }
  .vid-empty-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 22px; font-weight: 800;
    color: var(--blue-dark); text-transform: uppercase;
    margin-bottom: 8px;
  }
  .vid-empty-sub { font-size: 14px; color: var(--text-muted); }

  @keyframes vidIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .vid-card { animation: vidIn .4s ease both; }
`;

export default function Video() {
  const allVideos = [REAL_VIDEO, ...(videos || []).filter(v => v.youtubeId !== REAL_VIDEO.youtubeId)];
  const [featured, ...rest] = allVideos;

  return (
    <>
      <style>{css}</style>

      <div className="vid-page">

        {/* HERO */}
        <div className="vid-hero">
          <div className="vid-hero-top" />
          <div className="vid-hero-eyebrow">Video Library</div>
          <h1 className="vid-hero-title">Machine <span>Demos</span><br />&amp; Videos</h1>
          <p className="vid-hero-sub">
            Explore our latest demonstrations, case studies, and product walkthroughs.
          </p>
        </div>

        <div className="vid-wrap">

          {/* FEATURED */}
          <div className="vid-section-label">
            <span className="vid-label-badge">Featured</span>
            <div className="vid-label-line" />
          </div>

          <div className="vid-featured">
            <div className="vid-featured-top" />
            <iframe
              className="vid-featured-frame"
              src={`https://www.youtube.com/embed/${featured.youtubeId}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen loading="lazy"
            />
            <div className="vid-featured-body">
              <div>
                <div className="vid-featured-name">{featured.title}</div>
                <div className="vid-featured-desc">{featured.desc}</div>
              </div>
              <a href={`https://www.youtube.com/watch?v=${featured.youtubeId}`} target="_blank" rel="noreferrer" className="vid-yt-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* MORE VIDEOS */}
          {rest.length > 0 && (
            <>
              <div className="vid-section-label" style={{ marginBottom: 24 }}>
                <span className="vid-label-text">More Videos</span>
                <div className="vid-label-line" />
              </div>
              <div className="vid-grid">
                {rest.map((video, i) => (
                  <article key={video.youtubeId} className="vid-card" style={{ animationDelay: `${i * 70}ms` }}>
                    <div className="vid-card-bar" />
                    <iframe
                      className="vid-card-frame"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen loading="lazy"
                    />
                    <div className="vid-card-body">
                      <h2 className="vid-card-name">{video.title}</h2>
                      <p className="vid-card-desc">{video.desc || "Watch this overview to learn more about our industrial packaging equipment."}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {allVideos.length === 0 && (
            <div className="vid-empty">
              <div className="vid-empty-title">No Videos Yet</div>
              <div className="vid-empty-sub">Check back soon for product demonstrations.</div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}