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
    const navigator = window.navigator;
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      const crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    console.log(navigator.geolocation.getCurrentPosition(success, error, options));
    if (evt.pointerType === "touch") {

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
  const handleGotPointerCapture = async(evt) => {
    console.log("handleGotPointerCapture")
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
            font-size: 1rem;
            border-radius: 0.5em;
            width: min(35vh,11rem);
            height: min(35vh,11rem);
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
            height: max(45vh,30rem);
          }
          .grd-row .full-screen {
            height: max(90vh, 60rem);
          }

          .grd-row-col-3-6--lg .grd-row-col-3-6--lg-centering * {
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
                  <h3>Bring your Ideas Alive</h3>
                </div>
              </div>
              <div class="grd-row-col-3-6--lg half-screen">
                <div class="grd-row-col-3-6--lg-centering">
                  <button id="homeWelcomeButton" onpointerenter=${handlePointerEnter} onpointerdown=${handlePointerDown} gotpointercapture=${handleGotPointerCapture} onpointerup=${handlePointerUp} class="h4 hero-button bold ">Interactable</button>
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
              <div class="grd-row-col-3-6--lg full-screen">
                <div class="h3 grd-row-col-3-6--lg-centering  adj-pos">
                  Run your App  <br/> on Web Browser
                </div>
              </div>

              <div class="grd-row-col-3-6--lg full-screen">
                <div>
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
