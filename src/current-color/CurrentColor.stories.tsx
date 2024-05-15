import { RanguCurrentColor } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RanguCurrentColor> = {
	component: RanguCurrentColor,
};

export default meta;
type Story = StoryObj<typeof RanguCurrentColor>;

export const Default: Story = {
	args: {
		color: "#ff00ff",
	},
};
