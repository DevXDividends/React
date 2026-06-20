
function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ! Ready to Go ✈️ "
          : `You have ${numItems} items on your list ,and you already packed
        ${itemPacked} (${percentage ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
export default Stats;