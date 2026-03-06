# Challenge #06: Tip Calculator

## 📋 Overview

This challenge involves building a tip calculator designed to handle varying dynamic inputs from a user and a friend. The core focus here is on lifting state up so sibling components can communicate.

---

## 🎯 What I Learned & Applied

### 1. Lifting State Up

When multiple components need the same data, keeping state in their closest common wrapper:

```javascript
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <Rate percentage={percentage1} onSetPercentage={setPercentage1} />
    </>
  );
}
```

**Key insight:** State shouldn't live in the child inputs if a sibling node (the `Output` component) needs to read it. By lifting state to the parent `TipCalculator`, it handles the orchestrating.

---

### 2. Derived State

Computing new values based on existing state:

```javascript
const tip = bill * ((percentage1 + percentage2) / 2 / 100);
const total = bill + tip;
```

**Key insight:** Never keep computed totals in state. If variables depend purely on manipulating existing states, compute them on each render.

---

### 3. Reusable Generic Components

Using `children` props to re-use identical UI elements effectively:

```javascript
<Rate percentage={percentage1} onSetPercentage={setPercentage1}>
  How did you like the service?
</Rate>
<Rate percentage={percentage2} onSetPercentage={setPercentage2}>
  How did your friend like the service?
</Rate>
```

**Key insight:** The `children` prop makes customizing specific elements inside wrapper components exceptionally readable.

---

## 📁 Project Structure

```
ch-06-tip-calculator/
├── src/
│   ├── components/
│   │   ├── App.js             # Root level component
│   │   ├── BillInput.js       # Bill input field
│   │   ├── Output.js          # Derived state display
│   │   ├── Rate.js            # Select interaction
│   │   ├── Reset.js           # Reset button
│   │   └── TipCalculator.js   # Orchestrator Component
│   ├── index.js               # Entry Point
│   └── styles.css             # Glassmorphism/Modern UI Theme
└── package.json
```

---

## 🚀 Running the Project

```bash
cd challenges/ch-06-tip-calculator
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Lifting state to a common parent
- [x] Extracting smaller child components
- [x] Calculating derived variables
- [x] Passing setter functions through props
- [x] Utilizing the `children` prop
- [x] Implementing advanced UI themes

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
