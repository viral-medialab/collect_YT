import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WoNWorkingImage from "./assets/img/won-working.png";
import Typewriter from "./Typewriter";
import "./IntroToWoK.css";

gsap.registerPlugin(ScrollTrigger);

function IntroToWoK() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        // scrub: 1,
        markers: false,
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1 },
      { opacity: 1, scale: 0.8, duration: 1 }
    ).fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <section className="section-intro-to-won">
      <div className="intro-to-won">
        <div className="intro-to-won-text" ref={textRef}>
          <h1>Wall of Knowledge</h1>
          <p>
            We now show a similar layout but with two important differences: it
            is now about knowledge of a topic where we replace “perspectives”
            with representations. Often, knowledge expressed in different ways –
            graphically, through diagrams, through equations, even through songs
            (like Sesame Street.) Also through different pedagogies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroToWoK;
