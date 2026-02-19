# Advice App

## 📋 Overview

The Advice App is the very first React application built in the course. It dynamically fetches random pieces of advice from an external API, keeping a count of how many pieces the user has read.

---

## 🎯 What I Learned & Applied

### 1. Project Initialization
- Using `create-react-app` to set up development.
- Understanding the root DOM node and `index.js`.

### 2. State & Effects
- **useState**: Initialized with empty string and 0 respectively for advice and clicks.
- **useEffect**: Fired exactly *once* when the component mounts to fetch initial advice.

### 3. Fetching Data
Using standard modern `fetch` handling asynchronously inside the component.

---

## 📁 Project Structure

```
my-app/
├── src/
│   ├── App.js      
│   ├── style.css   
│   └── index.js    
├── public/
└── package.json
```

---

## 🚀 Running the Project

```bash
cd section-01-Welcome/my-app
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Basic React App Structure
- [x] Setting up `useState`
- [x] Fetching APIs inside `useEffect`
- [x] Event bindings (`onClick`)
- [x] Prop passing

---

<div align="center">

**🔙 [Back to Section 01](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
