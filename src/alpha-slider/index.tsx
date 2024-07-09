import { cn } from "@/utils";
import * as React from "react";
import {
	ColorSlider,
	ColorThumb,
	SliderTrack,
	type ColorSliderProps,
} from "react-aria-components";

interface RanguAlphaSliderProps
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

const RanguAlphaSlider = React.forwardRef<
	HTMLDivElement,
	RanguAlphaSliderProps
>(({ className, ...rest }, forwardedRef) => {
	return (
		<ColorSlider
			{...rest}
			channel="alpha"
			orientation="horizontal"
			className={cn("rng-min-w-[10.5rem] rng-cursor-ew-resize", className)}
			ref={forwardedRef}
		>
			{/* Track */}
			<SliderTrack
				className={cn("rng-group rng-h-3 rng-rounded-medium rng-shadow-alpha")}
				style={({ defaultStyle }) => ({
					background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 12px 12px`,
				})}
			>
				{/* Thumb */}
				<ColorThumb
					className={cn(
						"rng-top-1/2 rng-size-3 rng-rounded-full rng-bg-transparent rng-shadow-thumb",
						"data-[dragging=true]:rng-size-3.5",
						"rng-duration-300 rng-ease-in-out",
						"rng-border-2 rng-border-text",
						"data-[focus-visible=true]:rng-size-3.5 data-[focus-visible=true]:rng-ring-accent data-[focus-visible=true]:rng-ring-offset-1 data-[focus-visible=true]:rng-ring-1 data-[focus-visible=true]:rng-ring-offset-text",
						"rng-will-change-transform",
					)}
					style={{
						transitionProperty: "width, height",
					}}
				/>
			</SliderTrack>
		</ColorSlider>
	);
});

RanguAlphaSlider.displayName = "Rangu.AlphaSlider";

export { RanguAlphaSlider, type RanguAlphaSliderProps };
