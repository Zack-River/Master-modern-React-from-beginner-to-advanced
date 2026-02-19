import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Date Calculator</h1>
        <p className="subtitle">Discover dates effortlessly</p>
      </div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2026");
  date.setDate(date.getDate() + count);

  return (
    <div className="card glass-panel">
      
      <div className="control-group">
        <label className="label">Step: <span>{step}</span></label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => {
              setStep(Number(e.target.value));
            }}
            className="slider"
          />
        </div>
      </div>

      <div className="control-group">
        <label className="label">Count</label>
        <div className="counter-controls">
          <button className="btn-icon" onClick={() => setCount((c) => c - step)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
          </button>
          <input 
            type='number' 
            value={count} 
            onChange={(e) => {setCount(Number(e.target.value))}}
            className="input-number"
          />
          <button className="btn-icon" onClick={() => setCount((c) => c + step)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
          </button>
        </div>
      </div>

      <div className="result-section">
        <p className="result-text">
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
          <span className="result-date">{date.toDateString()}</span>
        </p>
      </div>

      {count !== 0 || step !== 1 ? (
        <div className="action-row">
          <button
            className="btn-reset"
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset Settings
          </button>
        </div>
      ) : null}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
