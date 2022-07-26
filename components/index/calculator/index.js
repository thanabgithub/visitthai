import { html } from "htm/preact";
import { Fragment } from "preact";
import Script from "next/script";
const Calculator = () => {
  return html`<${Fragment}>
    <div class="calc-wrapper">
      <div class="flex-container-column calc-card">
        <div class="display">
          <div id="displayDigit" class="txt--right bold">0</div>
        </div>
      <div class="flex-container-row-filler">      </div>
        <div class="flex-container-row adj-pos">
          <div class="calc-button">7</div>
          <div class="calc-button">8</div>
          <div class="calc-button">9</div>
          <div class="calc-button negative">+/-</div>
        </div>
        <div class="flex-container-row adj-pos">
          <div class="calc-button">4</div>
          <div class="calc-button">5</div>
          <div class="calc-button">6</div>
          <div class="calc-button operator">-</div>
        </div>
        <div class="flex-container-row adj-pos">
          <div class="calc-button">1</div>
          <div class="calc-button">2</div>
          <div class="calc-button">3</div>
          <div class="calc-button operator">+</div>
        </div>
        <div class="flex-container-row adj-pos">
          <div class="calc-button clear">CE</div>
          <div class="calc-button">0</div>
          <div class="calc-button equals double">=</div>
        </div>
      </div>
    </div>


    <head>

    <${Script} strategy="lazyOnload">
    const defaultCondition = {
      displayDigit: "0",
      operator: null,
      firstDigit: null,
      waitingForSecondDigit: false,
    };
    function updateDisplay() {
      document.querySelector("#displayDigit").innerText =
        defaultCondition.displayDigit;
    }
    function clearDisplay() {
      defaultCondition.displayDigit = "0";
      defaultCondition.operator = null;
      defaultCondition.firstDigit = null;
      defaultCondition.waitingForSecondDigit = false;
    }
    function inputDigit(digit) {
      defaultCondition.displayDigit += digit;
    }
    const buttons = document.querySelectorAll(".calc-button");
    for (const button of buttons) {
      button.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("clear")) {
          clearDisplay();
          updateDisplay();
          return;
        }
        if (target.classList.contains("negative")) {
          inverseNumber();
          updateDisplay();
          return;
        }
        if (target.classList.contains("equals")) {
          performCalculation();
          updateDisplay();
          return;
        }
        if (target.classList.contains("operator")) {
          handleOperator(target.innerText);
          return;
        }
        inputDigit(target.innerText);
        updateDisplay();
      });
    }
    function inputDigit(digit) {
      if (defaultCondition.displayDigit === "0") {
        defaultCondition.displayDigit = digit;
      } else {
        defaultCondition.displayDigit += digit;
      }
    }
    function inverseNumber() {
      if (defaultCondition.displayDigit === "0") {
        return;
      }
      defaultCondition.displayDigit = defaultCondition.displayDigit * -1;
    }
    function handleOperator(operator) {
        defaultCondition.operator = operator;
        defaultCondition.waitingForSecondDigit = true;
        defaultCondition.firstDigit = defaultCondition.displayDigit;
        defaultCondition.displayDigit = "0";

    }
    function performCalculation() {
      if (
        defaultCondition.firstDigit == null ||
        defaultCondition.operator == null
      ) {
        return;
      }
      let result = 0;
      if (defaultCondition.operator === "+") {
        result =
          parseInt(defaultCondition.firstDigit) +
          parseInt(defaultCondition.displayDigit);
      } else {
        result =
          parseInt(defaultCondition.firstDigit) -
          parseInt(defaultCondition.displayDigit);
      }
      defaultCondition.displayDigit = result;
    }
  <//>
      <style>
        .calc-wrapper {
          width: 100%;
          height: 100%;
          -webkit-tap-highlight-color: transparent;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flex-container-column {
          display: flex;
          flex-direction: column;

          width: 100%;
          margin: 0 auto;
          text-align: right;
        }

        .flex-container-row {
          display: flex;
          width: 100%;
          height: 19%;
        }
        .flex-container-row-filler {
          flex-grow: 1;
        }
        .double,
        .calc-button {
          user-select: none;
          color: #434343;
          flex-basis: 25%;

          aspect-ratio: 1;

          margin: calc(100vh*0.80*0.01);
          max-height: calc(80%);
          font-size: calc(100vh*0.80*0.19*0.25);


          padding: auto;

          background: #f5f5f5;
          border:  1px solid #f5f5f5;
          border-radius: calc(100vh*0.80*0.01);
          transition: all 0.3s;
          box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;


        }
        .calc-button:active {
          color: #282828;
          box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
        }

        .double {
          flex-basis: 50%;
          aspect-ratio: 2;
        }

        .display {
          color: black;
          height: 20%;
          width: 100%;
          padding-right: calc(100vh*0.80*0.02);
          border-radius: calc(100vh*0.80*0.01);
          font-size: calc(100vh*0.80*0.20*0.75);
          text-align: right;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        .operator,
        .negative,
        .equals {
          background: #f79489;
          box-shadow: 0.5px 0.5px 0.8px #bd6f67,
            1.2px 1.1px 1.8px -0.7px #bd6f67, 2.3px 2.2px 3.5px -1.3px #bd6f67,
            4.7px 4.4px 7px -2px #bd6f67, 9px 8.6px 13.6px -2.7px #bd6f67,
            -4px -4px 6px #ffebe9;
          border-width: 0;
        }
        .operator:active,
        .negative:active,
        .equals:active {
          box-shadow: inset 0.5px 0.5px 0.8px #bd6f67,
            inset 1.2px 1.1px 1.8px -0.7px #bd6f67,
            inset 2.3px 2.2px 3.5px -1.3px #bd6f67,
            inset 4.7px 4.4px 7px -2px #bd6f67,
            inset 9px 8.6px 13.6px -2.7px #bd6f67, inset -4px -4px 6px #f8aca3;
        }
        .calc-card {
          color: #434343;
          padding: calc(100vh*0.80*0.02);
          border-radius: 0.5rem;
          background: #f5f5f5;
          border: 1px #f5f5f5;
          box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
          max-height: min(80vh, calc(90vw/0.65));
          aspect-ratio: 0.65;
          max-width: calc(80vh*0.65);
          margin: auto;

        }




        #displayDigit {
          text-align: right;
        }
      </style>
    </head>
  <//>`;
};
export default Calculator;
