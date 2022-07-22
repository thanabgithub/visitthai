import { html } from "htm/preact";
import { Fragment } from "preact";
import Calculator from "/components/index/calculator/index";
import Script from "next/script";
// https://www.youtube.com/watch?v=BMuFBYw91UQ
// use <script> after htm/JSX allow us to execute after all html is loaded.
import OnOffSideAreaWrapper from "/components/commons/OnOffSideAreaWrapper";


export default function Home() {


  const handlePointerEnter = async() => {
    return;
  }

  const handlePointerDown = async(evt) => {

    if (evt.pointerType === "touch") {
      const navigator = window.navigator;
      navigator.vibrate(1000000000);
      }
    audioButtonPointerDown.play();
    audioButtonPointerDown.currentTime=0;
  }

  const handlePointerUp = async(evt) => {
    audioButtonPointerUp.play();
    if (evt.pointerType === "touch") {
      const navigator = window.navigator;
      navigator.vibrate(0);
    }
    audioButtonPointerUp.currentTime=0;
  }
  const handlePointerLeave = async(evt) => {

    if (evt.pointerType === "touch") {
      const navigator = window.navigator;
      navigator.vibrate(0);
      audioButtonPointerUp.play();
      audioButtonPointerUp.currentTime=0;
    }

  }
  return html`
    <${Fragment}>
      <head>
        <style>
          .hero-bg {
            background-color: #f5f5f5;
            text-shadow: 1px 1px 1px #c5c5c5, -1px -1px 1px #ffffff;
          }
          .hero-button {
            will-change: auto;
            user-select: none;
            color: #434343;
            padding: auto;
            margin: auto;
            font-size: 1.5rem;
            border-radius: 0.5em;
            aspect-ratio: 1;
            height: min(35vh,11rem);
            width: auto;
            background: #f5f5f5;
            border: 1px solid #f5f5f5;
            transition: all .3s;
            box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
          }
          .hero-button:active {
            color: #282828;
            box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
          }
          .grd-row-col-3-6--lg .grd-row-col-3-6--lg-centering{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

          }
          .grd-row .half-screen {
            height: 45vh;
          }
          .grd-row .full-screen {
            height: 90vh;
          }

          .grd-row-col-3-6--lg .grd-row-col-3-6--lg-centering .grd-row-col-3-6--lg-centering--fit * {
            margin: 0;
          }

        </style>
        <meta name="description" content="SpeedWeb Landing Page Interactive Smart Responsive" />
        <${Script}>audioButtonPointerUp.volume=0.1;<//>
      </head>
      <audio id="audioButtonPointerDown" src="audios/button-pointerdown.mp3" preload></audio>
      <audio id="audioButtonPointerUp" src="audios/button-pointerup.mp3" preload></audio>
      <div class="hero-bg">
        <${OnOffSideAreaWrapper}>
          <div class="grd p0">
            <div class="grd-row p0">
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="grd-row-col-3-6--lg-centering txt--center">
                <header>
                  <h3>Bring your contents alive  <br/> by Faster Response</h3></header>
                </div>
              </div>
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="grd-row-col-3-6--lg-centering grd-row-col-3-6--lg-centering--fit">
                  <button id="homeWelcomeButton" onpointerenter=${handlePointerEnter} onpointerdown=${handlePointerDown} onpointerleave=${handlePointerLeave} onpointerup=${handlePointerUp} class="hero-button bold ">Interactable</button>
                </div>
              </div>
            </div>
          </div>
        <//>
      </div>
      <div>
        <${OnOffSideAreaWrapper}>
          <div class="grd p0">
            <div class="grd-row p0">
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="h3 grd-row-col-3-6--lg-centering txt--center">
                  Run your App  <br/> on Web Browser
                </div>
              </div>

              <div class="grd-row-col-3-6--lg-centering grd-row-col-3-6--lg full-screen">
                <div z>
                  <${Calculator} />
                </div>
              </div>
            </div>
          </div>
        <//>
      </div>
    <//>
  `;
}
