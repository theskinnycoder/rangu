import { cn } from "@/utils";
import * as React from "react";
import {
	ColorSlider,
	ColorThumb,
	SliderTrack,
	type ColorSliderProps,
} from "react-aria-components";

interface RanguHueSliderProps
	extends Omit<ColorSliderProps, "channel" | "orientation"> {}

const RanguHueSlider = React.forwardRef<HTMLDivElement, RanguHueSliderProps>(
	({ className, ...rest }, forwardedRef) => {
		return (
			<ColorSlider
				{...rest}
				channel="hue"
				orientation="horizontal"
				className={cn("max-w-[300px]", "cursor-ew-resize", className)}
				ref={forwardedRef}
			>
				{/* Track */}
				<SliderTrack className={cn("group h-4 rounded-full drop-shadow-sm")}>
					{/* Thumb */}
					<ColorThumb
						className={cn(
							"top-1/2 size-5 rounded-full focus-visible:size-6",
							"shadow-2xl shadow-slate-800 dark:shadow-slate-100",
							"ring-2 ring-slate-50 ring-offset-2 ring-offset-slate-950 dark:ring-slate-950 dark:ring-offset-slate-50",
						)}
					/>
				</SliderTrack>
			</ColorSlider>
		);
	},
);

RanguHueSlider.displayName = "Rangu.HueSlider";

export { RanguHueSlider, type RanguHueSliderProps };
