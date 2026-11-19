/* Gemeinsames Verhalten aller Seiten: mobiles Menü und die mitwachsende Leitung. */
(() => {
  const initNav = () => {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  };

  /* Die Leitung ist so weit gefüllt, wie die Bildschirmmitte in ihr steht. */
  const initTrack = () => {
    const track = document.querySelector(".track");
    if (!track) return;

    let queued = false;

    const paint = () => {
      queued = false;
      const { top, height } = track.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - top) / height;
      track.style.setProperty("--progress", Math.min(Math.max(progress, 0), 1).toFixed(4));
    };

    const requestPaint = () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    paint();
  };

  initNav();
  initTrack();
})();
