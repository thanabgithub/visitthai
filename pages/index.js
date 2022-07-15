import dynamic from "next/dynamic";
import Head from "next/head";
import { html } from "htm/preact";

const Lazy = dynamic(() => import("../lazy"));

export default function IndexPage() {
  return html`
    <div>
      <h4>Hello world!</h1>
      <${Head}> <//>
      <${Lazy} class="h5" />
    </div>
  `;
}
