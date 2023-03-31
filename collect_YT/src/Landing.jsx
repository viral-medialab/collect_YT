import React, { useState, useEffect } from "react";
import Typewriter from "./Typewriter";
import video from "./mit_viral_ll_bayes_lecture_eo.mp4";
import "./Landing.css";

function Landing() {
  const [menuActive, setMenuActive] = useState(false);

  function menuToggle() {
    setMenuActive(!menuActive);
  }

  return (
    <section className={menuActive ? "active" : ""}>
      <header>
        <a
          href="https://www.media.mit.edu/projects/liquid-movies-learning/overview/"
          className="logo"
        >
          &#128167;Liquid Learning
        </a>
        <div className="toggle" onClick={menuToggle}></div>
      </header>
      <div className="glass"></div>
      <div className="content">
        <h3>
          <Typewriter
            messages={[
              "What concept are you interested in learning?",
              // "We assume there exists various representations for any given concept",
              "We bet there exists various representations for that concept",
              "We bet there exists video explanations for any given representation",
              "We bet certain representations are more suited for your learning style",
            ]}
          />
        </h3>
        <h3 style={{ fontSize: "1.5vw" }}>
          <a href="tour.html">Explore</a>
        </h3>
      </div>
      {/* <video src={video} autoPlay muted loop /> */}
      <ul className="sci">
        <li style={{ "--i": 1 }}>
          <a href="#"></a>✨
        </li>
        <li style={{ "--i": 2 }}>
          <a href="#"></a>🪄
        </li>
        <li style={{ "--i": 3 }}>
          <a href="#"></a>🧿
        </li>
      </ul>
      <ul className="navigation">
        <li style={{ "--i": 1 }}>
          <a href="index.html">Home</a>
        </li>
        <li style={{ "--i": 2 }}>
          <a href="https://www.media.mit.edu/projects/liquid-movies-learning/overview/">
            About
          </a>
        </li>
        <li style={{ "--i": 3 }}>
          <a href="tour.html">Explore</a>
        </li>
      </ul>
    </section>
  );
}

export default Landing;
