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
const service = document.getElementById("service");
const Tips = document.getElementById("Tips");
const media = document.getElementById("media");
const aboutUs = document.getElementById("aboutus");

const Route = (e) => {
  const href = e.target.getAttribute("href");
  const root = document.getElementById("main");
  content(root, href.substring(1));
}
// ToDo: Find a better way to Route


home.onclick = (e) => Route(e);
service.onclick = (e) => Route(e);
Tips.onclick = (e) => Route(e);
media.onclick = (e) => Route(e);
aboutUs.onclick = (e) => Route(e);
