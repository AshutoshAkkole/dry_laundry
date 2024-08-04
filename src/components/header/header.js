import * as headerCss from "./header.css";
import logosvg from "../../../assets/logo.svg";

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
            <li><a href="#home"  id="home" >Home</a></li>
            <li><a href="#aboutus" id="aboutus" >About Us</a></li>
            <li><a href="#service"  id="service" >Services</a></li>
            <li><a href="#media" id="media"  >Media</a></li>
            <li><a href="#Tips" id="Tips"  >Tips</a></li>
        </ul>
        <div class="${contactbutton}">
            <a href="#">Contact Us →</a>
        </div>
    </nav>`;
  root.appendChild(container);
};

export default header;
