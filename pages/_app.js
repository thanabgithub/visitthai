import Layout from "/components/_app/Layout";
import Script from "next/script";
import Head from "next/head";
import { html } from "htm/preact";
import StyleNormalize from "/components/_app/StyleNormalize";
import StyleCustom from "/components/_app/StyleCustom";
export default function App({ Component, pageProps }) {
  return html`<head>
      <title>Optimal AI Web App</title>
      <${Script} async src="https://cdn.ampproject.org/v0.js" />
      <${StyleNormalize} />
      <${StyleCustom} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <${Layout}><${Component} ...${pageProps} //><//>`;
}
