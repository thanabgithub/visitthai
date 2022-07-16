import { html } from "htm/preact";
import Link from "next/link";
import { Fragment } from "preact";
export default function Home() {
  return html`
    <${Fragment}>
      // Button
      <${Link} href="/btn">
        <a class="w100--s my1 btn" title="Furtive button example">btn </a><//
      >
      <div id="ref-container">hello</div>
    <//>
  `;
}
