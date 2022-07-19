import { Html, Head, Main, NextScript } from "next/document";
import { html } from "htm/preact";
import Script from "next/script";
export default function Document() {
  return html` <${Html} lang="en">
    <${Head}> <//>
    <body>
      <${Main} />
      <${NextScript} />
    </body>
  <//>`;
}
