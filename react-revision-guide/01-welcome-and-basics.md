# 🐣 Section 01: Welcome and the Basics

Alright, let's learn how to set up our Lego table and build our first simple toy!

## Setting up the Table

To start building, we need a special table and tools. We use a command called `create-react-app`.

Imagine `create-react-app` is a magic robot that goes to the store, buys all the right Lego sets, unpacks them, and organizes them on your table so you can start building immediately.

```bash
# This tells the magic robot to build our playground!
npx create-react-app my-app
```

## The Main Board: `App.js`

When you open your new project, you will see a file called `App.js`.
Think of `App.js` as the **big green baseplate** that you stick all your Lego pieces onto.

```javascript
// This is inside App.js
function App() {
  return (
    <div>
      <h1>Hello, Lego World!</h1>
    </div>
  );
}
export default App; // This lets other files see our baseplate
```

Notice something weird? It looks like HTML (the web's language), but it's inside JavaScript!
This is called **JSX**.

## What is JSX? (HTML with Superpowers)

JSX is like writing HTML, but you can put JavaScript math and magic right inside it!

If you want to put a math problem in normal HTML, it just shows as text: "2 + 2".
But with JSX, you can use **curly braces `{}`** as a magic portal to JavaScript.

```jsx
// The magic portal {}
function MagicBox() {
  const myName = "Zack";

  return (
    <div>
      <h1>My name is {myName}</h1>
      <p>And 2 plus 2 is {2 + 2}</p>
    </div>
  );
}
```
*It will actually show "My name is Zack" and "And 2 plus 2 is 4" on the screen!*

## Making Toys Remember Things: `useState`

Let's say we have a simple counter. It starts at 0. When we click a button, it goes up.
The button needs to **remember** what the number is.

In React, we use a special magic spell called `useState` to make a component remember things.
Think of `useState` as a tiny notebook and a pencil.

```javascript
import { useState } from "react"; // Importing the magic spell

function CounterApp() {
  // 1. We create a memory (state).
  // 'step' is what's written in the notebook (currently 1).
  // 'setStep' is the pencil to write a new number.
  const [step, setStep] = useState(1);

  // 2. We make a function to use the pencil
  function addOne() {
    setStep(step + 1); // "Hey pencil, erase the old number and write step + 1"
  }

  return (
    <div>
      {/* We show what's in the notebook */}
      <h2>Current step: {step}</h2>
      {/* We click the button to run the addOne function */}
      <button onClick={addOne}>Go up!</button>
    </div>
  );
}
```

Whenever we use the `setStep` pencil to write a new number, React says, "Oh! The notebook changed! Let me redraw the screen with the new number!"

## Taking Action Automatically: `useEffect`

Sometimes we want things to happen *automatically* when the component shows up on the screen, like asking the internet for data.
We use `useEffect` for this.

Think of `useEffect` like a robot butler. You tell it: "As soon as this Lego piece is placed on the table, go fetch me a glass of water."

```javascript
import { useEffect, useState } from "react";

function AdviceGenerator() {
  const [advice, setAdvice] = useState("");

  // The robot butler instructions
  useEffect(function() {
    // This happens automatically as soon as the component appears!
    console.log("I am fetching advice from the internet!");
    setAdvice("Always eat your vegetables!");
  }, []); // The empty [] means "only do this ONCE when the piece is placed down."

  return <h1>{advice}</h1>;
}
```

And that's Section 1! We set up our table, learned about the `App.js` baseplate, used magic portals with `JSX`, gave our components memory with `useState`, and hired a robot butler with `useEffect`!
