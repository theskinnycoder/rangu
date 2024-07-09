import { cn, getContrastColor } from "@/utils";
import * as React from "react";
import {
	ColorSwatch,
	ColorSwatchPicker,
	ColorSwatchPickerItem,
	type ColorSwatchPickerProps,
	parseColor,
} from "react-aria-components";

interface RanguSwatchPickerProps
	extends Omit<
		ColorSwatchPickerProps,
		"value" | "defaultValue" | "onChange" | "layout" | "children"
	> {
	/**
	 * An array of color strings.
	 *
	 * @example
	 * ```tsx
	 * <Rangu.SwatchPicker
	 * 	colors={[
	 * 		"#A00",
	 * 		"#f80",
	 * 		"#080",
	 * 		"#08f",
	 * 		"#088",
	 * 		"#008",
	 * 		"#ff0",
	 * 		"#0f0",
	 * 		"#0ff",
	 * 		"#00f",
	 * 		"#f0f",
	 * 		"#000",
	 * 	]}
	 * />
	 * ```
	 *
	 * NOTE: The `colors` prop must not be empty and must not have more than 12 colors.
	 */
	colors: Array<string>;
}

const RanguSwatchPicker = React.forwardRef<
	HTMLDivElement,
	RanguSwatchPickerProps
>(({ className, colors, ...rest }, forwardedRef) => {
	if (!colors || colors.length === 0) {
		throw new Error("Rangu.SwatchPicker: `colors` prop must not be empty");
	}

	const transformedColors = colors.map((color) => parseColor(color));

	return (
		<ColorSwatchPicker
			{...rest}
			ref={forwardedRef}
			className={cn(
				"rng-grid rng-h-12 rng-max-w-52 rng-items-center rng-justify-center rng-gap-2 rng-grid-cols-9",
				className,
			)}
		>
			{transformedColors.map((color) => (
				<ColorSwatchPickerItem
					key={color.toString()}
					color={color}
					className={cn(
						"rng-size-4 rng-shrink-0 rng-rounded-small rng-border-0 rng-outline-none rng-ring-0",
						"data-[pressed=true]:rng-scale-90",
						"focus-visible:rng-outline-2 focus-visible:rng-outline-offset-1 focus-visible:rng-outline-accent",
						"rng-transition-transform rng-duration-300 rng-ease-in-out",
					)}
					style={{
						boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 0px 1px inset",
						backgroundColor: color.toString("rgba"),
						borderColor: getContrastColor(color.toString("rgba")),
					}}
				>
					<ColorSwatch />
				</ColorSwatchPickerItem>
			))}
		</ColorSwatchPicker>
	);
});

RanguSwatchPicker.displayName = "Rangu.SwatchPicker";

export { RanguSwatchPicker, type RanguSwatchPickerProps };
