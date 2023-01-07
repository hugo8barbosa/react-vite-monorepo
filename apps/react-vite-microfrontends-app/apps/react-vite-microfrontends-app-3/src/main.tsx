import { createBrowserHistory } from "history";

import("./bootstrap").then(({ mount }) => {
    const localRoot = document.getElementById("root-app3");
    const browserHistory = createBrowserHistory();

    mount({
        mountPoint: localRoot!,
        historyStrategy: browserHistory,
    });
});
