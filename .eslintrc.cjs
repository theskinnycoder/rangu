const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
		"plugin:prettier/recommended",
		"plugin:storybook/recommended",
	],
	plugins: ["only-warn", "react-refresh"],
	globals: {
		React: true,
		JSX: true,
	},
	env: {
		browser: true,
		es2020: true,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	ignorePatterns: [
		".*.js",
		"node_modules/",
		"dist/",
		"postcss.config.cjs",
		".eslintrc.cjs",
	],
	overrides: [
		// Force ESLint to detect .tsx files
		{ files: ["*.js?(x)", "*.ts?(x)"] },
	],
	rules: {
		"react-refresh/only-export-components": [
			"off",
			{ allowConstantExport: true },
		],
		"prettier/prettier": "error",
	},
	parserOptions: {
		ecmaVersion: "latest",
		ecmaFeatures: {
			jsx: true,
		},
	},
};
