import { RanguAlphaSlider } from "@/alpha-slider";
import { RanguColorArea } from "@/color-area";
import { type RanguContextProps } from "@/context";
import { RanguCurrentColor } from "@/current-color";
import { RanguEyeDropper } from "@/eye-dropper";
import { RanguHueSlider } from "@/hue-slider";
import { RanguInputFields } from "@/input-fields";
import { RanguProvider } from "@/provider";
import { RanguSwatchPicker } from "@/swatch-picker";
import * as React from "react";
import {
	type Color,
	ColorPicker,
	type ColorPickerProps,
	parseColor,
} from "react-aria-components";

type onChangeCallbackProps = {
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

interface RanguColorPickerProps
	extends Omit<RanguContextProps, "value" | "onChange">,
		Pick<ColorPickerProps, "children"> {
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
	onChange: (value: onChangeCallbackProps) => void;
}

const RanguColorPicker = (props: RanguColorPickerProps) => {
	const { children, value, onChange, ...rest } = props;

	const [color, setColor] = React.useState(parseColor(value));

	const output = React.useMemo(
		() => ({
			alpha: color.getChannelValue("alpha"),
			red: color.toFormat("rgb").getChannelValue("red"),
			green: color.toFormat("rgb").getChannelValue("green"),
			blue: color.toFormat("rgb").getChannelValue("blue"),
			brightness: color.toFormat("hsb").getChannelValue("brightness"),
			lightness: color.toFormat("hsl").getChannelValue("lightness"),
			saturation: color.toFormat("hsl").getChannelValue("saturation"),
			hue: color.toFormat("hsl").getChannelValue("hue"),
			hex: color.toString("hex"),
			rgb: color.toString("rgb"),
			hsl: color.toString("hsl"),
			hsb: color.toString("hsb"),
			hexa: color.toString("hexa"),
			rgba: color.toString("rgba"),
			hsla: color.toString("hsla"),
			hsba: color.toString("hsba"),
		}),
		[color],
	);

	const onChangeHandler = React.useCallback(
		(value: Color) => {
			setColor(value);
			onChange(output);
		},
		[onChange, output],
	);

	return (
		<RanguProvider
			value={color}
			onChange={onChangeHandler}
		>
			<ColorPicker
				{...rest}
				value={color}
				onChange={onChangeHandler}
			>
				{children}
			</ColorPicker>
		</RanguProvider>
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
