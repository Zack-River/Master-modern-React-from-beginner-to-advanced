# Challenge #01: Developer Card

## 📋 Overview

This challenge applies the component concepts learned in Section 04 to build a personal developer profile card. Here I practiced component composition, props, and list rendering.

---

## 🎯 What I Learned & Applied

### 1. Component Composition

Breaking down UI into a hierarchy of reusable components:

```
App
└── Card
    ├── Avatar
    └── Info
        └── SkillList
            └── Skill (×10)
```

**Key insight:** Each component focuses on one thing. `Avatar` handles the image, `Info` handles text, `SkillList` handles the skills array.

---

### 2. Data-Driven Components

Defining data separately and letting components render it:

```javascript
const developer = {
    name: "Abdallah Wageeh",
    bio: "Software Engineer...",
    skills: ["HTML", "CSS", "JavaScript", "React", ...],
    image: "zack.png"
};
```

**Key insight:** Keeping data separate from components makes the code more maintainable and reusable.

---

### 3. Props Destructuring

Clean syntax for accessing props:

```javascript
// Instead of: function Skill(props) { return <li>{props.name}</li> }

function Skill({ name }) {
    return <li className="skill">{name}</li>;
}
```

**Key insight:** Destructuring in the function parameter makes the code cleaner and shows exactly what props the component expects.

---

### 4. Rendering Lists with .map()

Transforming an array into multiple components:

```javascript
function SkillList() {
    return (
        <ul className="skills-list">
            {developer.skills.map((skill) => (
                <Skill name={skill} key={skill} />
            ))}
        </ul>
    );
}
```

**Key insight:** `.map()` returns a new array of JSX elements. Each element needs a unique `key` prop.

---

### 5. CSS Styling

Custom styling with Google Fonts and modern design:

```css
.card {
    border: 10px solid #5fbaca;
    border-radius: 50px;
    background-color: #5fbaca;
}

.skill {
    background-color: #faf0dd;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
}
```

**Key insight:** Good styling makes components reusable and visually appealing.

---

## 📁 Project Structure

```
ch-01-developer-card/
├── src/
│   ├── index.js      # App, Card, Avatar, Info, SkillList, Skill
│   └── index.css     # Card styling with Gluten font
├── public/
│   └── zack.png      # Profile image
└── package.json
```

---

## 🚀 Running the Project

```bash
cd challenges/ch-01-developer-card
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## ✅ Skills Applied

- [x] Component creation and nesting
- [x] Data separation from UI
- [x] Props passing and destructuring
- [x] List rendering with `.map()`
- [x] Using `key` prop for lists
- [x] CSS styling with custom fonts

---

<div align="center">

**🔙 [Back to Challenges](../README.md)** • **🔙 [Back to Main Repository](../../README.md)**

</div>
