import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./Navbar";
import IntroToWoN from "./IntroToWoN";
import IntroToWoK from "./IntroToWoK";
import ExpandCard from "./ExpandCard";
import WoK from "./WoK";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <IntroToWoN />
    <IntroToWoK />
    {/* <ExpandCard /> */}
    <WoK />
  </React.StrictMode>
);
