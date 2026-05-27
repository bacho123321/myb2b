const initFadeIn = () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el) => io.observe(el));
};

const initTabs = () => {
  const buttons = document.querySelectorAll('.b2b-section .tab-btn');
  const panels = document.querySelectorAll('.b2b-section .tab-panel');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      panels.forEach((panel) => panel.classList.remove('active'));

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(button.getAttribute('data-tab'));
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
};

const init = () => {
  initFadeIn();
  initTabs();
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(init, { timeout: 200 });
} else {
  document.addEventListener('DOMContentLoaded', init);
}
