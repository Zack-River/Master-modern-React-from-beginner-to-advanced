# Challenge #03: Flash Cards

## 📋 Overview

The Flash Cards project is a highly visual, interactive web application exploring intermediate aspects of conditional rendering and controlled React classes, built over a stunning glassmorphism interface.

---

## 🎯 What I Learned & Applied

### 1. Conditional Rendering & Classes
- Utilizing conditional ternaries inside template literals to control CSS classes dynamically:
```javascript
className={`card-container ${question.id === selectedId ? "selected" : ""}`}
```

### 2. State-Driven Animations
- Managing a single `selectedId` state to track the active flashcard.
- Coupling the React state with deep CSS 3D Transforms (`rotateY(180deg)`) for smooth card flips.
- Conditionally displaying the question vs. answer without DOM manipulation.

### 3. Glassmorphism CSS Tricks
- Combining `backdrop-filter: blur()`, gradients, and precise opacities to build a premium interface aesthetic.

---

## 📁 Project Structure

```
ch-03-flash-cards/
├── src/
│   ├── App.js        # Card Data, Layout, State, and Logic
│   └── styles.css    # Layout, Glassmorphism, and 3D Transforms
└── package.json
```

---

## 🚀 Running the Project

```bash
cd challenges/ch-03-flash-cards
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Complex structural mapping (`.map()`)
- [x] Dynamic String Template Classes
- [x] React State mapping to 180-degree CSS Flips
- [x] Component restructuring
- [x] Modern UI design implementations

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
