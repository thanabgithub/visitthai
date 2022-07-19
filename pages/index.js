import { html } from "htm/preact";
import Link from "next/link";
import { Fragment } from "preact";
import { h, Component, render } from "preact";
// https://www.youtube.com/watch?v=BMuFBYw91UQ
// use <script> after htm/JSX allow us to execute after all html is loaded.

export default function Home() {
  return html`
    <${Fragment}>
      <h1>Home</h1>
      <${Link} href="/btn">
        <a class="w100--s my1 btn shadows" title="Furtive button example"
          >btn
        </a><//
      >

      <style></style>
    <//>
  `;
}
