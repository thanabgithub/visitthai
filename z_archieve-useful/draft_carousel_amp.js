import { html } from "htm/preact";

import dynamic from "next/dynamic";
const Head = dynamic(() => import("next/head"));
const Fragment = dynamic(() => import("preact").then((mod) => mod.Fragment));

export default function Page() {
  return html`
    <${Fragment}>
      <${Head}><meta name="description" content="Free Web tutorials" /> <//>
      <head>
        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
        ></script>

        <style>
          amp-carousel {
            display: block;
            overflow: hidden;
            position: relative;
          }
          amp-carousel {
            height: 30rem;
            width: 30rem;
            margin: auto;
          }

          amp-carousel > * {
            aspect-ratio: 1/1;
          }
        </style>
      </head>

      <amp-carousel
        width="500"
        height="500"
        layout="responsive"
        type="slides"
        role="region"
        aria-label="Basic carousel"
      >
        <amp-img
          src="/images/test/puppies.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/hamsters.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/kittens.jpg"
          width="500"
          height="500"
        ></amp-img>
      </amp-carousel>
      <amp-carousel
        width="500"
        height="500"
        layout="responsive"
        type="slides"
        role="region"
        aria-label="Basic carousel"
      >
        <amp-img
          src="/images/test/puppies.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/hamsters.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/kittens.jpg"
          width="500"
          height="500"
        ></amp-img>
      </amp-carousel>
      <amp-carousel
        width="500"
        height="500"
        layout="responsive"
        type="slides"
        role="region"
        aria-label="Basic carousel"
      >
        <amp-img
          src="/images/test/puppies.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/hamsters.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/kittens.jpg"
          width="500"
          height="500"
        ></amp-img>
      </amp-carousel>
      <amp-carousel
        width="500"
        height="500"
        layout="responsive"
        type="slides"
        role="region"
        aria-label="Basic carousel"
      >
        <amp-img
          src="/images/test/puppies.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/hamsters.jpg"
          width="500"
          height="500"
        ></amp-img>
        <amp-img
          src="/images/test/kittens.jpg"
          width="500"
          height="500"
        ></amp-img>
      </amp-carousel>
    <//>
  `;
}
