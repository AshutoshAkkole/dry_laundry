
export const isEven = (num) => num % 2 == 0;


export const FeedbackHeader = (root, {title, description, cssClass}) => {

    const container = document.createElement("div");

    if(cssClass){
        container.classList.add([cssClass]);
    }
    else{
        container.style.textAlign = "center";
    }

    container.innerHTML = `
    <h1> ${title} </h1>
    <p> ${description} </p>
    `

    root.appendChild(container);
}