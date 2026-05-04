/* ═══════════════════════
   THEME TOGGLE
═══════════════════════ */
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved preference
const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);
themeBtn.textContent = saved === 'dark' ? '☀ Light' : '🌙 Dark';

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeBtn.textContent = next === 'dark' ? '☀ Light' : '🌙 Dark';
});

/* ═══════════════════════
   MOBILE MENU
═══════════════════════ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

/* ═══════════════════════
   NAVBAR SCROLL SHRINK
═══════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.padding = window.scrollY > 40 ? '0.6rem 3rem' : '1rem 3rem';
});

/* ═══════════════════════
   SCROLL REVEAL
═══════════════════════ */
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);

// Add fade-in class to key elements and observe
const targets = [
  ...document.querySelectorAll('.achieve-card'),
  ...document.querySelectorAll('.project-card'),
  ...document.querySelectorAll('.highlight-card'),
  ...document.querySelectorAll('.contact-card'),
  ...document.querySelectorAll('.about-container'),
  ...document.querySelectorAll('.gallery-item'),
];

targets.forEach((el, i) => {
  el.classList.add('fade-in');
  if (i % 3 === 1) el.classList.add('delay-1');
  if (i % 3 === 2) el.classList.add('delay-2');
  observer.observe(el);
});

/* ═══════════════════════
   ACTIVE NAV HIGHLIGHT
═══════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

/* ═══════════════════════
   GALLERY LIGHTBOX
═══════════════════════ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(el) {
  const img = el.querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ═══════════════════════
   FOOTER YEAR
═══════════════════════ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ═══════════════════════
   SMOOTH SCROLL FALLBACK
═══════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
