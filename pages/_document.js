import { Html, Head, Main, NextScript } from "next/document";
import { html } from "htm/preact";
export default function Document() {
  return html` <${Html} lang="en">
    <${Head}
      ><meta name="viewport" content="width=device-width, initial-scale=1" />
    <//>
    <body>
      <${Main} />
      <${NextScript} />
    </body>
  <//>`;
}
