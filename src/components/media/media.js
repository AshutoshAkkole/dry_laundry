import * as mediaCss from "./media.css";
import owner from "../../../assets/owner.jpeg";
import manager from "../../../assets/manager.jpeg"; 
import customercare from "../../../assets/customercare.jpeg"; 

const media = (root) => {
    const container = document.createElement("div");

    const { container:containerCss, gallery, card, info  } = mediaCss;

    container.classList.add([containerCss]);

    container.innerHTML = `
    <header>
        <h1>Meet Our Team</h1>
    </header>
    <main>
        <section class="${gallery}">
            <div class="${card}">
                <img src="${owner}">
                <div class="${info}">
                    <h2>John Doe</h2>
                    <p>Owner</p>
                </div>
            </div>
            <div class="${card}">
                <img src="${manager}">
                <div class="${info}">
                    <h2>Jane Smith</h2>
                    <p>Manager</p>
                </div>
            </div>
            <div class="${card}">
                <img src="${customercare}">
                <div class="${info}">
                    <h2>Emily Johnson</h2>
                    <p>Customer Service</p>
                </div>
            </div>
        </section>
    </main>
    `
    root.appendChild(container);
}

export default media;