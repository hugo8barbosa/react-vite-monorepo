import React from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { Card, getRandomCity } from "react-vite-monorepo-shared";

function App() {
    return (
        <div className="App">
            <div>
                <img src="/vite.svg" className="logo vite" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h2>Vite | React | React Native</h2>
            <div className="card">
                <Card text={getRandomCity()} />
            </div>
        </div>
    );
}

export default App;
