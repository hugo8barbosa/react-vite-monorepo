import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        commonjsOptions: { include: [/shared/, /node_modules/] },
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                "react-multi-page-app-1": resolve(__dirname, "apps/react-multi-page-app-1/index.html"),
                "react-multi-page-app-2": resolve(__dirname, "apps/react-multi-page-app-2/index.html"),
            },
        },
    },
    server: {
        port: 4000,
    },
    resolve: {
        alias: {
            "react-native": "react-native-web",
        },
    },
    optimizeDeps: {
        include: ["react-vite-monorepo-shared"],
    },
});
