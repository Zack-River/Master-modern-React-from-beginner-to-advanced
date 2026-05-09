# 🎛️ Section 05: State, Events, and Forms

It's time to make our Lego toys move and react when we poke them!

## Handling Events (Poking the Toys)

In normal HTML, if you want a button to do something when clicked, you do this: `<button onclick="doSomething()">`.
In React, we use **camelCase** for events, and we pass the *function itself*, not a string.

```jsx
function ButtonClicker() {
  function handlePoking() {
    alert("Ouch! You poked me!");
  }

  // Good: onClick={handlePoking} (Just giving the name of the function)
  // Bad: onClick={handlePoking()} (This runs it immediately without waiting for a click!)
  return <button onClick={handlePoking}>Poke me!</button>;
}
```

## State (`useState` - The Component's Memory)

We talked about `useState` briefly in Section 1. Let's dive deeper.

**State is data that changes over time.** When State changes, React redraws (re-renders) that specific component on the screen to show the new data.

If you just use a normal variable (like `let step = 1;`) and change it, React **WILL NOT** redraw the screen. It won't care! You must use `useState`.

```jsx
import { useState } from "react";

function Counter() {
  // const [variableName, setterFunctionName] = useState(initialValue);
  const [count, setCount] = useState(0);

  function addOne() {
    // We use the setter function to change the variable!
    // NEVER do: count = count + 1; (React will ignore you)
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={addOne}>Add</button>
    </div>
  );
}
```

### The "Callback" state trick

If you need to change the state based on what the state CURRENTLY is (like adding 1 to the current count), it's safer to pass a small arrow function into the setter.

```jsx
// Safer way! c represents the CURRENT count.
setCount((c) => c + 1);
```

## Forms in React (Controlled Elements)

In normal HTML, input boxes (like `<input type="text">`) remember what you type into them all by themselves. They keep their own secret memory.

React hates secrets! React says, "No, I need to know EVERYTHING that is happening!"
So, we take control of the input box using State. We call this a **Controlled Element**.

Here is the recipe for a Controlled Input:
1. Create a State variable to hold the text.
2. Force the `<input>` value to be that State variable.
3. Every time the user types a letter (`onChange`), update the State.

```jsx
function NameForm() {
  // 1. Create state
  const [name, setName] = useState("");

  return (
    <form>
      <input 
        type="text" 
        placeholder="Type your name..."
        // 2. Force the value to equal our state
        value={name} 
        // 3. Update the state every time a key is pressed!
        // 'e' is the event object. 'e.target.value' is what was just typed.
        onChange={(e) => setName(e.target.value)} 
      />
      <p>You are typing: {name}</p>
    </form>
  );
}
```

Now, React is in full control! When you type, you update the state, which redraws the screen and puts the new letter into the input box. It happens instantly!
