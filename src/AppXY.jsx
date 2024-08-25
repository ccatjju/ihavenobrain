import React, { useEffect, useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [point, setPoint] = useState({ x: 100, y: 200 });
  //   useEffect(() => {
  //     const handleMouseMove = (event) => {
  //       setPoint({
  //         x: event.clientX,
  //         y: event.clientY,
  //       });
  //       console.log(event);
  //     };
  //     window.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  return (
    <div
      className="container"
      onMouseMove={(event) => {
        // setPoint({
        //   x: event.clientX,
        //   y: event.clientY,
        // });
        setPoint((prev) => ({ ...prev, x: event.clientX }));
      }}
    >
      <div
        className="pointer"
        // style={{
        //   left: `${point.x}px`,
        //   top: `${point.y}px`,
        // }}
        style={{ transform: `translate(${point.x}px, ${point.y}px)` }}
      >
        dididi
      </div>
    </div>
  );
}
