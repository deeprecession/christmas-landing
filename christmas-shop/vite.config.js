import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/deeprecession-JSFE2024Q4/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"), // First page (the main page)
                gifts: resolve(__dirname, "gifts.html"), // Second page
            },
        },
    },
});
