export default function Stats({ itemsLength, itemsPacked }) {
  const numItems = Number(itemsLength);
  if (numItems === 0) return <p className="stats"><em>Start packing! 🧳</em></p>;

  const numPacked = Number(itemsPacked);
  const percentage = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You got everything! ✈️" : "💼 You have " + numItems + " items and you already packed " + numPacked + " (" + percentage + "%)"}
      </em>
    </footer>
  );
}
