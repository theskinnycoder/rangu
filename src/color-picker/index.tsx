import { RanguAlphaSlider } from "@/alpha-slider";
import { RanguColorArea } from "@/color-area";
import { RanguCurrentColor } from "@/current-color";
import { RanguEyeDropper } from "@/eye-dropper";
import { RanguHueSlider } from "@/hue-slider";
import { RanguInputFields } from "@/input-fields";
import { RanguSwatchPicker } from "@/swatch-picker";
import { cn } from "@/utils";
import * as React from "react";
import {
	type Color,
	ColorPicker,
	type ColorPickerProps,
	parseColor,
} from "react-aria-components";

type ColorCallbackValues = {
	/**
	 * The alpha or opacity value of the color.
	 */
	alpha: number;

	/**
	 * The red value of the color.
	 */
	red: number;

	/**
	 * The green value of the color.
	 */
	green: number;

	/**
	 * The blue value of the color.
	 */
	blue: number;

	/**
	 * The brightness value of the color.
	 */
	brightness: number;

	/**
	 * The lightness value of the color.
	 */
	lightness: number;

	/**
	 * The saturation value of the color.
	 */
	saturation: number;

	/**
	 * The hue value of the color.
	 */
	hue: number;

	/**
	 * The color in hex format.
	 */
	hex: string;

	/**
	 * The color in rgb format.
	 */
	rgb: string;

	/**
	 * The color in hsl format.
	 */
	hsl: string;

	/**
	 * The color in hsb format.
	 */
	hsb: string;

	/**
	 * The color in hexa format.
	 */
	hexa: string;

	/**
	 * The color in rgba format.
	 */
	rgba: string;

	/**
	 * The color in hsla format.
	 */
	hsla: string;

	/**
	 * The color in hsba format.
	 */
	hsba: string;
};

interface RanguColorPickerProps extends Pick<ColorPickerProps, "children"> {
	// omit the `Color` based state and setter and add `string` based ones

	/**
	 * The color value in any format.
	 * @example "#ff0000", "rgb(255, 0, 0)", "hsl(0, 100%, 50%)"
	 */
	value: string;

	/**
	 * The callback that is called when the color is changed.
	 * @param value - The color value in various formats and channels.
	 * @example This is how the `value` object looks like for the color `red`:
	 * ```
	 * alpha: 1,
	 * red: 255,
	 * green: 0,
	 * blue: 0,
	 * brightness: 1,
	 * lightness: 0.5,
	 * saturation: 1,
	 * hue: 0,
	 * hex: "#ff0000",
	 * rgb: "rgb(255, 0, 0)",
	 * hsl: "hsl(0, 100%, 50%)",
	 * hsb: "hsb(0, 100%, 100%)",
	 * hexa: "#ff0000ff",
	 * rgba: "rgba(255, 0, 0, 1)",
	 * hsla: "hsla(0, 100%, 50%, 1)",
	 * hsba: "hsba(0, 100%, 100%, 1)"
	 * ```
	 */
	onChange: (value: ColorCallbackValues) => void;

	/**
	 * The `className` of the color picker.
	 */
	className?: string;
}

const RanguColorPicker = (props: RanguColorPickerProps) => {
	const { children, className, value, onChange, ...rest } = props;

	const [color, setColor] = React.useState(parseColor(value));

	const onChangeHandler = React.useCallback(
		(value: Color) => {
			setColor(value);
			onChange({
				alpha: value.getChannelValue("alpha"),
				red: value.toFormat("rgb").getChannelValue("red"),
				green: value.toFormat("rgb").getChannelValue("green"),
				blue: value.toFormat("rgb").getChannelValue("blue"),
				brightness: value.toFormat("hsb").getChannelValue("brightness"),
				lightness: value.toFormat("hsl").getChannelValue("lightness"),
				saturation: value.toFormat("hsl").getChannelValue("saturation"),
				hue: value.toFormat("hsl").getChannelValue("hue"),
				hex: value.toString("hex"),
				rgb: value.toString("rgb"),
				hsl: value.toString("hsl"),
				hsb: value.toString("hsb"),
				hexa: value.toString("hexa"),
				rgba: value.toString("rgba"),
				hsla: value.toString("hsla"),
				hsba: value.toString("hsba"),
			});
		},
		[onChange],
	);

	return (
		<div
			className={cn(
				"rng-bg-bg rng-flex rng-flex-col rng-items-center rng-border rng-border-dropdown-bg rng-rounded-small rng-w-fit",
				className,
			)}
		>
			<ColorPicker
				{...rest}
				value={color}
				onChange={onChangeHandler}
			>
				{children}
			</ColorPicker>
		</div>
	);
};

RanguColorPicker.displayName = "Rangu.ColorPicker";

RanguColorPicker.AlphaSlider = RanguAlphaSlider;
RanguColorPicker.HueSlider = RanguHueSlider;
RanguColorPicker.CurrentColor = RanguCurrentColor;
RanguColorPicker.SwatchPicker = RanguSwatchPicker;
RanguColorPicker.ColorArea = RanguColorArea;
RanguColorPicker.InputFields = RanguInputFields;
RanguColorPicker.EyeDropper = RanguEyeDropper;

export { RanguColorPicker as Rangu, type RanguColorPickerProps as RanguProps };
