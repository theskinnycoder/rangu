import { useRangu } from "@/hooks/use-rangu";
import { cn } from "@/utils";
import * as React from "react";
import {
	ColorField,
	type ColorFieldProps,
	Input,
	Label,
} from "react-aria-components";

interface RanguColorFieldProps extends ColorFieldProps {
	label?: string;
}

const RanguColorField = React.forwardRef<HTMLDivElement, RanguColorFieldProps>(
	(props: RanguColorFieldProps, forwardedRef) => {
		const { label, className, ...rest } = props;

		return (
			<ColorField
				{...rest}
				ref={forwardedRef}
				isWheelDisabled={false}
				className={cn("flex flex-col gap-0.5")}
			>
				{label && (
					<Label className="text-[10px] font-medium tracking-tight text-slate-800">
						{label}
					</Label>
				)}
				<Input
					className={cn(
						"m-0 w-fit max-w-[9ch] shrink-0 rounded-md border border-slate-800 bg-white px-1.5 py-1 text-xs font-medium text-slate-800 shadow-sm shadow-slate-200 placeholder:text-slate-200",
						"outline-none",
						"focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50",
						"transition-colors duration-200 ease-in-out",
						className,
					)}
				/>
			</ColorField>
		);
	},
);

interface RanguInputsFieldProps {
	className?: string;
	withLabels?: boolean;
}

const RanguInputFields = (props: RanguInputsFieldProps) => {
	const { className, withLabels = true, ...rest } = props;

	const { value, onChange, outputFormat } = useRangu();

	switch (outputFormat) {
		case "rgb":
		case "rgba":
			return (
				<div className="mx-auto flex max-w-52 items-center gap-1">
					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Red" : undefined}
						className={className}
						colorSpace="rgb"
						channel="red"
					/>

					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Green" : undefined}
						className={className}
						colorSpace="rgb"
						channel="green"
					/>

					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Blue" : undefined}
						className={className}
						colorSpace="rgb"
						channel="blue"
					/>
				</div>
			);

		case "hsb":
		case "hsba":
			return (
				<div className="mx-auto flex max-w-52 items-center gap-1">
					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Hue" : undefined}
						className={className}
						colorSpace="hsb"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Saturation" : undefined}
						className={className}
						colorSpace="hsb"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Brightness" : undefined}
						className={className}
						colorSpace="hsb"
						channel="brightness"
					/>
				</div>
			);

		case "hsl":
		case "hsla":
			return (
				<div className="mx-auto flex max-w-52 items-center gap-1">
					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Hue" : undefined}
						className={className}
						colorSpace="hsl"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Saturation" : undefined}
						className={className}
						colorSpace="hsl"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						value={value}
						onChange={onChange as ColorFieldProps["onChange"]}
						label={withLabels ? "Lightness" : undefined}
						className={className}
						colorSpace="hsl"
						channel="lightness"
					/>
				</div>
			);

		case "hex":
		case "hexa":
		default:
			return (
				<RanguColorField
					{...rest}
					value={value}
					onChange={onChange as ColorFieldProps["onChange"]}
					label={withLabels ? "Hex" : undefined}
					className={className}
				/>
			);
	}
};

RanguInputFields.displayName = "Rangu.InputFields";

export {
	RanguColorField,
	RanguInputFields,
	type RanguColorFieldProps,
	type RanguInputsFieldProps,
};
