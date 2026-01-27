# Section 02: First Look
## 01. why do frameworks like react exist?
### The Problem (web Pages)
- all the websites were rendered on the server
- the server sends the html to the client
- the client displays the html
- if the user clicks a button, the client sends a request to the server
- the server sends the html to the client
- the client displays the html
- this was slow and inefficient
- keeping a ui in sync with the data was hard
- enforce a certain structure and organization of the code was hard

### The Solution (web Apps)
- client side rendering
- the client sends a request to the server
- the server sends the html to the client
- the client displays the html
- if the user clicks a button, the app handles it on the client side
- each piece of data is a state
- frameworks like react help us keep the ui in sync with the data
- frameworks like react enforce a certain structure and organization of the code
- frameworks like react help us build complex user interfaces
- give consistence way to build apps


## 02. React vs Vanilla JS
### React
- declarative
- component based
- virtual dom
- efficient
- easy to maintain
- easy to debug
- easy to test
- easy to scale
- easy to deploy
- easy to maintain
- easy to debug
- easy to test
- easy to scale
- easy to deploy

### Vanilla JS
- imperative
- function based
- real dom
- less efficient
- hard to maintain
- hard to debug
- hard to test
- hard to scale
- hard to deploy
- hard to maintain
- hard to debug
- hard to test
- hard to scale
- hard to deploy

### why react?
- rendering components is easy based on the state
- keep the ui in sync with the data is easy when state changes
- render and re-render components is easy

### react with vanilla js
```js
function App() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(function () {
        setInterval(function () {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);
    const name = "Zack";
    return React.createElement(
        "header",
        null,
        `Hello ${name} time now is: ${time}`,
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
```