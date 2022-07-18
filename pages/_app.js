import Layout from "../components/_app/Layout";
import { html } from "htm/preact";

export default function App({ Component, pageProps }) {
  return html`<${Layout}><${Component} ...${pageProps} //><//>`;
}
