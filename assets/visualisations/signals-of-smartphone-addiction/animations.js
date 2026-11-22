(function() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return;

  const root = document.querySelector("[data-signals-d3-visualisation]") || document.body;
  const sections = Array.from(root.querySelectorAll("#dashboard section"));
  if (!sections.length) return;

  sections.forEach(section => section.classList.add("reveal-section"));
  root.classList.add("animations-ready");

  if (!("IntersectionObserver" in window)) {
    sections.forEach(section => {
      section.classList.add("is-visible");
      section.dispatchEvent(new CustomEvent("dashboard:section-visible", { bubbles: true }));
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      entry.target.dispatchEvent(new CustomEvent("dashboard:section-visible", { bubbles: true }));
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px"
  });

  sections.forEach(section => observer.observe(section));
})();
