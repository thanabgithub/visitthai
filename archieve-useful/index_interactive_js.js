import { html } from "htm/preact";
import Link from "next/link";
import { Fragment, Component } from "preact";
// https://www.youtube.com/watch?v=BMuFBYw91UQ
// use <script> after htm/JSX allow us to execute after all html is loaded.

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      pointerOverId: null,
      pointerDownId: null,
    };
    this.handlePointerOver = this.handlePointerOver.bind(this);
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handleWindowLoad = this.handleWindowLoad.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
    this.dropdown_vasf = null;
    this.dropdownMenu_vasf = null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // start tracking window loading
    this.dropdownMenu_vasf = document.getElementById("dropdown-menu-vasf");
    this.dropdown_vasf = document.getElementById("dropdown-vasf");
    window.addEventListener("load", this.handleWindowLoad, { passive: true });
  }
  handleWindowLoad = async (event) => {
    console.log("handleWindowLoad");

    // start tracking pointer movement
    this.dropdownMenu_vasf.addEventListener(
      "pointerover",
      this.handlePointerOver,
      {
        passive: true,
      }
    );
    this.dropdownMenu_vasf.addEventListener(
      "pointerdown",
      this.dropdownMenu_vasf.handlePointerDown,
      {
        passive: true,
      }
    );
    this.dropdownMenu_vasf.addEventListener(
      "pointerleave",
      this.handlePointerLeave,
      {
        passive: true,
      }
    );
    // stop tracking window loading
    window.removeEventListener("load", this.handleWindowLoad, {
      passive: true,
    });
  };

  // tracking event
  handlePointerOver = async (event) => {
    console.log("handlePointerOver");
    let elementId = event.srcElement.id;

    this.dropdown_vasf.style.color = "green";
    this.setState({ pointerOverId: elementId });
    console.log("state after set of pointerOverId " + this.state.pointerOverId);
  };
  handlePointerDown = async (event) => {
    console.log("handlePointerDown");
    let elementId = event.srcElement.id;
    this.setState({ pointerDownId: elementId });
    console.log("state after set of pointerOverId " + this.state.pointerDownId);
  };

  handlePointerLeave = async (event) => {
    console.log("handlePointerLeave");
    this.dropdown_vasf.style.color = "blue";
    console.dir(this.dropdown_vasf);
    let elementId = event.srcElement.id;
    console.log("state after set of pointerOverId " + elementId);
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");

    this.dropdownMenu_vasf.removeEventListener(
      "pointerover",
      this.handlePointerOver,
      {
        passive: true,
      }
    );
    this.dropdownMenu_vasf.removeEventListener(
      "pointerdown",
      this.handlePointerDown,
      {
        passive: true,
      }
    );
  }

  render() {
    return html`
      <${Fragment}>
        <h1>Home</h1>
        <${Link} href="/btn">
          <a class="w100--s my1 btn" title="Furtive button example">btn </a><//
        >
        <div id="dropdown-vasf" class="dropdown" data-dropdown>
          <button id="button-vasf" class="link" data-dropdown-button>
            Information
          </button>
          <div id="dropdown-menu-vasf" class="dropdown-menu">
            Dropdown Content
          </div>
        </div>

        <style>
          .dropdown {
            position: relative;
          }
          .dropdown-menu {
            position: absolute;
            left: 0;
            top: calc(+100%);
            background-color: white;
            padding: 0.75rem;
            border-radius: 0.25rem;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
            opacity: 0;
            pointer-events: none;
            transform: translateY(-10px);
            transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
          }
          .dropdown > .link:focus + .dropdown-menu {
            transform: translateY(0px);
            opacity: 1;
            pointer-events: auto;
          }
        </style>
      <//>
    `;
  }
}
// <${Script} type="text/javascript">
// document.addEventListener("click", (e) => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]");
//     if (!isDropdownButton && (e.target.closest("[data-dropdown]") != null))
//     return null;
//   });
//   e.target.closest("[data-dropdown]") means closest parent

//   if (!isDropdownButton && (e.target.closest("[data-dropdown]") != null)
//   return null;

//   let currentDropdown;
//   if (isDropdownButton) {
//   currentDropdown = e.target.closest("[data-dropdown]");
//   currentDropdown.classList.toggle("active");
//   }

//   document
//   .querySelectorAll("[data-dropdown.active]")
//   .forEach((dropdown) => {
//     if (dropdown === currentDropdown) return;
//     dropdown.classList.remove("active");
//   });
// <//>
