import { cn } from "@/utils";
import * as React from "react";
import {
	Button,
	ColorPickerStateContext,
	parseColor,
	type ButtonProps,
} from "react-aria-components";

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
				"rounded-small outline-0 size-8 flex items-center justify-center ring-0 border-0",
				"bg-bg hover:bg-hover-bg text-text",
				"data-[pressed=true]:scale-95",
				"focus-visible:ring-2 focus-visible:ring-accent",
				"transition-all duration-150 ease-in-out",
				className,
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="15"
				height="15"
				viewBox="0 0 15 15"
			>
				<path
					fill="currentColor"
					fillOpacity="1"
					fillRule="nonzero"
					stroke="none"
					d="M14.122.688c-.8-.8-2-.8-2.8 0l-2.8 2.8-.8-.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l.7.7-5.8 5.8c-.4.4-1 1.9 0 2.9 1 1 2.5.4 2.9 0l5.8-5.8.7.7c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z"
				></path>
			</svg>
		</Button>
	);
};

RanguEyeDropper.displayName = "Rangu.EyeDropper";

export { RanguEyeDropper, type RanguEyeDropperProps };
