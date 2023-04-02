import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WoNWorkingImage from "./assets/img/won-working.png";
import Typewriter from "./Typewriter";
import "./IntroToWoN.css";

gsap.registerPlugin(ScrollTrigger);

function IntroToWoN() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        // scrub: 1,
        markers: false,
        onEnter: () => {
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
        },
        onLeave: () => {
          tl.fromTo(
            imageRef.current,
            { opacity: 1, scale: 0.8 },
            { opacity: 0, scale: 1, duration: 1 }
          ).fromTo(
            textRef.current,
            { y: "0%", opacity: 1 },
            { y: "100%", opacity: 0, duration: 1 },
            "-=0.5"
          );
        },
      },
    });
  }, []);

  return (
    <section className="section-intro-to-won">
      <div className="intro-to-won">
        <div className="intro-to-won-image">
          <img src={WoNWorkingImage} alt="Won working" ref={imageRef} />
        </div>
        <div className="intro-to-won-text" ref={textRef}>
          <h1>Wall of Now</h1>
          <p>
            This was an interface that showed how we could slice and dice the
            news from ten broadcast sources to get both a broad view of issues
            of the day and to jump into each. THis showed what we call an
            “exploration interface”: one that doesn’t just answer questions or
            provide references, but gives you a forum to learn more in your own
            way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroToWoN;
