/* ==========================================================================
   INTERACTIVITY — Warm Gray & Amber Portfolio
   Typewriter + Scroll Reveal (IntersectionObserver)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ──────────────────────────────────────────────────────────────────
  // 1. TYPEWRITER — cycles through role titles
  // ──────────────────────────────────────────────────────────────────
  const typewriterEl = document.getElementById("typewriter");

  if (typewriterEl) {
    const phrases = [
      "Data Engineer",
      "AI & Backend Engineer",
      "Distributed Systems Builder",
      "Agentic Workflow Architect",
      "Geospatial Pipeline Specialist",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const TYPING_SPEED = 75;
    const DELETING_SPEED = 40;
    const PAUSE_AFTER_TYPING = 2200;
    const PAUSE_AFTER_DELETING = 350;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(type, PAUSE_AFTER_TYPING);
          return;
        }
        setTimeout(type, TYPING_SPEED);
      } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, PAUSE_AFTER_DELETING);
          return;
        }
        setTimeout(type, DELETING_SPEED);
      }
    }

    // Start after hero animations settle
    setTimeout(type, 1400);
  }


  // ──────────────────────────────────────────────────────────────────
  // 2. SCROLL-REVEAL via IntersectionObserver
  // ──────────────────────────────────────────────────────────────────
  const revealTargets = document.querySelectorAll(
    ".md-content__inner h2, " +
    ".md-content__inner h3, " +
    ".md-content__inner h4, " +
    ".md-content__inner p, " +
    ".md-content__inner ul, " +
    ".md-content__inner ol, " +
    ".md-content__inner table, " +
    ".md-content__inner .admonition, " +
    ".md-content__inner details, " +
    ".md-content__inner hr"
  );

  revealTargets.forEach((el) => {
    el.classList.add("scroll-reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08,
    }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));


  // ──────────────────────────────────────────────────────────────────
  // 3. HEADER SCROLL EFFECT — warm glassmorphism on scroll
  // ──────────────────────────────────────────────────────────────────
  const header = document.querySelector(".md-header");
  if (header) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 60) {
            header.style.borderBottom = "1px solid var(--line)";
          } else {
            header.style.borderBottom = "1px solid transparent";
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }
});
