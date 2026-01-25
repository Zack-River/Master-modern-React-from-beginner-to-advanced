import { useEffect, useState } from "react";
import "./style.css";
function App() {
  const [advice , setAdvice] = useState("");
  const [count, setCount] = useState(0);
  function getAdvice() {
    const advices = [
      "Advice 1",
      "Advice 2",
      "Advice 3",
      "Advice 4",
      "Advice 5",
    ];
    const randomAdvice = advices[Math.floor(Math.random() * advices.length)];
    setAdvice(randomAdvice);
    setCount((c) => c + 1);
  }

  useEffect(function() {
    getAdvice();
  }, [] /* dependency array */);

  return (
    <div className="app">
      <h1 className="advice">{advice}</h1>
      <button className="btn" onClick={getAdvice}>Get Advice</button>
      <Message count={count}/>
    </div>
  );
}

function Message(props) {
return (
<p className="message"> You have read <strong>{props.count}</strong> pieces of advice</p>
);
}

export default App;
