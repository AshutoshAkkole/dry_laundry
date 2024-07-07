import * as footerCss from "./footer.css";
import logosvg from "../assets/logoFooter.svg";
import mapsvg from "../assets/map.svg"
import location from "../assets/location.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import telegram from "../assets/telegram.svg"
import email from "../assets/email.svg"

const footer = (root) => {
  const container = document.createElement("div");

  const { footer, logo, contact, links, map, flex } = footerCss;

  container.innerHTML = `<footer class="${footer}">
        <div class="${logo}">
            <div>
            <img src="${logosvg}" alt="Quality Dry-Cleaners Logo">
            <p>© 2024 All Rights Reserved</p>
            </div>
        </div>
        <div class="${contact}">
            <p><strong>Contact Us</strong></p>
            <div class="${flex}">
            <a href="#"><img src="${location}" alt="location"></a>
            <p>Vaishnavi Apartment, near Modi Ganpati, Narayan Peth, Pune, Maharashtra 411030</p>
            </div>
            <div class="${flex}">
            <a href="#"><img src="${email}" alt="email"></a>
            <p>Email: <a href="mailto:support@quality.com">support@quality.com</a></p>
            </div>
            <p>
                <a href="#"><img src="${facebook}" alt="facebook"></a>
                <a href="#"><img src="${instagram}" alt="instagram"></a>
                <a href="#"><img src="${telegram}" alt="telegram"></a>
            </p>
        </div>
        <div class="${links}">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Tips</a>
        </div>
        <div class="${map}">
           <a href="https://maps.app.goo.gl/ZsYn8krDGZkU2szo7" target="_blank">
            <img src="${mapsvg}" alt="Map"> 
           </a>
        </div>
    </footer>`;

    root.appendChild(container);
};

export default footer;
