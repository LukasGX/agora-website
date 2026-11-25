/* Gemeinsames Verhalten aller Seiten: Menü, Reveals, Leitung, Leitsatz. */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const initNav = () => {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    };

    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  };

  /* Jeder Abschnitt steigt einmal auf, wenn er ins Bild kommt. */
  const initReveals = () => {
    const items = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((item) => observer.observe(item));
  };

  /* Leitung und Leitsatz hängen beide an der Scrollposition; ein rAF pro Frame. */
  const initScroll = () => {
    const track = document.querySelector(".track");
    const words = Array.from(document.querySelectorAll("[data-words]")).map(splitWords);
    if (!track && !words.length) return;

    let queued = false;

    const paint = () => {
      queued = false;
      const viewport = window.innerHeight;

      if (track) {
        const { top, height } = track.getBoundingClientRect();
        const progress = Math.min(Math.max((viewport / 2 - top) / height, 0), 1);
        track.style.setProperty("--progress", progress.toFixed(4));
      }

      /* Ein Wort wird hell, sobald es die Linie bei 70 % der Fensterhöhe passiert. */
      words.flat().forEach((word) => {
        word.classList.toggle("is-on", reduceMotion.matches || word.getBoundingClientRect().top < viewport * 0.7);
      });
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

  /* Zerlegt den Text in einzelne Wörter. Vorleser bekommen den ganzen Satz. */
  function splitWords(element) {
    const text = element.textContent.trim().replace(/\s+/g, " ");
    element.setAttribute("aria-label", text);
    element.textContent = "";

    return text.split(" ").map((part, index) => {
      if (index) element.append(" ");
      const word = document.createElement("span");
      word.className = "word";
      word.setAttribute("aria-hidden", "true");
      word.textContent = part;
      element.append(word);
      return word;
    });
  }

  initNav();
  initReveals();
  initScroll();
})();
