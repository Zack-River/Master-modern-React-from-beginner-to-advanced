# Challenge #03: Flash Cards

## 📋 Overview

This challenge involves iterating over an array of questions using `.map()` and displaying them as interactive flashcards. Clicking a flashcard reveals the answer by changing the component's state.

---

## 🎯 What I Learned & Applied

### 1. Conditional Rendering based on State

Mapping state selections to UI updates:

```javascript
const [selectedId, setSelectedId] = useState(null);

function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
}
```

**Key insight:** By simply holding the ID of the clicked element in `selectedId`, we can dynamically toggle the class names and content of a component.

---

### 2. List Mapping & Keys

```javascript
<div className="flashcards">
  {questions.map((q) => (
    <div
      key={q.id}
      onClick={() => handleClick(q.id)}
      className={q.id === selectedId ? "selected" : ""}
    >
      <p>{q.id === selectedId ? q.answer : q.question}</p>
    </div>
  ))}
</div>
```

**Key insight:** Using a unique `key` ensures React efficiently updates the tree when items are manipulated. Setting conditional classnames (`selected`) allows for CSS rule applications.

---

## 📁 Project Structure

```
ch-03-flash-cards/
├── src/
│   ├── App.js        # Main FlashCards Component and question data
│   ├── index.js      # Entry Point
│   └── index.css     # Clean grid styling for cards
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

- [x] Managing `selectedId` state
- [x] Conditional CSS class applications
- [x] Conditional rendering of text based on state variables
- [x] Efficient `.map()` rendering with unique keys

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
