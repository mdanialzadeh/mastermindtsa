import { React, useEffect, useState } from "react";

function Peg({ value }) {
  value.array.forEach((element) => {
    return <div className="correct" value={element}></div>;
  });
}

export default Peg;
