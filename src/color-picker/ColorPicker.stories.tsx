import { Rangu } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const ExampleColorPicker = ({ color }: { color: string }) => {
	const [value, setValue] = useState(color);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				paddingInline: "4rem",
			}}
		>
			<div
				style={{
					width: "25%",
					aspectRatio: "1/1",
					backgroundColor: value,
					borderRadius: "50%",
					boxShadow: "0 0 0 0.2rem rgba(0, 0, 0, 0.1)",
				}}
			/>

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
					<Rangu.InputFields
						withLabels
						format="hexa"
					/>

					<span
						style={{
							fontSize: "0.75rem",
						}}
					>
						Final Color : {value}
					</span>
				</div>
			</Rangu>
		</div>
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
