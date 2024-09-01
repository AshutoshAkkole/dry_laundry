import * as headerCss from "./header.css";
import logosvg from "../../../assets/logo.svg";

const header = (root) => {
  const container = document.createElement("div");

  container.id = "headerContainer";

  const { navbar, logo, navlinks, contactbutton, imageWrapper, menuToggle, show } = headerCss;

  container.innerHTML = `<nav class="${navbar}">
        <div class="${logo}">
            <div class="${imageWrapper}">
            <img src=${logosvg} >
            </div>
            <p href="#">Quality Dry-Cleaners</p>
        </div>
        <ul id = "navlinks" class="${navlinks}">
            <li><a href="#home"  id="home" >Home</a></li>
            <li><a href="#aboutus" id="aboutus" >About Us</a></li>
            <li><a href="#service"  id="service" >Services</a></li>
            <li><a href="#media" id="media"  >Media</a></li>
            <li><a href="#Tips" id="Tips"  >Tips</a></li>
            <li class="${contactbutton}">
                <a href="tel:+919890000175">Contact Us →</a>
            </li>
        </ul>
        <button id = "menuToggle" class="${menuToggle}" aria-label="Menu Toggle">&#9776;</button>
    </nav>`;
  

    window.onload = function() {
        const menuToggle = document.querySelector('#menuToggle');
        const navLinks = document.querySelector('#navlinks');
        const navItems = document.querySelectorAll('#navlinks li a');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle(show);
        });

        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove(show);
            });
        });
    };

    root.appendChild(container);

};



export default header;
