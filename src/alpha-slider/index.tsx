import { cn } from "@/utils";
import * as React from "react";
import {
	ColorSlider,
	ColorThumb,
	SliderTrack,
	type ColorSliderProps,
} from "react-aria-components";

interface RanguAlphaSliderProps
	extends Omit<ColorSliderProps, "channel" | "orientation"> {}

const RanguAlphaSlider = React.forwardRef<
	HTMLDivElement,
	RanguAlphaSliderProps
>(({ className, ...rest }, forwardedRef) => {
	return (
		<ColorSlider
			{...rest}
			channel="alpha"
			orientation="horizontal"
			className={cn("w-52", "cursor-ew-resize", className)}
			ref={forwardedRef}
		>
			{/* Track */}
			<SliderTrack
				className={cn(
					"group h-4 rounded-full shadow-[inset_0_0_2px_0.01px] shadow-slate-500",
				)}
				style={({ defaultStyle }) => ({
					background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
				})}
			>
				{/* Thumb */}
				<ColorThumb
					className={cn(
						"top-1/2 size-5 rounded-full focus-visible:size-6",
						"data-[dragging=true]:size-6",
						"duration-300 ease-in-out",
						"shadow-2xl shadow-slate-800 dark:shadow-slate-100",
						"ring-2 ring-slate-50 ring-offset-2 ring-offset-slate-950 dark:ring-slate-950 dark:ring-offset-slate-50",
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
