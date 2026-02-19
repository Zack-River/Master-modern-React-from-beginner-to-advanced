# Section 05: State, Events, and Forms

## 📋 Overview

In this section, we deeply explore **interactivity** in React. We learn how to manage dynamic state with the `useState` hook, handle user interactions through synthetic events, and build fully controlled HTML forms.

---

## 🎯 Learning Objectives

- Working interactively with the `useState` hook.
- Handling events natively via synthetic events (`onClick`, `onChange`, `onSubmit`).
- Building controlled components and forms in React.
- State lifting and derived state.
- Component composition.

---

## 📁 Project Structure

```
section-05-state-Events -and-Forms/
├── 01-steps/                # Interactive stepper
├── 02-travel-list/          # Complex form and list app
└── README.md
```

---

## 🔑 Key Concepts

### State in React
- State is data that changes over time.
- React reacts to state changes by re-rendering the component.
- Mutating state directly is restricted; you must use setter functions.

### Controlled Elements
- Linking value attributes of HTML inputs right to React State.
- Enables single source of truth for UI validation.

### Lifting State Up
- Moving state to the nearest common ancestor of components that need it.

---

## 🚀 Running the Projects

```bash
cd section-05-state-Events -and-Forms/01-steps
npm install
npm start
```
*And repeat for `02-travel-list`.*

---

<div align="center">

**⬅️ [Section 04](../section-04-working-with-components)** • **🔙 [Main Repository](../README.md)** 

</div>
