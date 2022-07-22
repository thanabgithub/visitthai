import { html } from "htm/preact";
import StyleNormalize from "/components/_app/StyleNormalize";
import StyleCustom from "/components/_app/StyleCustom";
import Layout from "/components/_app/Layout";
import dynamic from "next/dynamic";

const Head = dynamic(() => import("next/head"));


export default function App({ Component, pageProps }) {
  return html`<${Head}
      ><title>SpeedWeb</title>



      <meta name="viewport" content="width=device-width, initial-scale=1"
    /><//>
    <head>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script
      async
      custom-element="amp-sidebar"
      src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
    ></script>
    <${StyleNormalize} />
    <${StyleCustom} />
    </head>
    <${Layout}><${Component} ...${pageProps} /><//>`;
}
