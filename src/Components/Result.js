import { React, useState, useEffect } from "react";
import { ResultLog } from "../atoms";
import { useRecoilValue } from "recoil";
import { CorrectPeg, MissedPeg, MatchedPeg, EmptyPeg } from "./ResultPegs";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ currentRound }) => {
  const Results = useRecoilValue(ResultLog);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div style={{ width: "10rem" }}>
        <p>
          Correct Color and Position = {Results[currentRound].Correct.length}
        </p>
        <p>
          Correct Color but Wrong Position ={" "}
          {Results[currentRound].Matched.length}
        </p>
        <p>Wrong Position and Color = {Results[currentRound].Missed.length}</p>
      </div>
    </Tooltip>
  );

  if (
    Results[currentRound].Correct.length > 0 ||
    Results[currentRound].Matched.length > 0 ||
    Results[currentRound].Missed.length > 0
  ) {
    return (
      <>
        <OverlayTrigger
          placement="left"
          delay={{ show: 1, hide: 10 }}
          overlay={renderTooltip}
        >
          <div className="result">
            {Results[currentRound].Missed.map((miss, index) => {
              return (
                <MissedPeg
                  key={miss + index}
                  height="80%"
                  width="60%"
                ></MissedPeg>
              );
            })}
            {Results[currentRound].Correct.map((corr, index) => {
              return (
                <CorrectPeg
                  key={corr + index}
                  height="80%"
                  width="60%"
                ></CorrectPeg>
              );
            })}
            {Results[currentRound].Matched.map((Match, index) => {
              return (
                <MatchedPeg
                  key={Match + index}
                  height="80%"
                  width="60%"
                ></MatchedPeg>
              );
            })}
          </div>
        </OverlayTrigger>
      </>
    );
  }
  return (
    <div className="result">
      <EmptyPeg />
      <EmptyPeg />
      <EmptyPeg />
      <EmptyPeg />
    </div>
  );
};
