# Challenge #05: Accordion v1

## 📋 Overview

This challenge builds an accordion component to organize grouped content. Clicking on a section uncollapses it while keeping others independent (or toggling them based on implementation).

---

## 🎯 What I Learned & Applied

### 1. Reusable UI Components

Creating an `AccordionItem` that can be mapped multiple times:

```javascript
function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      {/* contents */}
    </div>
  );
}
```

**Key insight:** When each item has its own isolated state (`isOpen`), multiple items can be clicked and opened independently without interfering with the others.

---

### 2. Conditional Rendering for UI Expansion

Using logical `&&` to render content:

```javascript
{isOpen && <div className="content-box">{text}</div>}
```

**Key insight:** Conditional logic simplifies whether a block of UI exists in the DOM. Combined with dynamic classes, it makes for smooth transition effects.

---

## 📁 Project Structure

```
ch-05-accordion-v1/
├── src/
│   ├── Accordion.js      # Wrapper list
│   ├── AccordionItem.js  # Individual drop-down
│   ├── App.js            # Main Component / Data
│   ├── index.js          # Entry Point
│   └── styles.css        # Interactive Accordion styling
└── package.json
```

---

## 🚀 Running the Project

```bash
cd challenges/ch-05-accordion-v1
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Component extraction (`AccordionItem`)
- [x] Localized state management (`isOpen`)
- [x] Logical `&&` UI rendering
- [x] Toggle boolean logic via setting state

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
