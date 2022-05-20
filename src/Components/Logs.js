import { React } from "react";
import { useRecoilValue } from "recoil";
import Peg from "./Peg";
import { RoundLog } from "../atoms";
import { EmptyPeg } from "./ResultPegs";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ currentRound }) => {
  const log = useRecoilValue(RoundLog);
  const emptypegs = Array.from(Array(4 - log[currentRound].length).keys());

  return (
    <>
      <div className="round">
        {log[currentRound].map((value, index) => {
          return <Peg value={value} key={index} />;
        })}
        {emptypegs.map((index) => {
          return <EmptyPeg key={index} />;
        })}
      </div>
    </>
  );
};
