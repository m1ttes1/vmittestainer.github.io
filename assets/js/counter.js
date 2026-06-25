(function () {
  'use strict';

  function parseStatValue(text) {
    var m = text.trim().match(/^(\d+)(\D*)$/);
    return m ? { value: parseInt(m[1], 10), suffix: m[2] } : null;
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el, target, suffix, duration) {
    var start = performance.now();
    function tick(now) {
      var t = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * easeOutCubic(t)) + suffix;
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var els = document.querySelectorAll('.stat__value');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        var el = entry.target;
        var parsed = parseStatValue(el.textContent);
        if (!parsed) return;
        // slight delay so GSAP fade-in starts first
        setTimeout(function () {
          animateCounter(el, parsed.value, parsed.suffix, 1400);
        }, 350);
      });
    }, { threshold: 0.3 });

    els.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', initCounters);
})();
