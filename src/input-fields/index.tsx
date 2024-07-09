import { RanguSelect, RanguSelectItem } from "@/select";
import { RanguTooltip } from "@/tooltip";
import { cn } from "@/utils";
import * as React from "react";
import {
	ColorField,
	type ColorFieldProps,
	type ColorFormat,
	Input,
	TooltipTrigger,
} from "react-aria-components";

interface RanguColorFieldProps extends ColorFieldProps {
	tooltip?: string;
}

const RanguColorField = React.forwardRef<HTMLDivElement, RanguColorFieldProps>(
	(props: RanguColorFieldProps, forwardedRef) => {
		const { tooltip, className, channel, ...rest } = props;

		return (
			<TooltipTrigger isDisabled={!tooltip}>
				<ColorField
					{...rest}
					channel={channel}
					ref={forwardedRef}
					isWheelDisabled={false}
					className={cn("rng-flex rng-flex-col rng-gap-0.5 rng-grow-0")}
				>
					<Input
						className={cn(
							"rng-m-0 rng-rounded-small rng-border rng-border-transparent group-hover:rng-border-border rng-bg-bg rng-px-1 rng-py-px rng-text-[11px] rng-font-medium rng-text-text placeholder:rng-text-text/60 rng-h-7 rng-cursor-text",
							"rng-outline-none",
							"focus-visible:rng-ring-2 focus-visible:rng-ring-accent focus-visible:rng-ring-offset-0",
							"rng-transition-all rng-duration-200 rng-ease-in-out",
							"group-focus-within:rng-ring-2 group-focus-within:rng-ring-accent rng-rounded-small rng-w-20",
							{
								"!rng-w-11": channel === "alpha",
								"!rng-w-10": [
									"hue",
									"saturation",
									"lightness",
									"brightness",
									"red",
									"green",
									"blue",
								].includes(channel!),
							},
							className,
						)}
						onFocus={(e) => {
							e.target.select();

							if (rest.onFocus) {
								rest.onFocus(e);
							}
						}}
					/>
					<RanguTooltip>{tooltip}</RanguTooltip>
				</ColorField>
			</TooltipTrigger>
		);
	},
);

RanguColorField.displayName = "Rangu.ColorField";

interface RanguColorFormatContextType {
	supportedFormats: Array<ColorFormat>;
	colorFormat: ColorFormat;
	setColorFormat: (format: ColorFormat) => void;
}

const RanguColorFormatContext =
	React.createContext<RanguColorFormatContextType>({
		supportedFormats: ["hexa"],
		colorFormat: "hexa",
		setColorFormat: () => null,
	});

const RanguColorFormatSwitcher = () => {
	const { supportedFormats, colorFormat, setColorFormat } = React.useContext(
		RanguColorFormatContext,
	);

	return (
		<RanguSelect
			aria-label="Color Format"
			selectedKey={colorFormat}
			onSelectionChange={(s) => {
				setColorFormat(s as ColorFormat);
			}}
		>
			{supportedFormats.map((format) => (
				<RanguSelectItem
					key={format}
					id={format}
				>
					{format.toUpperCase()}
				</RanguSelectItem>
			))}
		</RanguSelect>
	);
};

RanguColorFormatSwitcher.displayName = "Rangu.ColorFormatSwitcher";

interface RanguSelectedInputFieldsProps {
	className?: string;

	/**
	 * Whether to show tooltips for the input fields.
	 * @default true
	 */
	withTooltips?: boolean;
}

