const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.expandable').forEach((card) => {
  const toggle = card.querySelector('button');
  toggle?.addEventListener('click', () => {
    const open = card.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
});

const filterButtons = document.querySelectorAll('.filter');
const experienceCards = document.querySelectorAll('.experience-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    experienceCards.forEach((card) => {
      const categories = card.dataset.category || '';
      const show = selected === 'all' || categories.includes(selected);
      card.classList.toggle('hide', !show);
    });
  });
});
