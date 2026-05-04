// ===== DARK / LIGHT MODE TOGGLE =====
function toggleDark() {
  document.body.classList.toggle('light');
  const btn = document.querySelector('.toggle-btn');
  btn.textContent = document.body.classList.contains('light') ? '🌙 Dark' : '☀ Light';
}

// ===== SCROLL REVEAL ANIMATION =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));
