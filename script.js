const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll('.project-card a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

document.querySelectorAll(".project-card-link").forEach((card) => {
  const outcomes = [...card.querySelectorAll(".project-outcomes p")];
  let activeOutcome = 0;
  let outcomeTimer;

  if (outcomes.length < 2) return;

  const showNextOutcome = () => {
    const currentOutcome = outcomes[activeOutcome];
    activeOutcome = (activeOutcome + 1) % outcomes.length;
    const nextOutcome = outcomes[activeOutcome];

    currentOutcome.classList.add("is-leaving");
    currentOutcome.classList.remove("is-active");
    nextOutcome.classList.remove("is-leaving");
    nextOutcome.classList.add("is-active");

    window.setTimeout(() => {
      currentOutcome.classList.remove("is-leaving");
    }, 550);
  };

  const startOutcomeRotation = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    window.clearInterval(outcomeTimer);
    outcomeTimer = window.setInterval(showNextOutcome, 5200);
  };

  const stopOutcomeRotation = () => {
    window.clearInterval(outcomeTimer);
  };

  card.addEventListener("mouseenter", startOutcomeRotation);
  card.addEventListener("mouseleave", stopOutcomeRotation);
  card.addEventListener("focus", startOutcomeRotation);
  card.addEventListener("blur", stopOutcomeRotation);
});

const serviceCards = [...document.querySelectorAll(".service-list article")];
const servicesSection = document.querySelector("#services");
const serviceList = document.querySelector(".service-list");
let activeServiceIndex = -1;
let serviceTicking = false;

function updateActiveService() {
  if (!serviceCards.length || !servicesSection || !serviceList) return;

  const mobile = window.innerWidth <= 760;
  const headerHeight =
    document.querySelector(".site-header")?.offsetHeight ?? 52;
  const activationStart =
    servicesSection.offsetTop - headerHeight;
  const activationEnd =
    servicesSection.offsetTop +
    servicesSection.offsetHeight -
    window.innerHeight;
  const progress = Math.min(
    0.9999,
    Math.max(0, (window.scrollY - activationStart) /
      Math.max(1, activationEnd - activationStart))
  );
  const insideSequence =
    !mobile &&
    window.scrollY >= activationStart &&
    window.scrollY <= activationEnd + 40;
  const nextIndex = insideSequence
    ? Math.floor(progress * serviceCards.length)
    : -1;

  if (nextIndex !== activeServiceIndex) {
    serviceCards.forEach((card, index) => {
      card.classList.toggle("is-active", index === nextIndex);
    });
    activeServiceIndex = nextIndex;
  }

  serviceTicking = false;
}

function requestServiceUpdate() {
  if (serviceTicking) return;
  serviceTicking = true;
  window.requestAnimationFrame(updateActiveService);
}

window.addEventListener("scroll", requestServiceUpdate, { passive: true });
window.addEventListener("resize", requestServiceUpdate);
updateActiveService();

const headerLinks = [...document.querySelectorAll(".header-nav a")];
const sections = headerLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const backToTopButton = document.querySelector(".back-to-top");
const siteHeader = document.querySelector(".site-header");
let backToTopHideTimer;

function setActiveSection(sectionId) {
  siteHeader?.classList.toggle("is-home", sectionId === "home");

  headerLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (backToTopButton) {
    const isHome = sectionId === "home";

    clearTimeout(backToTopHideTimer);

    if (isHome && !backToTopButton.classList.contains("is-hidden")) {
      backToTopButton.classList.add("is-scrolling-up");
      backToTopHideTimer = setTimeout(() => {
        backToTopButton.classList.add("is-hidden");
        backToTopButton.classList.remove("is-scrolling-up");
      }, 850);
    } else if (!isHome) {
      backToTopButton.classList.remove("is-hidden", "is-scrolling-up");
    }

    backToTopButton.tabIndex = isHome ? -1 : 0;
  }
}

function updateActiveSection() {
  const headerHeight =
    document.querySelector(".site-header")?.offsetHeight ?? 0;
  const scrollMarker = window.scrollY + headerHeight + window.innerHeight * 0.25;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= scrollMarker) {
      currentSection = section;
    }
  });

  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2
  ) {
    currentSection = sections[sections.length - 1];
  }

  if (currentSection) {
    setActiveSection(currentSection.id);
  }
}

headerLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = link.getAttribute("href").slice(1);

    if (sectionId === "home") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }

    setActiveSection(sectionId);
  });
});

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("resize", updateActiveSection);
updateActiveSection();

const backToTop = document.querySelector(".back-to-top");

backToTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
  setActiveSection("home");
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let snapTimer;
let isProgrammaticSnap = false;

function snapToNearestSection() {
  if (reduceMotion.matches || isProgrammaticSnap || window.innerWidth <= 760) {
    return;
  }

  const headerHeight = siteHeader?.offsetHeight ?? 52;
  if (servicesSection) {
    const servicesTop = servicesSection.offsetTop - headerHeight;
    const servicesBottom =
      servicesSection.offsetTop + servicesSection.offsetHeight - window.innerHeight;

    if (window.scrollY > servicesTop + 40 && window.scrollY < servicesBottom - 40) {
      return;
    }
  }

  const viewportTarget = headerHeight + (window.innerHeight - headerHeight) * 0.35;
  const nearestSection = sections.reduce((nearest, section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const nearestTop = nearest.getBoundingClientRect().top;

    return Math.abs(sectionTop - viewportTarget) <
      Math.abs(nearestTop - viewportTarget)
      ? section
      : nearest;
  }, sections[0]);

  if (!nearestSection) return;

  const targetTop = nearestSection.offsetTop - headerHeight;

  if (Math.abs(window.scrollY - targetTop) < 4) return;

  isProgrammaticSnap = true;
  window.scrollTo({ top: targetTop, behavior: "smooth" });
  window.setTimeout(() => {
    isProgrammaticSnap = false;
  }, 700);
}

window.addEventListener(
  "scroll",
  () => {
    if (isProgrammaticSnap) return;
    clearTimeout(snapTimer);
    snapTimer = window.setTimeout(snapToNearestSection, 120);
  },
  { passive: true }
);
