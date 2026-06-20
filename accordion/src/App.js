import Accordion from "./Accordion";
import "./index.css";
import { useState } from "react";


const faqs = [
  {
    number: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    number: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    number: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
const [currOpen ,setCurrOpen] = useState(0);
  return (
    <div className="accordion">
      {faqs.map((item) => (
        <Accordion currOpen={currOpen} setCurrOpen={setCurrOpen} key={item.number} number={item.number} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

export default App;
