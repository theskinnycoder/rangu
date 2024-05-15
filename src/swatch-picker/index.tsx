import { cn } from "@/utils";
import * as React from "react";
import {
	ColorSwatch,
	ColorSwatchPicker,
	ColorSwatchPickerItem,
	type Color,
	type ColorSwatchPickerProps,
} from "react-aria-components";

interface RanguSwatchPickerProps extends ColorSwatchPickerProps {
	colors: Array<string | Color>;
}

const RanguSwatchPicker = React.forwardRef<
	HTMLDivElement,
	RanguSwatchPickerProps
>(({ className, colors, ...rest }, forwardedRef) => {
	if (colors.length === 0) {
		throw new Error("RanguSwatchPicker: colors prop must not be empty");
	}

	if (colors.length > 11) {
		throw new Error(
			"RanguSwatchPicker: colors prop must not have more than 11 colors",
		);
	}

	const allColors = [...colors, "rgba(0, 0, 0, 0)"];

	return (
		<ColorSwatchPicker
			{...rest}
			ref={forwardedRef}
			className={cn(
				"flex h-14 max-w-44 flex-wrap items-stretch justify-stretch gap-1",
				className,
			)}
		>
			{allColors.map((color) => (
				<ColorSwatchPickerItem
					key={`${color.toString("rgba")}`}
					color={color}
					className={cn(
						"size-[1.625rem] shrink-0 rounded-md border-none shadow-sm outline-none ring-0",
						"data-[pressed=true]:scale-95",
						"transition-all duration-300 ease-in-out",
					)}
					style={{
						backgroundColor: color.toString("rgba"),
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
