import { defineConfig } from "tsup";

export default defineConfig({
	name: "rangu",
	entry: ["src/index.ts"],
	format: ["esm"],
	outDir: "dist",
	clean: true,
	sourcemap: true,
	dts: true,
	shims: true,
	injectStyle: true,
	treeshake: true,
});
