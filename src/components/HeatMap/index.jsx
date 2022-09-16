import React from 'react';
import HeatMap from "react-heatmap-grid";

const xLabels = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 4'];

const yLabels = ["Imp 1", "Imp 2"];

const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );

export default function Map() {
  return( 
    <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    xLabelWidth={100}
    data={data}
    squares
    onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
    cellStyle={(background, value, min, max, data, x, y) => ({
      background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
      fontSize: "11px",
      width: '100px',
      height: "100px"

    })}
    cellRender={(value) => value && `${value}%`}
    title={(value, unit) => `${value}`}
    
  />
    )
}