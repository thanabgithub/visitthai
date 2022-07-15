// https://preactjs.com/guide/v10/switching-to-preact#setting-up-compat

import { render } from "preact";
import { PureComponent } from "preact/compat";

class Foo extends PureComponent {
  render(props) {
    console.log("render");
    return <div />;
  }
}

const dom = document.getElementById("root");
render(<Foo value="3" />, dom);
// Logs: "render"

// Render a second time, doesn't log anything
render(<Foo value="3" />, dom);
