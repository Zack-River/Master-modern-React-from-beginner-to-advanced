# Challenge #04: Date Counter v2

## 📋 Overview

This challenge extends the basic date counter to include controlled elements such as an input text field and a range slider. It handles syncing user input with React state.

---

## 🎯 What I Learned & Applied

### 1. Controlled Elements (`input type="range"`)

Syncing a slider with state:

```javascript
<input 
  type="range" 
  min="0" max="10" 
  value={step} 
  onChange={(e) => setStep(Number(e.target.value))} 
/>
```

**Key insight:** By setting the `value` to a state variable and passing a state setter function to `onChange`, React becomes the single source of truth for the input's state.

---

### 2. Controlled Elements (`input type="text"`)

Handling string/number input fields:

```javascript
<input 
  type="number" 
  value={count} 
  onChange={(e) => setCount(Number(e.target.value))} 
/>
```

**Key insight:** Similar to the range slider, text/number inputs bind React's state back to the UI, providing a seamless standard form interaction model.

---

### 3. Reset Functionality

Clearing form or application state:

```javascript
function handleReset() {
  setCount(0);
  setStep(1);
}
```

**Key insight:** With controlled inputs, resetting is extremely straightforward. Changing the state variable automatically updates the input UI to reflect the default values.

---

## 📁 Project Structure

```
ch-04-date-counter-v2/
├── src/
│   ├── App.js        # Main Enhanced Counter Component
│   ├── index.js      # Entry Point
│   └── styles.css    # Form and interactive styling
└── package.json
```

---

## 🚀 Running the Project

```bash
cd challenges/ch-04-date-counter-v2
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Building controlled component inputs
- [x] Managing form state dynamically
- [x] Setting default states and resetting
- [x] Converting string inputs to numbers using `Number()`

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
