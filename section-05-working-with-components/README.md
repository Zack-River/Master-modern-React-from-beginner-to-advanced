# Section 04: Working with Components

## 📋 Overview

This section focuses on **component-based architecture** in React. You'll learn how to create, compose, and organize components by building a Pizza Menu application.

---

## 🎯 Learning Objectives

- Understanding component-based architecture
- Creating reusable React components
- Organizing components in a project
- Working with Create React App structure
- Building real-world UI patterns

---

## 📁 Project Structure

```
section-04-working-with-components/
└── pizza/                    # Pizza Menu React App
    ├── src/
    │   ├── App.js           # Main application component
    │   ├── App.css          # Component styles
    │   ├── index.js         # Entry point with ReactDOM
    │   └── index.css        # Global styles
    ├── public/
    └── package.json
```

---

## 🔑 Key Concepts

### Component-Based Architecture
React applications are built by composing small, reusable components together. Each component:
- Has a single responsibility
- Can be reused throughout the app
- Receives data through props
- Manages its own state (if needed)

### React Entry Point
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### React.StrictMode
- Development-only feature
- Helps identify potential problems
- Renders components twice to catch side effects
- Warns about deprecated APIs

---

## 📦 Project: Pizza Menu

The Pizza Menu app demonstrates:
- Creating a list of pizza items
- Displaying data from a data source
- Styling components
- Building a complete page layout

---

## 🚀 Running the Project

```bash
cd section-05-working-with-components/pizza
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## 🔄 Status: In Progress

This section is currently being worked on. More content and features will be added.
