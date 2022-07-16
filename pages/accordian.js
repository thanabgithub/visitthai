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
          <input id="tab-one" type="radio" name="tabs" checked />
          <label for="tab-one">What is CSS Friday?</label>
          <div class="tab-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              odit ea recusandae expedita tempore voluptas voluptatem
              consectetur iusto quae, consequuntur minima hic corrupti pariatur
              facilis porro fugit vero? Perferendis, expedita.
            </p>
          </div>
        </article>

        <article class="tab">
          <input id="tab-two" type="radio" name="tabs" />
          <label for="tab-two">How it's diffrent than other CSS courses?</label>
          <div class="tab-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              odit ea recusandae expedita tempore voluptas voluptatem
              consectetur iusto quae, consequuntur minima hic corrupti pariatur
              facilis porro fugit vero? Perferendis, expedita.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis debitis commodi minima unde, nisi consequuntur
              reprehenderit. Consequuntur facere quas repellat quo, cumque
              molestiae nihil minus consequatur cupiditate beatae culpa nobis
              illo asperiores dolor voluptates iusto quod libero? Incidunt,
              tempore illo?
            </p>
          </div>
        </article>

        <article class="tab">
          <input id="tab-three" type="radio" name="tabs" />
          <label for="tab-three"
            >Is there any course completion certificate?</label
          >
          <div class="tab-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              odit ea recusandae expedita tempore voluptas voluptatem
              consectetur iusto quae, consequuntur minima hic corrupti pariatur
              facilis porro fugit vero? Perferendis, expedita.
            </p>
          </div>
        </article>

        <article class="tab">
          <input id="tab-four" type="radio" name="tabs" />
          <label for="tab-four">Who's the author of the course?</label>
          <div class="tab-content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              odit ea recusandae expedita tempore voluptas voluptatem
              consectetur iusto quae, consequuntur minima hic corrupti pariatur
              facilis porro fugit vero? Perferendis, expedita.
            </p>
          </div>
        </article>
      </section>

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

        .tab input {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -999;
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
          background: #fff;
          max-height: 0;
          overflow: hidden;

          transition: all 0.3s;
        }

        .tab input:checked ~ .tab-content {
          max-height: 40rem;
          padding: 0.5rem 1.5rem;
        }

        .tab input:checked + label,
        .tab input:focus + label,
        .tab label:hover {
          color: tomato;
        }

        .tab label::after {
          content: "▸";
          position: absolute;
          right: 1rem;
          font-size: 1.3rem;
        }

        .tab input:checked + label::after {
          transform: rotate(90deg);
        }
      </style>
    </div>
  `;
}
