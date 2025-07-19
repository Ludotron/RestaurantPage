import "./styles.css";
import buildHomePage from "./home.js"
import buildMenuPage from "./menu.js"
import buildAboutPage from "./about.js"

const content = document.querySelector("#content");
const bHome = document.querySelector("#button-home");
const bMenu = document.querySelector("#button-menu");
const bAbout = document.querySelector("#button-about");
function clearContent () {
    content.innerText = "";
}
bHome.addEventListener("click", () => {
    clearContent();
    buildHomePage();
});
bMenu.addEventListener("click", () => {
    clearContent();
    buildMenuPage();
});
bAbout.addEventListener("click", () => {
    clearContent();
    buildAboutPage();
});

buildHomePage();