import * as headerCss from "./header.css";
import logosvg from "../assets/logo.svg"

const header = (root) => {
  const container = document.createElement("div");

  container.id = "headerContainer";

  const { navbar, logo, navlinks, contactbutton, imageWrapper } = headerCss;

  container.innerHTML = `<nav class="${navbar}">
        <div class="${logo}">
            <div class="${imageWrapper}">
            <img src=${logosvg} >
            </div>
            <p href="#">Quality Dry-Cleaners</p>
        </div>
        <ul class="${navlinks}">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Tips</a></li>
        </ul>
        <div class="${contactbutton}">
            <a href="#">Contact Us →</a>
        </div>
    </nav>`;

    root.appendChild(container);
    
};

export default header;
