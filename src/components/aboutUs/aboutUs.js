import * as aboutUsCss from "./aboutUs.css";
import aboutUsImg from "../../../assets/aboutUs.svg";
import embeddedVideo from "../EmbeddedVideo/EmbeddedVideo";
import aboutUsImgMiddle from "../../../assets/aboutUsMiddle.svg";
import { FeedbackHeader } from "../utils";
import reviewPagination from "../reviewPagination/reviewPagination";
import { individualReviews } from "./reviewCards";




const aboutUs = (root) => {
  const container = document.createElement("div");

  const { container:containerCss, textBlock, image, middleContainer, text, aboutUsImgClass  } = aboutUsCss;

  container.classList.add([containerCss]);

  container.innerHTML = `
        <img src="${aboutUsImg}" class="${aboutUsImgClass}" alt="Laundry Background">
        <div class="${textBlock}">
            <h1>About Us</h1>
            <p>PROFESSIONAL LAUNDRY SERVICE</p>
            <p>Best Laundry And Dry Cleaning Service</p>
            <button>READ MORE</button>
        </div>
        <div class="${middleContainer}">
            <div class="${image}">
                <img src="${aboutUsImgMiddle}" alt="Laundry Image" style="width: 100%; border-radius: 10px;">
            </div>
            <div class="${text}">
                <p>Quality Industrial Laundry is located in Pune, we are in this business since 2004, we are professionally managed company by proprietor having more than 15 years of sales and Marketing Experience.</p>
                <p>With More Than 14 Years of Experience in Garment Handling of laundry and Dry cleaning we redefined the dry cleaning experience by giving you excellent service with quality results using our environmentally friendly technology.</p>
                <p>In today's busy world, balancing household chores and quality time with the kids and family can be quite a challenge. Laundry is a much needed chore to be done, ideally by a laundromat offering such services.</p>
                <p>Quality Industrial Laundry offers an array of laundry services and products that can be a lifesaver. Quality Industrial Laundry offers the best possible results for any kind of dirt or stubborn stains on clothing.</p>
                <p>We are professional in the laundry and Dry-Cleaning business, which means we always stay up to date on the latest technologies, Cleaning Methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules.</p>
                <p>The company's aim has always been to provide Premium dry-Cleaning and laundry services to expert and local populations of India.</p>
            </div>
        </div>
   `;

   embeddedVideo(container);
  FeedbackHeader(container, {
    title: "Our Esteemed Customers",
    description: "We have been working since 2004",
  });
  reviewPagination(container, { reviewCards: individualReviews });
  root.appendChild(container);
};

export default aboutUs;