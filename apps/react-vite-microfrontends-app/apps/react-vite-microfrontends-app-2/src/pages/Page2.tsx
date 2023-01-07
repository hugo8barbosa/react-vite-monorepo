import React from "react";
import { Link } from "react-router-dom";
import { Card, getRandomCity } from "react-vite-monorepo-shared";

export function Page2() {
    return (
        <>
            <h2>Microfrontend 2.2</h2>
            <div className="card">
                <Card text={getRandomCity()} />
            </div>
            <Link className="linkTo" to="/page-1">
                Go to page 1
            </Link>
        </>
    );
}
