import {NavigationBar} from "./components/navigation.js";
import {Banner} from "./components/banner.js";
import {Footer} from './components/footer.js';
// import {bannerData} from "./data/data.js";


let rootDiv = document.getElementById('root');
let dataURL = "https://anonyda.github.io/json-data-server/website/websiteData.json"
fetch(dataURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        rootDiv.appendChild(NavigationBar(data.navigation));
        rootDiv.appendChild(Banner(data.banner));
        rootDiv.appendChild(Footer(data.footer));
    })
    .catch((err) => {
        console.log(err);
    })



// rootDiv.appendChild(NavigationBar());
// // rootDiv.appendChild(Hamburger(hamburger));
// rootDiv.appendChild(Banner(bannerData));