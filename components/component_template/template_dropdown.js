import { html } from "htm/preact";
import Link from "next/link";
export default function Home() {
  let uniqueId = new Date();
  return html`
    <div>
      <h1>Home</h1>
      <${Link} href="/btn">
        <a class="w100--s my1 btn" title="Furtive button example">btn </a><//
      >
      <div class="dummy-position-ref">
        <button id=${uniqueId} class="dropdown-button bg--red">
          What is CSS Friday?
        </button>

        <label for=${uniqueId} class="dropdown-contents bg--red">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi odit ea
          recusandae expedita tempore voluptas voluptatem consectetur iusto
          quae, consequuntur minima hic corrupti pariatur facilis porro fugit
          vero? Perferendis, expedita.
        </label>
      </div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>

      <style>
        .dummy-position-ref {
          position: relative;
          max-width: 40rem;
          width: 100%;
          margin: 0 auto;
          margin-top: 5rem;
        }

        .dropdown-button {
          position: absolute;
        }

        .dropdown-contents {
          position: absolute;
          z-index: 3;
          left: 100px;
          top: -200px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
        }

        .dropdown-button:focus ~ .dropdown-contents,
        .dropdown-button:active ~ .dropdown-contents,
        .dropdown-button ~ .dropdown-contents:hover,
        .dropdown-button:hover ~ .dropdown-contents {
          transform: translateY(0px);
          opacity: 1;
          pointer-events: auto;
        }
      </style>
    </div>
  `;
}
