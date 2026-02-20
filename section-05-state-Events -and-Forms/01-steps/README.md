# Project: Steps

## 📋 Overview

This project is a simple, interactive step-by-step tutorial viewer built during Section 05. It demonstrates the core concepts of React state mapping directly to UI updates.

---

## 🎯 What I Learned & Applied

### 1. State Management

Utilized `useState` to keep track of the current step globally for this component tree.

### 2. Event Handling

Defined event handlers such as `handlePrevious` and `handleNext` that mutate the step state via a setter function (`setStep`).

### 3. Conditional React Fragments

Learned how to use empty tags (`<> </>`) to return multiple sibling nodes without polluting the DOM.

### 4. Children Prop

Passed the step message dynamically down as children into the specific Step component for clean composition.

---

## 📁 Structure

```
01-steps/
├── src/
│   ├── components/
│   │   ├── App.js           # Modal parent orchestrator
│   │   ├── Button.js        # Generic UI Button wrapper
│   │   ├── Modal.js         # Wrapper logic for step contents
│   │   ├── Numbers.js       # Iterating indicator nodes
│   │   ├── StepMessage.js   # Wrapper for step children
│   │   └── Steps.js         # Core stepper component
│   ├── index.css            # Styles
│   └── index.js             # Entry Point
└── package.json
```

---

## 🚀 Running the Project

```bash
cd section-05-state-Events\ -and-Forms/01-steps
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

<div align="center">

**🔙 [Back to Section 05 README](../README.md)**

</div>
