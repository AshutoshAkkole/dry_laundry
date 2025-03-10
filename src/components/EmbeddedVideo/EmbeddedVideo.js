
import * as embeddedVideoCss from "./Embedded.css";

const embeddedVideo = (root) => {

    const container = document.createElement("div");

    const { textContainer, videoContainer, containerCss } = embeddedVideoCss;

    container.classList.add([containerCss]);

    container.innerHTML = `<div class="${textContainer}">
            <h3>Our Promise</h3>
            <h1>Why choose us?</h1>
            <ul>
                <li>100% Non Toxic, Organic, Green, Eco Friendly</li>
                <li>India's best Dry Cleaning & Finishing</li>
                <li>On First Page</li>
                <li>World Class Set Up</li>
                <li>Premium/ Luxury Dry Cleaner</li>
            </ul>
            <button onclick = 'navigateToAboutus()'>Read More</button>
        </div>
        <div class="${videoContainer}">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FAMXcalpM1o?si=gpNNRB9ll5ueaNLO" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>`

    root.appendChild(container);
}

export default embeddedVideo;