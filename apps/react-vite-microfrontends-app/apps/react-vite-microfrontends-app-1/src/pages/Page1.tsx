import React from "react";
import { Link } from "react-router-dom";
import { Card, getRandomCity } from "react-vite-monorepo-shared";

export function Page1() {
    return (
        <>
            <h2>Microfrontend 1.1</h2>
            <div className="card">
                <Card text={getRandomCity()} />
            </div>
            <Link className="linkTo" to="/page-2">
                Go to page 2
            </Link>
        </>
    );
}
