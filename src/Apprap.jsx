import React, { useContext } from "react";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

export default function Apprap() {
  return (
    <DarkModeProvider>
      <Header />
      <Card />
      <Footer />
    </DarkModeProvider>
  );
}

const Card = () => {
  return (
    <div
      style={{
        background: "blue",
        borderRadius: "20px",
        color: "white",
        maxHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h3>가운데다아아아</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div
      style={{
        background: "yellow",
        borderRadius: "40px",
        color: "pink",
        maxHeight: "500px",
        maxWidth: "300px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>제목이다아아아어ㅏ</h1>
    </div>
  );
};

const Footer = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div
      style={{
        background: "black",
        borderRadius: "40px",
        color: "gray",
        maxHeight: "500px",
        maxWidth: "300px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h3>푸터터터</h3>
      <button onClick={() => toggleDarkMode()}>눌러</button>
      <span>{darkMode.toString()}</span>
    </div>
  );
};
