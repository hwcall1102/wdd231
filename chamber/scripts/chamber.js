import modification from './modification.mjs';
import menu from './menu.mjs';
import weather from './weather.mjs';
import level from './member-level.mjs';
import results from './form-results.mjs';
modification();
menu();
weather();




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
        const membershipLevel = document.createElement("p")
        

        name.innerHTML = `${member.name}`;
        address.innerHTML = `${member.address}`;
        phone.innerHTML = `${member.phone}`;
        website.innerHTML = `Website`;
        
        let level = "Member";
        if(member.level == 1) {
          level = "Member";
        }
        else if (member.level == 2) {
          level = "Silver";
        }
        else if (member.level == 3) {
          level = "Gold";
        }

        membershipLevel.innerHTML = `Level: ${level}`;

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
        card.appendChild(membershipLevel);
        

        cards.appendChild(card);
    });
}
getMemberData();
level();
results();
