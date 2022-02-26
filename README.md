[![Package Version](https://img.shields.io/npm/v/goerwin-helpers.svg)](https://www.npmjs.com/package/goerwin-helpers)

- `client`: helpers only used in client side code AKA front-end
- `node`: helpers only used in a node environment
- `universal`: helpers used in both client and node

## Installation

```sh
npm install goerwin-helpers
```

## Using it

Examples:

```js
// TypeScript
import { getChildFiles } from 'goerwin-helpers/node/file';
import { getTimeStr } from 'goerwin-helpers/universal/time';

// JavaScript
const { getChildFiles } = require('goerwin-helpers/node/file');
const { getTimeStr } = require('goerwin-helpers/universal/time');
```
