function buildAboutPage () {
    const title = document.createElement("h3");
    title.innerText = "Contact";
    content.appendChild(title);

    const papa = document.createElement("div");
    const pp1 = document.createElement("p");
    pp1.classList.add("name");
    pp1.innerText = "Papa";
    papa.appendChild(pp1);
    const pp2 = document.createElement("p");
    pp2.innerText = "who never gives compliments.";
    papa.appendChild(pp1);
    const pp3 = document.createElement("p");
    pp3.innerText = "grincheux@restaurant.com";
    papa.appendChild(pp3);
    content.appendChild(papa);

    const mama = document.createElement("div");
    const pm1 = document.createElement("p");
    pm1.classList.add("name");
    pm1.innerText = "Mama";
    mama.appendChild(pm1);
    const pm2 = document.createElement("p");
    pm2.innerText = "who always waits for compliments.";
    mama.appendChild(pm2);
    const pm3 = document.createElement("p");
    pm3.innerText = "souriante@restaurant.com";
    mama.appendChild(pm3);
    content.appendChild(mama);
}
export default buildAboutPage;