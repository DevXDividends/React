import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PacKing list";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleNewItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleToogle(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function clearList() {
    if (window.confirm("Are you sure to delete all the items?")) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleNewItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToogleItems={handleToogle}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

