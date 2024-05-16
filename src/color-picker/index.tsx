import { RanguAlphaSlider } from "@/alpha-slider";
import { RanguColorArea } from "@/color-area";
import { type RanguContextProps } from "@/context";
import { RanguCurrentColor } from "@/current-color";
import { RanguHueSlider } from "@/hue-slider";
import { RanguProvider } from "@/provider";
import { RanguSwatchPicker } from "@/swatch-picker";
import * as React from "react";
import {
	ColorPicker,
	parseColor,
	type Color,
	type ColorPickerProps,
} from "react-aria-components";

interface RanguColorPickerProps
	extends Omit<RanguContextProps, "value" | "onChange">,
		Pick<ColorPickerProps, "children"> {
	// omit the `Color` based state and setter and add `string` based ones
	value: string;
	onChange: (value: string) => void;
}

const RanguColorPicker = (props: RanguColorPickerProps) => {
	const { children, outputFormat, value, onChange, ...rest } = props;

	const [color, setColor] = React.useState(parseColor(value));

	// For initial render
	React.useEffect(() => {
		onChange(parseColor(value).toFormat(outputFormat).toString());
	}, [onChange, outputFormat, value]);

	const onChangeHandler = React.useCallback(
		(value: Color) => {
			setColor(value);
			onChange(value.toFormat(outputFormat).toString());
		},
		[onChange, outputFormat],
	);

	return (
		<RanguProvider
			outputFormat={outputFormat}
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
RanguColorPicker.Root = RanguColorPicker;
RanguColorPicker.AlphaSlider = RanguAlphaSlider;
RanguColorPicker.HueSlider = RanguHueSlider;
RanguColorPicker.CurrentColor = RanguCurrentColor;
RanguColorPicker.SwatchPicker = RanguSwatchPicker;
RanguColorPicker.ColorArea = RanguColorArea;

export { RanguColorPicker as Rangu, type RanguColorPickerProps as RanguProps };
