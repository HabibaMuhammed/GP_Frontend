import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = new Array(53).fill(0).map((_, i) => `${i}`);

// Display labels for every 30th cell (month)
const xLabelsVisibility = new Array(53)
  .fill(false)
  .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );
const cellSize = 13; // Adjust the size of each cell here

export default function UserProfileHeatmap() {
  return (
    <div>
      <HeatMap
        xLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
        xLabelsVisibility={xLabelsVisibility}
        data={data}
        squares
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgba(174,103,250, ${1 - (max - value) / (max - min)})`,
          fontSize: "5px",
          width: `${cellSize}px`, // Set the width of each cell
          height: `${cellSize}px`, // Set the height of each cell
        })}
      />
    </div>
  );
}
