import { useRangu } from "@/hooks/use-rangu";
import { cn } from "@/utils";
import * as React from "react";
import {
	ColorArea,
	ColorThumb,
	type ColorAreaProps,
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
		const { value, onChange } = useRangu();

		return (
			<ColorArea
				{...rest}
				colorSpace="hsb"
				xChannel="saturation"
				yChannel="brightness"
				value={value}
				onChange={onChange}
				ref={forwardedRed}
				className={cn("relative size-52 shrink-0 rounded-lg", className)}
			>
				<ColorThumb
					className={cn(
						"size-5 rounded-full",
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
			</ColorArea>
		);
	},
);

RanguColorArea.displayName = "Rangu.ColorArea";

export { RanguColorArea, type RanguColorAreaProps };
