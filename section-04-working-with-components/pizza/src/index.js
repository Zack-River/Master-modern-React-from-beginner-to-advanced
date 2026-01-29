import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js";
import "./index.css";
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header(){
    // const headerTitleStyle = {
    //     textAlign: "center" , 
    //     color: "red", 
    //     fontSize: "48px",
    //     fontWeight: "bold",
    //     textTransform: "uppercase",
    // };

    // return <h1 style={headerTitleStyle}>Fast React Pizza Co.</h1>;
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu(){
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {
                numPizzas > 0 ? (
                    <>
            <p>Choose from our selection of fresh pizzas</p>
            <ul className="pizzas">
                {pizzas.map((pizza) => {
                    return <Pizza pizzaObject={pizza} key={pizza.name}/>
                })}
            </ul>
                    </>
                ) : (
                    <p>We're still working on our menu. Please come back later :)</p>
                )
            }
        </main>
    );
}


function Pizza({pizzaObject}) {
    // if (pizzaObject.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
            <img src={`/pizzas/${pizzaObject.name.toLowerCase()}.jpg`} alt={`Pizza ${pizzaObject.name}`} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}$</span>
            </div>
        </li>
    );
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    const message = isOpen ? `We're open until ${closeHour}:00. Come visit us or order online!` : `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`;

    return (
        <footer className="footer">
            <Order message={message}/>
        </footer>
    );
}

function Order({message}){
    return(
        <section className="order">
            <p>{message}</p>
            <button className="btn">Order now</button>
        </section>
    )
}

// function Footer(){
//     const hour = new Date().getHours();
//     const openHour = 12;
//     const closeHour = 22;
//     const isOpen = hour >= openHour && hour <= closeHour;
//     const message = isOpen ? "We're currently open!" : "Sorry we're closed currently :(";
    
//     return React.createElement("footer", null, [
//     createElement(
//         "p",
//         null,
//         message
//     ),
//     createElement(
//         "p",
//         null,
//         `Work hours: from ${openHour}:00 to ${closeHour}:00`
//     ), 
//     createElement(
//         "p",
//         null,
//         `© ${new Date().getFullYear()} Fast React Pizza Co. All rights reserved.`
//     )])
// }

// React v18
// strict mode renders all components twice to check for errors
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, document.getElementById("root"));