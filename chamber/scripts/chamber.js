const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last Modification <span>${document.lastModified}</span>`;

// hamburger menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement("section");
        card.className = "card";
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const image = document.createElement("img")
        const website = document.createElement("a");
        const level = document.createElement("p")
        

        name.innerHTML = `${member.name}`;
        address.innerHTML = `${member.address}`;
        phone.innerHTML = `${member.phone}`;
        website.innerHTML = `Website`;
        level.innerHTML = `Level: ${member.level}`;

        website.setAttribute("href", member.url);

        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "220");
        image.setAttribute("height", "300");

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(image);
        card.appendChild(website);
        card.appendChild(level);
        

        cards.appendChild(card);
    });
}

getMemberData();
