import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButterflyString from "./ButterflyString/ButterflyString";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Animated Text with Butterfly Effect</h1>
        <ButterflyString text="Hello, World!" />
      </div>
    </div>
  );
}

export default App;
