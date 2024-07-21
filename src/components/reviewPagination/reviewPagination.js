import * as reviewPaginationCss from "./reviewPagination.css";
import reviewCard from "../reviewCard/reviewCard";


const reviewPagination = (root, {reviewCards}) => {

const container = document.createElement("div");
const reviewContainer = document.createElement("div");
const paginationContainer = document.createElement("div");


const { pageDot, reviewCardContainer:reviewContainerCss, pagination:paginationCss, active, container:containerCss } = reviewPaginationCss;


// cards creation
reviewContainer.classList.add([reviewContainerCss]);
reviewCards.map((reviewData) => reviewCard(reviewContainer, reviewData))
container.appendChild(reviewContainer);

// pagination adding
paginationContainer.classList.add([paginationCss]);
paginationContainer.innerHTML = `<span class="${pageDot} ${active}" data-page="1"></span>
        <span class="${pageDot}" data-page="2"></span>
`
container.appendChild(paginationContainer);

//container appending
container.classList.add([containerCss]);
root.appendChild(container);
}

export default reviewPagination;