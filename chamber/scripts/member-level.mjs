
export default function level() {

    const levels = [
        {
            name: 'Non Profit',
            cost: 'free',
            benefit1: '2 comp tickets to all Chamber events',
            benefit2: 'Attend Chamber Board Meeting',
            benefit3: 'Join any club; Women in Business, Black-Owned Business, Entrepreneur Club, and more.',
            benefit4: 'Included in online Chamber Directory'
        },
        {
            name: 'Member',
            cost: '$1000',
            benefit1: '4 comp tickets to all Chamber events',
            benefit2: 'Invited to monthly Networking Mixer',
            benefit3: 'Discounted booths at Community Events',
            benefit4: 'All Non Profit benefits'
        },
        {
            name: 'Silver',
            cost: '$2500',
            benefit1: '8 comp tickets to all Chamber Events',
            benefit2: 'Invited to Annual Banquet Dinner',
            benefit3: 'Can Jr. Sponser Chamber Events',
            benefit4: 'All Member benefits'
        },
        {
            name: 'Gold',
            cost: '$5000',
            benefit1: 'Unlimited comp tickets to all Chamber Events',
            benefit2: 'Can Sr. sponser Chamber Events',
            benefit3: 'Run for Chamber Board Seats',
            benefit4: 'All Silver benefits'
        }
    ]
    
    const memberBox = document.querySelector("#member-cards");
    const modal = document.querySelector("#member-details");
    
    
    function displayModal(level) {
        modal.innerHTML = '';
        modal.innerHTML = `
            <button id="closeModal">❌</button>
            <h2>${level.name}</h2>
            <p><strong>Annual Cost</strong>: ${level.cost}</p>
            <p><strong>Benefits</strong>:</p>
            <p>${level.benefit1}</p>
            <p>${level.benefit2}</p>
            <p>${level.benefit3}</p>
            <p>${level.benefit4}</p>
            `;
        modal.showModal();
        closeModal.addEventListener('click', () => {
            modal.close();
        });
    };
    
    function displayMember(levels) {
        levels.forEach(level => {
            const memberCard = document.createElement("section");
            const memberLevel = document.createElement("h3");
            const button = document.createElement("button");
            memberLevel.innerHTML = `${level.name}`;
            button.setAttribute("class", "body-button");
            button.innerHTML = `Learn More`;
            button.addEventListener("click", () => {displayModal(level)});
            memberCard.appendChild(memberLevel);
            memberCard.appendChild(button);
            memberBox.appendChild(memberCard);
        });
    };
    displayMember(levels);
};