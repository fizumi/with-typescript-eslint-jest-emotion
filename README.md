# NextJS Typescript Boilerplate

Bootstrap a NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- Styling with [Emotion](https://emotion.sh/docs)

## Note

This setting doesn't work with next@11.0.0 .

## How to use

```bash
npx create-next-app -e https://github.com/fizumi/with-typescript-eslint-jest-emotion [app name]
```

## How did this repo created ?

### use this template, [examples/with-typescript-eslint-jest](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest)

```bash
yarn create next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-emotion
yarn upgrade --latest
```

### add next.js setting

- [Absolute Imports and Module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [`src` Directory](https://nextjs.org/docs/advanced-features/src-directory)

### add eslint-plugin

```bash
yarn add -D eslint-plugin-import eslint-plugin-promise eslint-plugin-react-hooks
```

configure `.eslintrc.json`

### add [emotion](https://emotion.sh/docs)

```bash
yarn add -D eslint-plugin-import eslint-plugin-promise eslint-plugin-react-hooks
```

[@emotion/babel-plugin](https://emotion.sh/docs/@emotion/babel-plugin) is highly recommended

```json
{
  "plugins": ["@emotion"]
}
```

### add babel-plugin

[Removing console logs on production](https://indralukmana.com/posts/nextjs-note-removing-console-logs-on-production)

```bash
yarn add --dev babel-plugin-transform-remove-console
```
