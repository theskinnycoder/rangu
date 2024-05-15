import { RanguHueSlider } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { parseColor, type Color } from "react-aria-components";

const ExampleHueSlider = ({ color }: { color: Color }) => {
	const [value, setValue] = useState(color);

	return (
		<RanguHueSlider
			value={value}
			onChange={setValue}
		/>
	);
};

const meta: Meta<typeof ExampleHueSlider> = {
	component: ExampleHueSlider,
};

export default meta;
type Story = StoryObj<typeof ExampleHueSlider>;

export const Default: Story = {
	args: {
		color: parseColor(parseColor("#ff00ff").toString("hsl")),
	},
};
