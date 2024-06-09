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
		return (
			<ColorSlider
				{...rest}
				channel="hue"
				colorSpace="hsb"
				orientation="horizontal"
				className={cn("min-w-[10.5rem] cursor-ew-resize", className)}
				ref={forwardedRef}
			>
				{/* Track */}
				<SliderTrack className={cn("group h-3 rounded-medium")}>
					{/* Thumb */}
					<ColorThumb
						className={cn(
							"top-1/2 size-3 rounded-full bg-transparent shadow-thumb",
							"data-[dragging=true]:size-3.5",
							"duration-300 ease-in-out",
							"border-2 border-text",
							"data-[focus-visible=true]:size-3.5 data-[focus-visible=true]:ring-accent data-[focus-visible=true]:ring-offset-1 data-[focus-visible=true]:ring-1 data-[focus-visible=true]:ring-offset-text",
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
