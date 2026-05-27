const initFadeIn = () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('mtr-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.mtr-fade-in').forEach((el) => io.observe(el));
};

const initTabs = () => {
  const buttons = document.querySelectorAll('.mtr-b2b-section .mtr-tab-btn');
  const panels = document.querySelectorAll('.mtr-b2b-section .mtr-tab-panel');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => {
        btn.classList.remove('mtr-active');
        btn.setAttribute('aria-selected', 'false');
      });
      panels.forEach((panel) => panel.classList.remove('mtr-active'));

      button.classList.add('mtr-active');
      button.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(button.getAttribute('data-tab'));
      if (targetPanel) targetPanel.classList.add('mtr-active');
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
