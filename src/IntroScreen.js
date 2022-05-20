import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { gameState } from "./atoms";
import {
  CorrectPeg,
  MissedPeg,
  MatchedPeg,
  EmptyPeg,
} from "./Components/ResultPegs";

function IntroScreen() {
  const setGameState = useSetRecoilState(gameState);

  const handleclick = () => {
    setGameState("newGame");
  };
  return (
    <div
      style={{
        margin: "auto",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        background: "linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99))",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "clamp(400px, 70vw, 1000px",
          height: "min-content",
          color: "white",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgb(231 231 231 / 4%)",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, .71) 0px 0px 18px",
          border: "2px groove rgb(231 231 231 / 10%)",

          padding: "5%",
        }}
      >
        <h2>Welcome To Master Mind</h2>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div>
              {" "}
              At the start of the game the computer will randomly select a
              pattern of four differnt colored pegs from a total of 8 colors
            </div>
            <br />
            <div>
              {" "}
              Players will have 10 rounds to attempt to guess the correct color
              combination
            </div>
            <div>
              {" "}
              At the end of each round the computer will provide feedback in
              regards to if your color guess contains pegs in the correct color
              and position as well as any pegs that are the correct color but
              incorrect position
            </div>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignitems: "center",
                }}
              >
                correct color and correct position:
                <CorrectPeg width="30px" height="30px" />
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                correct color and wrong position:
                <MatchedPeg width="30px" height="30px" />
              </div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                Wrong color and Wrong position:
                <MissedPeg width="30px" height="30px" />
              </div>
            </div>
            <br />
          </div>
          <button onClick={handleclick}>Start Game</button>
        </div>
      </div>
    </div>
  );
}

export default IntroScreen;
