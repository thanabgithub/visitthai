import { html } from "htm/preact";
import { Fragment } from "preact";
// https://ant.design/components/icon/

import { Image } from "@nextui-org/react";
function Logo() {
  return html`
    <${Image}
      src="/images/logo/apple-touch-icon.webp"
      alt="visitthai"
      width="2rem"
      height="2rem"
      objectFit="cover"
    />
  `;
}

import { SearchOutlined, HeartOutlined } from "@ant-design/icons";
function Navbar() {
  return html`<${Fragment}>
    <style amp-custom>
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

      @media screen and (min-width: 64rem) {
        #sm-md-nav {
          display: none;
        }
      }
      @media screen and (max-width: 64rem) {
        #lg-nav {
          display: none;
        }
      }
    </style>
    <div class="grd p0 local_nav--grid">
      <div id="lg-nav" class="grd-row p1 local_nav--grid--row">
        <div class="grd-row-col-1-6 bold">2rem 1/6vw</div>
        <div class="grd-row-col-3-6 txt--center h4">large</div>
        <div class="grd-row-col-2-6">
          <div class="grd p0">
            <div class="grd-row p0 justify">
              <div
                class="grd-row-col-1-6 h4 bold local_nav--grid--row--favorite"
              >
                <${HeartOutlined} />
              </div>
              <div class="grd-row-col-3-6 h6 thin small">
                <input type="search" placeholder="Search" class="my0" />
              </div>

              <div class="grd-row-col-2-6 h4 bold txt--center">
                <${SearchOutlined} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sm-md-nav" class="grd-row p1 local_nav--grid--row">
        <div class="grd-row-col-1-6 h4 bold">☰</div>
        <div class="grd-row-col-4-6 txt--center h4">2rem 1/6vw</div>
        <div class="grd-row-col-1-6 txt--right">
          <div class="grd p0">
            <div class="grd-row p0">
              <div
                class="grd-row-col-3-6 h4 bold local_nav--grid--row--favorite"
              >
                <${HeartOutlined} />
              </div>
              <div class="grd-row-col-3-6 h4 bold">
                <${SearchOutlined} />
              </div>
            </div>
          </div>
        </div>
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
