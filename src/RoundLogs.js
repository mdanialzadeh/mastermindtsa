import { React } from "react";

import Logs from "./Components/Logs";

function Log() {
  return (
    <div id="log">
      <div className="rounds">
        <Logs currentRound={1}></Logs>
        <Logs currentRound={2}></Logs>
        <Logs currentRound={3}></Logs>
        <Logs currentRound={4}></Logs>
        <Logs currentRound={5}></Logs>
        <Logs currentRound={6}></Logs>
        <Logs currentRound={7}></Logs>
        <Logs currentRound={8}></Logs>
        <Logs currentRound={9}></Logs>
        <Logs currentRound={10}></Logs>
      </div>
    </div>
  );
}

export default Log;
