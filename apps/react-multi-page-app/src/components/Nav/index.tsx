import React from "react";
import "./style.css";

interface NavProps {
    title: string;
    active: string;
}

const Nav = ({ title, active }: NavProps) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="navigation">
                <a className={`main ${active == "main" ? "active" : ""}`} href={`/`}>
                    <span>🎾</span>
                    <span>Main</span>
                </a>
                <a className={`app1 ${active == "app1" ? "active" : ""}`} href={`/apps/react-multi-page-app-1/`}>
                    <span>🎃</span>
                    <span>App 1</span>
                </a>
                <a className={`app2 ${active == "app2" ? "active" : ""}`} href={`/apps/react-multi-page-app-2/`}>
                    <span>🐙</span>
                    <span>App 2</span>
                </a>
            </div>
        </>
    );
};

export default Nav;
