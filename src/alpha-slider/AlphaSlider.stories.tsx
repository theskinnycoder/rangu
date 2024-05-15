import { RanguAlphaSlider } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { parseColor, type Color } from "react-aria-components";

const ExampleAlphaSlider = ({ color }: { color: Color }) => {
	const [value, setValue] = useState(color);

	return (
		<RanguAlphaSlider
			value={value}
			onChange={setValue}
		/>
	);
};

const meta: Meta<typeof ExampleAlphaSlider> = {
	component: ExampleAlphaSlider,
};

export default meta;
type Story = StoryObj<typeof ExampleAlphaSlider>;

export const Default: Story = {
	args: {
		color: parseColor(parseColor("#ff00ff").toString("hsl")),
	},
};
