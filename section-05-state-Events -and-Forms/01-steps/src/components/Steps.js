import { messages } from "./App";
import { Button } from "./Button";
import { Numbers } from "./Numbers";
import { StepMessage } from "./StepMessage";

export function Steps({ step, handlePrevious, handleNext }) {
  return (
    <div className="steps">
      <Numbers step={step} />

      <StepMessage step={step}>
        {messages[step - 1]}
        <div className="buttons">
        <Button
        bgColor="#e7e7e7"
        textColor="#333"
        onClick={()=> alert(`learn how to use ${messages[step - 1]}`)}
        >Learn How</Button>
      </div>
      </StepMessage>

      <div className="buttons">
        <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
          <span>👈</span>
          Previous
        </Button>
        <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
          Next
          <span>👉</span>
        </Button>
      </div>
    </div>
  );
}