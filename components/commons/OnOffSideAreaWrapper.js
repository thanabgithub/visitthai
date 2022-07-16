import { html } from "htm/preact";
import { Fragment } from "preact";

export default function Home(props) {
  return html`
    <${Fragment}>
      <div class="grd p0 on-off-side-area--grid">
        <div class="grd-row p0 on-off-side-area--row">
          <div class="grd-row-col-1-6 on-off-side-area--left-dummy"></div>
          <div class="grd-row-col-4-6--lg">${props.children}</div>
          <div
            class="grd-row-col-1-6 center on-off-side-area--right-dummy"
          ></div>
        </div>
      </div>
    <//>
  `;
}
