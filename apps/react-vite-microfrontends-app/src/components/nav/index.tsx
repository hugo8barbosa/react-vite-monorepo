import React from "react";
import reactLogo from "../../assets/react.svg";
import { app1RoutingPrefix, app2RoutingPrefix, app3RoutingPrefix } from "../../routing/constants";
import { useLocation } from "react-router-dom";

import "./style.css";

const urls = {
    app1: `/${app1RoutingPrefix}`,
    app2: `/${app2RoutingPrefix}`,
    app3: `/${app3RoutingPrefix}`,
};

const Nav = () => {
    const location = useLocation();
    const { app1, app2, app3 } = urls;
    return (
        <>
            <div>
                <img
                    src={location.pathname.includes(app3) ? "/webpack.svg" : "/vite.svg"}
                    className="logo vite"
                    alt="Vite logo"
                />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <div className="navigation">
                <a className={`app1 ${location.pathname.includes(app1) ? "active" : ""}`} href={app1}>
                    <span>🎾</span>
                    <span>Microfrontend 1</span>
                </a>
                <a className={`app2 ${location.pathname.includes(app2) ? "active" : ""}`} href={app2}>
                    <span>🎃</span>
                    <span>Microfrontend 2</span>
                </a>
                <a className={`app3 ${location.pathname.includes(app3) ? "active" : ""}`} href={app3}>
                    <span>🐙</span>
                    <span>Microfrontend 3</span>
                </a>
            </div>
        </>
    );
};

export default Nav;
