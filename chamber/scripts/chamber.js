// applies to all pages

const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last Modification <span>${document.lastModified}</span>`;

// hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// home java weather API's and random card generator

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const tempHigh = document.querySelector('#high');
const tempLow = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const dayOne = document.querySelector('#day-one');
const foreOne = document.querySelector('#fore-one')
const dayTwo = document.querySelector('#day-two');
const foreTwo = document.querySelector('#fore-two');
const dayThree = document.querySelector('#day-three');
const foreThree = document.querySelector('#fore-three');

// create required variables for the URL
const myKey = 'cb467b1eb003fad255f28a2c2646b6fa';
const myLat = "41.04";
const myLong = "-111.94";

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const foreURL =`//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
    const response = await fetch(myURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }

    try {
      const response = await fetch(foreURL);
      if (response.ok) {
        const foreData = await response.json();
        displayForeResults(foreData);
        await console.log(foreData);
      }
      else {
        throw Error(await resonse.text());
      }
    } catch (error) {
        console.log(error);
    }

};

// Display the JSON data onto my webpage
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg; F`;
    const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('SRC', iconSRC);
    let desc = data.weather[0].description;
    const capDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = `${capDesc}`;
    tempHigh.innerHTML = `High: ${data.main.temp_max}&deg; F`;
    tempLow.innerHTML = `Low: ${data.main.temp_min}&deg; F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${getHourMinute(data.sys.sunrise)}`;
    sunset.innerHTML = `Sunset: ${getHourMinute(data.sys.sunset)}`;   
};

function displayForeResults(data) {
  dayOne.innerHTML = `${toWeekday(data.list[0].dt)}:  `;
  foreOne.innerHTML = `${data.list[0].main.temp_max}&deg;/${data.list[0].main.temp_min}&deg; F`;
  dayTwo.innerHTML = `${toWeekday(data.list[8].dt)}:  `;
  foreTwo.innerHTML = `${data.list[8].main.temp_max}&deg;/${data.list[8].main.temp_min}&deg; F`;
  dayThree.innerHTML = `${toWeekday(data.list[16].dt)}:  `;
  foreThree.innerHTML = `${data.list[16].main.temp_max}&deg;/${data.list[16].main.temp_min}&deg; F`;
}

function getHourMinute(epoch) {
  let date = new Date(0);
  date.setUTCSeconds(epoch);
  return date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
}

function toWeekday(epoch) {
  let date = new Date(epoch * 1000);
  let weekday = date.toLocaleString('en-us', { weekday: 'long'});
  let weekdayCap = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  return weekdayCap
}

// start process
apiFetch();


// directory functionality and card creation 

const layoutSwitch = document.getElementById('layoutSwitch');
const container = document.querySelector('.cards-grid');

layoutSwitch.addEventListener('change', function() {
  if (this.checked) {
    container.classList.add('column');
  } else {
    container.classList.remove('column');
  }
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

const spotlight = document.querySelector("#best-businesses");

async function getMemberData() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}