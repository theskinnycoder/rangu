import { useRangu } from "@/hooks/use-rangu";
import { cn } from "@/utils";
import * as React from "react";
import {
	ColorSlider,
	ColorThumb,
	SliderTrack,
	type ColorSliderProps,
} from "react-aria-components";

interface RanguHueSliderProps
	extends Omit<
		ColorSliderProps,
		| "channel"
		| "orientation"
		| "colorSpace"
		| "value"
		| "defaultValue"
		| "onChange"
		| "onChangeEnd"
		| "slot"
		| "name"
	> {}

const RanguHueSlider = React.forwardRef<HTMLDivElement, RanguHueSliderProps>(
	({ className, ...rest }, forwardedRef) => {
		const { value, onChange } = useRangu();

		return (
			<ColorSlider
				{...rest}
				channel="hue"
				colorSpace="hsb"
				orientation="horizontal"
				className={cn("w-52", "cursor-ew-resize", className)}
				value={value}
				onChange={onChange}
				ref={forwardedRef}
			>
				{/* Track */}
				<SliderTrack className={cn("group h-4 rounded-full")}>
					{/* Thumb */}
					<ColorThumb
						className={cn(
							"top-1/2 size-5 rounded-full",
							"data-[dragging=true]:size-6",
							"duration-300 ease-in-out",
							"shadow-2xl shadow-slate-800 dark:shadow-slate-100",
							"ring-2 ring-slate-50 ring-offset-2 ring-offset-slate-950 dark:ring-slate-950 dark:ring-offset-slate-50",
							"data-[focus-visible=true]:size-6 data-[focus-visible=true]:ring-blue-500",
						)}
						style={{
							transitionProperty: "width, height",
						}}
					/>
				</SliderTrack>
			</ColorSlider>
		);
	},
);

RanguHueSlider.displayName = "Rangu.HueSlider";

export { RanguHueSlider, type RanguHueSliderProps };
