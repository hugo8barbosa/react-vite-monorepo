import { createBrowserHistory } from "history";
import "./index.css";
import("./bootstrap").then(({ mount }) => {
    const localRoot = document.getElementById("root-app2");
    const browserHistory = createBrowserHistory();

    mount({
        mountPoint: localRoot!,
        historyStrategy: browserHistory,
    });
});
