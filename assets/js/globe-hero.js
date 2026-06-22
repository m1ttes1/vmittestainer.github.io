(function () {
  'use strict';

  const CO2_2022 = [
    { country: 'China',          lat:  35.0, lng: 105.0, co2: 11472 },
    { country: 'United States',  lat:  37.1, lng: -95.7, co2:  5007 },
    { country: 'India',          lat:  20.6, lng:  78.9, co2:  2708 },
    { country: 'Russia',         lat:  60.0, lng:  90.0, co2:  1757 },
    { country: 'Japan',          lat:  36.2, lng: 138.2, co2:  1081 },
    { country: 'Germany',        lat:  51.2, lng:  10.5, co2:   675 },
    { country: 'South Korea',    lat:  36.5, lng: 127.9, co2:   600 },
    { country: 'Iran',           lat:  32.4, lng:  53.7, co2:   720 },
    { country: 'Saudi Arabia',   lat:  23.9, lng:  45.1, co2:   700 },
    { country: 'Canada',         lat:  56.1, lng:-106.3, co2:   565 },
    { country: 'Indonesia',      lat:  -0.8, lng: 113.9, co2:   720 },
    { country: 'Brazil',         lat: -10.0, lng: -55.0, co2:   450 },
    { country: 'Mexico',         lat:  23.6, lng:-102.5, co2:   450 },
    { country: 'South Africa',   lat: -30.6, lng:  22.9, co2:   420 },
    { country: 'Turkey',         lat:  38.9, lng:  35.2, co2:   450 },
    { country: 'Australia',      lat: -25.3, lng: 133.8, co2:   400 },
    { country: 'United Kingdom', lat:  55.4, lng:  -3.4, co2:   330 },
    { country: 'Italy',          lat:  42.5, lng:  12.6, co2:   300 },
    { country: 'Poland',         lat:  51.9, lng:  19.1, co2:   290 },
    { country: 'France',         lat:  46.2, lng:   2.2, co2:   270 },
    { country: 'Thailand',       lat:  15.9, lng: 100.9, co2:   270 },
    { country: 'Vietnam',        lat:  14.1, lng: 108.3, co2:   270 },
    { country: 'UAE',            lat:  23.4, lng:  53.8, co2:   230 },
    { country: 'Egypt',          lat:  26.8, lng:  30.8, co2:   230 },
    { country: 'Malaysia',       lat:   4.2, lng: 108.0, co2:   250 },
    { country: 'Spain',          lat:  40.5, lng:  -3.7, co2:   240 },
    { country: 'Kazakhstan',     lat:  48.0, lng:  66.9, co2:   250 },
    { country: 'Pakistan',       lat:  30.4, lng:  69.3, co2:   210 },
    { country: 'Iraq',           lat:  33.2, lng:  43.7, co2:   180 },
    { country: 'Algeria',        lat:  28.0, lng:   1.7, co2:   170 },
    { country: 'Ukraine',        lat:  49.0, lng:  32.0, co2:   170 },
    { country: 'Argentina',      lat: -38.4, lng: -63.6, co2:   200 },
    { country: 'Netherlands',    lat:  52.1, lng:   5.3, co2:   145 },
    { country: 'Philippines',    lat:  12.9, lng: 121.8, co2:   125 },
    { country: 'Bangladesh',     lat:  23.7, lng:  90.4, co2:    80 },
    { country: 'Nigeria',        lat:   9.1, lng:   8.7, co2:   100 },
    { country: 'Colombia',       lat:   4.6, lng: -74.3, co2:    90 },
    { country: 'Chile',          lat: -35.7, lng: -71.5, co2:    85 },
    { country: 'Romania',        lat:  45.9, lng:  24.9, co2:    60 },
    { country: 'Czech Republic', lat:  49.8, lng:  15.5, co2:    95 },
    { country: 'Belgium',        lat:  50.5, lng:   4.5, co2:    95 },
    { country: 'Uzbekistan',     lat:  41.4, lng:  63.9, co2:   100 },
    { country: 'Turkmenistan',   lat:  38.9, lng:  59.6, co2:    80 },
    { country: 'Libya',          lat:  26.3, lng:  17.2, co2:    50 },
    { country: 'Venezuela',      lat:   6.4, lng: -66.6, co2:    70 },
    { country: 'Israel',         lat:  31.5, lng:  35.0, co2:    63 },
    { country: 'Morocco',        lat:  31.8, lng:  -7.1, co2:    60 },
    { country: 'Austria',        lat:  47.5, lng:  14.6, co2:    60 },
    { country: 'Greece',         lat:  39.1, lng:  22.0, co2:    50 },
    { country: 'Peru',           lat:  -9.2, lng: -75.0, co2:    55 },
    { country: 'Belarus',        lat:  53.7, lng:  28.0, co2:    55 },
    { country: 'Hungary',        lat:  47.2, lng:  19.5, co2:    42 },
    { country: 'Azerbaijan',     lat:  40.1, lng:  47.6, co2:    45 },
    { country: 'Portugal',       lat:  39.4, lng:  -8.2, co2:    40 },
    { country: 'Sweden',         lat:  60.1, lng:  18.6, co2:    40 },
    { country: 'New Zealand',    lat: -40.9, lng: 172.7, co2:    34 },
    { country: 'Switzerland',    lat:  46.8, lng:   8.2, co2:    36 },
    { country: 'Norway',         lat:  64.6, lng:  17.9, co2:    40 },
    { country: 'Denmark',        lat:  56.3, lng:   9.5, co2:    30 },
    { country: 'Finland',        lat:  61.9, lng:  25.7, co2:    30 },
    { country: 'Ecuador',        lat:  -1.8, lng: -78.2, co2:    35 },
    { country: 'Cuba',           lat:  21.5, lng: -79.0, co2:    25 },
    { country: 'Kenya',          lat:  -0.1, lng:  37.9, co2:    18 },
    { country: 'Ethiopia',       lat:   9.1, lng:  40.5, co2:    20 },
    { country: 'Myanmar',        lat:  17.1, lng:  96.8, co2:    35 },
    { country: 'Cambodia',       lat:  12.6, lng: 104.9, co2:    12 },
    { country: 'Sri Lanka',      lat:   7.9, lng:  80.8, co2:    22 },
    { country: 'Slovakia',       lat:  48.7, lng:  19.7, co2:    28 },
    { country: 'Bulgaria',       lat:  42.7, lng:  25.5, co2:    35 },
    { country: 'Bolivia',        lat: -16.3, lng: -63.6, co2:    18 },
    { country: 'Guatemala',      lat:  15.8, lng: -90.2, co2:    20 },
    { country: 'Ghana',          lat:   7.9, lng:  -1.0, co2:    18 },
  ];

  function initHeroGlobe() {
    const container = document.getElementById('hero-globe');
    if (!container) return;
    if (typeof Globe === 'undefined') return;

    const SIZE = 420;
    const w = container.offsetWidth  || SIZE;
    const h = container.offsetHeight || SIZE;

    const maxCo2 = Math.max(...CO2_2022.map(d => d.co2));

    function emissionsColor(co2) {
      const t = Math.pow(co2 / maxCo2, 0.35);
      if (t < 0.5) {
        const s = t * 2;
        return `rgb(${Math.round(s * 245)},${Math.round(212 + s * (158 - 212))},${Math.round(170 + s * (11 - 170))})`;
      }
      const s = (t - 0.5) * 2;
      return `rgb(${Math.round(245 + s * 10)},${Math.round(158 - s * 108)},11)`;
    }

    try {
      const globe = Globe({ animateIn: true })(container);

      globe
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#00D4AA')
        .atmosphereAltitude(0.12)
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .pointsData(CO2_2022)
        .pointLat('lat')
        .pointLng('lng')
        .pointAltitude(d => (d.co2 / maxCo2) * 0.45)
        .pointRadius(d => 0.22 + (d.co2 / maxCo2) * 0.55)
        .pointColor(d => emissionsColor(d.co2))
        .pointLabel(d =>
          `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;padding:6px 10px;` +
          `background:#13131A;border:1px solid #00D4AA;border-radius:6px;color:#E8E8F0;white-space:nowrap">` +
          `<span style="color:#00D4AA;font-weight:700">${d.country}</span><br>` +
          `${d.co2.toLocaleString()} Mt CO₂ · 2022` +
          `</div>`
        )
        .width(w)
        .height(h);

      const ctrl = globe.controls();
      ctrl.autoRotate      = true;
      ctrl.autoRotateSpeed = 0.5;
      ctrl.enableZoom      = false;
      ctrl.addEventListener('start', () => { ctrl.autoRotate = false; });

      new ResizeObserver(() => {
        const nw = container.offsetWidth  || SIZE;
        const nh = container.offsetHeight || SIZE;
        globe.width(nw).height(nh);
      }).observe(container);

    } catch (e) {
      console.warn('Hero globe init failed:', e);
    }
  }

  /* Defer until after paint so layout is settled */
  if (document.readyState === 'complete') {
    initHeroGlobe();
  } else {
    window.addEventListener('load', initHeroGlobe);
  }
})();
