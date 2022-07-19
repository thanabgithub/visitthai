import { html } from "htm/preact";
import Script from "next/script";
require("default-passive-events");
export default function Home() {
  return html`
    <div>
      <style>
        bento-base-carousel {
          display: block;
          overflow: hidden;
          position: relative;
        }
        bento-base-carousel {
          height: 30rem;
          width: 30rem;
          margin: auto;
        }

        bento-base-carousel > * {
          aspect-ratio: 1/1;
        }

        .carousel-prev,
        .carousel-next {
          width: 40px;
          height: 40px;
          padding: 20px;
          border: none;
          outline: none;
          opacity: 0.5;
        }
      </style>

      <${Script}
        type="module"
        src="https://cdn.ampproject.org/bento.mjs"
        crossorigin="anonymous"
      />
      <${Script}
        nomodule
        src="https://cdn.ampproject.org/bento.js"
        crossorigin="anonymous"
      />
      <${Script}
        type="module"
        src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
        crossorigin="anonymous"
      />
      <${Script}
        nomodule
        src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
        crossorigin="anonymous"
      />
      <${Script}> console.log('from draft_carousel_bentojs htm script')<//>
      <bento-base-carousel id="my-carousel-1">
        <img
          height="500"
          width="500"
          src="/images/test/puppies.jpg"
          alt="Example image: banana "
        />
        <img
          height="500"
          width="500"
          src="/images/test/hamsters.jpg"
          alt="Example image: bento box"
        />
        <img
          height="500"
          width="500"
          src="/images/test/kittens.jpg"
          alt="Example image: avocado"
        />
        <button
          slot="next-arrow"
          class="carousel-next"
          aria-label="Next"
        ></button>
        <button
          slot="prev-arrow"
          class="carousel-prev"
          aria-label="Previous"
        ></button>
      </bento-base-carousel>
      <bento-base-carousel id="my-carousel-2">
        <img
          height="500"
          width="500"
          src="/images/test/puppies.jpg"
          alt="Example image: banana "
        />
        <img
          height="500"
          width="500"
          src="/images/test/hamsters.jpg"
          alt="Example image: bento box"
        />
        <img
          height="500"
          width="500"
          src="/images/test/kittens.jpg"
          alt="Example image: avocado"
        />
        <button
          slot="next-arrow"
          class="carousel-next"
          aria-label="Next"
        ></button>
        <button
          slot="prev-arrow"
          class="carousel-prev"
          aria-label="Previous"
        ></button>
      </bento-base-carousel>
      <bento-base-carousel id="my-carousel-1">
        <img
          height="500"
          width="500"
          src="/images/test/puppies.jpg"
          alt="Example image: banana "
        />
        <img
          height="500"
          width="500"
          src="/images/test/hamsters.jpg"
          alt="Example image: bento box"
        />
        <img
          height="500"
          width="500"
          src="/images/test/kittens.jpg"
          alt="Example image: avocado"
        />
        <button
          slot="next-arrow"
          class="carousel-next"
          aria-label="Next"
        ></button>
        <button
          slot="prev-arrow"
          class="carousel-prev"
          aria-label="Previous"
        ></button>
      </bento-base-carousel>
      <bento-base-carousel id="my-carousel-2">
        <img
          height="500"
          width="500"
          src="/images/test/puppies.jpg"
          alt="Example image: banana "
        />
        <img
          height="500"
          width="500"
          src="/images/test/hamsters.jpg"
          alt="Example image: bento box"
        />
        <img
          height="500"
          width="500"
          src="/images/test/kittens.jpg"
          alt="Example image: avocado"
        />
        <button
          slot="next-arrow"
          class="carousel-next"
          aria-label="Next"
        ></button>
        <button
          slot="prev-arrow"
          class="carousel-prev"
          aria-label="Previous"
        ></button>
      </bento-base-carousel>
    </div>
  `;
}
