import { html } from "htm/preact";
// https://blog.prototypr.io/how-to-make-perfect-shadows-in-ui-design-2773e32074da
// https://brumm.af/shadows
function StyleCustom() {
  const smThres = 32;
  const mdThres = 36;
  const lgThres = 40;

  return html`<style>
    body {
      --screen-cus-unit-nkq: min(1vh, 1vw);
      margin: 0;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation; /* disable double-tab zoom iOS */
      padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); /* https://css-tricks.com/the-notch-and-css/ */
      box-sizing: border-box;
    }
    aside,
    details,
    main,
    summary {
      display: block;
    }
    template {
      display: none;
    }
    a:active,
    a:hover {
      outline: 0;
    }
    abbr[title] {
      border-bottom: 1px dotted;
    }
    b,
    strong {
      font-weight: 700;
    }
    dfn {
      font-style: italic;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    figure {
      margin: 1em 40px;
    }
    hr {
      box-sizing: content-box;
      height: 0;
    }
    pre {
      overflow: auto;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
      color: inherit;
      font: inherit;
      margin: 0;

    }
    button {
      overflow: visible;
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }
    button,
    select {
      text-transform: none;
    }
    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      -webkit-appearance: button;
      cursor: pointer;
    }
    button[disabled],
    html input[disabled] {
      cursor: default;
    }
    button::-moz-focus-inner,
    input::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    input {
      line-height: normal;
      border-radius: 3px;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    input[type="search"] {
      -webkit-appearance: textfield;
      box-sizing: border-box;
    }
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }
    legend {
      border: 0;
      padding: 0;
    }
    textarea {
      overflow: auto;
    }
    optgroup {
      font-weight: 700;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    td,
    th {
      padding: 0;
    }
    .grd {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .grd-row {
      box-sizing: border-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      max-width: 100%;
    }
    .grd-row-col-1-6 {
      max-width: 16.6666666667%;
      -ms-flex-preferred-size: 16.6666666667%;
      flex-basis: 16.6666666667%;
    }
    .grd-row-col-2-6 {
      max-width: 33.3333333333%;
      -ms-flex-preferred-size: 33.3333333333%;
      flex-basis: 33.3333333333%;
    }
    .grd-row-col-3-6 {
      max-width: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
    }
    .grd-row-col-4-6 {
      max-width: 66.6666666667%;
      -ms-flex-preferred-size: 66.6666666667%;
      flex-basis: 66.6666666667%;
    }
    .grd-row-col-5-6 {
      max-width: 83.3333333333%;
      -ms-flex-preferred-size: 83.3333333333%;
      flex-basis: 83.3333333333%;
    }
    .grd-row-col-6 {
      max-width: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
    }
    .grd-row-col-1-6,
    .grd-row-col-1-6--lg,
    .grd-row-col-1-6--md,
    .grd-row-col-1-6--sm,
    .grd-row-col-2-6,
    .grd-row-col-2-6--lg,
    .grd-row-col-2-6--md,
    .grd-row-col-2-6--sm,
    .grd-row-col-3-6,
    .grd-row-col-3-6--lg,
    .grd-row-col-3-6--md,
    .grd-row-col-3-6--sm,
    .grd-row-col-4-6,
    .grd-row-col-4-6--lg,
    .grd-row-col-4-6--md,
    .grd-row-col-4-6--sm,
    .grd-row-col-5-6,
    .grd-row-col-5-6--lg,
    .grd-row-col-5-6--md,
    .grd-row-col-5-6--sm,
    .grd-row-col-6,
    .grd-row-col-6--lg,
    .grd-row-col-6--md,
    .grd-row-col-6--sm {
      -ms-flex: 1;
      flex: 1;
      -ms-flex-direction: column;
      flex-direction: column;
      box-sizing: border-box;
    }
    .grd-row-col-1-6--lg,
    .grd-row-col-1-6--md,
    .grd-row-col-1-6--sm,
    .grd-row-col-2-6--lg,
    .grd-row-col-2-6--md,
    .grd-row-col-2-6--sm,
    .grd-row-col-3-6--lg,
    .grd-row-col-3-6--md,
    .grd-row-col-3-6--sm,
    .grd-row-col-4-6--lg,
    .grd-row-col-4-6--md,
    .grd-row-col-4-6--sm,
    .grd-row-col-5-6--lg,
    .grd-row-col-5-6--md,
    .grd-row-col-5-6--sm,
    .grd-row-col-6--lg,
    .grd-row-col-6--md,
    .grd-row-col-6--sm {
      max-width: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
    }
    @media screen and (min-width: calc(${smThres} * 1rem)) {
      .grd-row-col-1-6--sm {
        max-width: 16.6666666667%;
        -ms-flex-preferred-size: 16.6666666667%;
        flex-basis: 16.6666666667%;
      }
      .grd-row-col-2-6--sm {
        max-width: 33.3333333333%;
        -ms-flex-preferred-size: 33.3333333333%;
        flex-basis: 33.3333333333%;
      }
      .grd-row-col-3-6--sm {
        max-width: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
      }
      .grd-row-col-4-6--sm {
        max-width: 66.6666666667%;
        -ms-flex-preferred-size: 66.6666666667%;
        flex-basis: 66.6666666667%;
      }
      .grd-row-col-5-6--sm {
        max-width: 83.3333333333%;
        -ms-flex-preferred-size: 83.3333333333%;
        flex-basis: 83.3333333333%;
      }
      .grd-row-col-6--sm {
        max-width: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
      }
    }
    @media screen and (min-width: calc(${mdThres} * 1rem)) {
      .grd-row-col-1-6--md {
        max-width: 16.6666666667%;
        -ms-flex-preferred-size: 16.6666666667%;
        flex-basis: 16.6666666667%;
      }
      .grd-row-col-2-6--md {
        max-width: 33.3333333333%;
        -ms-flex-preferred-size: 33.3333333333%;
        flex-basis: 33.3333333333%;
      }
      .grd-row-col-3-6--md {
        max-width: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
      }
      .grd-row-col-4-6--md {
        max-width: 66.6666666667%;
        -ms-flex-preferred-size: 66.6666666667%;
        flex-basis: 66.6666666667%;
      }
      .grd-row-col-5-6--md {
        max-width: 83.3333333333%;
        -ms-flex-preferred-size: 83.3333333333%;
        flex-basis: 83.3333333333%;
      }
      .grd-row-col-6--md {
        max-width: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
      }
    }
    @media screen and (min-width: calc(${lgThres} * 1rem)) {
      .grd-row-col-1-6--lg {
        max-width: 16.6666666667%;
        -ms-flex-preferred-size: 16.6666666667%;
        flex-basis: 16.6666666667%;
      }
      .grd-row-col-2-6--lg {
        max-width: 33.3333333333%;
        -ms-flex-preferred-size: 33.3333333333%;
        flex-basis: 33.3333333333%;
      }
      .grd-row-col-3-6--lg {
        max-width: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
      }
      .grd-row-col-4-6--lg {
        max-width: 66.6666666667%;
        -ms-flex-preferred-size: 66.6666666667%;
        flex-basis: 66.6666666667%;
      }
      .grd-row-col-5-6--lg {
        max-width: 83.3333333333%;
        -ms-flex-preferred-size: 83.3333333333%;
        flex-basis: 83.3333333333%;
      }
      .grd-row-col-6--lg {
        max-width: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
      }
    }
    *,
    :after,
    :before {
      box-sizing: border-box;
    }
    .measure {
      max-width: calc(${mdThres} * 1rem);
      margin: 0 auto;
    }
    a {
      color: #3498db;
    }
    a:active,
    a:focus,
    a:hover {
      color: #258bcf;
    }
    .bg--red {
      background-color: #e74c3c;
    }
    .bg--orange {
      background-color: #f39c12;
    }
    .bg--blue {
      background-color: #3498db;
    }
    .bg--green {
      background-color: #25ba84;
    }
    .bg--white {
      background-color: #fff;
    }
    .bg--light-gray {
      background-color: rgba(216, 216, 216, 0.99);
    }
    .bg--mid-gray {
      background-color: rgba(144, 144, 144, 0.99);
    }
    .bg--dark-gray {
      background-color: rgba(72, 72, 72, 0.99);
    }
    .bg--off-white {
      background-color: rgba(250, 250, 250, 0.99);
    }
    .fnt--red {
      color: #e74c3c;
    }
    .fnt--orange {
      color: #f39c12;
    }
    .fnt--blue {
      color: #3498db;
    }
    .fnt--green {
      color: #25ba84;
    }
    .fnt--white {
      color: #fff;
    }
    .fnt--light-gray {
      color: rgba(216, 216, 216, 0.99);
    }
    .fnt--mid-gray {
      color: rgba(144, 144, 144, 0.99);
    }
    .fnt--dark-gray {
      color: rgba(72, 72, 72, 0.99);
    }
    .fnt--off-white {
      color: rgba(250, 250, 250, 0.99);
    }
    .m0 {
      margin: 0;
    }
    .mx0 {
      margin-left: 0;
      margin-right: 0;
    }
    .my0 {
      margin-top: 0;
      margin-bottom: 0;
    }
    .m1 {
      margin: 1rem;
    }
    .mx1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .my1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .m2 {
      margin: 2rem;
    }
    .mx2 {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .my2 {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .p0 {
      padding: 0;
    }
    .px0 {
      padding-left: 0;
      padding-right: 0;
    }
    .py0 {
      padding-top: 0;
      padding-bottom: 0;
    }
    .p1 {
      padding: 1rem;
    }
    .px1 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .py1 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .p2 {
      padding: 2rem;
    }
    .px2 {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .py2 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    html {
      font-size: 12px;
    }
    @media screen and (min-width: calc(${smThres} * 1rem)) and (max-width: calc(${mdThres} * 1rem)) {
      html {
        font-size: 15px;
      }
    }
    @media screen and (min-width: calc(${mdThres} * 1rem)) {
      html {
        font-size: 16px;
      }
    }
    body {
      font-family: HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue",
        Helvetica, Arial, sans-serif;
      font-weight: 400;
      line-height: 1.85;
      color: #333;
    }
    .p,
    p {
      font-size: 1rem;
      margin-bottom: 1.3rem;
    }
    .h1,
    .h2,
    .h3,
    .h4,
    h1,
    h2,
    h3,
    h4 {
      margin: 1.414rem 0 0.5rem;
      font-weight: inherit;
      line-height: 1.42;
    }
    .h1,
    h1 {
      margin-top: 0;
      font-size: 3.998rem;
    }
    .h2,
    h2 {
      font-size: 2.827rem;
    }
    .h3,
    h3 {
      font-size: 1.999rem;
    }
    .h4,
    h4 {
      font-size: 1.414rem;
    }
    .h5,
    h5,
    table th {
      font-size: 1.121rem;
    }
    .h6,
    h6 {
      font-size: 0.88rem;
    }
    .btn--s,
    .small,
    small {
      font-size: 0.707em;
    }
    code,
    pre {
      font-family: Monaco, "Lucida Console", Courier, monospace;
    }
    .italic {
      font-style: italic;
    }
    .thin {
      font-weight: 100;
    }
    .bold {
      font-weight: 700;
    }
    .caps,
    table th {
      font-variant: small-caps;
    }
    .justify {
      text-align: justify;
    }
    .ellipsis {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .muted {
      opacity: 0.7;
    }
    .clearfix:after {
      content: "";
      display: table;
      clear: both;
    }
    .flt--left {
      float: left;
    }
    .flt--right {
      float: right;
    }
    .flt--none {
      float: none;
    }
    .center {
      margin: auto auto;
    }
    .txt--center {
      text-align: center;
    }
    .txt--right {
      text-align: right;
    }
    .txt--left,
    table th {
      text-align: left;
    }
    .oflow-y--scroll {
      overflow-y: scroll;
    }
    .w100,
    .w100--s {
      width: 100%;
      display: block;
    }
    @media screen and (min-width: calc(${smThres} * 1rem)) {
      .w100--s {
        width: auto;
        display: inline-block;
      }
    }
    canvas,
    iframe,
    img,
    select,
    svg,
    textarea,
    video {
      max-width: 100%;
    }
    .brdr--rounded,
    .btn,
    .btn--blue,
    .btn--gray,
    .btn--green,
    .btn--link,
    .btn--red {
      border-radius: 3px;
    }
    .brdr--light-gray {
      border: thin solid rgba(216, 216, 216, 0.99);
    }
    .brdr--mid-gray {
      border: thin solid rgba(144, 144, 144, 0.99);
    }
    .brdr--dark-gray {
      border: thin solid rgba(72, 72, 72, 0.99);
    }
    .brdr--off-white {
      border: thin solid rgba(250, 250, 250, 0.99);
    }
    .btn,
    .btn--blue,
    .btn--gray,
    .btn--green,
    .btn--link,
    .btn--red {
      padding: 0.5rem 1rem;
      border: 2px solid #ccc;
      color: #333;
      text-decoration: none;
      text-align: center;
      background: 0 0;
    }
    .btn:active,
    .btn:focus,
    .btn:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: #292929;
    }
    .btn--link {
      border-color: transparent;
      color: #3498db;
    }
    .btn--link:hover {
      background-color: transparent;
      color: #2383c4;
    }
    .btn--blue {
      border-color: #2d94da;
      background-color: #3498db;
      color: #fff;
    }
    .btn--blue:active,
    .btn--blue:focus,
    .btn--blue:hover {
      color: #fff;
      background-color: #258bcf;
    }
    .btn--green {
      border-color: #24b37f;
      background-color: #25ba84;
      color: #fff;
    }
    .btn--green:active,
    .btn--green:focus,
    .btn--green:hover {
      color: #fff;
      background-color: #21a777;
    }
    .btn--gray {
      border-color: rgba(68, 68, 68, 0.99);
      background-color: rgba(72, 72, 72, 0.99);
      color: #fff;
    }
    .btn--gray:active,
    .btn--gray:focus,
    .btn--gray:hover {
      color: #fff;
      background-color: rgba(65, 65, 65, 0.99);
    }
    .btn--red {
      border-color: #e5402f;
      background-color: #e74c3c;
      color: #fff;
    }
    .btn--red:active,
    .btn--red:focus,
    .btn--red:hover {
      color: #fff;
      background-color: #e43422;
    }
    .btn--s {
      padding: 0.5rem;
    }
    .list--unstyled {
      list-style-type: none;
    }
    input,
    select,
    textarea {
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      display: block;
      width: 100%;
      box-shadow: none;
      border: thin solid rgba(216, 216, 216, 0.99);
    }
    input[type="submit"] {
      margin-top: 0.85rem;
    }
    input[type="checkbox"] {
      display: inline-block;
      vertical-align: bottom;
      width: auto;
    }
    .media {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: start;
      align-items: flex-start;
    }
    .media .media-figure {
      margin-right: 1em;
    }
    .media .media-body {
      -ms-flex: 1 0 0;
      flex: 1 0 0;
    }
    table > thead {
      border-bottom: thin solid rgba(250, 250, 250, 0.99);
    }
    table td,
    table th {
      padding: 0.25rem;
      word-wrap: normal;
      line-height: 1;
    }
    @media screen and (max-width: calc(${lgThres} * 1rem)) {
      .on-off-side-area--grid
        .on-off-side-area--row
        .on-off-side-area--left-dummy,
      .on-off-side-area--grid
        .on-off-side-area--row
        .on-off-side-area--right-dummy {
        width: auto;
      }
    }

    .shadows {
      box-shadow: 0px 0.1px 2.2px rgba(0, 0, 0, 0.011),
        0px 0.3px 5.3px rgba(0, 0, 0, 0.016), 0px 0.6px 10px rgba(0, 0, 0, 0.02),
        0px 1.1px 17.9px rgba(0, 0, 0, 0.024),
        0px 2.1px 33.4px rgba(0, 0, 0, 0.029), 0px 5px 80px rgba(0, 0, 0, 0.04);
    }
    .adj-pos {
      justify-content: center;
      align-items: center;
    }
    .shadow-lknxy {
      --border-radius-01: calc(1.5*var(--screen-cus-unit-nkq));
      --shade-01: #72727480;
      --shade-02: #cccdd186;
      --shade-03: #f3f4f87c;
      --shade-04: #ffffff7c;

      --shade-len-01: calc(0.3*var(--border-radius-01));
      --shade-len-02: calc(0.4*var(--border-radius-01));

      --borderWidth: 10px;

      border-radius: var(--border-radius-01);
      border: none;
      box-shadow:
        var(--shade-len-01) var(--shade-len-01) var(--shade-len-01) var(--shade-04) inset,
        calc(-1*var(--shade-len-01)) calc(-1*var(--shade-len-01)) var(--shade-len-01) var(--shade-01) inset,
        var(--shade-len-02) var(--shade-len-02) var(--border-radius-01) var(--shade-01),
        calc(-1*var(--shade-len-02)) calc(-1*var(--shade-len-02)) var(--border-radius-01) var(--shade-04);
    }

    .shadow-lknxy:active {
      box-shadow:
      var(--shade-len-01) var(--shade-len-01) var(--shade-len-01) var(--shade-04) ,
      calc(-1*var(--shade-len-01)) calc(-1*var(--shade-len-01)) var(--shade-len-01) var(--shade-01) ,
      var(--shade-len-02) var(--shade-len-02) var(--border-radius-01) var(--shade-01) inset,
      calc(-1*var(--shade-len-02)) calc(-1*var(--shade-len-02)) var(--border-radius-01) var(--shade-04) inset;
    }
  </style>`;
}

export default StyleCustom;
