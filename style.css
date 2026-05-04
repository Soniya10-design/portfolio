:root {
  --bg: #0a0a0f;
  --bg2: #111118;
  --card: #16161f;
  --border: rgba(160,130,255,0.15);
  --accent: #a082ff;
  --accent2: #ff82c8;
  --gold: #f5c842;
  --text: #e8e8f0;
  --muted: #888899;
  --white: #ffffff;
}

body.light {
  --bg: #f4f2ff;
  --bg2: #ede9ff;
  --card: #ffffff;
  --border: rgba(120,80,220,0.18);
  --accent: #6a3fff;
  --accent2: #d63fa0;
  --gold: #c49c00;
  --text: #1a1a2e;
  --muted: #666677;
  --white: #1a1a2e;
}

* { margin:0; padding:0; box-sizing:border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background 0.4s, color 0.4s;
  overflow-x: hidden;
}

body::before {
  content:'';
  position:fixed;
  inset:0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events:none;
  z-index:0;
  opacity:0.4;
}

/* ===== NAV ===== */
nav {
  position: fixed;
  top:0; left:0; right:0;
  z-index:100;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 1.1rem 3rem;
  background: rgba(10,10,15,0.85);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  transition: background 0.4s;
}

body.light nav { background: rgba(244,242,255,0.88); }

.nav-logo {
  font-family:'Cormorant Garamond',serif;
  font-size:1.5rem;
  font-weight:600;
  letter-spacing:0.04em;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.nav-links { display:flex; gap:2rem; list-style:none; }

.nav-links a {
  text-decoration:none;
  color:var(--muted);
  font-size:0.85rem;
  letter-spacing:0.08em;
  text-transform:uppercase;
  transition: color 0.3s;
}

.nav-links a:hover { color: var(--accent); }

.toggle-btn {
  background:none;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.4rem 1rem;
  border-radius:30px;
  cursor:pointer;
  font-size:0.8rem;
  letter-spacing:0.05em;
  transition: all 0.3s;
}

.toggle-btn:hover { border-color: var(--accent); color: var(--accent); }

/* ===== HERO ===== */
#home {
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  padding: 6rem 2rem 4rem;
  overflow:hidden;
}

.hero-orb {
  position:absolute;
  border-radius:50%;
  filter:blur(90px);
  animation: pulse 6s ease-in-out infinite alternate;
}

.orb1 {
  width:500px; height:500px;
  background: radial-gradient(circle, rgba(160,130,255,0.18), transparent 70%);
  top:-100px; right:-100px;
}

.orb2 {
  width:400px; height:400px;
  background: radial-gradient(circle, rgba(255,130,200,0.14), transparent 70%);
  bottom:-80px; left:-80px;
  animation-delay: 3s;
}

@keyframes pulse {
  from { transform:scale(1) rotate(0deg); opacity:0.7; }
  to { transform:scale(1.15) rotate(10deg); opacity:1; }
}

.hero-inner {
  text-align:center;
  position:relative;
  z-index:1;
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp {
  from { opacity:0; transform:translateY(40px); }
  to { opacity:1; transform:translateY(0); }
}

.hero-photo-placeholder {
  width:140px; height:140px;
  border-radius:50%;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  display:flex; align-items:center; justify-content:center;
  font-size:3.5rem;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 30px rgba(160,130,255,0.35);
  animation: fadeUp 1s ease 0.2s both;
}

.hero-photo {
  width:140px; height:140px;
  border-radius:50%;
  object-fit:cover;
  border: 3px solid var(--accent);
  box-shadow: 0 0 30px rgba(160,130,255,0.35);
  margin: 0 auto 1.5rem;
  display:block;
  animation: fadeUp 1s ease 0.2s both;
}

.hero-name {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.8rem, 7vw, 5rem);
  font-weight:300;
  letter-spacing:-0.01em;
  line-height:1.1;
  animation: fadeUp 1s ease 0.3s both;
}

.hero-name span {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  display:block;
  font-weight:600;
}

.hero-tagline {
  color:var(--muted);
  font-size:1rem;
  letter-spacing:0.1em;
  text-transform:uppercase;
  margin: 1.2rem 0 2rem;
  animation: fadeUp 1s ease 0.45s both;
}

