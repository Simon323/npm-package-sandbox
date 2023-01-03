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
