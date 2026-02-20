export function Rate({ children, percentage, onSetPercentage }) {
  return (
    <div className="input-group">
      <label>{children}</label>
      <select onChange={(e) => onSetPercentage(Number(e.target.value))} value={percentage}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Okay (5%)</option>
        <option value="10">Good (10%)</option>
        <option value="20">Amazing (20%)</option>
      </select>
    </div>
  );
}

