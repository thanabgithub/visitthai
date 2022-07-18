import { html } from "htm/preact";
import Link from "next/link";
import { Fragment, Component } from "preact";
import { useState, useEffect } from "react";
import { useWindowContext } from "../context/Window";
// https://www.youtube.com/watch?v=BMuFBYw91UQ
// use <script> after htm/JSX allow us to execute after all html is loaded.

export default function Home() {
  const windowContext = useWindowContext();
  useEffect(() => console.log("useEffect"));
  const handlerIn = () => {
    console.log("in");
  };
  const handlerOut = () => {
    console.log("out");
  };
  const handlerClick = () => {
    console.log("clicked");
    console.log(windowContext);
  };
  return html`
    <${Fragment}>
      <h1>Home</h1>
      <${Link} href="/btn">
        <a class="w100--s my1 btn" title="Furtive button example">btn </a><//
      >
      <div id="dropdown-vasf" class="dropdown" data-dropdown>
        <button
          id="button-vasf"
          onClick=${handlerClick}
          onPointerOver=${handlerIn}
          onPointerLeave=${handlerOut}
          class="link"
          data-dropdown-button
        >
          Information
        </button>
        <div id="dropdown-menu-vasf" class="dropdown-menu">
          <input
            id="dropdown-menu-search-vasf"
            type="search"
            placeholder="Search"
            class="m0 dropdown-menu-search"
          />
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

        .dropdown .dropdown-menu:hover,
        .dropdown:hover .dropdown-menu,
        #dropdown-menu-search-vasf:focus,
        #dropdown-menu-search-vasf:active,
        #dropdown-menu-search-vasf:checked {
          transform: translateY(0px);
          opacity: 1;
          pointer-events: auto;
        }
      </style>
    <//>
  `;
}
