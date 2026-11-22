// https://d3og.com/jnschrag/34c437ce2a3e5c6e92c8aa5835e5d9d9/example/
// https://stackoverflow.com/questions/24327609/interactive-spider-or-radar-chart-using-d3


(function() {
d3.csv("/assets/visualisations/signals-of-smartphone-addiction/Data.csv").then(function(data) {

    let selectedStressLevel = "All";
    let selectedAddictionLevel = "All";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hasAnimatedRadarEntrance = prefersReducedMotion;
  

    data.forEach(function(d){
        d["daily_screen_time_hours"] = +d["daily_screen_time_hours"];
        d["social_media_hours"] = +d["social_media_hours"];
        d["gaming_hours"] = +d["gaming_hours"];
        d["work_study_hours"] = +d["work_study_hours"];
        d["sleep_hours"] = +d["sleep_hours"];
        })

    const oneUser = data[0];
    // console.log(oneUser);

    var d = [
        [
            {axis:"Daily Screen Time Hours",value:oneUser["daily_screen_time_hours"]},
            {axis:"Social Media Hours",value: oneUser["social_media_hours"]},
            {axis:"Gaming Hours",value:oneUser["gaming_hours"]},
            {axis:"Work Study Hours",value: oneUser["work_study_hours"]},
            {axis:"Sleep Hours",value:oneUser["sleep_hours"]},
    ]
];

const radarContainer = document.getElementById("chart_radarchart");

    //Options for the Radar chart, other than default
    var mycfg = {
        w: 520,
        h: 392,
        maxValue: 10,
        levels: 5,
        ExtraWidthX: 0,
        ExtraWidthY: 0,
        TranslateX: 0,
        TranslateY: 0,
        factor: 0.795,
        labelOffset: 34

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

function updateChart(options = {}) {


     // https://stackoverflow.com/questions/68230024/filter-javascript-array-based-on-multiple-values
    var filteredData = data.filter(function(d) {
      return  (selectedStressLevel === "All" ||d["stress_level"] === selectedStressLevel) &&
              (selectedAddictionLevel === "All" ||d["addiction_level"] === selectedAddictionLevel);
        

});

    var addicted_label_0_group = filteredData.filter(function(d) {
      return d["addicted_label"] === "0";
});

    var addicted_label_1_group = filteredData.filter(function(d) {
      return d["addicted_label"] === "1";
});

    console.log(filteredData.length);
    console.log(addicted_label_0_group.length);
    console.log(addicted_label_1_group.length);

    var radarGraphs = [];

    // check if the data is null
    if (addicted_label_0_group.length > 0)  {

        const averageScreenTime0 = d3.mean(addicted_label_0_group, function(d) {
            return d["daily_screen_time_hours"];
        });

        const averageSocialMediaTime0 = d3.mean(addicted_label_0_group, function(d) {
            return d["social_media_hours"];
        });

        const averageGamingTime0 = d3.mean(addicted_label_0_group, function(d) {
            return d["gaming_hours"];
        });

        const averageWorkStudyTime0 = d3.mean(addicted_label_0_group, function(d) {
            return d["work_study_hours"];
        });

        const averageSleepTime0 = d3.mean(addicted_label_0_group, function(d) {
            return d["sleep_hours"];
        });


         var radarFilter0 = [
        
            {axis:"Daily Screen Time Hours",value: averageScreenTime0},
            {axis:"Social Media Hours",value: averageSocialMediaTime0},
            {axis:"Gaming Hours",value: averageGamingTime0},
            {axis:"Work Study Hours",value: averageWorkStudyTime0},
            {axis:"Sleep Hours",value:averageSleepTime0},

         ];
         radarFilter0.label = "0"

        console.log("radarFilter0:", radarFilter0);
        console.log("radarFilter0 length:", radarFilter0.length);
         radarGraphs.push(radarFilter0)
    }

     if (addicted_label_1_group.length > 0)  {

        const averageScreenTime1 = d3.mean(addicted_label_1_group, function(d) {
            return d["daily_screen_time_hours"];
        });

        const averageSocialMediaTime1 = d3.mean(addicted_label_1_group, function(d) {
            return d["social_media_hours"];
        });

        const averageGamingTime1 = d3.mean(addicted_label_1_group, function(d) {
            return d["gaming_hours"];
        });

        const averageWorkStudyTime1 = d3.mean(addicted_label_1_group, function(d) {
            return d["work_study_hours"];
        });

        const averageSleepTime1 = d3.mean(addicted_label_1_group, function(d) {
            return d["sleep_hours"];
        });


        var radarFilter1 = [
        
            {axis:"Daily Screen Time Hours",value: averageScreenTime1},
            {axis:"Social Media Hours",value: averageSocialMediaTime1},
            {axis:"Gaming Hours",value: averageGamingTime1},
            {axis:"Work Study Hours",value: averageWorkStudyTime1},
            {axis:"Sleep Hours",value:averageSleepTime1},

        ];
        radarFilter1.label = "1"
        console.log("radarFilter1:", radarFilter1);
        console.log("radarFilter1 length:", radarFilter1.length);
        radarGraphs.push(radarFilter1)
    }

    if (radarGraphs.length === 0) {
        console.log(" not data for this options");
        d3.select("#chart_radarchart").select("svg").remove();
        return;

    }

    console.log("radar graph length:" + radarGraphs.length);
    console.log("radar graph:" + radarGraphs);

    RadarChart.draw("#chart_radarchart", radarGraphs, {
        ...mycfg,
        animateEntrance: options.animateEntrance === true,
        animateUpdate: hasAnimatedRadarEntrance && options.animateEntrance !== true
    });

        if (radarGraphs.length === 1) {
        console.log(" only one group has data");
    }

    }


    updateChart();

    runWhenGraphVisible("#chart_radarchart", function() {
        if (hasAnimatedRadarEntrance) return;

        hasAnimatedRadarEntrance = true;
        updateChart({ animateEntrance: true });
    });

    window.createCustomSelect({
        rootId: "stressLevelFilter",
        buttonId: "stressLevelButton",
        selectedId: "stressLevelSelected",
        menuId: "stressLevelMenu",
        initialValue: "All",
        onChange: function(value) {
            selectedStressLevel = value;
            console.log("selectedStressLevel:", selectedStressLevel);
            updateChart();
        }
    });

    window.createCustomSelect({
        rootId: "addictionLevelFilter",
        buttonId: "addictionLevelButton",
        selectedId: "addictionLevelSelected",
        menuId: "addictionLevelMenu",
        initialValue: "All",
        onChange: function(value) {
            selectedAddictionLevel = value;
            console.log("selectedAddictionLevel:", selectedAddictionLevel);
            updateChart();
        }
    });

});
})();
