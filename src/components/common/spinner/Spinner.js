import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: "50px",
          height: "50px",
          margin: "auto",
          display: "block"
        }}
        alt="spinner"
      />
    </div>
  );
}
