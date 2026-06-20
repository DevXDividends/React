import { use, useState } from "react";
import "./index.css";

function App() {
  return <DateCounter />;
}
function DateCounter() {
  const [step,setStep] = useState(1);
  const [count,setCount] = useState(0);
  const date  = new Date();
  date.setDate(date.getDate()+count);
  function handleReset(){
    setStep(1);
    setCount(0);
  }
  return (
    <div className="App">
      <input type="range" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
      <p>Step : {step}</p>
      <button  onClick={()=>setCount((e)=>e-step)}>-</button>
      <input type="text" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
      <button onClick={()=>setCount((e)=>e+step)}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
        
      </p>
      {count !== 0?<button onClick={handleReset}>Reset</button>: null}
    </div>
  );
}
export default App;
