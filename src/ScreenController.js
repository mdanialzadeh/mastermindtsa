import { React, useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import IntroScreen from "./IntroScreen";

import {
  useRecoilState,
  useSetRecoilState,
  useResetRecoilState,
  useRecoilValue,
} from "recoil";
import {
  secret,
  gameState,
  RoundLog,
  ResultLog,
  Round,
  gameResults,
} from "./atoms";
import GameOverScreen from "./GameOverScreen";

function ScreenController() {
  const setCurrentSecret = useSetRecoilState(secret);
  const resetRoundLog = useResetRecoilState(RoundLog);
  const resetResultLog = useResetRecoilState(ResultLog);
  const resetRound = useResetRecoilState(Round);
  const [currentGameState, setGameState] = useRecoilState(gameState);
  const currentGameResult = useRecoilValue(gameResults);

  useEffect(() => {
    console.log(currentGameState);
  }, [currentGameState]);

  if (currentGameState === "newGame") {
    fetch(
      `https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        setCurrentSecret(text.split("\n", 4));

        resetRoundLog();
        resetResultLog();
        resetRound();
      })
      .then(function () {
        setGameState("active");
      })

      .catch(function () {
        console.log("error");
      });
  }

  return (
    <>
      {
        {
          gameIntro: <IntroScreen />,
          active: (
            <>
              {currentGameResult === "Win" || currentGameResult === "Lose" ? (
                <>
                  <GameOverScreen />,
                </>
              ) : (
                <div></div>
              )}
              <GameBoard />,
            </>
          ),
        }[currentGameState]
      }
    </>
  );
}

export default ScreenController;
