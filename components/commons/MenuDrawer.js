import { html } from "htm/preact";
import { Fragment } from "preact";

const StyleMini = dynamic(() => import("./StyleMini"), {
  ssr: false,
});

function MenuDrawer() {
  if (window !== undefined) {
    return html`
      <${Fragment}>
        <label for="drawer-control" class="drawer-toggle"></label>

        <input type="checkbox" id="drawer-control" class="drawer" />
        <div>
          <label for="drawer-control" class="drawer-close"></label>
          <a href="#">Home</a>
        </div>
        <${StyleMini} />
      <//>
    `;
  }
}

export default MenuDrawer;
