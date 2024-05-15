import { RanguCurrentColor, RanguSwatchPicker } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { parseColor } from "react-aria-components";

const ExampleSwatchPickerWithCurrentColor = () => {
	const [selectedColor, setSelectedColor] = useState(parseColor("#ff00ff"));

	return (
		<div className="flex items-center gap-3">
			<RanguCurrentColor color={selectedColor} />

			<RanguSwatchPicker
				value={selectedColor}
				onChange={setSelectedColor}
				colors={[
					"#ff0000",
					"#ff7f00",
					"#ffff00",
					"#7fff00",
					"#00ff00",
					"#00ff7f",
					"#00ffff",
					"#007fff",
					"#0000ff",
					"#7f00ff",
					"#ff00ff",
				]}
			/>
		</div>
	);
};

const meta: Meta<typeof ExampleSwatchPickerWithCurrentColor> = {
	component: ExampleSwatchPickerWithCurrentColor,
};

export default meta;
type Story = StoryObj<typeof ExampleSwatchPickerWithCurrentColor>;

export const Default: Story = {};
