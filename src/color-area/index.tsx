import { cn } from "@/utils";
import * as React from "react";
import {
	ColorArea,
	ColorThumb,
	type ColorAreaProps,
} from "react-aria-components";

interface RanguColorAreaProps
	extends Omit<ColorAreaProps, "xChannel" | "yChannel" | "colorSpace"> {}

const RanguColorArea = React.forwardRef<HTMLDivElement, RanguColorAreaProps>(
	(props, ref) => {
		return (
			<ColorArea
				{...props}
				colorSpace="hsb"
				xChannel="saturation"
				yChannel="brightness"
				ref={ref}
				className={cn("relative size-52 shrink-0 rounded-lg")}
			>
				<ColorThumb
					className={cn(
						"size-5 rounded-full focus-visible:size-6",
						"data-[dragging=true]:size-6",
						"duration-300 ease-in-out",
						"shadow-2xl shadow-slate-800 dark:shadow-slate-100",
						"ring-2 ring-slate-50 ring-offset-2 ring-offset-slate-950 dark:ring-slate-950 dark:ring-offset-slate-50",
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
