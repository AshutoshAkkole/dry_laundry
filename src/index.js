// main logic for website let's go

import "./index.css";
import header from "./header/header.js";
import footer from "./footer/footer.js";
import content from "./mainbody/content.js"

const root = document.getElementById("root")

header(root);
content(root);
footer(root);


