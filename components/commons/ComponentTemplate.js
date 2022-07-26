import { html } from "htm/preact";
import Script from "next/script"


export default element = () => {
    let uniqueId = "ele:" + Date.now().toString();
    return html`<div id=uniqueId class="a b c">
        hello world
    </div>
    <script defer>
        ${let component = document.getElementById(uniqueId);
        component.classList.remove(props.removeClass);
        component.classList.add(props.addClass);}
    </script>
    `;
}