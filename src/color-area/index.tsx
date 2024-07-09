import { cn } from "@/utils";
import * as React from "react";
import {
	ColorArea,
	type ColorAreaProps,
	ColorThumb,
} from "react-aria-components";

interface RanguColorAreaProps
	extends Omit<
		ColorAreaProps,
		| "xChannel"
		| "yChannel"
		| "xName"
		| "yName"
		| "colorSpace"
		| "value"
		| "defaultValue"
		| "onChange"
		| "onChangeEnd"
		| "slot"
	> {}

const RanguColorArea = React.forwardRef<HTMLDivElement, RanguColorAreaProps>(
	({ className, ...rest }, forwardedRed) => {
		return (
			<ColorArea
				{...rest}
				colorSpace="hsb"
				xChannel="saturation"
				yChannel="brightness"
				ref={forwardedRed}
				className={cn(
					"rng-relative rng-min-w-60 rng-min-h-60 rng-size-full rng-aspect-square rng-shrink-0 rng-rounded-none",
					className,
				)}
			>
				<ColorThumb
					className={cn(
						"rng-size-3 rng-rounded-full rng-bg-transparent rng-shadow-thumb",
						"data-[dragging=true]:rng-size-3.5",
						"rng-duration-300 rng-ease-in-out",
						"rng-border-2 rng-border-text",
						"data-[focus-visible=true]:rng-size-3.5 data-[focus-visible=true]:rng-ring-accent data-[focus-visible=true]:rng-ring-offset-1 data-[focus-visible=true]:rng-ring-1 data-[focus-visible=true]:rng-ring-offset-text",
					)}
					style={{
						transitionProperty: "width, height",
					}}
				/>
			</ColorArea>
		);
	},
);

RanguColorArea.displayName = "Rangu.ColorArea";

export { RanguColorArea, type RanguColorAreaProps };
