/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Round, RoundLog, secret, ResultLog } from "./atoms";

function Player() {
  const [currentRound, setCurrentRound] = useRecoilState(Round);
  const [currentRoundLog, setCurrentRoundLog] = useRecoilState(RoundLog);
  const [currentResultLog, setCurrentResultLog] = useRecoilState(ResultLog);
  const [matchedArr, setMatchedArr] = useState([]);
  const [correctArr, setCorrectArr] = useState([]);

  const currentSecret = useRecoilValue(secret);
  const [currentArray, setCurrentArray] = useState([]);

  function addChoices(e) {
    e.preventDefault();
    if (currentArray.length <= 3) {
      setCurrentArray([...currentArray, e.target.value]);
    }
  }

  useEffect(() => {
    setCurrentRoundLog({
      ...currentRoundLog,
      [`${currentRound}`]: currentArray,
    });
  }, [currentArray]);

  function deleteChoice(e) {
    e.preventDefault();
    if (currentArray.length >= 0) {
      setCurrentArray(currentArray.slice(0, currentArray.length - 1));
    }
  }

  function appendChoice(e) {
    e.preventDefault();

    if (currentArray.length === 4) {
      setCurrentRoundLog({
        ...currentRoundLog,
        [`${currentRound}`]: currentArray,
      });
    }
    resolveCurrentRound();
  }

  function resolveCurrentRound() {
    if (currentArray.every((value, index) => value === currentSecret[index])) {
      console.log("win");
    } else {
      findCorrect();
    }
  }

  function findCorrect() {
    setCorrectArr(
      currentSecret.filter((value, index) =>
        currentArray[index].includes(value)
      )
    );
    const newArr = currentSecret.filter(
      (value, index) => !currentArray[index].includes(value)
    );

    const newGuess = currentArray.filter(
      (value, index) => !currentSecret[index].includes(value)
    );

    const a = newArr.filter((value) => newGuess.includes(value));
    const b = newGuess.filter((value) => newArr.includes(value));

    if (a.length > b.length) {
      setMatchedArr(b);
    } else {
      setMatchedArr(a);
    }
  }

  useEffect(() => {
    if (currentRoundLog[`${currentRound}`].length === 4) {
      console.log(matchedArr.length + "right color wrong position");
      console.log(correctArr.length + "right color and position");

      setCurrentResultLog({
        ...currentResultLog,
        [`${currentRound}`]: {
          Correct: correctArr,
          Matched: matchedArr,
          Missed: Array.from(
            Array(4 - (correctArr.length + matchedArr.length)).keys()
          ),
        },
      });
      resetchoices();
    }
  }, [matchedArr]);

  function resetchoices() {
    setCurrentArray([]);
    setCorrectArr([]);
    setMatchedArr([]);
    setCurrentRound(currentRound + 1);
  }

  return (
    <div className="player_response">
      <button
        id="player-choice"
        onClick={addChoices}
        className="red"
        value="0"
        color="red"
      ></button>
      <button
        id="player-choice"
        onClick={addChoices}
        className="orange"
        value="1"
        color="orange"
      ></button>
      <button
        id="player-choice"
        onClick={addChoices}
        className="yellow"
        value="2"
      ></button>
      <button
        id="player-choice"
        onClick={addChoices}
        className="green"
        value="3"
      ></button>
      <button
        id="player-choice"
        onClick={addChoices}
        className="blue"
        value="4"
      ></button>
      <button
        id="player-choice"
        onClick={addChoices}
        className="purple"
        value="5"
      ></button>
      <button
        id="player-choice"
        onClick={addChoices}
        className="pink"
        value="6"
      ></button>
      <button
        id="player-choice"
        onClick={addChoices}
        className="white"
        value="7"
      ></button>
      <div>{currentArray}</div>
      <button onClick={deleteChoice}>delete</button>
      <button onClick={appendChoice}>append</button>
    </div>
  );
}

export default Player;
