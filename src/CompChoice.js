import React from "react";
import { useRecoilValue } from "recoil";
import { secret } from "./atoms";
import Peg from "./Peg";

function CompChoice() {
  const currentSecret = useRecoilValue(secret);
  return (
    <div className="secretContainer">
      {currentSecret.map((value, index) => {
        return <Peg value={value} key={index} />;
      })}
    </div>
  );
}

export default CompChoice;
