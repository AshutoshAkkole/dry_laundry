import * as homeCss from "./home.scss";
import dryCleanlingAgent from "../../../assets/home.svg";
import whatsapp from "../../../assets/whatsapp.svg";
import { FeedbackHeader } from "../utils";
import reviewPagination from "../reviewPagination/reviewPagination";
import { individualReviews } from "./reviewCards";
import carousel from "../carousel/carousel";


const home = (root) => {
  const container = document.createElement("div");

  const {
    heroSection,
    heroText,
    heroButton,
    heroImage,
    highlight,
    containerCss,
    middle,
    leftPanel,
    rightPanel,
    clientHeader
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
       <div class="${middle}">
        <div class="${leftPanel}">
            <h1>Free Pickup* All Over Pune</h1>
        </div>
        <div class="${rightPanel}">
            <div>
                <h2>20,000+</h2>
                <p>Happy Customers</p>
            </div>
            <div>
                <h2>10+</h2>
                <p>Years of experience with proud</p>
            </div>
            <div>
                <h2>20+</h2>
                <p>Years of Experience</p>
            </div>
            <div>
                <h2>150+</h2>
                <p>Expert Team</p>
            </div>
        </div>
    </div>
     `;

  FeedbackHeader(container,{title:"Our Esteemed Customers", description:"We have been working since 2004"});
  reviewPagination(container, {reviewCards:individualReviews});
  FeedbackHeader(container,{title:"Client", cssClass:clientHeader,description:""})
  carousel(container, {title: "Hospitality"});
  carousel(container, {title: "Healthcare"});
  carousel(container, {title: "Government Institution"});


  root.appendChild(container);
};

export default home;
