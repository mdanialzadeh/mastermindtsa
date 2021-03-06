import { React, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

function Peg({ value }) {
  const [color, setcolor] = useState("");

  const styles = useSpring({
    from: { transform: "translateY(-8px) translateX(2px)" },
    to: { transform: "translateY(0px) translateX(0px)" },
  });

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
  }, [value]);

  return <animated.div style={styles} className={color}></animated.div>;
}

export default Peg;
