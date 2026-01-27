# Section 01: Welcome

## 📋 Overview

This section introduces React fundamentals by building a simple **Advice App** that displays random advice and tracks how many pieces of advice the user has read.

---

## 🎯 Learning Objectives

- Setting up a React project with Create React App
- Understanding the project structure
- Writing your first React component
- Using the **useState** hook for state management
- Using the **useEffect** hook for side effects
- Passing data between components with **props**
- Understanding JSX syntax

---

## 📁 Project Structure

```
section-01-Welcome/
└── my-app/              # React app created with create-react-app
    ├── src/
    │   ├── App.js       # Main component with advice logic
    │   ├── style.css    # Component styles
    │   └── index.js     # Entry point
    ├── public/
    └── package.json
```

---

## 🔑 Key Concepts Learned

### App.js - The Main Component
- The main component of a React application
- Can be a functional or class component
- Exported as default value when there's only one component

### useState Hook
```javascript
const [advice, setAdvice] = useState("");
const [count, setCount] = useState(0);
```
- Manages component state
- Returns `[currentValue, setterFunction]`
- Setter is asynchronous and doesn't update immediately
- Can pass a function to access previous state: `setCount((c) => c + 1)`

### useEffect Hook
```javascript
useEffect(function() {
    getAdvice();
}, []); // Empty dependency array = runs once on mount
```
- Handles side effects (data fetching, subscriptions, etc.)
- Runs after component renders
- Dependency array controls when effect re-runs

### JSX Syntax
- Syntax extension for JavaScript
- Allows writing HTML-like code in JavaScript
- Syntactic sugar for `React.createElement()`
- Embed JavaScript expressions with `{curlyBraces}`

### Props
```javascript
function Message(props) {
    return <p>You have read {props.count} pieces of advice</p>;
}
```
- Pass data from parent to child components
- Accessed via the `props` object

---

## 🚀 Running the Project

```bash
cd section-01-Welcome/my-app
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Section Complete
