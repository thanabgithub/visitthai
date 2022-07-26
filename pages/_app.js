import { html } from "htm/preact";
import StyleNormalize from "/components/_app/StyleNormalize";
import StyleCustom from "/components/_app/StyleCustom";
import Layout from "/components/_app/Layout";


export default function App({ Component, pageProps }) {
  return html`
    <head>
      <title>SpeedWeb</title>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-fit-text" src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"></script>
      <${StyleNormalize} />
      <${StyleCustom} />
    </head>
    <${Layout}><${Component} ...${pageProps} /><//>`;
}
