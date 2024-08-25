import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, SetCount] = useState(0);
  const handleClick = () => {
    SetCount((prev) => prev + 1);
  };

  return (
    <div>
      <div className="mainCounter">
        총합 : {count} || {count > 10 ? "🎉" : "🫣"}
      </div>
      <Counter onClick={handleClick} />
      <Counter onClick={handleClick} />
    </div>
  );
}
