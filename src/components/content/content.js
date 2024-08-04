import * as contentCss from "./content.css";
import home from "../home/home.js"
import service from "../services/services.js";
import Tips from "../Tips/Tips.js";
import media from "../media/media.js";
import aboutUs from "../aboutUs/aboutUs.js";

const content = (root, page="home") => {

    root.innerHTML = "";

    switch (page){
        case "home":
            home(root);
            break;
        case "service":
            service(root);
            break;
        case "Tips":
            Tips(root);
            break;
        case "media":
            media(root);
            break;
        case "aboutus":
            aboutUs(root);

    }
}

export default content;