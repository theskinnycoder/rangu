import { RanguAlphaSlider, RanguColorArea } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { parseColor, type Color } from "react-aria-components";

const ExampleColorArea = ({ color }: { color: Color }) => {
	const [value, setValue] = useState(color);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<RanguColorArea
				value={value}
				onChange={setValue}
			/>
			<RanguAlphaSlider
				value={value}
				onChange={setValue}
			/>
			<span>
				The RGBA value is : <span>{value.toString("rgba")}</span>
			</span>
		</div>
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
