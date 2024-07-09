import { type Config } from "tailwindcss";

const config = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		 extend: {
      colors: {
        bg: "hsl(var(--rangu-bg))",
        "hover-bg": "hsl(var(--rangu-hover-bg))",
				"dropdown-bg": "hsl(var(--rangu-dropdown-bg))",
				border: "hsl(var(--rangu-border))",
				accent: "hsl(var(--rangu-accent))",
				selected: "hsl(var(--rangu-selected))",
				text: "hsl(var(--rangu-text))",
      },
			boxShadow: {
				thumb: "rgba(0, 0, 0, 0.2) 0px 0px 0px 0.6px",
				alpha: "rgba(0, 0, 0, 0.2) 0px 0px 0px 0.6px inset"
			},
			borderRadius: {
				small: "2px",
				medium: "6px",
				full: "9999px"
			}
    },
	},
	prefix: "rng-",
	important: false,
	plugins: [],
} satisfies Config;

export default config;
