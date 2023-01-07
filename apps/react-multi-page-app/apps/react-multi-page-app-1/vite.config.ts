import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "react-native": "react-native-web",
        },
    },
    optimizeDeps: {
        include: ["react-vite-monorepo-shared"],
    },
    build: {
        commonjsOptions: { include: [/shared/, /node_modules/] },
    },
    server: {
        port: 4001,
    },
});
