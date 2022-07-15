// https://preactjs.com/guide/v10/switching-to-preact/#:~:text=preact%2Fcompat%20is%20our%20compatibility,to%20your%20workflow%20or%20codebase.

import { memo } from "preact/compat";

function MyComponent(props) {
  return <div>Hello {props.name}</div>;
}

// Usage with default comparison function
const Memoed = memo(MyComponent);

// Usage with custom comparison function
const Memoed2 = memo(MyComponent, (prevProps, nextProps) => {
  // Only re-render when `name' changes
  return prevProps.name === nextProps.name;
});
