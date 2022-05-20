import React from "react";
import { useRecoilValue } from "recoil";
import { gameResults, gameState, secret } from "./atoms";
import Peg from "./Components/Peg";

function CompChoice() {
  const currentSecret = useRecoilValue(secret);
  const currentGameState = useRecoilValue(gameResults);

  return (
    <div className="secretContainer">
      {currentGameState === "Win" || currentGameState === "Lose" ? (
        <></>
      ) : (
        <div className="secret-cover"></div>
      )}

      <div className="secret-answers">
        {currentSecret.map((value, index) => {
          return <Peg value={value} key={index} />;
        })}
      </div>
    </div>
  );
}

export default CompChoice;
