// https://preactjs.com/guide/v10/switching-to-preact/#:~:text=preact%2Fcompat%20is%20our%20compatibility,to%20your%20workflow%20or%20codebase.

import { createRef, render } from "preact";
import { forwardRef } from "preact/compat";

const MyComponent = forwardRef((props, ref) => {
  return <div ref={ref}>Hello world</div>;
});

// Usage: `ref` will hold the reference to the inner `div` instead of
// `MyComponent`
const ref = createRef();
render(<MyComponent ref={ref} />, dom);
