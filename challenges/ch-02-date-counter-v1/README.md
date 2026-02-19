# Challenge #02: Date Counter (v1)

## 📋 Overview

This challenge tests the understanding of basic React `useState` interactions by building a date calculator application. It adjusts past and future dates based on manipulating a controlled counter and step state.

---

## 🎯 What I Learned & Applied

### 1. Complex State Manipulation
- Calculating derived variables (the actual future `Date` object) exclusively from the React state (`count`).
- Changing state asynchronously via previous state functions:
```javascript
setCount((c) => c + step);
```

### 2. Basic Forms
- Incrementing / Decrementing numbers via standard button `onClick` handlers.

---

## 📁 Project Structure

```
ch-02-date-counter-v1/
├── src/
│   ├── index.js      # App, Counter Logic
│   └── index.css     # Minimal CSS
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

- [x] `useState` initialization and updates
- [x] Async state setter callbacks
- [x] Date manipulation in JavaScript
- [x] Dynamic templating

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
