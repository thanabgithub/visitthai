import Layout from "/components/_app/Layout";
import { html } from "htm/preact";
import StyleNormalize from "/components/_app/StyleNormalize";
import StyleCustom from "/components/_app/StyleCustom";
export default function App({ Component, pageProps }) {
  return html` <head>
      <title>My page title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <${StyleNormalize} />
      <${StyleCustom} />
    </head>
    <${Layout}><${Component} ...${pageProps} //><//>`;
}
