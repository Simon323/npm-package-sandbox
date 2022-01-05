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
}
```

## Install

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
