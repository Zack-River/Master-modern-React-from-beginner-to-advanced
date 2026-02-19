# Pizza Menu Component App

## 📋 Overview

The Pizza Menu App is an extensive exercise in component decomposition. We take raw array data containing various pizza metadata and map it into a dynamically structured, fully componentized restaurant menu layout.

---

## 🎯 What I Learned & Applied

### 1. Composition over Inheritance
- Strategically partitioning a main Application into `Header`, `Menu`, and `Footer` components.
- Sub-dividing `Menu` into atomic `Pizza` components.

### 2. Rendering Lists
- Using the standard `Array.prototype.map()` pattern to spin up an array of components based strictly on a data source file.
- Enforcing the requirement of the `key` prop locally for structural integrity.

### 3. Deep Prop Structuring
- Passing entire complex Objects as single props (`pizzaObject={pizza}`) instead of splitting them across 5 individual prop arguments, drastically simplifying the passing layer.

---

## 📁 Project Structure

```
section-04-working-with-components/pizza/
├── src/
│   ├── data.js       # The raw pizza list export array
│   ├── index.js      # All structural functional components
│   └── index.css     # Flexbox layout styles
├── public/pizzas     # Static pizza images
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

## ✅ Skills Applied

- [x] Single-responsibility component layout
- [x] Component mapping
- [x] Object Props vs primitive Props
- [x] Utilizing the `public/` directory for raw resource imagery

---

<div align="center">

**🔙 [Back to Section 04](../README.md)** • **🔙 [Back to Main Repository](../../../README.md)**

</div>
