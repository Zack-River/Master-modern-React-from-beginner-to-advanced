# ⚙️ Section 07: React Behind the Scenes

Time to look into the engine room and see how the React robot actually works!

## How Rendering Works (The Kitchen Analogy)

Imagine React is a restaurant.

1. **Trigger (The Order):** A customer walks in and orders a pizza (The app starts, or someone clicks a button that changes `useState`).
2. **Render Phase (The Kitchen):** React goes to the kitchen (calls your Component functions) and prepares the pizza (creates the Virtual DOM blueprint). It figures out exactly what the new screen should look like.
3. **Commit Phase (The Waiter):** React takes the finished pizza (the Virtual DOM) and actually puts it on the customer's table (updates the Real DOM/screen).

**Very Important:** "Rendering" in React DOES NOT mean updating the screen! It means calling the component function to figure out the blueprint. Updating the screen happens in the Commit phase!

## Why do Components Re-render?

A component will ONLY go to the kitchen to cook again (re-render) if:
1. Its **State** (`useState`) changes.
2. Its parent component re-renders (this forces all children to re-render too, just to be safe).

Changing a normal variable or changing a prop from the outside (without the parent re-rendering) will NOT trigger a re-render.

## The Rules of Hooks

Hooks are the magic spells that start with `use` (like `useState`, `useEffect`). They are very powerful but have strict rules. If you break them, the magic explodes!

**Rule 1: Only call Hooks at the top level!**
Never put `useState` or `useEffect` inside an `if` statement, inside a `for` loop, or inside a normal nested function. React relies on the exact order the hooks are called to know which notebook page belongs to which variable. If you put one inside an `if` statement, it might skip a notebook page and ruin everything!

```jsx
// BAD! ❌
function MyComponent() {
  if (isRaining) {
    const [umbrella, setUmbrella] = useState(true); // NO!
  }
}

// GOOD! ✅
function MyComponent() {
  const [umbrella, setUmbrella] = useState(true); // Always at the top!
  
  if (isRaining) {
    // do something with the umbrella state here
  }
}
```

**Rule 2: Only call Hooks from React functions!**
You can only use hooks inside React Components (functions that start with a capital letter) or inside your own Custom Hooks. Never put them in a regular vanilla JavaScript helper function.

## Component Composition (Slots)

Sometimes you want a component to be a hollow box, and you want to stuff other things inside it later. We use the special `children` prop for this!

```jsx
// Box is a hollow component!
function Box(props) {
  return (
    <div className="thick-border">
      {/* This is the magic slot! */}
      {props.children}
    </div>
  );
}

function App() {
  return (
    // We put things INSIDE the Box tags!
    <Box>
      <h2>I am inside the box!</h2>
      <p>Me too!</p>
    </Box>
  );
}
```
This is called "Component Composition" and it's a great way to build reusable layouts (like Modals or sidebars)!
