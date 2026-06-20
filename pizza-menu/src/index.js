import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => (
  <div className="container">
    <Headers />
    <Menu />
    <Footer />
  </div>
);

function Headers() {
  return (
    <header className="header">
      <h1>Fast React Pizza .Co</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
          <p>Authentic Italian cuijine. 6 creative dishes to choose from. All from 
            our stone oven, all organic, all delicious.</p>

      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
function Pizza({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
      <img src={pizzaObj.photoName} alt="image" />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut? "SOLD OUT":pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= 12 && hour <= 22;
  console.log(isOpen);

  return <footer className="footer">
    {isOpen && (
     <Order closeHour = {closeHour} openHour={openHour}/>
    )}
  </footer>;
}
function Order({closeHour,openHour}){
  return  <div className="order">
        <p>We're Open from {openHour}:00 to  {closeHour}:00</p>
        <button className = "btn">Order</button>
      </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
