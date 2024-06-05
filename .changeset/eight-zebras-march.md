---
"rangu": minor
---

1. `Rangu` root component's `onChange` event handler now is a callback function that receives the new value as an argument, which has the color in different formats and channel values.
2. `rangu` now doesn't use the React context API to manage the color state!
3. Added `README.md` file to the `rangu` package, documenting the usage and API.
4. Added `CODE_OF_CONDUCT.md`, and `CONTRIBUTING.md` files to the `rangu` package.
5. Switched the build and dev server tool from `tsup` to `vite`.
6. Switched away from `ESlint` and `Prettier` to `Biome.js` for code formatting, linting, and static analysis.
7. Added new CI/CD pipelines making `canary` releases more stable, and `canary` as the default branch.
8. Added GitHub Issue and Pull Request templates.
