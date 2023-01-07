import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "app1",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/bootstrap.tsx",
            },
        }),
    ],
    build: {
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
        commonjsOptions: { include: [/shared/, /node_modules/] },
    },
    resolve: {
        alias: {
            "react-native": "react-native-web",
        },
    },
    optimizeDeps: {
        include: ["react-vite-monorepo-shared"],
    },
    preview: {
        port: 5001,
    },
    server: {
        port: 5001,
    },
});
