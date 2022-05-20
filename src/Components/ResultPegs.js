import React from "react";

export const CorrectPeg = ({ width, height }) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 40% 40%, rgb(0, 0, 0), rgb(0, 0, 0))",
        boxShadow:
          "-3px 3px 2px rgba(36, 34, 34, 0.966), inset 0px 1px 4px rgba(0, 0, 0, 0)",
        width: width,
        height: height,
        borderRadius: "30%",
        border: ".1px solid rgb(100,100,100)",
      }}
    ></div>
  );
};

export const MatchedPeg = ({ width, height }) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 40% 40%, rgb(255, 255, 255), rgb(194, 194, 194))",
        boxShadow:
          "-3px 3px 2px rgba(36, 34, 34, 0.966), inset 0px 1px 4px rgba(0, 0, 0, 0)",
        width: width,
        height: height,
        borderRadius: "30%",
        border: ".1px solid black",
      }}
    ></div>
  );
};

export const MissedPeg = ({ width, height }) => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 40% 40%, rgb(233, 3, 3), rgb(109, 1, 1))",
        boxShadow:
          "-3px 3px 2px rgba(63, 1, 1, 0.966), inset 0px 1px 4px rgba(0, 0, 0, 0)",
        width: width,
        height: height,
        borderRadius: "20px",
        border: ".1px solid black",
        clipPath:
          "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
      }}
    ></div>
  );
};

export const EmptyPeg = () => {
  return (
    <div
      style={{
        background: "black",
        boxShadow:
          "0px 0px 0px rgba(0, 1, 1, 0.966), 10px 1px 4px rgba(0, 0, 0, 0)",
        width: "25%",
        height: "40%",
        borderRadius: "40%",
        border: ".1vw ridge white",
      }}
    ></div>
  );
};
