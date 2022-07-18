import { html } from "htm/preact";
import Script from "next/script";
export default function Home() {
  return html`
    <div>
      <bento-base-carousel id="my-carousel">
        <img
          height="1000"
          width="1000"
          src="/images/test/puppies.jpg"
          alt="Example image: banana "
        />
        <img
          height="1000"
          width="1000"
          src="/images/test/hamsters.jpg"
          alt="Example image: bento box"
        />
        <img
          height="1000"
          width="1000"
          src="/images/test/kittens.jpg"
          alt="Example image: avocado"
        />
      </bento-base-carousel>
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
      <${Script}> console.log('test')<//>
      <style>
        bento-base-carousel {
          display: block;
          overflow: hidden;
          position: relative;
        }
        bento-base-carousel {
          height: 15rem;
          width: 15rem;
          margin: auto;
        }

        bento-base-carousel > * {
          aspect-ratio: 1/1;
        }
      </style>
    </div>
  `;
}
