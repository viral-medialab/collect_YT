import { useState } from "react";
import Typewriter from "./Typewriter";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="typewriter-container">
        <h2>
          <Typewriter
            messages={[
              "What concept are you interested in learning?",
              "We believe there exists various representations for that concept",
              "We believe there exists video explanations for any given representation",
              "We believe certain representations are more suited for your learning style",
            ]}
          />
        </h2>
      </div>
    </div>
  );
}

export default App;
