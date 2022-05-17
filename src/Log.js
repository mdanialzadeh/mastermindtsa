import { React } from "react";
import { useRecoilValue } from "recoil";
import { RoundLog } from "./atoms";
import Peg from "./Peg";

function Log() {
  const log = useRecoilValue(RoundLog);

  return (
    <div id="log">
      <div className="rounds">
        <div className="round" id="1">
          {log[1].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="2">
          {log[2].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>

        <div className="round" id="3">
          {log[3].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="4">
          {log[4].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="5">
          {log[5].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="6">
          {log[6].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="7">
          {log[7].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="8">
          {log[8].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="9">
          {log[9].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
        <div className="round" id="10">
          {log[10].map((value, index) => {
            return <Peg value={value} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Log;
