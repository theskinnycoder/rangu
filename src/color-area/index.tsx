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
					"relative min-w-60 min-h-60 size-full aspect-square shrink-0 rounded-none",
					className,
				)}
			>
				<ColorThumb
					className={cn(
						"size-3 rounded-full bg-transparent shadow-thumb",
						"data-[dragging=true]:size-3.5",
						"duration-300 ease-in-out",
						"border-2 border-text",
						"data-[focus-visible=true]:size-3.5 data-[focus-visible=true]:ring-accent data-[focus-visible=true]:ring-offset-1 data-[focus-visible=true]:ring-1 data-[focus-visible=true]:ring-offset-text",
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
