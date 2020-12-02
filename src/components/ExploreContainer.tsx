import React from "react";
import "./ExploreContainer.css";
import * as d3 from "d3";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  React.useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
    const SIZE = 400;
    const SIZE_INNER = 70;
    const BANDS = 6;
    const BAND_WIDTH = (SIZE - SIZE_INNER) / BANDS;
    const MIN_OPACITY = 0.1;
    const OPACITY_STEP = (1 - MIN_OPACITY) / BANDS;
    const COUNT = 12;
    const COLORS = d3
      .range(COUNT)
      .map((d, i) => d3.interpolateRainbow(i / COUNT));

    const svg = d3
      .select("#color-wheel")
      .append("svg")
      .attr("width", SIZE)
      .attr("height", SIZE)
      .append("g")
      .attr("transform", "translate(" + SIZE / 2 + "," + SIZE / 2 + ")");

    for (let k = 0; k < BANDS; k++) {
      const arc:any = d3
      .arc()
      .outerRadius((SIZE - k * BAND_WIDTH) / 2)
      .innerRadius((SIZE - (k + 1) * BAND_WIDTH) / 2)
      .startAngle(0)
      .endAngle((2 * Math.PI) / COUNT);
      
      svg
        .append("g")
        .attr("class", "band")
        .selectAll("path")
        .data(COLORS)
        .enter()
        .append("path")
        .attr("fill", (d):string => {
          const c = d3.color(d);
          if (c !== null) {
            c.opacity = 1 - OPACITY_STEP * k;
            return c + "";
          }
          return ''
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", 2)
        .attr("transform", (d, i) => "rotate(" + i * (360 / COUNT) + ")")
        .attr("d", arc());
    }

    d3.select("#buttons")
      .append("button")
      .text("Scramble")
      .on("click", () => {
        svg
          .selectAll(".band")
          .transition()
          .duration(1000)
          .attr(
            "transform",
            () =>
              "rotate(" +
              (360 / COUNT) * Math.floor(COUNT * Math.random()) +
              ")"
          );
      });
    d3.select("#buttons")
      .append("button")
      .text("Restore")
      .on("click", () => {
        svg
          .selectAll(".band")
          .transition()
          .duration(1000)
          .attr("transform", "rotate(0)");
      });
  };
  return (
    <div className="container">
      <strong style={{marginBottom: '20px', display: 'block'}}>Welcome to Bellwether Coffee</strong>
      <div id="color-wheel"></div>
      <div id="buttons" style={{marginTop: '20px'}}></div>
    </div>
  );
};

export default ExploreContainer;
