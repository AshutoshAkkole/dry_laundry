import * as reviewCardCss from "./reviewCard.css";


const reviewCard = (root, { numberofStars, name, profileImage, reviewMessage }) => {
    const container = document.createElement("div");

    const { reviewCard:containerCss, profileImage:profileImageCss, name:nameCss, stars:starsCss, reviewText:reviewTextCss } = reviewCardCss;

    container.classList.add([containerCss]);

    const stars = Array(numberofStars).fill('&#9733;').join(' ');


    container.innerHTML = `
        <img src="${profileImage}" alt="Profile Image" class="${profileImageCss}">
        <h2 class="${nameCss}">${name}</h2>
        <div class="${starsCss}">
          ${stars}
        </div>
        <p class="${reviewTextCss}">${reviewMessage}</p>`

    root.appendChild(container);
}

export default reviewCard;