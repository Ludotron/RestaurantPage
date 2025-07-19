function buildHomePage () {
    const title = document.createElement("h3");
    title.innerText = "Grand Sapporo Restaurant";
    content.appendChild(title);

    const quote = document.createElement("div");
    quote.id = "quote";
    const p1 = document.createElement("p");
    p1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem nihil cumque perspiciatis reiciendis aperiam inventore cum, totam, rem earum distinctio quia culpa harum recusandae, iste laborum asperiores ullam sequi!";
    quote.appendChild(p1);
    const p2 = document.createElement("p");
    p2.id = "quote-author";
    p2.innerText = "Obscure philosophe grec.";
    quote.appendChild(p2);
    content.appendChild(quote);

    const openingHours = document.createElement("div");
    openingHours.id = "opening-hours"; 
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.innerText = "Horaire d'ouverture";
    table.appendChild(caption);
    const tbody = document.createElement("tbody");
    const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    const horaire = "7h - 21h";
    for (let i in jours) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerText = jours[i];
        tr.appendChild(th);
        let td = document.createElement("td");
        td.innerText = horaire;
        tr.appendChild(td);
        tbody.appendChild(tr);
    } 
    table.appendChild(tbody);
    openingHours.appendChild(table);
    content.appendChild(openingHours);

    const location = document.createElement("div");
    location.id = "location";
    const p3 = document.createElement("p");
    p3.id = "location-title";
    p3.innerText = "Location";
    location.appendChild(p3);
    const p4 = document.createElement("p");
    p4.innerText = "You know where it is!";
    location.appendChild(p4);
    content.appendChild(location);

}
export default buildHomePage;