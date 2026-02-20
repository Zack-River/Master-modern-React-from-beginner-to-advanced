import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = items;

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items.slice().sort((a, b) => {
        return a.description.toLowerCase().localeCompare(b.description.toLowerCase());
      });
      break;
    case "packed":
      sortedItems = items.slice().sort((a, b) => {
        return Number(a.packed) - Number(b.packed);
      });
      break;
    case "quantity":
      sortedItems = items.slice().sort((a, b) => {
        return Number(a.quantity) - Number(b.quantity);
      });
      break;
    default:
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div className="actions">
        {items.length > 0 && <>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
            <option value="quantity">Sort by quantity</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </>}
      </div>
    </div>
  );
}
