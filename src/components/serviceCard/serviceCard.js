import * as typeofservieCss from "./serviceCard.css";

const typeofservie = (root, { svgData, title, bgColor = "#30A7FD" }) => {
  const container = document.createElement("div");

  const { squareContainer } = typeofservieCss;

  container.innerHTML = `
    <img src="${svgData}" alt="${title}">
    <h1>${title}</h1>
    `;

  container.classList.add([squareContainer])
  container.style.backgroundColor = bgColor

  root.appendChild(container);
};

export default typeofservie;