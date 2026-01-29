# Section 04: Working with Components

## 📋 Overview

This section documents my learning journey building the **Pizza Menu** React application. Here I practiced and understood component-based architecture, props, conditional rendering, and JSX patterns.

---

## 🎯 What I Learned

### 1. Component Creation & Composition

Components are the building blocks of React. I learned to break down UI into reusable pieces:

```javascript
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
```

**Key insight:** Each component has a single responsibility. `Header` handles the title, `Menu` displays pizzas, `Footer` shows open/closed status.

---

### 2. Props - Passing Data to Components

Props allow parent components to pass data to children:

```javascript
// Passing props
<Pizza pizzaObject={pizza} key={pizza.name} />

// Receiving with destructuring
function Pizza({ pizzaObject }) {
    return <h3>{pizzaObject.name}</h3>;
}
```

**Key insight:** Props are read-only. Data flows one way: parent → child.

---

### 3. Rendering Lists with .map()

To render multiple items, use `.map()` to transform data into JSX:

```javascript
{pizzas.map((pizza) => (
    <Pizza pizzaObject={pizza} key={pizza.name} />
))}
```

**Key insight:** Always provide a unique `key` prop when rendering lists. React uses keys to efficiently update the DOM.

---

### 4. Conditional Rendering

Use ternary operators to show/hide content based on conditions:

```javascript
{numPizzas > 0 ? (
    <>
        <p>Choose from our selection</p>
        <ul className="pizzas">...</ul>
    </>
) : (
    <p>We're still working on our menu.</p>
)}
```

**Key insight:** The ternary operator `condition ? true : false` is the React way to conditionally render.

---

### 5. Conditional CSS Classes

Dynamically apply classes based on state:

```javascript
<li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
```

**Key insight:** Template literals (backticks) make it easy to combine static and dynamic class names.

---

### 6. Fragments `<>...</>`

Group elements without adding extra DOM nodes:

```javascript
<>
    <p>Description</p>
    <ul>...</ul>
</>
```

**Key insight:** Fragments let you return multiple elements from a component without wrapper divs.

---

### 7. React 18 Setup

Modern React uses `createRoot` from `react-dom/client`:

```javascript
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

**Key insight:** `StrictMode` renders components twice in development to catch bugs early.

---

### 8. Public Folder & Static Assets

Files in `/public` are served from the root URL:

```javascript
// ❌ Wrong - can't import from outside src/
<img src="../public/pizzas/spinaci.jpg" />

// ✅ Correct - public folder is served at root
<img src="/pizzas/spinaci.jpg" />
```

**Key insight:** The `public/` folder is for static assets. Reference them with absolute paths starting with `/`.

---

## 🔑 Component Hierarchy

```
App
├── Header
│   └── h1 (title)
├── Menu
│   ├── h2 (section title)
│   ├── p (description)
│   └── ul.pizzas
│       └── Pizza (×6)
│           ├── img
│           ├── h3 (name)
│           ├── p (ingredients)
│           └── span (price or "SOLD OUT")
└── Footer
    └── Order
        ├── p (message)
        └── button (order button)
```

---

## 📁 Project Structure

```
section-04-working-with-components/
└── pizza/
    ├── src/
    │   ├── index.js    # All components + React setup
    │   ├── index.css   # Restaurant styling
    │   └── data.js     # Pizza menu data (export default)
    ├── public/
    │   └── pizzas/     # Pizza images
    └── package.json
```

---

## 🚀 Running the Project

```bash
cd section-04-working-with-components/pizza
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Concepts Mastered

- [x] Component creation and composition
- [x] Props and data flow (parent → child)
- [x] Destructuring props
- [x] List rendering with `.map()` and keys
- [x] Conditional rendering with ternary operators
- [x] Dynamic CSS classes
- [x] Fragments `<>...</>`
- [x] React 18 `createRoot` setup
- [x] Public folder asset serving

---

<div align="center">

**⬅️ [Section 03](../section-03-js-review)** • **🔙 [Main Repository](../README.md)** • **➡️ [Section 05](../section-05-working-with-components)**

</div>
