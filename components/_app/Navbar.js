import { html } from "htm/preact";
import { Fragment } from "preact";
// https://ant.design/components/icon/

import { Image } from "@nextui-org/react";
function Logo() {
  return html`
    <${Image}
      src="/images/logo/favicon-32x32.webp"
      alt="SpeedWeb"
      width="2rem"
      height="2rem"
      objectFit="cover"
    />
  `;
}

function Navbar() {
  return html`<${Fragment}>
  <head>

    <style>

      .local_nav--grid .local_nav--grid--row * {
        margin: 0;
        padding: auto;
      }
      .local_nav--grid
        .local_nav--grid--row
        .local_nav--grid--row--favorite:active,
      .local_nav--grid
        .local_nav--grid--row
        .local_nav--grid--row--favorite:focus,
      .local_nav--grid
        .local_nav--grid--row
        .local_nav--grid--row--favorite:hover {
        color: #e74c3c;
      }

      @media screen and (min-width: 32rem) {
        #sm-md-nav {
          display: none;
        }
      }
      @media screen and (max-width: 32rem) {
        #lg-nav {
          display: none;
        }
      }
      #sm-md-nav--sidebar-button {
        background-color: inherit;
        border: none;
      }


    </style>
    </head>
    <div class="grd p0 local_nav--grid">
      <div id="lg-nav" class="grd-row p0 local_nav--grid--row adj-pos">
        <div class="grd-row-col-2-6 txt--center h3">σ SpeedWeb</div>
        <div class="grd-row-col-4-6 txt--center h4">List of Menu</div>
      </div>

      <div id="sm-md-nav" class="grd-row p1 local_nav--grid--row adj-pos">
        <button
          id="sm-md-nav--sidebar-button"
          on="tap:sidebar1"
          class="grd-row-col-1-6 h3 bold"
        >
          ☰
        </button>

        <div class="grd-row-col-5-6 txt--center h3 adj-pos">σ SpeedWeb</div>
      </div>
    </div>
  <//>`;
}
// .grd .grd-row .grid-row__item_end {
//     justify-self: end;
//   }
// function Navbar() {
//     return html`<div class="grd-row p1">
//       <div id="my-menu" class="grd-row-col-1-6 h4 bold">☰</div>
//       <div id="my-logo" class="grd-row-col-3-6 txt--center h4">logo</div>
//       <div class="grd-row-col-2-6">
//         <div class="grd">
//           <div class="grd-row">
//             <div class="grd-row-col-3-6">fav</div>
//             <div class="grd-row-col-3-6">sea</div>
//           </div>
//         </div>
//       </div>
//       <style>
//         #my-menu,
//         #my-logo {
//           margin: 0;
//         }
//       </style>
//     </div>`;
//   }
export default Navbar;
// <${Heart} set="light" />
// <${Search} set="light" />
