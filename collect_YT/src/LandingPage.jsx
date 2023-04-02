import { useState, useEffect, useRef } from "react";
import Typewriter from "./Typewriter";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { gsap } from "gsap";

function App() {
  const [count, setCount] = useState(0);
  const [showSection, setShowSection] = useState(false);
  const introRef = useRef(null);

  const handleContinue = () => {
    setShowSection(true);
  };

  useEffect(() => {
    if (showSection) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: introRef.current.offsetTop,
        ease: "power2.out",
      });
    }
  }, [showSection]);

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>
        {" "}
        <Typewriter
          messages={[
            "What concept are you interested in learning?",
            "We believe there exists various representations for that concept",
            "We believe there exists video explanations for any given representation",
            "We believe certain representations are more suited for your learning style",
          ]}
        />
      </h1>
      <div className="section">
        {!showSection ? (
          <div className="card">
            {/* <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button> */}
            <button onClick={handleContinue}>Continue</button>
            {/* <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p> */}
          </div>
        ) : (
          <div ref={introRef} className="intro-to-won">
            {/* Add the IntroToWoN component here */}
            <IntroToWoN />
          </div>
        )}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

function IntroToWoN() {
  return (
    <div>
      <h2>Intro to WoN</h2>
      <img
        src="https://via.placeholder.com/400x400.png?text=Intro+to+WoN"
        alt="Intro to WoN"
      />
      {/* Add your content here */}
    </div>
  );
}

export default App;
