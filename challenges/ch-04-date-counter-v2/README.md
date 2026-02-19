# Challenge #04: Date Counter (v2)

## 📋 Overview

An upgraded, highly polished version of the original Date Counter. This iteration expands upon basic input management by integrating complex controlled elements like sliders and number fields within a beautifully crafted user interface.

---

## 🎯 What I Learned & Applied

### 1. Advanced Controlled Inputs
- Syncing native HTML `<input type="range">` elements with React state.
- Converting event targets from String to Number natively during handler execution:
```javascript
onChange={(e) => setStep(Number(e.target.value))}
```

### 2. Reset Functionality & Multi-State Action
- Developing specific reset mechanisms that reset multiple separate pieces of state within a single handler function:
```javascript
onClick={() => {
    setCount(0);
    setStep(1);
}}
```

### 3. Complex Conditional Rendering
- Only rendering the Reset controls *if* the state deviates from its starting defaults.

---

## 📁 Project Structure

```
ch-04-date-counter-v2/
├── src/
│   ├── index.js      # App, Complex Handlers, Structural Layout
│   └── index.css     # Dark Mode, Glassmorphism, and Custom Inputs
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

- [x] Native Range and Number inputs
- [x] Derived state computation strings
- [x] Advanced state resets
- [x] Conditional operator logic
- [x] Polishing raw inputs into premium custom CSS sliders

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
