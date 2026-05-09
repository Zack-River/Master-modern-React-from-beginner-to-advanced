# 🤔 Section 06: Thinking in React

Now you know the basic Lego pieces. But how do you plan a giant Lego spaceship? You need to "Think in React."

## 1. Break the UI into a Component Tree

When you look at a website, draw boxes around every distinct part.
- A big box for the `App` (the whole table)
- Inside it, a box for the `Header` (the roof)
- A box for the `MainContent` (the body)
- Inside `MainContent`, maybe a list of `Item` boxes.

This forms a family tree! The `App` is the parent. `Header` and `MainContent` are siblings (children of `App`).

## 2. Lifting State Up (Sharing Toys)

Here is a big rule in React: **Data flows DOWN.** Parents can pass Props DOWN to their children. Children CANNOT pass props UP to their parents or sideways to their siblings.

Imagine Brother and Sister are playing in different rooms (different components). Brother finds a cool toy car (State). Sister wants to play with it too. But they can't pass it through the walls!

What do they do? They **Lift the State Up** to their Mom (the Parent Component)!

Mom holds the toy car (the State).
Mom passes the car DOWN to Brother as a Prop.
Mom passes the car DOWN to Sister as a Prop.
Now they can both play with it!

```jsx
// Mom (The Parent Component)
function App() {
  // Mom holds the state!
  const [toyCar, setToyCar] = useState("Red Racecar");

  return (
    <div>
      {/* Mom passes the toy down as props */}
      <Brother toy={toyCar} />
      <Sister toy={toyCar} />
    </div>
  );
}

function Brother(props) {
  return <p>I am playing with the {props.toy}</p>;
}

function Sister(props) {
  return <p>I am also playing with the {props.toy}</p>;
}
```

**Wait, what if Brother wants to change the toy?**
He can't! He only has the prop, not the `setToyCar` pencil.
So, Mom has to pass the `setToyCar` pencil DOWN to him as a prop too!

```jsx
// Inside App
<Brother toy={toyCar} changeToy={setToyCar} />

// Inside Brother
function Brother(props) {
  return (
    <div>
      <p>Playing with {props.toy}</p>
      {/* Brother uses the pencil Mom gave him! */}
      <button onClick={() => props.changeToy("Blue Truck")}>Change it!</button>
    </div>
  );
}
```

## 3. Derived State (Don't memorize math!)

Imagine you have a state for `birthYear = 2000`.
You want to show the person's age.
You MIGHT think: "Oh, I need another state for `age`!"

**NO!** State is expensive. Don't use a notebook page if you can just use a calculator!

```jsx
function Person() {
  const [birthYear, setBirthYear] = useState(2000);

  // DERIVED STATE: Just calculate it on the fly! No useState needed!
  const age = new Date().getFullYear() - birthYear;

  return <p>You are {age} years old.</p>;
}
```
If `birthYear` changes, React redraws the screen, and the math for `age` happens automatically again!
