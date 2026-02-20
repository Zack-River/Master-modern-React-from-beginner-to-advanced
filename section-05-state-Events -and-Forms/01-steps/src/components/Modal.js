import { useState } from "react";
import { Steps } from "./Steps";

export function Modal() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    else return;
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    else return;
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>&times;</button>
      {isOpen && (
        <Steps step={step} handlePrevious={handlePrevious} handleNext={handleNext} />
      )}
    </>
  );
}
