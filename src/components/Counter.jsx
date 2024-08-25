import React, { useState } from "react";

export default function Counter({ onClick }) {
  const [hovered, setHovered] = useState(false);
  const [number, setNumber] = useState(0);

  return (
    <div className={`Counter ${hovered ? "hovered" : ""}`}>
      <div>{`Counter ${hovered ? "hovered" : ""}`}</div>
      <div className="Num">{number}</div>
      <button
        className="Button"
        onClick={() => {
          setNumber((prev) => prev + 1);
          onClick();
          //   setNumber((prev) => {
          //     return prev + 1;
          //   });
          //   setNumber((prev) => prev + 1);
          //   setNumber((prev) => prev + 1);
          //   setNumber((prev) => prev + 1);
          //   setNumber((prev) => prev + 1);
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        +? / -?
      </button>
      {/* {number === 5 ? <div>"얍얍"</div> : null} */}
    </div>
  );
}
