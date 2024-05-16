import { useRangu } from "@/hooks/use-rangu";
import { cn } from "@/utils";
import * as React from "react";
import { ColorSwatch, type ColorSwatchProps } from "react-aria-components";

interface RanguCurrentColorProps
	extends Omit<ColorSwatchProps, "color" | "slot"> {}

const RanguCurrentColor = React.forwardRef<
	HTMLDivElement,
	RanguCurrentColorProps
>(({ className, ...rest }, forwardedRef) => {
	const { value } = useRangu();

	return (
		<ColorSwatch
			{...rest}
			color={value}
			ref={forwardedRef}
			className={cn(
				"size-14 rounded-lg shadow-sm shadow-slate-200",
				"transition-colors duration-300 ease-in-out",
				className,
			)}
		/>
	);
});

RanguCurrentColor.displayName = "Rangu.CurrentColor";

export { RanguCurrentColor, type RanguCurrentColorProps };
