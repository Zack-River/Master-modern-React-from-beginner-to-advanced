import react from "react";
import reactDom from "react-dom/client";
import "./index.css";

const developer = {
    name: "Abdallah Wageeh",
    bio: "Abdallah Wageeh(Zack River) is a software Engineer specializing in web development and an Esports Gamer who loves challenging himself and passionate about learning new things like (Psychology, Math, Physics, etc) and being uptodate with the latest trends in tech community",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "Nest.js",
        "MongoDB",
        "PostgreSQL",
        "Github",
    ],
    image: "zack.png"
}

function App() {
    return (
        <div className="container">
            <h1 className="title">Developer Card (Challenge #01)</h1>
            <Card />
        </div>
    );
}

function Card() {
    return (
        <div className="card">
            <Avatar />
            <Info />
        </div>
    );
}

function Avatar() {
    return (
        <img src={developer.image} alt={developer.name} />
    );
}

function Info() {
    return (
        <div className="card-info">
            <h2>{developer.name}</h2>
            <p>{developer.bio}</p>
            <SkillList />
        </div>
    );
}

function SkillList() {
    return (
        <ul className="skills-list">
            {developer.skills.map((skill) => (
                <Skill name={skill}/>
            ))}
        </ul>
    );
}

function Skill({name}) {
    return (
        <li className="skill">{name}</li>
    );
}

const root = reactDom.createRoot(document.getElementById("root"));
root.render(
    <react.StrictMode>
        <App />
    </react.StrictMode>
);