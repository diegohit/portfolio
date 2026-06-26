import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const siteUrl = (process.env.SITE_URL || "https://dcm-design-portfolio.netlify.app")
  .replace(/\/$/, "");

const projectDataSource = fs.readFileSync(
  path.join(root, "project-data.js"),
  "utf8"
);
const dataModuleSource = projectDataSource.split(
  "\nfunction initialiseHorizontalScroll()"
)[0];
const getProjectModule = new Function(
  `${dataModuleSource}
return {
  projects,
  projectOrder,
  renderParagraphs,
  renderSection,
};`
);
const { projects, projectOrder, renderParagraphs, renderSection } =
  getProjectModule();

const projectUrls = Object.fromEntries(
  projectOrder.map((id) => [id, `projects/${id}/`])
);

const metaDescriptions = {
  "rural-healthcare":
    "UX case study on an offline-first field tool that helped healthcare promoters submit approval requests in rural, low-connectivity areas of Colombia.",
  "app-redesign":
    "UX case study on redesigning the Nueva EPS app information architecture, access flow, and key healthcare self-service journeys.",
  "whatsapp-appointments":
    "Service design and conversational UX case study for a WhatsApp medical appointment service supporting millions of monthly users.",
  "maternal-health":
    "Conversational UX case study for WhatsApp-based maternal health support, guidance, and triage for pregnant members in Antioquia.",
};

