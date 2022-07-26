import { html } from "htm/preact";
import { Fragment } from "preact";
import Calculator from "/components/index/calculator/index";
import Script from "next/script";
// https://www.youtube.com/watch?v=BMuFBYw91UQ
// use <script> after htm/JSX allow us to execute after all html is loaded.
import OnOffSideAreaWrapper from "/components/commons/OnOffSideAreaWrapper";


import PreloaderXcvw from "/components/commons/PreloaderXcvw";
export default function Home() {
  let hasInteracted = false;

  const handlePointerEnter = () => {
    hasInteracted = true;
    return;
  }

  const handlePointerDown = () => {
    if(hasInteracted){
    audioButtonPointerDown.play();
    audioButtonPointerDown.currentTime=0;}
  }

  const handlePointerUp = () => {
    audioButtonPointerUp.play();
    audioButtonPointerUp.currentTime=0;
  }
  const handlePointerLeave = () => {
    if (evt.pointerType === "touch") {
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
            user-select: none;
          }
          .hero-button {
            will-change: auto;
            user-select: none;
            color: #434343;
            padding: auto;
            margin: auto;
            font-size: 1.5rem;
            aspect-ratio: 1;
            height: min(min(40vh,70vw, 10rem));
            background: #f5f5f5;
            border: none;
            transition: all ease-in-out .1s;
          }
          .hero-button:active {
            font-size: 1.47rem;
            color: transparent;
            text-shadow:  #282828 0 0 1px;
          }
          .grd-row-col-3-6--lg .grd-row-col-3-6--lg-centering {
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
        <${Script}>
          audioButtonPointerUp.volume=0.1;
        <//>
      </head>
      <audio id="audioButtonPointerDown" src="audios/button-pointerdown.mp3" ></audio>
      <audio id="audioButtonPointerUp" src="audios/button-pointerup.mp3" ></audio>
      <div class="hero-bg" >
        <${OnOffSideAreaWrapper}>
          <div class="grd p0">
            <div class="grd-row p0">
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="grd-row-col-3-6--lg-centering txt--center">
                <header>
                  <h3 class="my0">Bring your contents alive  <br/> by Faster Response</h3></header>
                </div>
              </div>
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="grd-row-col-3-6--lg-centering grd-row-col-3-6--lg-centering--fit" onpointerenter=${handlePointerEnter}>
                  <button id="homeWelcomeButton"  class="hero-button bold shadow-lknxy"  onpointerdown=${handlePointerDown} onpointerleave=${handlePointerLeave} onpointerup=${handlePointerUp}>Interactable</button>
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

        <${OnOffSideAreaWrapper}>
          <div class="grd p0">
            <div class="grd-row p0">
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="grd-row-col-3-6--lg-centering txt--center">
                  <h3> Choose Smart Design </h3>
                </div>
              </div>
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="grd-row-col-3-6--lg-centering adj-pos">
                  <div>
                    <${PreloaderXcvw} />
                    <h6 class="thin m0 txt--center"> developed by <a href="https://codepen.io/vishnu-s-nair/full/RwMgrER"> Vishnu S Nair </a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <//>
      </div>
    <//>
  `;
}
