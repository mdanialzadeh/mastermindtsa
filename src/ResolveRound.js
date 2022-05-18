/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Round, ResultLog } from "./atoms";
import ResultsPegs from "./ResultsPeg";

function ResolveRound() {
  const Results = useRecoilValue(ResultLog);
  return (
    <div className="results">
      <div className="result" id="round1">
        {Results[1].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[1].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[1].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round2">
        {Results[2].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[2].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[2].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round3">
        {Results[3].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[3].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[3].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round4">
        {Results[4].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[4].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[4].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round5">
        {Results[5].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[5].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[5].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round6">
        {Results[6].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[6].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[6].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round7">
        {Results[7].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[7].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[7].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round8">
        {Results[8].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[8].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[8].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round9">
        {Results[9].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[9].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[9].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
      <div className="result" id="round10">
        {Results[10].Missed.map((index) => {
          return <div className="missed" key={index}></div>;
        })}
        {Results[10].Correct.map((index) => {
          return <div className="correct" key={index}></div>;
        })}
        {Results[10].Matched.map((index) => {
          return <div className="matched" key={index}></div>;
        })}
      </div>
    </div>
  );
}

export default ResolveRound;
