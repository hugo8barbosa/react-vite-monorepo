import React, { lazy } from "react";
import { Route, Routes, unstable_HistoryRouter as HistoryRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { app1RoutingPrefix, app2RoutingPrefix, app3RoutingPrefix, shellBrowserHistory } from "./constants";

const App1Lazy = lazy(() => import("../components/pages/App1"));
const App2Lazy = lazy(() => import("../components/pages/App2"));
const App3Lazy = lazy(() => import("../components/pages/App3"));

export function Router() {
    return (
        <HistoryRouter history={shellBrowserHistory}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to={`/${app1RoutingPrefix}`} />} />
                    <Route path={`/${app1RoutingPrefix}/*`} element={<App1Lazy />} />
                    <Route path={`/${app2RoutingPrefix}/*`} element={<App2Lazy />} />
                    <Route path={`/${app3RoutingPrefix}/*`} element={<App3Lazy />} />
                </Route>
            </Routes>
        </HistoryRouter>
    );
}
