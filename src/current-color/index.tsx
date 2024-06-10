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
				"size-12 rounded-small shadow-alpha",
				"transition-colors duration-300 ease-in-out",
				className,
			)}
		/>
	);
});

RanguCurrentColor.displayName = "Rangu.CurrentColor";

export { RanguCurrentColor, type RanguCurrentColorProps };
