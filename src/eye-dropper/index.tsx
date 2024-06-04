import { useRangu } from "@/hooks/use-rangu";
import { cn } from "@/utils";
import { Button, type ButtonProps, parseColor } from "react-aria-components";

interface RanguEyeDropperProps extends ButtonProps {}

const RanguEyeDropper = (props: RanguEyeDropperProps) => {
	const { className, ...rest } = props;
	const { onChange } = useRangu();

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
						onChange(parseColor(result.sRGBHex));
					}
				});
			}}
			className={cn(
				"rounded-md border border-slate-800 p-1 shadow-sm outline-none",
				"bg-white hover:bg-slate-50",
				"data-[pressed=true]:scale-95",
				"focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50",
				"transition-all duration-100 ease-in-out",
				className,
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="size-4"
			>
				<path
					stroke="none"
					d="M0 0h24v24H0z"
					fill="none"
				/>
				<path d="M11 7l6 6" />
				<path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z" />
			</svg>
		</Button>
	);
};

RanguEyeDropper.displayName = "Rangu.EyeDropper";

export { RanguEyeDropper, type RanguEyeDropperProps };
