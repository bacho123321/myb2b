const initUi = () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el) => io.observe(el));

  const loginBtn = document.getElementById('loginBtn');
  const popupOverlay = document.getElementById('popupOverlay');
  const popupClose = document.getElementById('popupClose');

  if (!loginBtn || !popupOverlay || !popupClose) {
    return;
  }

  loginBtn.addEventListener('click', () => popupOverlay.classList.add('active'));
  popupClose.addEventListener('click', () => popupOverlay.classList.remove('active'));
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      popupOverlay.classList.remove('active');
    }
  });
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(initUi, { timeout: 200 });
} else {
  document.addEventListener('DOMContentLoaded', initUi);
}