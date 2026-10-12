(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  const setHeader = () => header?.classList.toggle('scrolled', window.scrollY > 8);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  const setNav = (open) => {
    nav?.classList.toggle('open', open);
    toggle?.setAttribute('aria-expanded', String(open));
    const label = toggle?.querySelector('.sr-only');
    if (label) label.textContent = open ? 'Close navigation' : 'Open navigation';
  };
  const closeNav = () => setNav(false);
  toggle?.addEventListener('click', () => setNav(!nav.classList.contains('open')));
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNav(); });

  // Hero demo: what you type appears on the paused-app screen. Nothing leaves the page.
  const input = document.querySelector('[data-task-input]');
  const output = document.querySelector('[data-task-output]');
  if (input && output) {
    const fallback = output.textContent;
    input.addEventListener('input', () => {
      output.textContent = input.value.trim() || fallback;
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
})();
