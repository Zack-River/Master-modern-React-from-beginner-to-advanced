export function Output({ bill, tip }) {
  const tipAmount = Math.round(bill * tip);
  const total = bill + tipAmount;
  return (
    <div className="output">
      <h3>You pay ${total}</h3>
      <p>(${bill} bill + ${tipAmount} tip)</p>
    </div>
  );
}
