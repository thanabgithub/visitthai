import { html } from "htm/preact";
import { Fragment } from "preact";
export default function Sidebar() {
    return html` <${Fragment}>
    <script
    async
    custom-element="amp-sidebar"
    src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
    ></script>
    <style>
      amp-sidebar {
        will-change:auto;
        transition: all 0.3s;
      }

      amp-sidebar:not([open]) {
        display: none !important;
      }

      #sidebar-menu {
        padding: 1rem;
      }
      ul li a {
        color: inherit;
        text-decoration: none;
      }
    </style>
      <amp-sidebar id="sidebar1" layout="nodisplay" style="width:20rem">
      <ul id="sidebar-menu" style="list-style: none;">
        <li>
          <a href="#" class="h4">Link</a>
        </li>

        <li>
          <a href="#" class="h4">Link</a>
        </li>
      </ul>
    </amp-sidebar>

    <//>`;
  }
