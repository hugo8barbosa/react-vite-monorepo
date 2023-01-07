import React from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { Card, getRandomCity } from "react-vite-monorepo-shared";
import Nav from "../../../src/components/Nav";

function App() {
    return (
        <div className="App">
            <div>
                <img src="/vite.svg" className="logo vite" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <Nav title={"Vite | React | Multi Page | App 1"} active={"app1"} />
            <div className="card">
                <Card text={getRandomCity()} />
            </div>
        </div>
    );
}

export default App;
