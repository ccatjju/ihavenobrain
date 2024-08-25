import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppProfile from "./AppProfile";
import AppCounter from "./AppCounter";
import AppUseEffect from "./AppUseEffect";
import AppXY from "./AppXY";
import Mento from "./Mento";
import Mentos from "./Mentos";
import MentosImmer from "./MentosImmer";
import AppForm from "./AppForm";
import Apprap from "./Apprap";
import Ihavenobrain from "./Ihavenobrain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Ihavenobrain />
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    {/* <AppUseEffect /> */}
    {/* <AppXY /> */}
    {/* <Mento /> */}
    {/* <Mentos /> */}
    {/* <MentosImmer /> */}
    {/* <AppForm /> */}
    {/* <Apprap /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
