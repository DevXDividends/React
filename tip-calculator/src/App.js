import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const tip = (myTip + friendTip) / 2;
  const tipAmount = amount * (tip / 100);
  const total = amount + tipAmount;
  return (
    <div>
      <Bill amount={amount} setAmount={setAmount} />
      <Service friend={false} myTip={myTip} setMyTip={setMyTip}>
        How did you like the service?{" "}
      </Service>
      <Service friend={true} friendTip={friendTip} setFriendTip={setFriendTip}>
        How did Your Friend Liked the service?{" "}
      </Service>
      <Amount amount={amount} total={total} tipAmount={tipAmount} />
    </div>
  );
}
function Bill({ amount, setAmount }) {
  return (
    <div>
      <label>
        How much was the Bill?{" "}
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
function Service({
  friend,
  children,
  myTip,
  friendTip,
  setMyTip,
  setFriendTip,
}) {
  return (
    <div>
      <label>
        {children}
        <select
          value={friend ? friendTip : myTip}
          onChange={
            friend
              ? (e) => setFriendTip(Number(e.target.value))
              : (e) => setMyTip(Number(e.target.value))
          }
        >
          <option value={0}>Dissatified (0%)</option>
          <option value={5}>It was Ok (5%)</option>
          <option value={10}>It was Good (10%)</option>
          <option value={20}>Absolutely Amazing ! (20%)</option>
        </select>
      </label>
    </div>
  );
}
function Amount({ amount, total, tipAmount }) {
  return (
    <div>
      <b>
        You Pay ${total} (${amount} + ${tipAmount} tip)
      </b>
    </div>
  );
}
export default App;
