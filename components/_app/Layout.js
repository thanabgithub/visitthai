import { html } from "htm/preact";
import Navbar from "./Navbar";
import OnOffSideAreaWrapper from "/components/commons/OnOffSideAreaWrapper";
import dynamic from "next/dynamic";

import { Fragment } from "preact";
const Footer = dynamic(() => import("./Footer"));

function Layout(props) {
  return html`
    <${Fragment}>
      <style>
        .custom-shadow {
          box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
        }
      </style>

      <${OnOffSideAreaWrapper}>
        <${Navbar} />
      <//>

      <main>${props.children}</main>

      <${OnOffSideAreaWrapper}>
        <${Footer} />
      <//>
    <//>
  `;
}

export default Layout;
