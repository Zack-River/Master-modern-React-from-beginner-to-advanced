export function BillInput({ bill, onSetBill }) {
  return (
    <div className="input-group">
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        placeholder="Enter Bill Value"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
