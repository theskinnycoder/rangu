import { RanguSwatchPicker } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { Color } from "react-aria-components";

const ExampleSwatchPicker = ({ colors }: { colors: Array<string | Color> }) => {
	const [selectedColor, setSelectedColor] = useState(colors[0]);

	return (
		<div className="flex flex-col items-start gap-4">
			<RanguSwatchPicker
				colors={colors}
				value={selectedColor}
				onChange={setSelectedColor}
			/>

			<span>Selected color: {selectedColor?.toString("hex")}</span>
		</div>
	);
};

const meta: Meta<typeof ExampleSwatchPicker> = {
	component: ExampleSwatchPicker,
};

export default meta;
type Story = StoryObj<typeof ExampleSwatchPicker>;

export const Default: Story = {
	args: {
		colors: ["#A00", "#f80", "#080", "#08f", "#088", "#008"],
	},
};

export const With12Colors: Story = {
	args: {
		colors: [
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
		],
	},
};