.hero-intro {
  max-width:560px;
  margin:0 auto 2.5rem;
  font-size:1.05rem;
  line-height:1.75;
  color:var(--muted);
  animation: fadeUp 1s ease 0.55s both;
}

.hero-cta {
  display:flex;
  gap:1rem;
  justify-content:center;
  flex-wrap:wrap;
  animation: fadeUp 1s ease 0.65s both;
}

/* ===== BUTTONS ===== */
.btn {
  padding:0.75rem 2rem;
  border-radius:50px;
  font-size:0.9rem;
  text-decoration:none;
  transition: all 0.3s;
  cursor:pointer;
  border:none;
  font-family:'DM Sans',sans-serif;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color:#fff;
  box-shadow: 0 8px 25px rgba(160,130,255,0.3);
}

.btn-primary:hover { transform:translateY(-2px); box-shadow:0 12px 30px rgba(160,130,255,0.45); }

.btn-outline {
  border:1px solid var(--border);
  color:var(--text);
  background:transparent;
}

.btn-outline:hover { border-color:var(--accent); color:var(--accent); }

/* ===== SECTIONS ===== */
section { padding: 5rem 2rem; position:relative; z-index:1; }

.container { max-width:1100px; margin:0 auto; }

.section-label {
  font-size:0.75rem;
  letter-spacing:0.2em;
  text-transform:uppercase;
  color:var(--accent);
  margin-bottom:0.75rem;
}

.section-title {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,4vw,3rem);
  font-weight:300;
  margin-bottom:3rem;
  line-height:1.2;
}

/* ===== ABOUT ===== */
#about { background: var(--bg2); }

.about-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:4rem;
  align-items:start;
}

.about-text p {
  color:var(--muted);
  line-height:1.85;
  margin-bottom:1rem;
  font-size:1rem;
}

.strengths-list { list-style:none; display:flex; flex-direction:column; gap:0.7rem; }

.strengths-list li {
  display:flex; align-items:center; gap:0.8rem;
  color:var(--muted); font-size:0.95rem;
}

.strengths-list li::before { content:'◆'; color:var(--accent); font-size:0.6rem; flex-shrink:0; }

.info-card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:16px;
  padding:2rem;
}

.info-card h3 {
  font-family:'Cormorant Garamond',serif;
  font-size:1.3rem;
  margin-bottom:1.2rem;
  color:var(--accent);
}

/* ===== ACHIEVEMENTS ===== */
#achievements { background: var(--bg2); }

.achieve-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(260px,1fr)); gap:1.5rem; }

.achieve-card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:16px;
  padding:1.8rem;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
  position:relative;
  overflow:hidden;
}

.achieve-card::before {
  content:'';
  position:absolute;
  top:0; left:0; right:0;
  height:3px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
}

.achieve-card:hover { transform:translateY(-4px); border-color:var(--accent); box-shadow:0 12px 35px rgba(160,130,255,0.18); }

.achieve-icon { font-size:2rem; margin-bottom:1rem; }
.achieve-card h3 { font-size:1rem; font-weight:500; margin-bottom:0.5rem; }
.achieve-card p { color:var(--muted); font-size:0.88rem; line-height:1.6; }

/* ===== CERTIFICATES ===== */
.cert-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:1.5rem; }

.cert-card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:16px;
  overflow:hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cert-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(160,130,255,0.2); }

.cert-img {
  width:100%; height:180px;
  background: linear-gradient(135deg, #1a1a2e, #2d1b4e);
  display:flex; align-items:center; justify-content:center;
  font-size:3rem;
  overflow:hidden;
}

.cert-img img { width:100%; height:100%; object-fit:cover; }

.cert-body { padding:1.5rem; }
.cert-org { font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--accent); margin-bottom:0.4rem; }
.cert-title { font-size:1rem; font-weight:500; margin-bottom:0.3rem; }
.cert-date { color:var(--muted); font-size:0.82rem; }

/* ===== PROJECTS ===== */
.projects-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(320px,1fr)); gap:2rem; }

