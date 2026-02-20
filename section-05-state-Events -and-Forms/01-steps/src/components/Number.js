export function Number({ step, num }) {
  return (
    <div className={`${step >= num ? 'active' : ''}`}>{num}</div>
  );
}
