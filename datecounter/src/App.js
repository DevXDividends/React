import { use, useState } from "react";
import "./index.css";
export default function App() {
  const [steps, setStep] = useState(0);
  return (
    <div>
      <Steps steps={steps} setStep={setStep} />
      <Counter steps={steps} />
    </div>
  );
}

function Steps(props) {
  return (
    <div className="steps">
      <button className="minus" onClick={() => props.setStep((st) => st - 1)}>
        -
      </button>
      <b>Steps: {props.steps}</b>
      <button className="plus" onClick={() => props.setStep((st) => st + 1)}>
        +
      </button>
    </div>
  );
}
function Counter(props) {
  const [counter, setCounter] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <div className="counter">
      <div>
        <button
          className="minus"
          onClick={() => setCounter((st) => st - 1 - props.steps)}
        >
          -
        </button>
        <b>Counter: {counter}</b>
        <button
          className="plus"
          onClick={() => setCounter((st) => st + 1 + props.steps)}
        >
          +
        </button>
      </div>

      <h3>{`${counter} days from today is ${date}`}</h3>
    </div>
  );
}
