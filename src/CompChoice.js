import React from "react";
import { useRecoilValue } from "recoil";
import { secret } from "./atoms";
import Peg from "./Peg";

function CompChoice() {
  const currentSecret = useRecoilValue(secret);
  return (
    <div style={{ display: "flex" }}>
      {currentSecret.map((value, index) => {
        return <Peg value={value} key={index} />;
      })}
    </div>
  );
}

export default CompChoice;
