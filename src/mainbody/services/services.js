import serviceImg from "../../assets/serviceImg.svg";
import * as serviceCss from "./services.css";
import typeofservice from "../typeofservices/typeofservice";
import allservices from "./allservices";
import { isEven } from "../utils";

const service = (root) => {
    const container = document.createElement("div");
    const grid = document.createElement("div");

    
    const { Imgcontainer, serviceHeader, grid:gridCss } = serviceCss;

    container.innerHTML = `
    <img src="${serviceImg}" alt="Cleaning Service" class="${Imgcontainer}" />
    <p class="${serviceHeader}">Our Services</p>
    `;
    
    grid.classList.add([gridCss]);
    container.style.backgroundColor = "#F5F5F5";

    allservices.map((servicedata , key) => {
        const bgColor = isEven(key) ? "#30A7FD" : "#4543C5"
        typeofservice(grid, {...servicedata, bgColor});
    })
        
    container.appendChild(grid);
    root.appendChild(container);
}

export default service;