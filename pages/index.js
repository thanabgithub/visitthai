import { html } from "htm/preact";
import { Fragment, Component } from "preact";
import OnOffSideAreaWrapper from "../components/commons/OnOffSideAreaWrapper";
// https://www.youtube.com/watch?v=BMuFBYw91UQ
// use <script> after htm/JSX allow us to execute after all html is loaded.

export default class Home extends Component {
  constructor() {
    super();
    this.state = { isDropdownButton: false };
    this.handleClick = this.handleClick.bind(this);
  }

  // Lifecycle: Called whenever our component is created
  componentDidMount() {
    // update time every second
    console.log("hello man");
    document.addEventListener("click", this.handleClick);
    console.log("i will listen to your click man");
  }

  handleClick() {
    console.log("i'm handling your click man!!");
  }

  // Lifecycle: Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    document.removeEventListener("click", this.handleClick);
    console.log("i will stop listen to your click man");
  }

  render() {
    return html`
      <${Fragment}>
        <${OnOffSideAreaWrapper}> inside the wrapper<//>
      <//>
    `;
  }
}

// export default function Home() {
//   const hey = 1;
//   return html`
//     <${Fragment}>
//       <h1>Home</h1>
//       <${Link} href="/btn">
//         <a class="w100--s my1 btn" title="Furtive button example">btn </a><//
//       >
//       <div class="dropdown" data-dropdown>
//         <button class="link" data-dropdown-button>Information</button>
//         <div class="dropdown-menu">Dropdown Content</div>
//       </div>
//       <script defer></script>
//       <style>
//         .dropdown > .link:focus,
//         link:hover {
//           color: red;
//         }
//         .dropdown {
//           position: relative;
//         }
//         .dropdown-menu {
//           position: absolute;
//           left: 0;
//           top: calc(100% + 0.75rem);
//           background-color: white;
//           padding: 0.75rem;
//           border-radious: 0.25rem;
//           box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
//           opacity: 0;
//           pointer-events: none;
//           transform: translateY(-10px);
//           transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
//         }
//         .dropdown > .link:focus + .dropdown-menu {
//           transform: translateY(0px);
//           opacity: 1;
//           pointer-events: auto;
//         }
//       </style>

//     <//>
//   `;
// }
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
