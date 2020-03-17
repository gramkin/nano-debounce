# nano-debounce

Minimal debounce function with immediate call support. 
65 bytes (minified and gzipped)
[Size Limit] controls the size

[Size Limit]:   https://github.com/ai/size-limit

## Install

```sh
npm install nano-debounce --save
```

## Usage

```js
import debounce from 'nano-debounce';

debounce(callback, ms);
debounce(callback, ms, true); // with immediate call

```
