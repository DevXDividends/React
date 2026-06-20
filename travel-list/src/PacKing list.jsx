import Item from "./item";
export default function PackingList({ items, onDeleteItem, onToogleItems, clearList }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToogleItems={onToogleItems}
          />
        ))}
      </ul>
      <div>
        <div className="actions">
          <button onClick={clearList}>clear</button>
        </div>
      </div>
    </div>
  );
}