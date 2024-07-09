import { cn } from "@/utils";
import * as React from "react";
import {
	Button,
	ColorPickerStateContext,
	parseColor,
	type ButtonProps,
} from "react-aria-components";
import { ICONS } from "@/icons";

interface RanguEyeDropperProps extends ButtonProps {}

const RanguEyeDropper = (props: RanguEyeDropperProps) => {
	const { className, ...rest } = props;
	const context = React.useContext(ColorPickerStateContext);

	if (!context) {
		throw new Error(
			"`Rangu.EyeDropper` must be used within a `Rangu` provider component.",
		);
	}

	if (typeof EyeDropper === "undefined") {
		throw new Error("EyeDropper is not supported in your browser.");
	}

	return (
		<Button
			{...rest}
			aria-label="Eye dropper"
			onPress={() => {
				new EyeDropper().open().then((result) => {
					if (result) {
						context.setColor(parseColor(result.sRGBHex));
					}
				});
			}}
			className={cn(
				"rng-rounded-small rng-outline-0 rng-size-8 rng-flex rng-items-center rng-justify-center rng-ring-0 rng-border-0",
				"rng-bg-bg hover:rng-bg-hover-bg rng-text-text",
				"data-[pressed=true]:rng-scale-95",
				"focus-visible:rng-ring-2 focus-visible:rng-ring-accent",
				"rng-transition-all rng-duration-150 rng-ease-in-out",
				className,
			)}
		>
			<ICONS.eyeDropper />
		</Button>
	);
};

RanguEyeDropper.displayName = "Rangu.EyeDropper";

export { RanguEyeDropper, type RanguEyeDropperProps };
