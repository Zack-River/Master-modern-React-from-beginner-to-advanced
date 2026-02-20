# Challenge #02: Date Counter v1

## 📋 Overview

This challenge focuses on fundamental state management using the `useState` hook and setting up event handlers to modify that state. A simple interface where you can adjust steps and count to change dates.

---

## 🎯 What I Learned & Applied

### 1. The `useState` Hook

Managing changing data across renders:

```javascript
const [step, setStep] = useState(1);
const [count, setCount] = useState(0);
```

**Key insight:** `useState` is essential to keep track of dynamic values like steps or counts. Whenever these values update using their setter functions (`setStep`, `setCount`), the component re-renders.

---

### 2. Event Handlers

Reacting to user interactions:

```javascript
<button onClick={() => setStep((c) => c - 1)}>-</button>
<button onClick={() => setStep((c) => c + 1)}>+</button>
```

**Key insight:** Use arrow functions inside `onClick` when you need to pass an argument or use a callback without executing the function immediately on render.

---

### 3. Date Manipulation in JS

Using native JavaScript `Date` API in React:

```javascript
const date = new Date("June 21 2027");
date.setDate(date.getDate() + count);
```

**Key insight:** You can effortlessly combine normal JavaScript logic (date objects and `setDate`) with React state to format readable dynamic dates.

---

## 📁 Project Structure

```
ch-02-date-counter-v1/
├── src/
│   ├── App.js        # Main Counter Component
│   ├── index.js      # Entry Point
│   └── styles.css    # Minimal styling
└── package.json
```

---

## 🚀 Running the Project

```bash
cd challenges/ch-02-date-counter-v1
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Initializing component state with `useState`
- [x] State update functions and callbacks
- [x] Handling button `onClick` events
- [x] Deriving values based on state
- [x] Integrating JavaScript `Date` objects in a component

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
