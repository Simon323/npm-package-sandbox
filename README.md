## Init

```bash
# create package.json
$ npm init -y
```

## Setup package.json

```json
{
  ...
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["/dist"],
    "scripts": {
    ...
    "build": "npx tsc --project tsconfig.build.json",
    "build:watch": "npx tsc --project tsconfig.build.json --watch",
    "test": "jest --coverage",
    "test:watch": "jest --coverage --watch"
  },
}
```

## Install TS

```bash
# npm packages
- typescript

# install
$ npm install typescript
```

## Init TypeScript

```bash
# init
$ npx tsc --init
```

## Overwrite tsconfig.json

```json
{
  "compilerOptions": {
    "module": "Commonjs",
    "target": "es2015",
    "sourceMap": true,
    "outDir": "./dist",
    "noImplicitAny": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Create tsconfig.build.json if you wana use Jest

```json
{
  "extends": "./tsconfig.json",
  // 👇️ this may vary depending on how you
  // name your test files
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
```

## Create dist

```bash
# prepare package to publish into npm
$ npx tsc

# watch
$ npx tsc --watch
```

## Npm login

```bash
# login to npm
$ npm login

# publish package
$ npm publish
```

## Run e.g in index.ts

```bash
$ ts-node app.ts
```

## Link in test proj

```bash
# in cmd into test proj
$ npm link ../utils
```

## Tests with Jest

```bash
# npm packages
- @types/jest
- jest
- ts-jest
- ts-node

# install
$ npm install --save-dev @types/jest jest ts-jest ts-node
```

### Jest configuration

In root dir create `jest.config.ts`, put inside bellow code

```ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  modulePathIgnorePatterns: ["__mocks__"],
};

export default config;
```
