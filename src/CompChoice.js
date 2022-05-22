import React from "react";
import { useRecoilValue } from "recoil";
import { gameResults, gameState, secret } from "./atoms";
import SecretPeg from "./Components/SecretPeg";
import { useSpring, animated } from "react-spring";
import { EmptyPeg } from "./Components/ResultPegs";

function CompChoice() {
  const currentSecret = useRecoilValue(secret);
  const currentGameState = useRecoilValue(gameResults);
  console.log(currentSecret);

  const reveal = useSpring({
    from: { height: "20%", top: "40%" },
    to: { height: "100%", top: "0%" },
  });

  const cover = useSpring({
    from: { height: "20%", top: "70%" },
    to: { height: "100%", top: "0%" },
  });

  return (
    <div className="secretContainer">
      {currentGameState === "Win" || currentGameState === "Lose" ? (
        <>
          <animated.div
            styles={reveal}
            className="secret-reveal"
          ></animated.div>{" "}
          <div className="secret-answers">
            {currentSecret.map((value, index) => {
              return <SecretPeg value={value} key={index} />;
            })}
          </div>
        </>
      ) : (
        <>
          <animated.div style={cover} className="secret-cover"></animated.div>
          <div className="secret-answers" style={{ background: "transparent" }}>
            <div
              style={{
                width: "80%",
                display: "flex",
                height: "60%",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <EmptyPeg />
              <EmptyPeg />
              <EmptyPeg />
              <EmptyPeg />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CompChoice;
