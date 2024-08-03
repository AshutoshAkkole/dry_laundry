
import * as carouselCss from "./carousel.css"
import oyo from "../../../assets/oyo.svg";


const sampleImages = [oyo,oyo,oyo,oyo,oyo,oyo, oyo, oyo, oyo, oyo];

const carousel  = (root, {title, images=sampleImages}) => {
    const container = document.createElement("div");

    container.style.width = "100%";

    const { category, logos  } = carouselCss;

    const imgs =  images.reduce((acc, image)=> {
        return acc + `<img src=${image}>`;
    }, "")

    container.innerHTML = `<div class="${category}">
            <p>${title}</p>
            <div class="${logos}">
               ${imgs}
            </div>
        </div>`

    root.appendChild(container);
}

export default carousel;