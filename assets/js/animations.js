(function () {
  'use strict';

  function initHeroAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero__eyebrow',  { opacity: 0, y: 16, duration: 0.5, ease: 'power2.out' });
    gsap.from('.hero__title',    { opacity: 0, y: 24, duration: 0.7, delay: 0.1,  ease: 'power2.out' });
    gsap.from('.hero__subtitle', { opacity: 0, y: 20, duration: 0.6, delay: 0.25, ease: 'power2.out' });
    gsap.from('.hero__cta',      { opacity: 0, y: 16, duration: 0.5, delay: 0.4,  ease: 'power2.out' });
    gsap.from('.hero__stats',    { opacity: 0, y: 12, duration: 0.5, delay: 0.55, ease: 'power2.out' });

    gsap.utils.toArray('[data-reveal]').forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    });

    gsap.from('.card', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: { trigger: '#projects', start: 'top 80%' },
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap === 'undefined') return;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      initHeroAnimation();
    }
  });
})();
