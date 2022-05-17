import { React, useEffect, useState } from "react";

function Peg({ value }) {
  const [color, setcolor] = useState("");

  function assignColor(value) {
    const result = {
      0: "red",
      1: "orange",
      2: "yellow",
      3: "green",
      4: "blue",
      5: "purple",
      6: "pink",
      7: "white",
    }[value];

    setcolor(result);
  }

  useEffect(() => {
    assignColor(value);
  });

  return <div className={color}></div>;
}

export default Peg;
