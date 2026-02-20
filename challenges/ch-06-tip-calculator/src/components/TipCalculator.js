import { useState } from "react";
import { BillInput } from "./BillInput";
import { Reset } from "./Reset";
import { Rate } from "./Rate";
import { Output } from "./Output";

export function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = (percentage1 + percentage2) / 2 / 100;

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <Rate percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </Rate>
      <Rate percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </Rate>
      {bill > 0 && <Output bill={bill} tip={tip} />}
      {bill > 0 && <Reset onClick={handleReset} />}
    </div>
  );
}
