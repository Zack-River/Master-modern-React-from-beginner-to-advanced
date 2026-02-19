# Travel Packing List App

## 📋 Overview

A comprehensive real-world scenario application focusing on managing large structured arrays in React state. The app builds interactive, controlled HTML forms and sorts complex lists derived from that data.

---

## 🎯 What I Learned & Applied

### 1. Fully Controlled Inputs
- Syncing text strings and dropdown numbers natively to React components, enforcing a Single Source of Truth for form payloads.
```javascript
<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
```

### 2. Form Submissions
- Hijacking standard HTML `onSubmit` events using `e.preventDefault()`.
- Grouping controlled input state variables into single Object packages suitable for parent components.

### 3. State Array Mutations
- Safely handling arrays inside React state strictly without mutation.
- Using Javascript functional iteration (`.map()`, `.filter()`) to add and delete List elements locally.

### 4. Advanced Array Sorting
- Leveraging derived state variables to render sorted UI nodes:
```javascript
let sortedItems;
if (sortBy === "input") sortedItems = items;
if (sortBy === "description") sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
```

---

## 📁 Project Structure

```
02-travel-list/
├── src/
│   ├── App.js        # Core handlers for adding, deleting, lifting state
│   ├── Form.js       # The "Add Item" Controlled Sub-Component
│   ├── PackingList.js# Renders and maps Item outputs
│   └── Item.js       # Atomic level data block 
└── package.json
```

---

## 🚀 Running the Project

```bash
cd "section-05-state-Events -and-Forms/02-travel-list"
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] HTML Form Event Control (`onSubmit`, `e.preventDefault`)
- [x] Lifting State Up
- [x] Sorting & Filtering Arrays cleanly
- [x] Derived State tracking properties 

---

<div align="center">

**🔙 [Back to Section 05](../README.md)** • **🔙 [Back to Main Repository](../../../README.md)**

</div>
