import "../index.css";
import { Rangu } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const ExampleColorPicker = ({ color }: { color: string }) => {
	const [value, setValue] = useState(color);

	return (
		<Rangu
			value={value}
			onChange={({ rgba }) => setValue(rgba)}
		>
			<Rangu.ColorArea />

			<div className="rng-flex rng-items-center rng-justify-between rng-gap-2 rng-mt-3 rng-pl-3 rng-pr-4 rng-w-full">
				<Rangu.EyeDropper />
				<div className="rng-flex rng-flex-col rng-gap-3">
					<Rangu.HueSlider />
					<Rangu.AlphaSlider />
				</div>
			</div>

			<div className="rng-px-2 rng-mt-3 rng-w-full">
				<Rangu.InputFields
					withTooltips
					supportedFormats={[
						"hex",
						"hexa",
						"rgb",
						"rgba",
						"hsl",
						"hsla",
						"hsb",
						"hsba",
					]}
					defaultFormat="hsba"
				/>
			</div>

			<hr className="rng-w-full rng-border-t rng-border-border rng-mt-3" />

			<div className="rng-px-3 rng-py-2">
				<Rangu.SwatchPicker
					colors={[
						"#A00",
						"#f80",
						"#080",
						"#08f",
						"#088",
						"#008",
						"#ff0",
						"#0f0",
						"#0ff",
						"#00f",
						"#f0f",
						"#000",
					]}
				/>
			</div>
		</Rangu>
	);
};

const meta: Meta<typeof ExampleColorPicker> = {
	component: ExampleColorPicker,
};

export default meta;
type Story = StoryObj<typeof ExampleColorPicker>;

export const Default: Story = {
	args: {
		color: "#ff00ff",
	},
};
