import { cn } from "@/utils";
import * as React from "react";
import { ColorSwatch, type ColorSwatchProps } from "react-aria-components";

interface RanguSwatchProps extends ColorSwatchProps {}

const RanguSwatch = React.forwardRef<HTMLDivElement, RanguSwatchProps>(
	({ className, ...rest }, forwardedRef) => {
		return (
			<ColorSwatch
				{...rest}
				ref={forwardedRef}
				className={cn("size-8 rounded-sm drop-shadow-sm", className)}
			/>
		);
	},
);

RanguSwatch.displayName = "Rangu.Swatch";

export { RanguSwatch, type RanguSwatchProps };
