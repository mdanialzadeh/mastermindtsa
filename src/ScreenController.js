import { React, useEffect, useState } from "react";
import CompChoice from "./CompChoice";
import Log from "./Log";
import Player from "./Player";
import ResolveRound from "./ResolveRound";

import { useRecoilState, useSetRecoilState } from "recoil";
import { secret } from "./atoms";

function ScreenController() {
  const setCurrentSecret = useSetRecoilState(secret);
  const length = 4;
  const [currentGameState, setgamestate] = useState("");

  useEffect(() => {
    setgamestate("newgame");
  }, [length]);

  if (currentGameState === "newgame") {
    setgamestate("active");
    fetch(
      `https://www.random.org/integers/?num=${length}&min=0&max=7&col=1&base=10&format=plain&rnd=new`
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        setCurrentSecret(text.split("\n", length));
      })
      .catch(function () {
        console.log("error");
      });
  }

  return (
    <div className="gameContainer">
      <CompChoice />
      <div className="log-container">
        <Log />
        <ResolveRound />
      </div>
      <Player />
    </div>
  );
}

export default ScreenController;
