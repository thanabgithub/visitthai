import { html } from "htm/preact";
import { Fragment } from "preact";
// https://codepen.io/vishnu-s-nair/pen/RwMgrER
export default function Preloader() {
  return html`<${Fragment}>
  <head>

    <style>

        .preloader-xcvw {
            --fg: #17181c;
            --shade1: #727274;
            --shade2: #cccdd1;
            --shade3: #f3f4f8;
            --shade4: #ffffff;
            --dur1: 1s;
            --dur2: 6s;
            font-size: calc(16px + (32 - 16)*(100vw - 320px)/(2560 - 320));
        }
        .preloader-xcvw {
            background-image: linear-gradient(145deg,var(--shade3),var(--shade2));
            color: var(--fg);
            display: flex;
            font: 1em/1.5, sans-serif;
            flex-direction: column;
            height: 100%;
        }
        .preloader-xcvw {
            animation: largePopOut var(--dur1) linear;
            border-radius: 50%;
            box-shadow:
                0.15em 0.15em 0.15em var(--shade4) inset,
                -0.15em -0.15em 0.15em var(--shade1) inset,
                1em 1em 2em var(--shade1),
                -1em -1em 2em var(--shade4);
            position: relative;
            width: 12em;
            height: 12em;
        }
        .preloader-xcvw__square {
            animation: smallPopOut1 var(--dur1) linear, popInOut var(--dur2) var(--dur1) linear infinite;
            border-radius: 0.5em;
            box-shadow:
                0.15em 0.15em 0.15em var(--shade4) inset,
                -0.15em -0.15em 0.15em var(--shade1) inset,
                0.25em 0.25em 0.5em var(--shade1),
                -0.25em -0.25em 0.5em var(--shade4);
            position: absolute;
            top: 2.5em;
            left: 2.5em;
            width: 3em;
            height: 3em;
        }
        .preloader-xcvw__square:active {
            box-shadow:
                0.15em 0.15em 0.15em var(--shade4) ,
                -0.15em -0.15em 0.15em var(--shade1),
                0.25em 0.25em 0.5em var(--shade1) inset,
                -0.25em -0.25em 0.5em var(--shade4) inset;
        }
        .preloader-xcvw__square:nth-child(n + 2):nth-child(-n + 3) {
            left: 6.5em;
        }
        .preloader-xcvw__square:nth-child(n + 3) {
            top: 6.5em;
        }
        .preloader-xcvw__square:nth-child(2) {
            animation: smallPopOut2 var(--dur1) linear, move2 var(--dur2) var(--dur1) linear infinite;
        }
        .preloader-xcvw__square:nth-child(3) {
            animation: smallPopOut3 var(--dur1) linear, move3 var(--dur2) var(--dur1) linear infinite;
        }
        .preloader-xcvw__square:nth-child(4) {
            animation: smallPopOut4 var(--dur1) linear, move4 var(--dur2) var(--dur1) linear infinite;
        }
        .status-xcvw {
            animation: fadeIn var(--dur1) linear forwards;
            text-align: center;
        }
        .status-xcvw__dot {
            animation: appear1 var(--dur1) var(--dur1) steps(1,start) infinite;
            display: inline-block;
        }
        .status-xcvw__dot:nth-child(2) {
            animation: appear2 var(--dur1) var(--dur1) steps(1,start) infinite;
        }
        .status-xcvw__dot:nth-child(3) {
            animation: appear3 var(--dur1) var(--dur1) steps(1,start) infinite;
        }


        /* Animations */
        @keyframes largePopOut {
            from, 20% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
            }
            40% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    2em 2em 2em var(--shade1),
                    -2em -2em 4em var(--shade4);
            }
            60%, to {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    1em 1em 2em var(--shade1),
                    -1em -1em 2em var(--shade4);
            }
        }
        @keyframes smallPopOut1 {
            from, 40% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
            }
            60% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
            }
            80%, to {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
            }
        }

        @keyframes smallPopOut2 {
            from, 45% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
            }
            65% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
            }
            85%, to {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
            }
        }

        @keyframes smallPopOut3 {
            from, 50% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
            }
            70% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
            }
            90%, to {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
            }
        }

        @keyframes smallPopOut4 {
            from, 55% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
            }
            75% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
            }
            95%, to {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
            }
        }
        @keyframes popInOut {
            from {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
                transform: translate(0,0);
            }
            4% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(0,0);
            }
            8% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(0,0);
            }
            12%, 16% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(4em,0);
            }
            20% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(4em,0);
            }
            24%, 25% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
                transform: translate(4em,0);
            }
            29% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(4em,0);
            }
            33% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(4em,0);
            }
            37%, 41% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(4em,4em);
            }
            45% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(4em,4em);
            }
            49%, 50% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
                transform: translate(4em,4em);
            }
            54% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(4em,4em);
            }
            58% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(4em,4em);
            }
            62%, 66% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(0,4em);
            }
            70% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(0,4em);
            }
            74%, 75% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
                transform: translate(0,4em);
            }
            79% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(0,4em);
            }
            83% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(0,4em);
            }
            87%, 91% {
                box-shadow:
                    0 0 0 var(--shade4) inset,
                    0 0 0 var(--shade1) inset,
                    0 0 0 var(--shade1),
                    0 0 0 var(--shade4);
                transform: translate(0,0);
            }
            95% {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.5em 0.5em 0.5em var(--shade1),
                    -0.5em -0.5em 1em var(--shade4);
                transform: translate(0,0);
            }
            99%, to {
                box-shadow:
                    0.15em 0.15em 0.15em var(--shade4) inset,
                    -0.15em -0.15em 0.15em var(--shade1) inset,
                    0.25em 0.25em 0.5em var(--shade1),
                    -0.25em -0.25em 0.5em var(--shade4);
                transform: translate(0,0);
            }
        }
        @keyframes move2 {
            from, 8% {
                transform: translate(0,0);
                width: 3em;
                height: 3em;
            }
            12% {
                transform: translate(-4em,0);
                width: 7em;
                height: 3em;
            }
            16%, 83% {
                transform: translate(-4em,0);
                width: 3em;
                height: 3em;
            }
            87% {
                transform: translate(-4em,0);
                width: 3em;
                height: 7em;
            }
            91%, to {
                transform: translate(-4em,4em);
                width: 3em;
                height: 3em;
            }
        }
        @keyframes move3 {
            from, 33% {
                transform: translate(0,0);
                height: 3em;
            }
            37% {
                transform: translate(0,-4em);
                height: 7em;
            }
            41%, to {
                transform: translate(0,-4em);
                height: 3em;
            }
        }
        @keyframes move4 {
            from, 58% {
                transform: translate(0,0);
                width: 3em;
            }
            62% {
                transform: translate(0,0);
                width: 7em;
            }
            66%, to {
                transform: translate(4em,0);
                width: 3em;
            }
        }
        @keyframes fadeIn {
            from, 67% {
                opacity: 0;
            }
            83.3%, to {
                opacity: 1;
            }
        }
        @keyframes appear1 {
            from {
                visibility: hidden;
            }
            33%, to {
                visibility: visible;
            }
        }
        @keyframes appear2 {
            from, 33% {
                visibility: hidden;
            }
            67%, to {
                visibility: visible;
            }
        }
        @keyframes appear3 {
            from, 67% {
                visibility: hidden;
            }
            to {
                visibility: visible;
            }
        }


        }
    </style>
    </head>
	<div class="preloader-xcvw">
		<div class="preloader-xcvw__square"></div>
		<div class="preloader-xcvw__square"></div>
		<div class="preloader-xcvw__square"></div>
		<div class="preloader-xcvw__square"></div>
	</div>
  <//>`;
}

