# Overview

Place a .eslint.json config in your project with these contents:

Default (less strict):
```
{
"extends": "@aliencreations"
}
```

Install it as a dev dependency in your project:
```yarn add @aliencreations/eslint-config --dev-only```

You may see the following documentation on sharable configs:

https://eslint.org/docs/developer-guide/shareable-configs

### Running ESLint from the terminal

First, add a lint script to your package.json:

```
  "scripts": {
    "lint": "eslint ."
```

Then run `yarn lint` or lint with auto-fix `yarn lint --fix`

## Changelog

##### 1.0.0

  - Initial commit.
