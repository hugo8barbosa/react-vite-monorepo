import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "micro",
            filename: "remoteEntry.js",
            remotes: {
                app1: "http://localhost:5001/assets/remoteEntry.js",
                app2: "http://localhost:5002/assets/remoteEntry.js",
                // @ts-expect-error
                app3: {
                    external: "http://localhost:5003/remoteEntry.js",
                    format: "var",
                },
            },
        }),
    ],
    server: {
        port: 5000,
    },
    preview: {
        port: 5000,
    },
    resolve: {
        alias: {
            "react-native": "react-native-web",
        },
    },
    optimizeDeps: {
        include: ["react-vite-monorepo-shared"],
        exclude: ["app1", "app2", "app3"],
    },
    build: {
        commonjsOptions: { include: [/shared/, /node_modules/] },
        minify: true,
        target: "esnext",
    },
});
