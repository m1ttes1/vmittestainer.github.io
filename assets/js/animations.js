(function () {
  'use strict';

  function initHeroAnimation() {
    gsap.registerPlugin(ScrollTrigger);

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
