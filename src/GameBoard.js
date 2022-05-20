import React from "react";
import CompChoice from "./CompChoice";
import RoundLogs from "./RoundLogs";
import GamePlay from "./GamePlay";
import ResultLogs from "./ResultLogs";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Round, RoundLog, secret, ResultLog, gameState } from "./atoms";

function GameBoard() {
  const currentround = useRecoilValue(Round);
  return (
    <div className="gameBoard-Container">
      <div style={{ position: "absolute", left: "0", top: "0", width: "100%" }}>
        <div className="gameBoard-outside">
          <div className="gameBoard-inside">
            <div className="gameContainer">
              <CompChoice />
              <div className="log-wrapper">
                <div className="rhombas-outside">
                  <div className="rhombas-inside">MASTER MIND</div>
                </div>
                <div className="log-container">
                  <RoundLogs />
                  <ResultLogs />
                </div>
                <div
                  className="info-container"
                  style={{
                    width: "100%",
                    height: "8%",
                    position: "absolute",
                    bottom: "0",
                    color: "black",
                    textAlign: "center",
                    paddingTop: "2%",
                  }}
                >
                  Round: {currentround}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GamePlay />
    </div>
  );
}

export default GameBoard;
