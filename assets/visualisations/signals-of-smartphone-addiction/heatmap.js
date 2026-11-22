// Heatmap structure based on:
// https://d3-graph-gallery.com/heatmap.html
// Adapted for this dataset.

(function() {
// Set up chart size
const container = document.getElementById("chart_heatmap");
const containerWidth = Math.max(container.clientWidth, 600);
const targetSvgWidth = Math.min(containerWidth, 998);
const targetSvgHeight = 392;

const margin = { top: 64, right: 190, bottom: 86, left: 98 };
const width = Math.max(targetSvgWidth - margin.left - margin.right, 485);
const height = targetSvgHeight - margin.top - margin.bottom;
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 68;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let hasRenderedHeatmap = false;
let hasAnimatedHeatmapEntrance = false;
let previousHeatmapFills = new Map();
let currentHeatmapData = null;
let currentHeatmapVariable = "sleep";

// Create the SVG and move the chart area inside the margins
const svg = d3.select("#chart_heatmap")
  .append("svg")
  .attr("viewBox",`0 0  ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .style("width", `${width + margin.left + margin.right}px`)
  .style("max-width", "100%")
  .style("height", "auto")
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Select the tooltip div from the HTML
const tooltip = d3.select("#tooltip_heatmap");

// Define bins for screen time
const screenBins = [
  { label: "3–5", min: 3, max: 5 },
  { label: "5–7", min: 5, max: 7 },
  { label: "7–9", min: 7, max: 9 },
  { label: "9–11", min: 9, max: 11 },
  { label: "11–12", min: 11, max: 13 }
];

// Define bins for sleep
const sleepBins = [
  { label: "4.5–5.5", min: 4.5, max: 5.5 },
  { label: "5.5–6.5", min: 5.5, max: 6.5 },
  { label: "6.5–7.5", min: 6.5, max: 7.5 },
  { label: "7.5–8.5", min: 7.5, max: 8.5 },
  { label: "8.5–9.5", min: 8.5, max: 9.5 }
];

// Define bins for stress
const stressBins = [
  { label: "Low", min: 1, max: 1.5 },
  { label: "Medium", min: 1.5, max: 2.5 },
  { label: "High", min: 2.5, max: 3.5 }
];

// Define bins for work/study hours
const workStudyBins = [
  { label: "0.5–1.5", min: 0.5, max: 1.5 },
  { label: "1.5–2.5", min: 1.5, max: 2.5 },
  { label: "2.5–3.5", min: 2.5, max: 3.5 },
  { label: "3.5–4.5", min: 3.5, max: 4.5 },
  { label: "4.5–6", min: 4.5, max: 6.5 }
];

// Define bins for notifications per day
const notificationBins = [
  { label: "20–60", min: 20, max: 60 },
  { label: "60–100", min: 60, max: 100 },
  { label: "100–140", min: 100, max: 140 },
  { label: "140–180", min: 140, max: 180 },
  { label: "180+", min: 180, max: Infinity }
];

// Define bins for app opens per day
const appBins = [
  { label: "15–45", min: 15, max: 45 },
  { label: "45–75", min: 45, max: 75 },
  { label: "75–105", min: 75, max: 105 },
  { label: "105–135", min: 105, max: 135 },
  { label: "135+", min: 135, max: Infinity }
];

// Find which bin a numeric value belongs to
function getBinLabel(value, bins) {
  const match = bins.find(bin => value >= bin.min && value < bin.max);
  return match ? match.label : null;
}

// Convert addiction categories into numbers so they can be averaged
function parseAddictionLevel(value) {
  if (value === "Mild") return 1;
  if (value === "Moderate") return 2;
  if (value === "Severe") return 3;
  return NaN;
}

// Convert stress categories into numbers so they can be binned
function parseStressLevel(value) {
  if (value === "Low") return 1;
  if (value === "Medium") return 2;
  if (value === "High") return 3;
  return NaN;
}

// Convert the average addiction score back into a category for the tooltip
function getAddictionLabel(avg) {
  if (avg === null) return "No data";
  if (avg < 1.5) return "Mild";
  if (avg < 2.5) return "Moderate";
  return "Severe";
}

function getHeatmapCellKey(d) {
  return `${d.screen}|${d.yValue}`;
}

function runWhenGraphVisible(selector, callback) {
  const graph = document.querySelector(selector);
  if (!graph || prefersReducedMotion) return;
  let hasTriggered = false;
  let observer = null;

  function getVisibilityRatio() {
    const rect = graph.getBoundingClientRect();
    const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

    if (rect.width === 0 || rect.height === 0) return 0;
    return (visibleWidth * visibleHeight) / (rect.width * rect.height);
  }

  function cleanup() {
    window.removeEventListener("scroll", checkGraphVisibility);
    window.removeEventListener("resize", checkGraphVisibility);

    if (observer) {
      observer.unobserve(graph);
    }
  }

  function trigger() {
    if (hasTriggered) return;

    hasTriggered = true;
    cleanup();
    callback();
  }

  function checkGraphVisibility() {
    if (getVisibilityRatio() >= 0.95) {
      trigger();
    }
  }

  if (!("IntersectionObserver" in window)) {
    window.addEventListener("scroll", checkGraphVisibility, { passive: true });
    window.addEventListener("resize", checkGraphVisibility);
    checkGraphVisibility();
    return;
  }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.95) return;

      trigger();
    });
  }, {
    threshold: 0.95,
    rootMargin: "0px"
  });

  observer.observe(graph);
  window.addEventListener("scroll", checkGraphVisibility, { passive: true });
  window.addEventListener("resize", checkGraphVisibility);
  checkGraphVisibility();
}

// Variable settings for the dropdown
const variableSettings = {
  sleep: {
    key: "sleep",
    label: "Sleep Hours",
    bins: sleepBins
  },
  stress: {
    key: "stress",
    label: "Stress Level",
    bins: stressBins
  },
  workStudy: {
    key: "workStudy",
    label: "Work/Study Hours",
    bins: workStudyBins
  },
  notifications: {
    key: "notifications",
    label: "Notifications per Day",
    bins: notificationBins
  },
  apps: {
    key: "apps",
    label: "App Opens per Day",
    bins: appBins
  }
};

// Load the CSV file once
d3.csv("/assets/visualisations/signals-of-smartphone-addiction/Data.csv", d => ({
  screen: +d["daily_screen_time_hours"],
  sleep: +d["sleep_hours"],
  stress: parseStressLevel(d["stress_level"]),
  addiction: parseAddictionLevel(d["addiction_level"]),
  workStudy: +d["work_study_hours"],
  notifications: +d["notifications_per_day"],
  apps: +d["app_opens_per_day"],
})).then(data => {

  // Remove rows with missing or invalid values
  const filtered = data.filter(d =>
    !Number.isNaN(d.screen) &&
    !Number.isNaN(d.addiction)
  );

  currentHeatmapData = filtered;

  // Draw the default heatmap immediately in its final state for layout and accessibility.
  drawHeatmap(filtered, currentHeatmapVariable);

  runWhenGraphVisible("#chart_heatmap", function() {
    if (hasAnimatedHeatmapEntrance || !currentHeatmapData) return;

    hasAnimatedHeatmapEntrance = true;
    drawHeatmap(currentHeatmapData, currentHeatmapVariable, { animateEntrance: true });
  });

  window.createCustomSelect({
    rootId: "heatmapVariableFilter",
    buttonId: "heatmapVariableButton",
    selectedId: "heatmapVariableSelected",
    menuId: "heatmapVariableMenu",
    initialValue: "sleep",
    onChange: function(selectedVariable) {
      currentHeatmapVariable = selectedVariable;
      drawHeatmap(filtered, selectedVariable);
    }
  });
}).catch(error => {
  console.error("Error loading or processing CSV:", error);
});

// Function to draw or redraw the heatmap
function drawHeatmap(data, selectedVariable, options = {}) {
  const settings = variableSettings[selectedVariable];
  const yBins = settings.bins;
  const yKey = settings.key;
  const yLabel = settings.label;

  document.getElementById("heatmap-title").textContent =
    `Addiction Patterns Across Screen Time and ${yLabel}`;

  // Only keep rows that have a value for the selected Y variable
  const usableData = data.filter(d =>
    !Number.isNaN(d[yKey])
  );

  // Clear old chart elements before redrawing
  svg.selectAll("*").remove();

  // Build the heatmap cells
  const cells = [];

  for (const sBin of screenBins) {
    for (const yBin of yBins) {
      const matches = usableData.filter(d =>
        d.screen >= sBin.min && d.screen < sBin.max &&
        d[yKey] >= yBin.min && d[yKey] < yBin.max
      );

      cells.push({
        screen: sBin.label,
        yValue: yBin.label,
        avgAddiction: matches.length ? d3.mean(matches, d => d.addiction) : null,
        count: matches.length
      });
    }
  }

  // Create scales
  const x = d3.scaleBand()
    .domain(screenBins.map(d => d.label))
    .range([0, width])
    .padding(0.05);

  const y = d3.scaleBand()
    .domain(yBins.map(d => d.label))
    .range([height, 0])
    .padding(0.05);

  const color = d3.scaleThreshold()
    .domain([1.85, 2.25, 2.5])
    .range(["#F9B487", "#F7A5A5", "#427A76", "#174143"]);

  const legendItems = [
    { label: "1.0 – 1.84", color: "#F9B487" },
    { label: "1.85 – 2.24", color: "#F7A5A5" },
    { label: "2.25 – 2.49", color: "#427A76" },
    { label: "2.5 – 3.0", color: "#174143" }
  ];

  const getCellFill = d => d.avgAddiction === null ? "#e5e5e5" : color(d.avgAddiction);
  const isInitialRender = !hasRenderedHeatmap;
  const shouldAnimateEntrance = options.animateEntrance && !prefersReducedMotion;
  const shouldAnimateUpdate = hasRenderedHeatmap && !shouldAnimateEntrance && !prefersReducedMotion;
  const cellDuration = shouldAnimateEntrance ? 420 : (shouldAnimateUpdate ? 300 : 0);

  // Draw axes
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("g")
    .call(d3.axisLeft(y));

  // // Add chart title
  // svg.append("text")
  //   .attr("class", "chart-title")
  //   .attr("x", width / 2)
  //   .attr("y", -10)
  //   .attr("text-anchor", "middle")
  //   .text(`Average Addiction Level by Screen Time and ${yLabel}`);

  // Add axis labels
  svg.append("text")
    .attr("class", "axis-label")
    .attr("x", width / 2)
    .attr("y", height + xAxisLabelOffset)
    .attr("text-anchor", "middle")
    .text("Daily Screen Time (hours)");

  svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -yAxisLabelOffset)
    .attr("text-anchor", "middle")
    .text(yLabel);

  // Draw heatmap cells
  const heatCells = svg.selectAll("rect.heat-cell")
    .data(cells)
    .join("rect")
    .attr("class", "heat-cell")
    .attr("x", d => x(d.screen))
    .attr("y", d => y(d.yValue))
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .attr("fill", d => {
      if (isInitialRender || prefersReducedMotion || shouldAnimateEntrance) return getCellFill(d);
      return previousHeatmapFills.get(getHeatmapCellKey(d)) || getCellFill(d);
    })
    .attr("opacity", shouldAnimateEntrance ? 0.18 : (shouldAnimateUpdate ? 0.9 : 1))
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 1)
    .on("mouseover", function(event, d) {
      d3.select(this)
        .interrupt()
        .transition()
        .duration(prefersReducedMotion ? 0 : 120)
        .ease(d3.easeCubicOut)
        .attr("stroke", "#1A2A4F")
        .attr("stroke-width", 2.5);

      tooltip
        .style("opacity", 1)
        .html(`
          <strong>Daily screen time:</strong> ${d.screen} hours<br>
          <strong>${yLabel}:</strong> ${d.yValue}<br>
          <strong>Users in bin:</strong> ${d.count}<br>
          <strong>Average addiction score:</strong> ${d.avgAddiction === null ? "No data" : d.avgAddiction.toFixed(2)}<br>
          <strong>Approx. addiction band:</strong> ${getAddictionLabel(d.avgAddiction)}
        `);
    })
    .on("mousemove", function(event) {
      tooltip
        .style("left", `${event.clientX + 12}px`)
        .style("top", `${event.clientY + 12}px`);
    })
    .on("mouseout", function() {
      d3.select(this)
        .interrupt()
        .transition()
        .duration(prefersReducedMotion ? 0 : 140)
        .ease(d3.easeCubicOut)
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 1);

      tooltip.style("opacity", 0);
    });

  heatCells
    .transition()
    .duration(cellDuration)
    .delay((d, i) => shouldAnimateEntrance ? i * 18 : 0)
    .ease(d3.easeCubicOut)
    .attr("fill", getCellFill)
    .attr("opacity", 1);

  const heatCellLabels = svg.selectAll("text.heat-cell-label")
    .data(cells.filter(d => d.avgAddiction !== null))
    .join("text")
    .attr("class", "heat-cell-label")
    .attr("x", d => x(d.screen) + x.bandwidth() / 2)
    .attr("y", d => y(d.yValue) + y.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("font-size", "11px")
    .attr("font-weight", "600")
    .attr("fill", d => d.avgAddiction >= 2.5 ? "#FFF2EF" : "#1A2A4F")
    .attr("opacity", shouldAnimateEntrance ? 0 : 1)
    .attr("pointer-events", "none")
    .text(d => d.avgAddiction.toFixed(1));

  heatCellLabels
    .transition()
    .duration(shouldAnimateEntrance ? 260 : 0)
    .delay((d, i) => shouldAnimateEntrance ? 120 + i * 18 : 0)
    .ease(d3.easeCubicOut)
    .attr("opacity", 1);

  // Draw legend
  const legendX = width + 32;
  const legendY = 8;

  const legend = svg.append("g")
    .attr("class", "heatmap-legend")
    .attr("transform", `translate(${legendX},${legendY})`);

  legend.append("text")
    .attr("class", "legend-label legend-title")
    .attr("x", 0)
    .attr("y", 0)
    .text("Average addiction level");

  const legendItemsGroup = legend.selectAll("g.heatmap-legend-item")
    .data(legendItems)
    .join("g")
    .attr("class", "heatmap-legend-item")
    .attr("transform", (d, i) => `translate(0, ${18 + i * 24})`);

  legendItemsGroup.append("rect")
    .attr("width", 16)
    .attr("height", 16)
    .attr("rx", 3)
    .attr("fill", d => d.color)
    .attr("stroke", "#FFF2EF")
    .attr("stroke-width", 1);

  legendItemsGroup.append("text")
    .attr("class", "legend-label")
    .attr("x", 24)
    .attr("y", 12)
    .text(d => d.label);

  previousHeatmapFills = new Map(cells.map(d => [getHeatmapCellKey(d), getCellFill(d)]));
  hasRenderedHeatmap = true;
}
})();
