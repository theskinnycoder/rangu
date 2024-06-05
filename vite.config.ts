import path from "path";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "rangu",
			formats: ["es"],
			fileName: "index",
		},
		sourcemap: true,
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				preserveModules: false,
			},
		},
	},
	plugins: [
		react(),
		libInjectCss(),
		dts({ copyDtsFiles: true, rollupTypes: true }),
	],
	css: {
		postcss: {
			plugins: [tailwindcss("./tailwind.config.ts"), autoprefixer],
			from: "src/index.css",
			to: "dist/index.css",
		},
	},
});
