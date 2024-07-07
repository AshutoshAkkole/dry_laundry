import * as contentCss from "./content.css";

const content = (root) => {

    const container = document.createElement("div");

    console.log("class", contentCss.content);

    container.innerHTML = "<span> main content yet to come. Let's Go<span>"

    container.classList.add([contentCss.content])

    root.appendChild(container);
}

export default content;