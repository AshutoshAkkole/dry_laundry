// main logic for website let's go

import "./index.css";
import header from "./components/header/header.js";
import footer from "./components/footer/footer.js";
import content from "./components/content/content.js";

const head = document.getElementById("header");
const root = document.getElementById("main");
const foot = document.getElementById("footer");

header(head);
content(root);
footer(foot);

const home = document.getElementById("home");

// ToDo: Find a better way to Route

home.onclick = (e) => {
  const href = e.target.getAttribute("href");
  const root = document.getElementById("main");
  content(root, href.substring(1));
};

const service = document.getElementById("service");

service.onclick = (e) => {
  const href = e.target.getAttribute("href");
  const root = document.getElementById("main");
  content(root, href.substring(1));
};
