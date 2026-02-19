# Steps Component App

## 📋 Overview

A foundational exploration of how exactly React handles state updates. This application builds an interactive multi-step wizard, tracking the active step and controlling the UI flow conditionally. 

---

## 🎯 What I Learned & Applied

### 1. Wiring Synthetic Events
- Integrating `onClick` behaviors directly onto standard HTML `<button>` and `<div>` elements using camelCased synthetic event properties.

### 2. State Toggles
- Initializing a simple boolean `useState` flag (`isOpen`) to control the mounting/unmounting behavior of massive sections of DOM.

### 3. Immutable State & Safe Updates
- Understanding *why* we cannot mutate tracking variables. Avoiding `useState` antipatterns like mutating the state directly or using improper previous-value caching.

---

## 📁 Project Structure

```
section-05-state-Events -and-Forms/01-steps/
├── src/
│   ├── App.js        # Toggles, Steps, Arrays, and Layout
│   └── index.css     # Step coloring and flex styling
└── package.json
```

---

## 🚀 Running the Project

```bash
cd "section-05-state-Events -and-Forms/01-steps"
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Wiring synthetic HTML Events
- [x] Managing `isOpen` boolean displays
- [x] Controlling step iteration through `setStep(current => current + 1)`
- [x] Component Unmounting fundamentals

---

<div align="center">

**🔙 [Back to Section 05](../README.md)** • **🔙 [Back to Main Repository](../../../README.md)**

</div>
