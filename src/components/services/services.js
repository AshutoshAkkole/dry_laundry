import serviceImg from "../../../assets/serviceImg.svg";
import * as serviceCss from "./services.css";
import serviceCard from "../serviceCard/serviceCard";
import allservices from "./allservices";
import { isEven } from "../utils";
import reviewPagination from "../reviewPagination/reviewPagination";
import { individualReviews, industrialReviews} from "./reviewCards";


const FeedbackHeader = (root, {title, description}) => {

    const container = document.createElement("div");

    container.style.textAlign = "center";

    container.innerHTML = `
    <h1> ${title} </h1>
    <p> ${description} </p>
    `

    root.appendChild(container);
}



const service = (root) => {
    const container = document.createElement("div");
    const grid = document.createElement("div");

    
    const { Imgcontainer, serviceHeader, grid:gridCss } = serviceCss;

    container.innerHTML = `
    <img src="${serviceImg}" alt="Cleaning Service" class="${Imgcontainer}" />
    <p class="${serviceHeader}">Our Services</p>
    `;
    
    grid.classList.add([gridCss]);
    container.style.backgroundColor = "#ADD8E6";

    allservices.map((servicedata , key) => {
        const bgColor = isEven(key) ? "#30A7FD" : "#4543C5"
        serviceCard(grid, {...servicedata, bgColor});
    })
    
    container.appendChild(grid);

    FeedbackHeader(container,{title:"Our Customer", description:"We have been working since 2004"})
    reviewPagination(container, {reviewCards:individualReviews});
    FeedbackHeader(container,{title:"Our Industry Clients", description:"We have been working since 2004"})
    reviewPagination(container, {reviewCards:industrialReviews});


    root.appendChild(container);
}

export default service;