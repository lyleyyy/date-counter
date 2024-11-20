import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepChange(e) {
    setStep(+e.target.value);
    setIsDisplay(true);
  }

  function handleCountChange(e) {
    setCount(+e.target.value);
    setIsDisplay(true);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
    setIsDisplay(false);
  }

  function handleCountDec() {
    setCount((count) => count - step);
  }

  function handleCountInc() {
    setCount((count) => count + step);
  }

  return (
    <div className="App">
      <div className="containers">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={handleStepChange}
        />
        <span>{step}</span>
      </div>

      <div className="containers">
        <button onClick={handleCountDec}>-</button>
        <input type="number" onChange={handleCountChange} />
        <button onClick={handleCountInc}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : `${Math.abs(count)} day${Math.abs(count) > 1 ? "s " : " "}`}
        {count < 0 ? `before today was ` : count > 0 ? `from today is ` : ""}
        {date.toDateString()}
      </p>

      <button
        style={isDisplay ? {} : { display: "none" }}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