const RanguSelectedInputFields = (props: RanguSelectedInputFieldsProps) => {
	const { className, withTooltips = true, ...rest } = props;

	const { colorFormat } = React.useContext(RanguColorFormatContext);

	switch (colorFormat) {
		case "rgb":
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Red" : undefined}
						className={cn(
							"rng-rounded-r-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="red"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Green" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="green"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Blue" : undefined}
						className={cn(
							"rng-rounded-l-none rng-border-l-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="blue"
					/>
				</div>
			);

		case "rgba":
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Red" : undefined}
						className={cn(
							"rng-rounded-r-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="red"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Green" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="green"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Blue" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="blue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rng-rounded-l-none focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="alpha"
					/>
				</div>
			);

		case "hsb":
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rng-rounded-r-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Brightness" : undefined}
						className={cn(
							"rng-rounded-l-none rng-border-l-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="brightness"
					/>
				</div>
			);

		case "hsba":
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rng-rounded-r-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Brightness" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="brightness"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rng-rounded-l-none focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="alpha"
					/>
				</div>
			);

		case "hsl":
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rng-rounded-r-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Lightness" : undefined}
						className={cn(
							"rng-rounded-l-none rng-border-l-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="lightness"
					/>
				</div>
			);

		case "hsla":
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rng-rounded-r-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Lightness" : undefined}
						className={cn(
							"rng-rounded-r-none rng-rounded-l-none rng-border-r-0 focus-visible:eng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="lightness"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rng-rounded-l-none focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="alpha"
					/>
				</div>
			);

		case "hex":
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hex" : undefined}
						className={cn(
							"hover:rng-border-border focus-visible:rng-border-transparent",
							className,
						)}
					/>
				</div>
			);

		case "hexa":
		default:
			return (
				<div className="rng-flex rng-items-center rng-gap-0 rng-group">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hex" : undefined}
						className={cn(
							"rng-rounded-r-none rng-border-r-0 focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rng-rounded-l-none focus-visible:rng-ring-0 group-focus-within:group-hover:rng-border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="alpha"
					/>
				</div>
			);
	}
};

RanguSelectedInputFields.displayName = "Rangu.SelectedInputFields";

interface RanguInputFieldsProps {
	className?: string;

	/**
	 * Whether to show tooltips for the input fields.
	 * @default true
	 */
	withTooltips?: boolean;

	/**
	 * The default format of the color input fields.
	 * @default "hexa"
	 * @type `'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsb' | 'hsba'`
	 */
	defaultFormat?: ColorFormat;

	/**
	 * The supported color formats for the dropdown menu, which can switch between different input fields.
	 * @default ["hexa"]
	 * @type `Array<'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsb' | 'hsba'>`
	 */
	supportedFormats?: Array<ColorFormat>;
}

const RanguInputFields = (props: RanguInputFieldsProps) => {
	const {
		className,
		defaultFormat = "hexa",
		supportedFormats = ["hexa"],
		...rest
	} = props;

	const emptySupportedFormats = supportedFormats.length === 0;
	const moreThanOneFormat = supportedFormats.length > 1;

	if (emptySupportedFormats && !supportedFormats.includes(defaultFormat)) {
		throw new Error(
			`Rangu.InputFields: The default format '${defaultFormat}' is not included in the supported formats.`,
		);
	}

	const finalDefaultFormat =
		moreThanOneFormat || emptySupportedFormats
			? defaultFormat
			: supportedFormats[0]!;

	const [colorFormat, setColorFormat] =
		React.useState<ColorFormat>(finalDefaultFormat);

	return (
		<RanguColorFormatContext.Provider
			value={{
				supportedFormats,
				colorFormat,
				setColorFormat,
			}}
		>
			<div
				className={cn("rng-flex rng-items-center rng-gap-1", {
					"rng-justify-between": moreThanOneFormat,
					"rng-justify-center": !moreThanOneFormat,
				})}
			>
				{moreThanOneFormat && <RanguColorFormatSwitcher />}

				<RanguSelectedInputFields {...rest} />
			</div>
		</RanguColorFormatContext.Provider>
	);
};

RanguInputFields.displayName = "Rangu.InputFields";

export {
	RanguColorField,
	RanguColorFormatContext,
	RanguInputFields,
	RanguSelectedInputFields,
	type RanguColorFieldProps,
	type RanguInputFieldsProps,
	type RanguSelectedInputFieldsProps,
};
