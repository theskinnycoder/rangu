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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1.4rem",
					padding: "1rem",
					backgroundColor: "rgb(248, 250, 252)",
					marginInline: "auto",
					width: "fit-content",
					borderRadius: "0.5rem",
				}}
			>
				<Rangu.ColorArea />
				<Rangu.HueSlider />
				<Rangu.AlphaSlider />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "0.5rem",
					}}
				>
					<Rangu.CurrentColor />
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

				<Rangu.EyeDropper />
				<Rangu.InputFields withLabels />

				<span
					style={{
						fontSize: "0.75rem",
					}}
				>
					Final Color : {value}
				</span>
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
