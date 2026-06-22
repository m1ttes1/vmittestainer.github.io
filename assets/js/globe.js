/* CO2 Globe preview — mounts a mini Globe.gl into #globe-preview */
(function initGlobePreview() {
  const container = document.getElementById('globe-preview');
  if (!container || typeof Globe === 'undefined') {
    if (container) container.innerHTML =
      '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:0.75rem;color:#8888A8;">CO₂ Globe · WebGL</div>';
    return;
  }

  const globe = Globe({ animateIn: false })(container);

  globe
    .backgroundColor('rgba(0,0,0,0)')
    .showAtmosphere(true)
    .atmosphereColor('#00D4AA')
    .atmosphereAltitude(0.15)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
    .width(container.offsetWidth)
    .height(container.offsetHeight);

  /* Auto-rotate */
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.6;
  globe.controls().enableZoom = false;

  /* Resize */
  const ro = new ResizeObserver(() => {
    globe.width(container.offsetWidth).height(container.offsetHeight);
  });
  ro.observe(container);
})();
