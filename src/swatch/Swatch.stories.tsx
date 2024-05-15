import { RanguSwatch } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RanguSwatch> = {
	component: RanguSwatch,
};

export default meta;
type Story = StoryObj<typeof RanguSwatch>;

export const Default: Story = {
	args: {
		color: "#ff00ff",
	},
};
