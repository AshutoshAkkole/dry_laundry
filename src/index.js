// main logic for website let's go

import "./index.css";
import header from "./components/header/header.js";
import footer from "./components/footer/footer.js";
import content from "./components/content/content.js"

const root = document.getElementById("root")

header(root);
content(root);
footer(root);


