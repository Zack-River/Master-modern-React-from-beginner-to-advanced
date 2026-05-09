# 🧠 Section 03: JavaScript Review

Before we build complex React toys, we need to remember some special JavaScript tricks. These are like cool techniques you learn to click your Lego pieces together faster.

## 1. Destructuring (Unpacking the Toy Box)

Imagine you get a big box containing a Toy Car, a Toy Dinosaur, and a Toy Plane. You just want the Car.
Instead of digging through the box every time, you just grab the Car right as you open it.

```javascript
// A big object (the box)
const toyBox = {
  car: "Fast Car",
  dinosaur: "T-Rex",
  plane: "Jet"
};

// Destructuring: Instantly unpacking the car and dinosaur!
const { car, dinosaur } = toyBox;

console.log(car); // "Fast Car"
```

## 2. Spread and Rest Operators (`...`)

The three dots `...` are magical. They mean "pour everything out".

**Spread (Pouring out):**
Imagine you have a bucket of red Legos, and you want to pour them into a bigger bucket with blue Legos.
```javascript
const redLegos = ["red1", "red2"];
const blueLegos = ["blue1", "blue2"];

// We pour the red ones and blue ones into a new big bucket
const allLegos = [...redLegos, ...blueLegos];
```

**Rest (Gathering the rest):**
You take the car out of the toy box, and put "the rest" of the toys in a separate pile.
```javascript
const { car, ...otherToys } = toyBox;
console.log(otherToys); // Contains dinosaur and plane!
```

## 3. Arrow Functions (`=>`)

It's just a shorter way to write a function. It looks like an arrow pointing to what it should do!

```javascript
// Normal way
function sayHello() {
  return "Hello!";
}

// Arrow way
const sayHelloArrow = () => "Hello!";
```

## 4. The Array `map` Method (The Factory Line)

Imagine you have a line of unpainted toy cars. You want to paint them all red.
You put them through a machine (the `map` function). It takes each car, paints it, and outputs a new line of red cars.

```javascript
const unpaintedCars = ["car1", "car2", "car3"];

// map goes through EACH item and changes it
const redCars = unpaintedCars.map((car) => car + " is now Red!");
```
*We use `map` ALL THE TIME in React to turn lists of data into lists of Lego components!*

## 5. Short-Circuiting (`&&` and `||` and `??`)

These are quick decisions.

- `&&` (And): "If it's sunny AND I have my shoes, I will go outside." In React we use it to show things only if a condition is true.
  ```jsx
  {isSunny && <p>I am going outside!</p>}
  ```

- `||` (Or): Provide a backup. "I want an apple, OR if there are none, give me a banana."
  ```javascript
  const snack = fruit || "banana";
  ```

- `??` (Nullish Coalescing): Very similar to `||`, but only triggers if the first thing is completely missing (null or undefined), not just 0 or an empty string.

## 6. Optional Chaining (`?.`)

Sometimes a toy box might be empty. If you try to grab a toy that isn't there, the game crashes!
Optional chaining is like looking into the box first. "If the box exists AND it has a car, give me the car."

```javascript
// Instead of this crashing if toyBox is undefined:
// const car = toyBox.car;

// We do this:
const car = toyBox?.car; // Returns undefined peacefully instead of crashing!
```

## 7. Async / Await (Waiting for the Cake)

If you put a cake in the oven, you don't freeze and stare at the oven until it's done. You go play, and when it's done, you eat it.

In code, when we ask the internet for data, it takes time. We use `async` and `await` to tell JavaScript: "Wait here for the data, but let the rest of the game keep running."

```javascript
async function getToysFromStore() {
  // Go to store, WAIT until you have the toys
  const toys = await fetch("https://toystore.com/api");
  return toys;
}
```
