import React, { useEffect, useRef } from "react";
import { app1RoutingPrefix, shellBrowserHistory } from "../../routing/constants";
import { useNavigate } from "react-router-dom";

// @ts-expect-error
import { mount } from "app1/App";

const app1Basename = `/${app1RoutingPrefix}`;

const App1 = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Listen to navigation events dispatched inside app2 mfe.
        const app2NavigationEventHandler = (event: Event) => {
            const pathname = (event as CustomEvent<string>).detail;
            const newPathname = `${app1Basename}${pathname}`;
            if (newPathname === shellBrowserHistory.location.pathname) {
                return;
            }
            navigate(newPathname);
        };
        window.addEventListener("[app1] navigated", app2NavigationEventHandler);

        // Listen to navigation events in shell app to notifify app1 mfe.
        const unlistenHistoryChanges = shellBrowserHistory.listen(({ location }) => {
            if (location.pathname.startsWith(app1Basename)) {
                window.dispatchEvent(
                    new CustomEvent("[shell] navigated", {
                        detail: location.pathname.replace(app1Basename, ""),
                    })
                );
            }
        });

        mount({
            mountPoint: wrapperRef.current!,
            initialPathname: shellBrowserHistory.location.pathname.replace(app1Basename, ""),
        });

        return () => {
            window.removeEventListener("[app1] navigated", app2NavigationEventHandler);
            unlistenHistoryChanges();
        };
    }, [navigate]);

    return <div ref={wrapperRef} />;
};

export default App1;
