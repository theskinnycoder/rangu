import { RanguSelect, RanguSelectItem } from "@/select";
import { RanguTooltip } from "@/tooltip";
import { cn } from "@/utils";
import * as React from "react";
import {
	ColorField,
	Input,
	TooltipTrigger,
	type ColorFieldProps,
	type ColorFormat,
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
					className={cn("flex flex-col gap-0.5 grow-0")}
				>
					<Input
						className={cn(
							"m-0 rounded-small border border-transparent group-hover/all:border-border bg-bg px-1 py-px text-[11px] font-medium text-text placeholder:text-text/60 h-7 cursor-text",
							"outline-none",
							"focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0",
							"transition-all duration-200 ease-in-out",
							"group-focus-within/all:ring-2 group-focus-within/all:ring-accent rounded-small w-20",
							{
								"w-11": channel === "alpha",
								"w-10": [
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
	 * Whether to show labels for the input fields.
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
				<div className="flex items-center gap-0 group/all">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Red" : undefined}
						className={cn(
							"rounded-r-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="red"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Green" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="green"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Blue" : undefined}
						className={cn(
							"rounded-l-none border-l-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="blue"
					/>
				</div>
			);

		case "rgba":
			return (
				<div className="flex items-center gap-0 group/all">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Red" : undefined}
						className={cn(
							"rounded-r-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="red"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Green" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="green"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Blue" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="blue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rounded-l-none focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="rgb"
						channel="alpha"
					/>
				</div>
			);

		case "hsb":
			return (
				<div className="flex items-center gap-0 group/all">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rounded-r-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Brightness" : undefined}
						className={cn(
							"rounded-l-none border-l-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="brightness"
					/>
				</div>
			);

		case "hsba":
			return (
				<div className="flex items-center gap-0 group/all">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rounded-r-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Brightness" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="brightness"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rounded-l-none focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsb"
						channel="alpha"
					/>
				</div>
			);

		case "hsl":
			return (
				<div className="flex items-center gap-0 group/all">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rounded-r-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Lightness" : undefined}
						className={cn(
							"rounded-l-none border-l-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="lightness"
					/>
				</div>
			);

		case "hsla":
			return (
				<div className="flex items-center gap-0 group/all">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hue" : undefined}
						className={cn(
							"rounded-r-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="hue"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Saturation" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="saturation"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Lightness" : undefined}
						className={cn(
							"rounded-r-none rounded-l-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="lightness"
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rounded-l-none focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
						colorSpace="hsl"
						channel="alpha"
					/>
				</div>
			);

		case "hex":
			return (
				<div className="flex items-center group/all gap-0">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hex" : undefined}
						className={cn(
							"hover:border-border focus-visible:border-transparent",
							className,
						)}
					/>
				</div>
			);

		case "hexa":
		default:
			return (
				<div className="flex items-center gap-0 group/all">
					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Hex" : undefined}
						className={cn(
							"rounded-r-none border-r-0 focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
							className,
						)}
					/>

					<RanguColorField
						{...rest}
						tooltip={withTooltips ? "Opacity" : undefined}
						className={cn(
							"rounded-l-none focus-visible:ring-0 group-focus-within/all:group-hover/all:border-transparent",
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
	 * Whether to show labels for the input fields.
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
				className={cn("flex items-center gap-0.5", {
					"justify-between": moreThanOneFormat,
					"justify-center": !moreThanOneFormat,
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
