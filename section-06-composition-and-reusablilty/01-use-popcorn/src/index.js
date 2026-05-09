import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
// import './index.css'
import StarRating from "./components/StarRating";

function Test() {
  const [MovieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        onSetRating={setMovieRating}
        defaultRating={3}
        maxRating={6}
        messages={["Terrible", "Bad", "Ok", "Good", "Great", "Awesome"]}
      />
      <p>
        This Movie was
        {MovieRating ? ` rated with ${MovieRating} starts` : " not rated yet"}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      fontSize="2rem"
      messages={["Terrible", "Bad", "Ok", "Good", "Great"]}
      defaultRating={3}
    />
    <StarRating
      maxRating={10}
      size={24}
      color={"red"}
      className="test"
      defaultRating={2}
    />
    <Test />
  </React.StrictMode>,
);
