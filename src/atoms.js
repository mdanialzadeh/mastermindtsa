import { atom } from "recoil";

export const activeScreen = atom({
  key: "activeScreen",
  default: "gameStart",
});

export const secret = atom({
  key: "secret",
  default: [],
});

export const Round = atom({
  key: "Round",
  default: 1,
});

export const RoundLog = atom({
  key: "RoundLog",
  default: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  },
});

export const ResultLog = atom({
  key: "ResultLog",
  default: {
    1: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    2: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    3: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    4: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    5: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    6: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    7: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    8: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    9: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
    10: {
      Correct: [],
      Matched: [],
      Missed: [],
    },
  },
});
