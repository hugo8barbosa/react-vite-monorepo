import { createBrowserHistory } from "history";
import "./index.css";
import("./bootstrap").then(({ mount }) => {
    const localRoot = document.getElementById("root-app1");
    const browserHistory = createBrowserHistory();

    mount({
        mountPoint: localRoot!,
        historyStrategy: browserHistory,
    });
});
