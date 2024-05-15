import { RanguColorArea } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { parseColor, type Color } from "react-aria-components";

const ExampleColorArea = ({ color }: { color: Color }) => {
	const [value, setValue] = useState(color);

	return (
		<RanguColorArea
			value={value}
			onChange={setValue}
		/>
	);
};

const meta: Meta<typeof ExampleColorArea> = {
	component: ExampleColorArea,
};

export default meta;
type Story = StoryObj<typeof ExampleColorArea>;

export const Default: Story = {
	args: {
		color: parseColor(parseColor("#ff00ff").toString("hsl")),
	},
};
