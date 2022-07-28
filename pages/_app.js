import { html } from "htm/preact";
import Layout from "/components/_app/Layout";

import '/styles/normalize.css'
import '/styles/custom.css'


export default function App({ Component, pageProps }) {
  return html`
    <head>
      <title>SpeedWeb</title>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-fit-text" src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"></script>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

      <link id="link:01" rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap">
      <noscript>
        <link id="link:02" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      </noscript>

      </head>
    <${Layout}><${Component} ...${pageProps} /><//>`;
}
