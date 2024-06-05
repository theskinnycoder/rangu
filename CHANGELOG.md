# rangu

## 1.1.0

### Minor Changes

- [#12](https://github.com/theskinnycoder/rangu/pull/12) [`7873aef`](https://github.com/theskinnycoder/rangu/commit/7873aefc0af62b1bef5eedf006ae45c54e95d9ad) Thanks [@theskinnycoder](https://github.com/theskinnycoder)! - 1. `Rangu` root component's `onChange` event handler now is a callback function that receives the new value as an argument, which has the color in different formats and channel values. 2. `rangu` now doesn't use the React context API to manage the color state! 3. Added `README.md` file to the `rangu` package, documenting the usage and API. 4. Added `CODE_OF_CONDUCT.md`, and `CONTRIBUTING.md` files to the `rangu` package. 5. Switched the build and dev server tool from `tsup` to `vite`. 6. Switched away from `ESlint` and `Prettier` to `Biome.js` for code formatting, linting, and static analysis. 7. Added new CI/CD pipelines making `canary` releases more stable, and `canary` as the default branch. 8. Added GitHub Issue and Pull Request templates.

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
