import { html } from "htm/preact";
import { Fragment } from "preact";

import Script from "next/script";
// https://www.youtube.com/watch?v=BMuFBYw91UQ
// use <script> after htm/JSX allow us to execute after all html is loaded.
import OnOffSideAreaWrapper from "/components/commons/OnOffSideAreaWrapper";


export default function NewsHome() {
  return html`
    <${Fragment}>
    <head>

    </head>
    Hello World
    <//>
  `;
}
