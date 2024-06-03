# Rangu

Rangu is a React compound component library that provides a set of components to build a color picker.

## Installation

```bash
npm install rangu
yarn add rangu
pnpm add rangu
bun add rangu
```

## Usage

- All the components should be rendered inside the `Rangu.Root` component, which acts as a provider.

```jsx
import { useState } from "react";
import { Rangu } from "rangu";

export function ColorPicker() {
	const [value, setValue] = useState("#f00");

	return (
		<Rangu.Root
			value={value}
			onChange={setValue}
			outputFormat="rgba"
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
		</Rangu.Root>
	);
}
```
