import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import * as d3 from "d3";

const Grid = ({ numRows, numCols, size }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = d3.select(gridRef.current);
    grid.selectAll(".person")
      .transition()
      .delay((d, i) => i * 50)
      .duration(200)
      .style("opacity", 1);
  }, []);

  const grid = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(
        <FontAwesomeIcon
          key={`person-${i}-${j}`}
          icon={faPerson}
          size={size}
          className="person"
          style={{ opacity: 0 }}
        />
      );
    }
    grid.push(<div key={`row-${i}`}>{row}</div>);
  }

  return <div ref={gridRef} className="grid">{grid}</div>;
};

export default Grid;
