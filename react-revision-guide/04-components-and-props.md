# 🧱 Section 04: Working with Components and Props

Now we start building the real Lego sets! We will learn how to make our own pieces and how to pass instructions to them.

## What is a Component?

A Component is just a JavaScript function that returns JSX (HTML with superpowers).
That's it! If a function gives you back some UI (User Interface) to draw on the screen, it's a component.

**Rule 1:** Component names MUST start with a **Capital Letter**. (e.g., `Pizza`, `Header`, `Footer`). If you name it `pizza`, React will think it's a normal HTML tag and get very confused.
**Rule 2:** A component can only return ONE main parent thing. You can't return two separate boxes unless they are wrapped in one big box.

```jsx
// This is a Component!
function Pizza() {
  return (
    <div>
      <h2>Pepperoni Pizza</h2>
      <p>It has cheese and pepperoni.</p>
    </div>
  );
}
```

You can then use this component anywhere by doing this: `<Pizza />`. It's like putting your custom Lego block on the board!

## What are Props? (Passing the instructions)

Imagine you built an awesome Lego `<Robot />`. But you want three robots: one red, one blue, and one green.
You don't want to build three separate Robot components! That takes too long!

Instead, you build ONE robot, and when you place it on the board, you hand it a little sticky note with instructions.
These instructions are called **Props** (short for properties).

```jsx
// We hand the Robot instructions when we place it
function App() {
  return (
    <div>
      <Robot color="Red" name="Robo1" />
      <Robot color="Blue" name="Robo2" />
      <Robot color="Green" name="Robo3" />
    </div>
  );
}
```

Now, how does the Robot read the sticky note?
It catches it in the function parenthesis!

```jsx
// The Robot catches the 'props' sticky note
function Robot(props) {
  return (
    <div>
      <p>Hello, my name is {props.name}!</p>
      <p>My armor is {props.color}.</p>
    </div>
  );
}
```

**Pro Tip:** Remember *Destructuring* from the last section? We usually unpack the sticky note right away so we don't have to keep writing `props.name`!

```jsx
// Unpacking the props immediately! Much cleaner!
function Robot({ name, color }) {
  return (
    <div>
      <p>Hello, my name is {name}!</p>
      <p>My armor is {color}.</p>
    </div>
  );
}
```

## Rendering Lists (The Factory Line again!)

What if we have a list of 100 Pizzas? We don't want to write `<Pizza />` 100 times.
We use the JavaScript `map` method!

```jsx
const pizzaData = [
  { name: "Margarita", price: 10 },
  { name: "Pepperoni", price: 12 },
  { name: "Hawaiian", price: 15 }
];

function Menu() {
  return (
    <ul>
      {/* We map over the array, and for EACH pizza, we return a <Pizza> component! */}
      {pizzaData.map(function(pizzaObj) {
        return <Pizza name={pizzaObj.name} price={pizzaObj.price} />;
      })}
    </ul>
  );
}
```

**Crucial Rule:** When you render a list like this, React gets confused if the pieces change order. You MUST give each item a unique `key` prop (like an ID number) so React can track them.

```jsx
<Pizza key={pizzaObj.id} name={pizzaObj.name} price={pizzaObj.price} />
```

## Conditional Rendering (Hide and Seek)

Sometimes we only want to show a Lego piece if a condition is true.

**Using && (If true, show it):**
```jsx
// If isOpen is true, show the "We are open" message
{isOpen && <p>We are open!</p>}
```

**Using Ternary Operator ? : (If true do this, otherwise do that):**
```jsx
// If pizzas > 0, show Menu. Otherwise, show "Come back later".
{numPizzas > 0 ? <Menu /> : <p>Come back later!</p>}
```
