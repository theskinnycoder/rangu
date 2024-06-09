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
			<div className="bg-bg flex flex-col items-center border border-dropdown-bg rounded-small w-fit">
				<Rangu.ColorArea />

				<div className="flex items-center justify-between gap-2 mt-3 pl-3 pr-4 w-full">
					<Rangu.EyeDropper />
					<div className="flex flex-col gap-3">
						<Rangu.HueSlider />
						<Rangu.AlphaSlider />
					</div>
				</div>

				<div className="px-2 mt-3 w-full">
					<Rangu.InputFields
						withTooltips
						supportedFormats={[
							"hex",
							"rgb",
							"hsl",
							"hsb",
							"hexa",
							"rgba",
							"hsla",
							"hsba",
						]}
					/>
				</div>

				<hr className="w-full border-t border-border mt-3" />

				<div className="px-3 py-2">
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
