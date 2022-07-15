import { useEffect } from "react";
import { html } from "htm/preact";
export default function ErrorPage() {
  if (!process.browser) {
    return html`<div>SSR is ok, client will throw inside useEffect...</div>`;
  }

  useEffect(() => {
    throw new Error("test");
  }, []);

  return html`<div />`;
}
