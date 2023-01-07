import React, { useEffect, useRef } from "react";
import { app2RoutingPrefix, shellBrowserHistory } from "../../routing/constants";
import { useNavigate } from "react-router-dom";

// @ts-expect-error
import { mount } from "app2/App";

const app2Basename = `/${app2RoutingPrefix}`;

const App2 = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Listen to navigation events dispatched inside app2 mfe.
        const app2NavigationEventHandler = (event: Event) => {
            const pathname = (event as CustomEvent<string>).detail;
            const newPathname = `${app2Basename}${pathname}`;
            if (newPathname === shellBrowserHistory.location.pathname) {
                return;
            }
            navigate(newPathname);
        };
        window.addEventListener("[app2] navigated", app2NavigationEventHandler);

        // Listen to navigation events in shell app to notifify app2 mfe.
        const unlistenHistoryChanges = shellBrowserHistory.listen(({ location }) => {
            if (location.pathname.startsWith(app2Basename)) {
                window.dispatchEvent(
                    new CustomEvent("[shell] navigated", {
                        detail: location.pathname.replace(app2Basename, ""),
                    })
                );
            }
        });

        mount({
            mountPoint: wrapperRef.current!,
            initialPathname: shellBrowserHistory.location.pathname.replace(app2Basename, ""),
        });

        return () => {
            window.removeEventListener("[app2] navigated", app2NavigationEventHandler);
            unlistenHistoryChanges();
        };
    }, [navigate]);

    return <div ref={wrapperRef} />;
};

export default App2;
