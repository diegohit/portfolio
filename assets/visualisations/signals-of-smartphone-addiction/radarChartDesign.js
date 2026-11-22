// Source - https://stackoverflow.com/a/26319295
// Posted by AAhad
// Retrieved 2026-04-18, License - CC BY-SA 3.0

var RadarChart = {
  draw: function(id, d, options){
  var cfg = {
     radius: 4,
     w: 300,
     h: 300,
     factor: .92,
     factorLegend: 0.8,
     levels: 3,
     maxValue: 0,
     radians: 2 * Math.PI,
     opacityArea: 0.7,
     ToRight: 0,
     TranslateX: 10,
     TranslateY: 10,
     ExtraWidthX: 0,
     ExtraWidthY: 0,
     labelOffset: 10,
     animateEntrance: false,
     animateUpdate: false,
     color: d3.scaleOrdinal(["#F7A5A5", "#174143"])
    };

    function getColor(seriesData) {
        if (seriesData.label === "0") {
            return "#F7A5A5";
        }
         if (seriesData.label === "1") {
            return "#174143";
        }
        return "#427A76";
    }

    function getFillOpacity(seriesData) {
        if (seriesData.label === "1") {
            return 0.14;
        }
        if (seriesData.label === "0") {
            return 0.18;
        }
        return 0.16;
    }

    function getHoverFillOpacity(seriesData) {
        return seriesData.label === "1" ? 0.22 : 0.26;
    }

    function getStrokeDasharray(seriesData) {
        return seriesData.label === "0" ? "6 4" : "none";
    }

    function restorePolygonOpacity() {
        g.selectAll("polygon")
          .transition()
          .duration(prefersReducedMotion ? 0 : 200)
          .style("fill-opacity", function() {
            return d3.select(this).attr("data-group") === "1" ? 0.14 : 0.18;
          });
    }

    if('undefined' !== typeof options){
      for(var i in options){
        if('undefined' !== typeof options[i]){
          cfg[i] = options[i];
        }
      }
    }
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var shouldAnimateEntrance = cfg.animateEntrance && !prefersReducedMotion;
    var shouldAnimateUpdate = cfg.animateUpdate && !prefersReducedMotion && !shouldAnimateEntrance;
    var outlineDuration = shouldAnimateEntrance ? 620 : 0;
    var fillDuration = shouldAnimateEntrance ? 260 : 0;
    var pointDuration = shouldAnimateEntrance ? 220 : (shouldAnimateUpdate ? 180 : 0);

    cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
    var allAxis = (d[0].map(function(i, j){return i.axis}));
    var total = allAxis.length;
    var cx = cfg.w/ 2;
    var cy = cfg.h / 2;
    var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
    var radarLabelOffsets = {
      "Social Media Hours": { x: -44, y: 0 },
      "Sleep Hours": { x: 18, y: 0 }
    };
    var Format = d3.format('.2f');
    d3.select(id).select("svg").remove();

    var g = d3.select(id)
            .append("svg")
            .attr("viewBox", `0 0 ${cfg.w + cfg.ExtraWidthX} ${cfg.h + cfg.ExtraWidthY}`)
            .attr("preserveAspectRatio", "xMidYMid meet")
            .style("width", `${cfg.w + cfg.ExtraWidthX}px`)
            .style("max-width", "100%")
            .style("height", "auto")
            .append("g")
            .attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
            ;

        d3.selectAll(".radarTooltip").remove();

    var tooltipRoot = d3.select(".signals-d3-embed").empty() ? d3.select("body") : d3.select(".signals-d3-embed");

    var tooltip = tooltipRoot
      .append("div")
      .attr("class", "tooltip radarTooltip")
      .style("opacity", "0");

    //Circular segments
    for(var j=0; j<cfg.levels; j++){
      var levelFactor = radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
       .data(allAxis)
       .enter()
       .append("svg:line")
       .attr("x1", function(d, i){return levelFactor*(1-Math.sin(i*cfg.radians/total));})
       .attr("y1", function(d, i){return levelFactor*(1-Math.cos(i*cfg.radians/total));})
       .attr("x2", function(d, i){return levelFactor*(1-Math.sin((i+1)*cfg.radians/total));})
       .attr("y2", function(d, i){return levelFactor*(1-Math.cos((i+1)*cfg.radians/total));})
       .attr("class", "line")
       .style("stroke", "grey")
       .style("stroke-opacity", "0.75")
       .style("stroke-width", "0.3px")
       .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
    }

    //Text indicating at what % each level is
    for(var j=0; j<cfg.levels; j++){
      var levelFactor = radius*((j+1)/cfg.levels);
      g.selectAll(".levels")
       .data([1]) //dummy data
       .enter()
       .append("svg:text")
       .attr("x", function(d){return levelFactor*(1-Math.sin(0));})
       .attr("y", function(d){return levelFactor*(1-Math.cos(0));})
       .attr("class", "radar-scale-label")
       .style("font-family", "Helvetica, Arial, sans-serif")
       .style("font-size", "12px")
       .style("font-weight", "400")
       .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
       .attr("fill", "#1A2A4F")
       .attr("opacity", 1)
       .text(Format((j+1)*cfg.maxValue/cfg.levels));
    }

    var series = 0;

    var axis = g.selectAll(".axis")
            .data(allAxis)
            .enter()
            .append("g")
            .attr("class", "axis");

    axis.append("line")
        .attr("x1", cfg.w/2)
        .attr("y1", cfg.h/2)
        .attr("x2", function(d, i){return cx - radius*Math.sin(i*cfg.radians/total);})
        .attr("y2", function(d, i){return cy-radius*Math.cos(i*cfg.radians/total);})
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-width", "1px");

    axis.append("text")
        .attr("class", "legend radar-axis-label")
        .text(function(d){return d})
        .style("font-family", "Helvetica, Arial, sans-serif")
        .style("font-size", "14px")
        .style("font-weight", "600")
        .attr("fill", "#1A2A4F")
        .attr("text-anchor", "middle")
        .attr("dy", "1.5em")
        .attr("transform", function(d, i){return "translate(0, -10)"})
        .attr("x", function(d, i){
          var offset = radarLabelOffsets[d] || { x: 0, y: 0 };
          return cx-(radius + cfg.labelOffset)*Math.sin(i*cfg.radians/total) + offset.x;
        })
        .attr("y", function(d, i){
          var offset = radarLabelOffsets[d] || { x: 0, y: 0 };
          return cy-(radius + cfg.labelOffset)*Math.cos(i*cfg.radians/total) + offset.y;
        });


        // dot
    d.forEach(function(y, x){
      var dataValues = [];
      g.selectAll(".nodes")
        .data(y, function(j, i){
          var value = Math.max(j.value, 0);
          dataValues.push([
            cx - (value / cfg.maxValue)  *radius*Math.sin(i*cfg.radians/total), 
            cy - (value / cfg.maxValue)* radius  *Math.cos(i*cfg.radians/total)
          ]);
        });
      dataValues.push(dataValues[0]);
      var polygon = g.selectAll(".area")
                     .data([dataValues])
                     .enter()
                     .append("polygon")
                     .attr("class", "radar-chart-serie"+series)
                     .attr("data-series-index", series)
                     .attr("data-group", y.label)
                     .style("stroke-width", "3px")
                     .style("stroke-opacity", 1)
                     .style("stroke-dasharray", getStrokeDasharray(y))
                     .style("stroke",getColor(y))
                     .attr("points",function(d) {
                         var str="";
                         for(var pti=0;pti<d.length;pti++){
                             str=str+d[pti][0]+","+d[pti][1]+" ";
                         }
                         return str;
                     })
                     .style("fill", function(j, i){return getColor(y)})
                     .style("fill-opacity", shouldAnimateEntrance || shouldAnimateUpdate ? 0 : getFillOpacity(y))
                     .on('mouseover', function (event, d){

                                        tooltip.html(getTooltipText(y))
                                              .style("left", (event.clientX + 10) + "px")
                                                .style("top", (event.clientY -20) + "px")
                                                .style("opacity", "1");

                                        const z = "polygon."+d3.select(this).attr("class");
                                        g.selectAll("polygon")
                                         .transition()
                                         .duration(prefersReducedMotion ? 0 : 200)
                                         .style("fill-opacity", 0.06); 
                                        g.selectAll(z)
                                         .transition()
                                         .duration(prefersReducedMotion ? 0 : 200)
                                         .style("fill-opacity", getHoverFillOpacity(y));
                                      })
                     .on('mouseout', function(event){
                                        tooltip.style("left", (event.clientX + 10) + "px")
                                                .style("top", (event.clientY -20) + "px")
                                                .style("opacity", "0");
                                        restorePolygonOpacity();
                     });

      if (shouldAnimateEntrance) {
        polygon.each(function() {
          var pathLength = this.getTotalLength ? this.getTotalLength() : 0;
          var currentPolygon = d3.select(this);
          var currentSeries = +currentPolygon.attr("data-series-index");

          currentPolygon
            .style("stroke-dasharray", pathLength)
            .style("stroke-dashoffset", pathLength)
            .transition()
            .delay(currentSeries * 90)
            .duration(outlineDuration)
            .ease(d3.easeCubicOut)
            .style("stroke-dashoffset", 0)
            .on("end", function() {
              d3.select(this).style("stroke-dasharray", getStrokeDasharray(y));
            })
            .transition()
            .duration(fillDuration)
            .ease(d3.easeCubicOut)
            .style("fill-opacity", getFillOpacity(y));
        });
      } else if (shouldAnimateUpdate) {
        polygon
          .transition()
          .duration(180)
          .ease(d3.easeCubicOut)
          .style("fill-opacity", getFillOpacity(y));
      }
      series++;
    });
    series=0;

    function getTooltipText(y) {
      let groupName = y.label==="1" ? "Addicted user" : "Non-addicted user";
      return `
        <strong>${groupName}</strong><br>
        Daily Screen Time: ${y[0].value.toFixed(2)} h<br>
        Social media time: ${y[1].value.toFixed(2)} h<br>
        Gaming Time: ${y[2].value.toFixed(2)} h<br>
        Work-Study Time: ${y[3].value.toFixed(2)} h<br>
        Sleeping Time: ${y[4].value.toFixed(2)} h
        `;
    }


    d.forEach(function(y, x){
      g.selectAll(".nodes")
        .data(y).enter()
        .append("svg:circle") 
        .attr("class", "radar-chart-serie"+series)
        .attr('r', shouldAnimateEntrance || shouldAnimateUpdate ? 0 : cfg.radius)
        .attr("alt", function(j){return Math.max(j.value, 0)})
        .attr("cx", function(j, i){
          return cx-(Math.max(j.value, 0)/cfg.maxValue)*radius *Math.sin(i*cfg.radians/total);
        })
        .attr("cy", function(j, i){
          return cy-(Math.max(j.value, 0)/cfg.maxValue)*radius *Math.cos(i*cfg.radians/total);
        })
        .attr("data-id", function(j){return j.axis})
        .style("fill", getColor(y))
        .style("fill-opacity", shouldAnimateEntrance || shouldAnimateUpdate ? 0 : 1)
        .style("stroke", "#FFF2EF")
        .style("stroke-width", "1.5px")
        .on('mouseover', function (event, d){
                    tooltip.html(getTooltipText(y))
                                              .style("left", (event.clientX + 10) + "px")
                                                .style("top", (event.clientY -20) + "px")
                                                .style("opacity", "1");

                    var z = "polygon."+d3.select(this).attr("class");
                    g.selectAll("polygon")
                        .transition()
                        .duration(prefersReducedMotion ? 0 : 200)
                        .style("fill-opacity", 0.06); 
                    g.selectAll(z)
                        .transition()
                        .duration(prefersReducedMotion ? 0 : 200)
                        .style("fill-opacity", getHoverFillOpacity(y));
                  })
        .on('mousemove', function(event) {
                    tooltip.style("left", (event.clientX + 10) + "px").style("top", (event.clientY -20) + "px");
        })
        .on('mouseout', function(){

          tooltip.style("opacity", "0");
                    restorePolygonOpacity();
                  })

      series++;
    });

    if (shouldAnimateEntrance || shouldAnimateUpdate) {
      g.selectAll("circle")
        .transition()
        .delay(function() {
          var circleSeries = this.getAttribute("class").replace("radar-chart-serie", "");
          return shouldAnimateEntrance ? outlineDuration + (+circleSeries * 90) : 0;
        })
        .duration(pointDuration)
        .ease(d3.easeCubicOut)
        .attr("r", cfg.radius)
        .style("fill-opacity", 1);
    }
  }
};
