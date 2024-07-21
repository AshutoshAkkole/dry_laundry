import * as contentCss from "./content.css";
import home from "../home/home.js"
import service from "../services/services.js";

const content = (root, page="home") => {

    root.innerHTML = "";

    switch (page){
        case "home":
            home(root);
            break;
        case "service":
            service(root);
            break;
    }
}

export default content;