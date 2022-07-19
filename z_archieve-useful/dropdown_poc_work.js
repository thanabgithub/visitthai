import { html } from "htm/preact";
import Link from "next/link";
export default function Home() {
  return html`
    <div>
      <h1>Home</h1>
      <${Link} href="/btn">
        <a class="w100--s my1 btn" title="Furtive button example">btn </a><//
      >
      <section class="tab-group">
        <article class="tab">
          <input id="tab-one" type="checkbox" name="tabs" />
          <label for="tab-one">What is CSS Friday?</label>
          <div class="tab-content">
            <label for="tab-one">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              odit ea recusandae expedita tempore voluptas voluptatem
              consectetur iusto quae, consequuntur minima hic corrupti pariatur
              facilis porro fugit vero? Perferendis, expedita.
            </label>
          </div>
        </article>
      </section>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <div>dummy</div>
      <style>
        .tab-group {
          max-width: 40rem;
          width: 100%;
          margin: 0 auto;
          margin-top: 5rem;
        }

        .tab {
          position: relative;
          width: 100%;
          margin-bottom: 2rem;
          box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.12);
        }

        .tab > input {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 999;
          border-width: 0;
        }

        .tab label {
          display: block;
          background: #fff;
          color: #000;
          font-weight: bold;
          line-height: 1.3;
          text-transform: capitalize;
          padding: 1.5rem;
          border-radius: 4px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .tab-content {
          position: absolute;
          left: 0;
          top: calc(+100%);
          background-color: white;
          padding: 0.75rem;
          border-radius: 0.25rem;
          box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.16);
          -webkit-box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.16);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
        }
        .tab-content > input {
          position: absolute;
          color: red;
          z-index: 1000;
        }
        .tab input:focus ~ .tab-content,
        .tab:active input ~ .tab-content,
        .tab input ~ .tab-content:hover,
        .tab:hover input ~ .tab-content {
          transform: translateY(0px);
          opacity: 1;
          pointer-events: auto;
        }
      </style>
    </div>
  `;
}
