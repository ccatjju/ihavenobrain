import React, { useState } from "react";
import "./App.css";
import LiList from "./components/LiList";

export default function AppUseEffect() {
  const [view, setView] = useState(false);

  return (
    <div>
      {view && <LiList />}
      <button
        onClick={() => {
          setView(!view);
        }}
      >
        따란따라란
      </button>
    </div>
  );
}
