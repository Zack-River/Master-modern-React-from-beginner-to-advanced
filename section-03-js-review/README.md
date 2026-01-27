# Section 03: JavaScript Review

## 📋 Overview

A comprehensive review of **modern JavaScript (ES6+)** concepts essential for React development. This section covers destructuring, operators, array methods, and immutable data patterns.

---

## 🎯 Learning Objectives

- Master object and array destructuring
- Understand spread and rest operators
- Use template literals for string interpolation
- Apply ternary and logical operators
- Write arrow functions
- Work with array methods (map, filter, reduce, sort)
- Understand mutable vs immutable operations

---

## 📁 Project Structure

```
section-03-js-review/
├── script.js      # Book data and utility functions
├── index.js       # Basic JS concepts demonstrations
├── arrays.js      # Array methods and immutable operations
├── package.json   # ES module configuration
└── README.md
```

---

## 🔑 Key Concepts Learned

### Object Destructuring
```javascript
const { title, author, genres, pages } = book;
```

### Array Destructuring with Rest
```javascript
const [first, second, ...rest] = genres;
```

### Spread Operator
```javascript
// Arrays
const newGenres = [...genres, "new genre"];

// Objects
const updatedBook = { ...book, pages: 1200 };
```

### Template Literals
```javascript
const summary = `${title} was written by ${author}`;
```

### Ternary Operator
```javascript
const status = pages > 1000 ? "long" : "short";
```

### Arrow Functions
```javascript
const getSummary = (title, author) => `${title} by ${author}`;
```

### Short-Circuit Evaluation
| Expression | Returns |
|------------|---------|
| `falsy && value` | `falsy` |
| `truthy && value` | `value` |
| `falsy \|\| value` | `value` |
| `truthy \|\| value` | `truthy` |

**Falsy values:** `0`, `""`, `null`, `undefined`, `false`

### Optional Chaining
```javascript
book?.moviePublicationDate  // undefined if book is null/undefined
```

### Nullish Coalescing
```javascript
value ?? "default"  // Only triggers on null/undefined, not 0 or ""
```

---

## 🔄 Array Methods

### map - Transform elements
```javascript
const titles = books.map(book => book.title);
```

### filter - Select elements
```javascript
const longBooks = books.filter(book => book.pages > 500);
```

### reduce - Accumulate values
```javascript
const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
```

### Chaining Methods
```javascript
const result = books
    .filter(b => b.pages > 500)
    .filter(b => b.hasMovieAdaptation)
    .map(b => b.title);
```

---

## 🔒 Immutable Operations

| Operation | Mutable | Immutable |
|-----------|---------|-----------|
| **Add** | `arr.push(x)` | `[...arr, x]` |
| **Remove** | `arr.splice(i, 1)` | `arr.filter(e => e !== x)` |
| **Update** | `arr[i] = x` | `arr.map(e => e === old ? new : e)` |
| **Sort** | `arr.sort()` | `arr.slice().sort()` |

> **Rule of Thumb:**
> - Use `filter` when changing array size
> - Use `map` when changing values only

---

## ⏳ Async JavaScript

### Promises with .then()
```javascript
fetch("https://api.github.com/users/github")
    .then(response => response.json())
    .then(data => console.log(data));
```

### Async/Await (Modern Approach)
```javascript
async function fetchUser() {
    const response = await fetch("https://api.github.com/users/github");
    const data = await response.json();
    console.log(data);
}
fetchUser();
```

### Async/Await with Error Handling
```javascript
async function fetchUserWithErrorHandling() {
    try {
        const response = await fetch("https://api.github.com/users/github");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
```

> **Key Points:**
> - `async` functions always return a Promise
> - `await` pauses execution until Promise resolves
> - Always check `response.ok` for HTTP errors
> - Use `try/catch` for error handling

---

## 🚀 Running the Code

```bash
cd section-03-js-review
npm install
node index.js    # Run basic concepts
node arrays.js   # Run array methods demo
```

---

## ✅ Section Complete