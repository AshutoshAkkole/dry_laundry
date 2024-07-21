import * as serviceCardCss from "./serviceCard.css";

const serviceCard = (root, { svgData, title, bgColor = "#30A7FD" }) => {
  const container = document.createElement("div");

  const { squareContainer } = serviceCardCss;

  container.innerHTML = `
    <img src="${svgData}" alt="${title}">
    <h1>${title}</h1>
    `;

  container.classList.add([squareContainer])
  container.style.backgroundColor = bgColor

  root.appendChild(container);
};

export default serviceCard;