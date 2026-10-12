'use strict';

const navigation = document.querySelector('.navigation');
const menu = document.querySelector('#menu-principal');
const toggle = document.querySelector('.menu-toggle');
const desktop = window.matchMedia('(min-width: 768px)');

if (navigation && menu && toggle) {
  const setOpen = (open, returnFocus = false) => {
    menu.hidden = !desktop.matches && !open;
    toggle.setAttribute('aria-expanded', String(!desktop.matches && open));
    if (returnFocus) toggle.focus();
  };
  navigation.classList.add('enhanced');
  toggle.hidden = false;
  setOpen(false);
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      setOpen(false, true);
    }
  });
  menu.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    setOpen(false);
    const destination = document.querySelector(link.getAttribute('href'));
    if (destination) {
      // El anchor conserva el desplazamiento y el historial nativos.
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
      destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
    }
  });
  desktop.addEventListener('change', () => {
    const focusIsInMenu = menu.contains(document.activeElement);
    setOpen(false, !desktop.matches && focusIsInMenu);
  });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && toggle.getAttribute('aria-expanded') === 'true') {
      // No ocultar un enlace que conserve el foco tras pulsar una zona no enfocable.
      setOpen(false, menu.contains(document.activeElement));
    }
  });
}

const sectionLinks = [...document.querySelectorAll('#menu-principal a[href^="#"]')];
const sections = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && sections.length) {
  let scheduled = false;
  const updateActive = () => {
    scheduled = false;
    const offset = (document.querySelector('.site-header')?.offsetHeight || 84) + 110;
    let active = sections[0];
    for (const section of sections) if (section.getBoundingClientRect().top <= offset) active = section;
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) active = sections.at(-1);
    for (const link of sectionLinks) {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  const observer = new IntersectionObserver(updateActive, { rootMargin: '-84px 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateActive); }
  }, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();
}

document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
