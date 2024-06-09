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
			className={cn("min-w-[10.5rem] cursor-ew-resize", className)}
			ref={forwardedRef}
		>
			{/* Track */}
			<SliderTrack
				className={cn("group h-3 rounded-medium shadow-alpha")}
				style={({ defaultStyle }) => ({
					background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 12px 12px`,
				})}
			>
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
});

RanguAlphaSlider.displayName = "Rangu.AlphaSlider";

export { RanguAlphaSlider, type RanguAlphaSliderProps };
