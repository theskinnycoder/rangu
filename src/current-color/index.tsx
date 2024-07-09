import { cn } from "@/utils";
import * as React from "react";
import { ColorSwatch, type ColorSwatchProps } from "react-aria-components";

interface RanguCurrentColorProps
	extends Omit<ColorSwatchProps, "color" | "slot"> {}

const RanguCurrentColor = React.forwardRef<
	HTMLDivElement,
	RanguCurrentColorProps
>(({ className, ...rest }, forwardedRef) => {
	return (
		<ColorSwatch
			{...rest}
			ref={forwardedRef}
			className={cn(
				"rng-size-12 rng-rounded-small rng-shadow-alpha",
				"rng-transition-colors rng-duration-300 rng-ease-in-out",
				className,
			)}
		/>
	);
});

RanguCurrentColor.displayName = "Rangu.CurrentColor";

export { RanguCurrentColor, type RanguCurrentColorProps };
