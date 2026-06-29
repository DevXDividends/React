import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [output, setOutput] = useState(null);
  useEffect(
    function () {
      async function convert() {
        try {
          const response = await fetch(
            `https://api.frankfurter.dev/v2/rate/${from}/${to}`,
          );
          if (!response.ok) throw new Error("Something went wrong!");
          const data = await response.json();
          const converted = amount * data.rate;
          setOutput(converted);
        } catch (err) {
          console.log(err);
        }
      }
      if (to !== from) convert();
    },
    [amount, to, from],
  );
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      <p>{output}</p>
    </div>
  );
}

export default App;
