import * as tipsCss from "./Tips.css";

const Tips = (root) => {

    const { conatiner:containerCss } = tipsCss;

    const container = document.createElement("div");

    container.classList.add([containerCss]);

    container.innerHTML = "<h2> Here comes the blog </h2>";

    root.appendChild(container);
}

export default Tips;