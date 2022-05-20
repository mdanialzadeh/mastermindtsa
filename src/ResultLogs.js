/* eslint-disable react-hooks/exhaustive-deps */
import { React } from "react";

import Resultscomp from "./Components/Result";

function ResolveRound() {
  return (
    <div className="results">
      <Resultscomp currentRound={1}></Resultscomp>
      <Resultscomp currentRound={2}></Resultscomp>
      <Resultscomp currentRound={3}></Resultscomp>
      <Resultscomp currentRound={4}></Resultscomp>
      <Resultscomp currentRound={5}></Resultscomp>
      <Resultscomp currentRound={6}></Resultscomp>
      <Resultscomp currentRound={7}></Resultscomp>
      <Resultscomp currentRound={8}></Resultscomp>
      <Resultscomp currentRound={9}></Resultscomp>
      <Resultscomp currentRound={10}></Resultscomp>
    </div>
  );
}

export default ResolveRound;
