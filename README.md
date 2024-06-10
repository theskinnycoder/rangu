# Rangu

Rangu is a React compound component library that provides a set of components to build a color picker

<p align="center">
    <a href="https://www.npmjs.com/package/rangu">
      <img src="https://img.shields.io/npm/v/rangu?style=for-the-badge&labelColor=000000" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/rangu">
      <img src="https://img.shields.io/npm/dt/rangu.svg?style=for-the-badge&labelColor=000000" alt="Downloads">
    </a>
    <a href="https://bundlephobia.com/result?p=rangu">
      <img src="https://img.shields.io/bundlephobia/minzip/rangu?style=for-the-badge&labelColor=000000" alt="MinZipped Size">
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/npm/l/rangu?style=for-the-badge&labelColor=000000" alt="License">
    </a>
    <a href="CODE_OF_CONDUCT.md">
      <img src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge&labelColor=000000" alt="Contributor Covenant">
    </a>
</p>

## 🎉 Installation

```bash
npm install rangu

# or
yarn add rangu

# or
pnpm add rangu

# or
bun add rangu
```

## 🚀 Usage

- All the components should be rendered inside the `Rangu` component, which acts as a provider.

```jsx
import { useState } from "react";
import { Rangu } from "rangu";

export function ColorPicker() {
  const [value, setValue] = useState("#f00");

  return (
    <Rangu
      value={value}
      onChange={({ rgba }) => {
        setValue(rgba);
      }}
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
          withTooltips
          supportedFormats={[
            "hex",
            "rgb",
            "rgba",
            "hsl",
            "hsla",
            "hsb",
            "hsba",
          ]}
          defaultFormat="hsba"
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
  );
}
```

## 📚 API

### Rangu

This component acts as a provider for all the other components. It should be rendered at the top level of the component tree.

#### Props

| **Name**   | **Type**                               | **Default** | **Description**                                                  |
| ---------- | -------------------------------------- | ----------- | ---------------------------------------------------------------- |
| `value`    | `string`                               | -           | The color value in any of the supported formats.                 |
| `onChange` | `(value: CallbackColorValues) => void` | -           | A callback function that is called when the color value changes. |

```ts
type CallbackColorValues = {
  hex: string; // Color in hex format
  hexa: string; // Color in hexa format
  rgb: string; // Color in rgb format
  rgba: string; // Color in rgba format
  hsl: string; // Color in hsl format
  hsla: string; // Color in hsla format
  alpha: number; // Alpha or Opacity value
  hue: number; // Hue value
  saturation: number; // Saturation value
  lightness: number; // Lightness value
  brightness: number; // Brightness value
  red: number; // Red value
  green: number; // Green value
  blue: number; // Blue value
};
```

### Rangu.ColorArea

This component provides a color area to pick colors from. It gives us a visual representation of the color in the current hue, to update the saturation and brightness values.

### Rangu.HueSlider

This component provides a slider to pick the hue value.

### Rangu.AlphaSlider

This component provides a slider to pick the alpha or opacity value.

### Rangu.CurrentColor

This component provides a visual representation of the current color. It is a read-only component and cannot be interacted with.

### Rangu.SwatchPicker

This component provides a set of swatches to pick colors from.

#### Props

| **Name** | **Type**   | **Default** | **Description**                            |
| -------- | ---------- | ----------- | ------------------------------------------ |
| `colors` | `string[]` | `[]`        | An array of colors to display as swatches. |

### Rangu.InputFields

This component provides input fields to input color values.

#### Props

| **Name**           | **Type**   | **Default** | **Description**                                                                                     |
| ------------------ | ---------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `withTooltips`     | `boolean`  | `true`      | Whether to show tooltips for the input fields.                                                      |
| `supportedFormats` | `string[]` | `["hexa"]`  | The supported color formats for the dropdown menu, which can switch between different input fields. |
| `defaultFormat`    | `string`   | `"hexa"`    | The default format of the color input fields.                                                       |

### Rangu.EyeDropper

This component provides an eye dropper tool to pick colors from the screen.

> **Note:** The eye dropper tool is not available in all browsers. If the browser does not support the eye dropper tool, this component will not be rendered, and a warning will be logged in the broswer console.

## 🤝 Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).

## 📝 License

This project is licensed under the [MIT License](LICENSE).
