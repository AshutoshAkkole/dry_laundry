import * as homeCss from "./home.css";
import dryCleanlingAgent from "../../assets/dryCleaningAgent.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Tshirt from "../../assets/Tshirt.svg";

const home = (root) => {
  const container = document.createElement("div");

  const {
    heroSection,
    heroText,
    heroButton,
    heroImage,
    counterSection,
    counterText,
    counterImage,
    highlight,
    containerCss,
  } = homeCss;

  container.classList.add([containerCss]);

  container.innerHTML = `<div class="${heroSection}">
        <div class="${heroText}">
          <h1>
            Relax! We are programmed <span class="${highlight}">to clean</span>
          </h1>
          <p>Friendly, Fast, and Efficient service is just a phone call away</p>
          <a href="#" class="${heroButton}"><img src="${whatsapp}" /> </a>
        </div>
        <div class="${heroImage}">
          <img src="${dryCleanlingAgent}" alt="Cleaning Service" />
        </div>
      </div>
      <div class="${counterSection}">
        <div class="${counterText}">Total Clothes Handled Counter ...</div>
        <div class="${counterImage}">
          <img src="${Tshirt}" alt="Clothes Counter" />
        </div>
      </div>`;

  root.appendChild(container);
};

export default home;
