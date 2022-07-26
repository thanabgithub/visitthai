import { Html, Head, Main, NextScript } from "next/document";
import { html } from "htm/preact";
import Sidebar from "/components/_document/Sidebar"
export default function Document() {
  return html` <${Html} lang="en">
    <${Head}/>
    <body>
    <${Sidebar} />
      <${Main} />
      <${NextScript} />
    </body>
  <//>`;
}
