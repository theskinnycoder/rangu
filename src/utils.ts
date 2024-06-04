import { type ClassValue, clsx } from "clsx";
import { parseColor } from "react-aria-components";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

// Function to calculate luminance
const getLuminance = (r: number, g: number, b: number) => {
	const a = [r, g, b].map((v) => {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0]! * 0.2126 + a[1]! * 0.7152 + a[2]! * 0.0722;
};

// Function to calculate a contrast color
const getContrastColor = (color: string) => {
	// Convert hex color to RGB
	const rgb = parseColor(color).toFormat("rgb");

	if (!rgb) {
		throw new Error("Invalid color format");
	}

	// Calculate luminance
	const red = rgb.getChannelValue("red");
	const green = rgb.getChannelValue("green");
	const blue = rgb.getChannelValue("blue");
	const lum = getLuminance(red, green, blue);

	// Return black or white based on luminance
	return lum > 0.179 ? "#0f172a" : "#3b82f6";
};

export { cn, getContrastColor, getLuminance };
