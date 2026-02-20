# Project: Travel List

## 📋 Overview

This is the flagship project for Section 05. The Travel List is a dynamic packing list tool where users can input items, view them, sort them through varying attributes, toggle them as packed, and delete them.

---

## 🎯 What I Learned & Applied

### 1. Controlled Elements & Form Submission

Linking inputs directly to React state so forms have a single source of truth when submitting data.

```javascript
<form onSubmit={handleSubmit}>
  <input value={description} onChange={(e) => setDescription(e.target.value)} />
</form>
```

### 2. Passing Handlers through Props

Building complex trees wherein the `App` maintains the `items` state, but children such as `Form` and `Item` execute actions by receiving specific custom handlers `onAddItem`, `onDeleteItem`, etc.

### 3. Derived State and Array Methods

Sorting or filtering lists dynamically without redefining state variables. Computing items left to pack dynamically from `items.filter`.

### 4. Controlled State with Select Fields

Using `<select>` tags to manage dynamic sorting rules and triggering array sorts before re-rendering.

---

## 📁 Structure

```
02-travel-list/
├── src/
│   ├── components/
│   │   ├── App.js           # Core App holding Items state
│   │   ├── Form.js          # Add Item Form
│   │   ├── Item.js          # Independent Item node
│   │   ├── Logo.js          # Standard Header
│   │   ├── PackingList.js   # Mapping wrapper with sort
│   │   └── Stats.js         # Derived footer logic
│   ├── index.css            # Styles
│   └── index.js             # Entry Point
└── package.json
```

---

## 🚀 Running the Project

```bash
cd section-05-state-Events\ -and-Forms/02-travel-list
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

<div align="center">

**🔙 [Back to Section 05 README](../README.md)**

</div>
