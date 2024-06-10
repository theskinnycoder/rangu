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
				"grid h-12 max-w-52 items-center justify-center gap-2 grid-cols-9",
				className,
			)}
		>
			{transformedColors.map((color) => (
				<ColorSwatchPickerItem
					key={color.toString()}
					color={color}
					className={cn(
						"size-4 shrink-0 rounded-small border-0 outline-none ring-0",
						"data-[pressed=true]:scale-90",
						"focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent",
						"transition-transform duration-300 ease-in-out",
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
