import foodImage from "./images/food.jpg";

function buildMenuPage () {
    const title = document.createElement("h3");
    title.innerText = "Menu";
    content.appendChild(title);

    const soup = document.createElement("div");
    soup.classList.add("food-card");
    const ps1 = document.createElement("p");
    ps1.classList.add("name");
    ps1.innerText = "Soup";
    soup.appendChild(ps1);
    const ps2 = document.createElement("p");
    ps2.innerText = "10€";
    soup.appendChild(ps2);
    const is3 = document.createElement("img");
    is3.src = foodImage;
    soup.appendChild(is3);
    content.appendChild(soup);

    const burger = document.createElement("div");
    burger.classList.add("food-card");
    const pb1 = document.createElement("p");
    pb1.classList.add("name");
    pb1.innerText = "Burger";
    burger.appendChild(pb1);
    const pb2 = document.createElement("p");
    pb2.innerText = "22€";
    burger.appendChild(pb2);
    const ib3 = document.createElement("img");
    ib3.src = foodImage;
    burger.appendChild(ib3);
    content.appendChild(burger);
}

export default buildMenuPage;