import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>React Flashcards</h1>
        <p>Click a card to reveal the answer</p>
      </header>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={`card-container ${question.id === selectedId ? "selected" : ""}`}
        >
          <div className="card-inner">
            <div className="card-front">
              <p>{question.question}</p>
            </div>
            <div className="card-back">
              <p>{question.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];