// Menu mobile (facultatif : à améliorer si besoin)
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}

// Colorer les barres de compétences
document.querySelectorAll('.hard-skills input[type="range"]').forEach(range => {
  const value = range.value;
  range.style.background = `linear-gradient(to right, var(--accent) ${value}%, #ddd ${value}%)`;
});

// Formulaire de contact
const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = "✅ Merci ! Votre message a été envoyé (simulation).";
    status.style.color = "green";
    form.reset();
  });
}
// Animation des barres de progression
const progressBars = document.querySelectorAll('.progress-bar');

function animateProgressBars() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-value');
    const barFill = bar.querySelector('::after');
  });
}

// Observer les compétences quand elles apparaissent à l’écran
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const value = bar.getAttribute('data-value');
      bar.querySelector(':after'); // Forcer recalcul
      bar.style.setProperty('--val', value);
      bar.style.setProperty('--fill', value + '%');
      bar.style.setProperty('--animate', 'true');
      bar.style.setProperty('--fill-width', value + '%');
      bar.style.setProperty('--webkit-fill', value + '%');
      bar.style.setProperty('--moz-fill', value + '%');
      bar.querySelector('::after');
      bar.style.setProperty('--fill-value', value + '%');
      bar.style.setProperty('--width', value + '%');
      bar.style.setProperty('--transition', 'width 1.5s ease-out');
      bar.style.setProperty('--background', 'var(--accent)');
      bar.style.setProperty('--color', 'var(--accent)');
      bar.style.setProperty('--progress', value + '%');
      bar.style.setProperty('--fill-color', 'var(--accent)');
      bar.style.setProperty('--progress-width', value + '%');
      bar.querySelector('::after');
      bar.style.setProperty('--progress-value', value + '%');
      bar.querySelector('::after');
      bar.style.setProperty('--progress-bar', value + '%');
      bar.querySelector('::after');
      bar.style.setProperty('--bar-width', value + '%');
      bar.querySelector('::after');
      bar.style.setProperty('--bar-color', 'var(--accent)');
      bar.querySelector('::after');
      bar.querySelector('::after');
      bar.querySelector('::after');
      bar.querySelector('::after');
      bar.style.setProperty('--final-width', value + '%');
      bar.style.setProperty('--final-color', 'var(--accent)');
      bar.querySelector('::after');
      bar.style.setProperty('--final-progress', value + '%');

      // plus simple :
      bar.querySelector('::after');
      bar.style.setProperty('--progress-final', value + '%');
      bar.style.background = `linear-gradient(to right, var(--accent) ${value}%, #ddd ${value}%)`;
      observer.unobserve(bar);
    }
  });
});

progressBars.forEach(bar => observer.observe(bar));

