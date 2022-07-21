import { html } from "htm/preact";
import Link from "next/link";
import dynamic from "next/dynamic";
const Fragment = dynamic(() => import("preact").then((mod) => mod.Fragment));

export default function Page() {
  return html` <${Fragment}> <//> `;
}
