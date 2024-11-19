import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepDec() {
    setStep((step) => step - 1);
  }

  function handleStepInc() {
    setStep((step) => step + 1);
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
        <button onClick={handleStepDec}>-</button>
        <span>Step : {step}</span>
        <button onClick={handleStepInc}>+</button>
      </div>

      <div className="containers">
        <button onClick={handleCountDec}>-</button>
        <span>Count : {count}</span>
        <button onClick={handleCountInc}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : `${Math.abs(count)} day${Math.abs(count) > 1 ? "s " : " "}`}
        {count < 0 ? `before today was ` : count > 0 ? `from today is ` : ""}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
