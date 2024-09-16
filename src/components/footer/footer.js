import * as footerCss from "./footer.css";
import logosvg from "../../../assets/logoFooter.svg";
// import mapsvg from "../../../assets/map.svg";
import location from "../../../assets/location.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
// import telegram from "../../../assets/telegram.svg";
import email from "../../../assets/email.svg";

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
            <a href="https://maps.app.goo.gl/ZsYn8krDGZkU2szo7" target="_blank"><img src="${location}" alt="location"></a>
            <p>Vaishnavi Apartment, near Modi Ganpati, Narayan Peth, Pune, Maharashtra 411030</p>
            </div>
            <div class="${flex}">
            <a href="mailto:nikhilb01042@gmail.com"><img src="${email}" alt="email"></a>
            <p>Email: <a href="mailto:nikhilb01042@gmail.com">nikhilb01042@gmail.com</a></p>
            </div>
            <p>
                <a href="#"><img src="${facebook}" alt="facebook"></a>
                <a href="https://www.instagram.com/quality_dry_cleaner" target="_blank"><img src="${instagram}" alt="instagram"></a>
            </p>
        </div>
        <div class="${links}">
            <a id="f-aboutus" href="#aboutus">About Us</a>
            <a id="f-services" href="#service">Services</a>
            <a id="f-tips" href="#Tips">Tips</a>
        </div>
        <div class="${map}">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1892.338496309646!2d73.8686392!3d18.4529693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb4943634b4f%3A0x9e0f34e192156fdd!2sVaishnavi!5e0!3m2!1sen!2sin!4v1726476953066!5m2!1sen!2sin" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </footer>`;

    root.appendChild(container);
};

export default footer;
