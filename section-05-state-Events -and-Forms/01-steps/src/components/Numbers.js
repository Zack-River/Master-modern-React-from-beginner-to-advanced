import { Number } from "./Number";

export function Numbers({ step }) {
  return (
    <div className="numbers">
      {Array.from({ length: 3 }, (_, i) => <Number step={step} num={i + 1} />)}
    </div>
  );
}