.project-card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:20px;
  padding:2rem;
  transition: all 0.35s;
  position:relative;
  overflow:hidden;
}

.project-card::after {
  content:'';
  position:absolute; inset:0;
  background: linear-gradient(135deg, rgba(160,130,255,0.06), rgba(255,130,200,0.04));
  opacity:0; transition:opacity 0.35s;
}

.project-card:hover { transform:translateY(-5px); border-color:rgba(160,130,255,0.4); }
.project-card:hover::after { opacity:1; }

.project-tag {
  display:inline-block;
  background:rgba(160,130,255,0.12);
  color:var(--accent);
  font-size:0.72rem;
  letter-spacing:0.1em;
  text-transform:uppercase;
  padding:0.3rem 0.8rem;
  border-radius:30px;
  margin-bottom:1rem;
}

.project-card h3 { font-family:'Cormorant Garamond',serif; font-size:1.4rem; margin-bottom:0.75rem; }
.project-card p { color:var(--muted); font-size:0.9rem; line-height:1.7; }

/* ===== GALLERY ===== */
#gallery { background: var(--bg2); }

.gallery-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(220px,1fr)); gap:1rem; }

.gallery-item {
  border-radius:12px; overflow:hidden; aspect-ratio:4/3;
  background:var(--card); border:1px solid var(--border);
  transition: transform 0.3s;
  display:flex; align-items:center; justify-content:center;
  font-size:2rem; color:var(--muted);
}

.gallery-item:hover { transform:scale(1.03); }
.gallery-item img { width:100%; height:100%; object-fit:cover; }

/* ===== EXTRA SKILLS SECTION ===== */
#extra {
  background: linear-gradient(135deg, #0d0a1e 0%, #1a0a2e 100%);
  text-align:center; overflow:hidden; position:relative;
}

.floating-words { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; margin-top:2rem; }

.floating-word {
  padding:0.6rem 1.4rem; border-radius:30px; font-size:0.85rem;
  border:1px solid var(--border); color:var(--muted);
  animation: float 3s ease-in-out infinite alternate;
}

.floating-word:nth-child(2n) { animation-delay:0.5s; }
.floating-word:nth-child(3n) { animation-delay:1s; border-color:rgba(160,130,255,0.3); color:var(--accent); }
.floating-word:nth-child(5n) { animation-delay:1.5s; }

@keyframes float {
  from { transform:translateY(0); }
  to { transform:translateY(-10px); }
}

/* ===== CONTACT ===== */
.contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:start; }

.contact-links { display:flex; flex-direction:column; gap:1rem; }

.contact-link {
  display:flex; align-items:center; gap:1rem;
  padding:1.2rem 1.5rem;
  background:var(--card); border:1px solid var(--border);
  border-radius:12px; text-decoration:none; color:var(--text);
  transition: all 0.3s;
}

.contact-link:hover { border-color:var(--accent); transform:translateX(4px); }

.contact-link-icon {
  width:40px; height:40px; border-radius:10px;
  background: linear-gradient(135deg, rgba(160,130,255,0.2), rgba(255,130,200,0.2));
  display:flex; align-items:center; justify-content:center;
  font-size:1.2rem; flex-shrink:0;
}

.contact-link-info strong { display:block; font-size:0.9rem; }
.contact-link-info span { color:var(--muted); font-size:0.82rem; }

/* ===== FOOTER ===== */
footer {
  text-align:center; padding:2.5rem 2rem;
  border-top:1px solid var(--border);
  color:var(--muted); font-size:0.85rem;
  position:relative; z-index:1;
}

footer span { color:var(--accent2); }

/* ===== SCROLL REVEAL ===== */
.reveal { opacity:0; transform:translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity:1; transform:translateY(0); }

/* ===== RESPONSIVE ===== */
@media(max-width:700px) {
  nav { padding:1rem 1.5rem; }
  .nav-links { display:none; }
  section { padding:3.5rem 1.2rem; }
  .about-grid { grid-template-columns:1fr; gap:2rem; }
  .contact-grid { grid-template-columns:1fr; gap:2rem; }
}
