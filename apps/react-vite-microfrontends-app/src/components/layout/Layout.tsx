import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Nav from "../nav";

export function Layout() {
    return (
        <div className="App">
            <Nav />
            <div className="shell-content">
                <Outlet />
            </div>
        </div>
    );
}