const socialImages = {
  "rural-healthcare": "assets/images/projects/offline-tool-cover.png",
  "app-redesign": "assets/images/projects/app-redesign-cover.png",
  "whatsapp-appointments": "assets/images/projects/whatsapp-appointments-cover.png",
  "maternal-health": "assets/images/projects/maternal-health-cover.png",
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absoluteUrl(relativePath = "") {
  return `${siteUrl}/${relativePath.replace(/^\/+/, "")}`;
}

function renderJsonLd(data) {
  return JSON.stringify(data)
    .replaceAll("</", "<\\/")
    .replaceAll("<", "\\u003c");
}

function renderMedia(project, projectId) {
  if (project.media?.type === "video") {
    return `
      <figure class="case-media has-video" id="project-media">
        <div class="case-video" id="project-media-content">
          <video autoplay muted loop playsinline preload="metadata" aria-label="${escapeHtml(project.media.caption || project.title)}">
            <source src="${project.media.src}" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
      </figure>
    `;
  }

  if (project.media?.type === "image") {
    const revealProjects = new Set([
      "rural-healthcare",
      "maternal-health",
      "whatsapp-appointments",
    ]);
    const mediaClasses = [
      "case-media",
      "has-image",
      revealProjects.has(projectId) ? "case-media--closer-to-overview" : "",
    ]
      .filter(Boolean)
      .join(" ");
    const imageClasses = [
      "case-image",
      revealProjects.has(projectId) ? "case-image--scroll-reveal" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `
      <figure class="${mediaClasses}" id="project-media">
        <div class="${imageClasses}" id="project-media-content">
          <img src="${project.media.src}" alt="${escapeHtml(project.media.alt || "")}">
        </div>
        ${
          project.media.caption
            ? `<figcaption id="project-media-caption">${escapeHtml(project.media.caption)}</figcaption>`
            : ""
        }
      </figure>
    `;
  }

  return `
    <figure class="case-media" id="project-media">
      <div id="project-media-content"><span>Project image</span></div>
      <figcaption id="project-media-caption">Visual material will be added here.</figcaption>
    </figure>
  `;
}

function renderProjectPage(projectId) {
  const project = projects[projectId];
  const nextId =
    projectOrder[(projectOrder.indexOf(projectId) + 1) % projectOrder.length];
  const nextProject = projects[nextId];
  const description =
    metaDescriptions[projectId] ||
    `${project.title}, a UX design case study by Diego Cárdenas Mora.`;
  const url = absoluteUrl(projectUrls[projectId]);
  const image = absoluteUrl(socialImages[projectId] || project.media?.src || "");
  const painPointsSectionIndex = project.sections.findIndex(
    (section) => section.painPoints?.length
  );
  const sections = project.sections
    .map((section, index) =>
      renderSection(
        section,
        painPointsSectionIndex >= 0 && index > painPointsSectionIndex
      )
    )
    .join("");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: project.title,
    name: project.title,
    description,
    url,
    image,
    author: {
      "@type": "Person",
      name: "Diego Cárdenas Mora",
      jobTitle: "Experience Designer",
      url: siteUrl,
      sameAs: ["https://www.linkedin.com/in/diego-cardenasm"],
    },
    about: project.skills,
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="../../" />
    <title>${escapeHtml(project.title)} — Diego Cárdenas Mora</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${escapeHtml(project.title)} — Diego Cárdenas Mora" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(project.title)} — Diego Cárdenas Mora" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${renderJsonLd(jsonLd)}</script>
    <link
      id="animated-favicon"
      rel="icon"
      type="image/svg+xml"
      href="assets/favicons/favicon-black.svg"
    />
    <link rel="stylesheet" href="project.css" />
    <script src="favicon.js" defer></script>
    <script src="cursor.js" defer></script>
    <script src="project-data.js" defer></script>
  </head>
  <body data-static-project="true">
    <header class="case-header">
      <a class="case-name" href="index.html">Diego Cárdenas Mora</a>
      <nav aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a class="is-active" href="index.html#projects">Projects</a>
        <a href="index.html#services">Services</a>
        <a href="index.html#about">About</a>
        <a href="index.html#contact">Contact</a>
      </nav>
      <a class="case-logo" href="index.html#contact" aria-label="Go to contact">
        <img src="assets/logo.svg" alt="" />
      </a>
    </header>

    <div class="case-section-indicator" id="case-section-indicator" aria-hidden="true">
      <strong id="indicator-project-title">${escapeHtml(project.title)}</strong>
      <div class="case-section-indicator-label" aria-live="polite">
        <span class="is-current" id="indicator-section-current"></span>
        <span class="is-next" id="indicator-section-next"></span>
      </div>
      <div class="case-reading-progress" aria-hidden="true">
        <span id="case-reading-progress-bar"></span>
      </div>
    </div>

    <main id="case-study" data-prerendered="true">
      <section class="case-hero">
        <p class="case-number" id="project-number">${escapeHtml(project.number)}</p>
        <h1 id="project-title">${escapeHtml(project.title)}</h1>
      </section>

      <section class="case-summary" data-section-title="Project Overview">
        <aside class="case-meta">
          <div>
            <h2>Skills</h2>
            <p id="project-skills">${escapeHtml(project.skills)}</p>
          </div>
          <div>
            <h2>Tools</h2>
            <p id="project-tools">${escapeHtml(project.tools)}</p>
          </div>
        </aside>
        <div class="case-overview">
          <h2>Project Overview</h2>
          <div class="rich-copy" id="project-overview">
            ${renderParagraphs(project.overview)}
          </div>
        </div>
      </section>

      ${renderMedia(project, projectId)}

      <div id="project-sections">${sections}</div>

      <nav class="case-next" aria-label="Project navigation">
        <p>Next project</p>
        <a id="next-project" href="${projectUrls[nextId]}">
          <span id="next-project-title">${escapeHtml(nextProject.title)}</span>
          <img src="assets/arrow-up-right.svg" alt="" />
        </a>
      </nav>
    </main>

    <a class="case-back" href="index.html#projects">
      <img src="assets/arrow-up-right.svg" alt="" />
      <span>Back to projects</span>
    </a>
  </body>
</html>
`;
}

for (const projectId of projectOrder) {
  const dir = path.join(root, "projects", projectId);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderProjectPage(projectId));
}

const sitemapUrls = ["", ...projectOrder.map((id) => projectUrls[id])];
fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (urlPath) => `  <url>
    <loc>${absoluteUrl(urlPath)}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`
);

fs.writeFileSync(
  path.join(root, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("sitemap.xml")}
`
);

console.log(`Generated ${projectOrder.length} static project pages.`);
