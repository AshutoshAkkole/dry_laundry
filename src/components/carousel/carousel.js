import * as carouselCss from "./carousel.css";
import oyo from "../../../assets/oyo.svg";

const sampleImages = [oyo, oyo, oyo, oyo, oyo, oyo, oyo, oyo, oyo, oyo];


// let's not this this for now

// function makeInfiniteScroll(id) {
//   const container = document.getElementById(id);

//   const logos = container.innerHTML;
//   container.innerHTML += logos; // Duplicate the logos

//   let isScrolling = false;

//   function scrollLogos() {
//     if (!isScrolling) {
//       container.scrollLeft += 1;
//       if (container.scrollLeft >= container.scrollWidth / 2) {
//         container.scrollLeft = 0;
//       }
//     }
//     requestAnimationFrame(scrollLogos);
//   }

//   container.addEventListener("mouseover", () => {
//     isScrolling = true;
//   });

//   container.addEventListener("mouseout", () => {
//     isScrolling = false;
//   });

//   scrollLogos();
// }

const carousel = (root, { title, images = sampleImages }) => {
  const container = document.createElement("div");

  container.style.width = "100%";

  const { category, logos } = carouselCss;

  const imgs = images.reduce((acc, image) => {
    return acc + `<img src=${image}>`;
  }, "");

  container.innerHTML = `<div class="${category}">
            <p>${title}</p>
            <div class="${logos}" id="${logos}">
               ${imgs}
            </div>
        </div>`;

  root.appendChild(container);
};

export default carousel;
