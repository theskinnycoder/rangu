# Rangu Contributing Guide

Hello There! I am very excited that you are interested in contributing to Rangu. However, before submitting your contribution, be sure to take a moment and read the following guidelines.

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Tests](#tests)
- [Visual Changes](#visual-changes)
- [Documentation](#documentation)
- [Breaking Changes](#breaking-changes)

## Tooling

- [PNPM](https://pnpm.io/) as package manager.
- [Vite](https://vitejs.dev/) to bundle packages and as a dev server.
- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing.
- [Testing Library](https://testing-library.com/) for testing components and
  hooks.
- [Changesets](https://github.com/atlassian/changesets) for changes'
  documentation, changelog generation, and release management.
- [Biome.js](https://biomejs.dev/) for linting, formatting and static analysis of code.
- [Node.js v20](https://nodejs.org/) for running scripts and tools.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README.md etc.)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the input-fields component`

> If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Pull Request Guidelines

- The `main` branch is basically a snapshot of the latest production version. All development must be done in dedicated branches that are branched out of the `canary` branch, and will be merged to the same.
- Make sure that Github Actions are passing ✅.
- It is good to have multiple small commits while working on the PR. We'll let GitHub squash it automatically before the merge.
- If you add a new feature:
  - Add the test case that accompanies it.
  - Provide a compelling reason to add this feature. Ideally, I would first open a suggestion issue and get an approval before working on it.
- If you fix a bug:
  - If you are solving a special problem, add (fix #xxxx) (# xxxx is the issue being solved) in your PR title for a better launch record, for example update null check for eye-dropper (fix # 69).
  - Provide a detailed description of the error in the PR. Live demos are welcome, and recommended for UI changes.

## Steps to PR

1. Fork the `rangu` repository and clone your fork
2. Create a new branch out of the `canary` branch. We follow the convention
   `[type/scope]`. For example `fix/use-rangu-hook` or `docs/desc-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.
3. Make and commit your changes following the
   [commit convention](CONTRIBUTING.md#commit-convention).
4. Run `pnpm changeset` to create a detailed description of your changes. This
   will be used to generate a changelog when we publish an update.
   [Learn more about Changesets](https://github.com/atlassian/changesets/tree/master/packages/cli).
   Please note that you might have to run `git fetch origin main:master` (where
   origin will be your fork on GitHub) before `pnpm changeset` works.

> If you made minor changes like CI config, prettier, etc, you can run
> `pnpm changeset add --empty` to generate an empty changeset file to document
> your changes.

## Development Setup

After cloning the repository, execute the following commands in the root folder:

> Remember that these commands must be executed in the root folder of the project.

1. Install dependencies

```bash
pnpm i --hoist
```

2. If you will be working on the components source code, you can use the following command to start the `vite` dev server along with the storybook server:

```bash
pnpm dev
```

3. Create a branch for your feature or fix:

```bash
# Move into a new branch for your feature
git switch -c feat/thing
```

```bash
# Move into a new branch for your fix
git switch -c fix/something
```

4. If your code passes all the tests, then push your feature/fix branch:

All commits that fix bugs or add features need a test.

```bash
pnpm test
```

5. Be sure the package builds.

```bash
pnpm build

# or to build storybook
pnpm build:storybook
```

6. Send your pull request:

- Send your pull request to the `canary` branch.
- Your pull request will be reviewed by the maintainers and the maintainers will decide if it is accepted or not.
- Once the pull request is accepted, the maintainers will merge it to the `canary` branch.

## Visual Changes

When making a visual change, please provide screenshots
and/or screencasts of the proposed change. This will help us to understand the
desired change easier.

## Documentation

Please update the [`README.md`](README.md) with any API changes, the code and docs should always be in sync.

## Breaking changes

Breaking changes should be accompanied with deprecations of removed functionality. The deprecated APIs themselves should not be removed until the minor release after that.
