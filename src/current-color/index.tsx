import { cn } from "@/utils";
import * as React from "react";
import { ColorSwatch, type ColorSwatchProps } from "react-aria-components";

interface RanguCurrentColorProps extends ColorSwatchProps {}

const RanguCurrentColor = React.forwardRef<
	HTMLDivElement,
	RanguCurrentColorProps
>(({ className, ...rest }, forwardedRef) => {
	return (
		<ColorSwatch
			{...rest}
			ref={forwardedRef}
			className={cn("size-14 rounded-lg drop-shadow-sm", className)}
		/>
	);
});

RanguCurrentColor.displayName = "Rangu.CurrentColor";

export { RanguCurrentColor, type RanguCurrentColorProps };
