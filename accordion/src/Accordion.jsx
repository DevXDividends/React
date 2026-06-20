import { useState } from "react";
import "./index.css";

function Accordion({ currOpen, setCurrOpen, number, title, text }) {
  const isOpen = number === currOpen;
  return (
    <div
      className={`item ${isOpen ? " open" : ""}`}
      onClick={() => setCurrOpen(isOpen ? 0 : number)}
    >
      <span className="number">{number}</span>
      <span className="title">{title}</span>

      <div className="icon">{isOpen ? "-" : "+"}</div>
      {isOpen ? <div className="content-box">{text}</div> : null}
    </div>
  );
}
export default Accordion;
