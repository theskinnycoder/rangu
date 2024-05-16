import { useRangu } from "@/hooks/use-rangu";
import { cn } from "@/utils";
import * as React from "react";
import {
	ColorSwatch,
	ColorSwatchPicker,
	ColorSwatchPickerItem,
	parseColor,
	type ColorSwatchPickerProps,
} from "react-aria-components";

interface RanguSwatchPickerProps
	extends Omit<
		ColorSwatchPickerProps,
		"value" | "defaultValue" | "onChange" | "layout" | "children"
	> {
	colors: Array<string>;
}

const RanguSwatchPicker = React.forwardRef<
	HTMLDivElement,
	RanguSwatchPickerProps
>(({ className, colors, ...rest }, forwardedRef) => {
	const { outputFormat } = useRangu();

	if (!colors || colors.length === 0) {
		throw new Error("Rangu.SwatchPicker: `colors` prop must not be empty");
	}

	if (colors.length > 12) {
		throw new Error(
			"Rangu.SwatchPicker: `colors` prop must not have more than 12 colors",
		);
	}

	const transformedColors = colors.map((color) =>
		parseColor(color).toFormat(outputFormat),
	);

	return (
		<ColorSwatchPicker
			{...rest}
			ref={forwardedRef}
			className={cn(
				"flex h-14 max-w-36 flex-wrap items-center justify-center gap-x-1 gap-y-1",
				className,
			)}
		>
			{transformedColors.map((color) => (
				<ColorSwatchPickerItem
					key={color.toString(outputFormat)}
					color={color}
					className={cn(
						"size-5 shrink-0 rounded-[4px] border-none shadow-sm shadow-slate-200 outline-none ring-0",
						"data-[pressed=true]:scale-90",
						"transition-all duration-300 ease-in-out",
					)}
					style={{
						backgroundColor: color.toString(outputFormat),
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
