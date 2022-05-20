import React from "react";
import { useSetRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import { gameResults, gameState } from "./atoms";
import Modal from "react-bootstrap/Modal";

function GameOverScreen() {
  const setGameState = useSetRecoilState(gameState);
  const resetcurrentgameresults = useResetRecoilState(gameResults);
  const gameresult = useRecoilValue(gameResults);

  const handleclick = () => {
    setGameState("newGame");
    resetcurrentgameresults();
  };
  return (
    <Modal
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show
      backdrop="static"
      keyboard={false}
    >
      <div
        style={{
          height: "20%",
          color: "white",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgb(231 231 231 / 4%)",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, .71) 0px 0px 18px",
          border: "2px groove rgb(231 231 231 / 10%)",
          textAlign: "center",
          padding: "5%",
        }}
      >
        {
          {
            Win: (
              <div>
                {" "}
                <p>Congrats on Winning!</p>
              </div>
            ),
            Loose: <div> Sorry you lost please try again</div>,
          }[gameresult]
        }

        <button className="interfacebutton" onClick={handleclick}>
          {" "}
          newgame
        </button>
      </div>
    </Modal>
  );
}

export default GameOverScreen;
