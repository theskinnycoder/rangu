# rangu

## 1.1.0

### Minor Changes

- PR [#12](https://github.com/theskinnycoder/rangu/pull/12)
- `Rangu` root component's `onChange` event handler now is a callback function that receives the new value as an argument, which has the color in different formats and channel values.
- `rangu` now doesn't use the React context API to manage the color state!
- Added `README.md` file to the `rangu` package, documenting the usage and API.

## 1.0.1

### Patch Changes

- PR [#10](https://github.com/theskinnycoder/rangu/pull/10)
- Fix Swatch Picker background color
- Fix unsupported formats bug. Now `hex` and `hexa` formats are supported

## 1.0.0

### Major Changes

- PR [#7](https://github.com/theskinnycoder/rangu/pull/7)
- This initial release includes various color picker components like `Rangu` (a provider component), `AlphaSlider`, `HueSlider`, `CurrentColor`, `ColorArea`, `SwatchPicker`, and `InputFields`
- It also includes an experimental `EyeDropper` component that allows you to pick colors from the screen.
- The components are built with accessibility in mind and are fully keyboard navigable.
- The components are also fully customizable and themeable.
- The root component `Rangu` can be used to provide a custom output format for the color picker.
