// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// create required variables for the URL
const myKey = 'cb467b1eb003fad255f28a2c2646b6fa';
const myLat = "49.75";
const myLong = "6.64";

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

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
    };

  // Display the JSON data onto my webpage
    function displayResults(data) {
        currentTemp.innerHTML = `${data.main.temp}&deg; F`;
        const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute('SRC', iconSRC);
        let desc = data.weather[0].description;
        weatherIcon.setAttribute('alt', data.weather[0].description);
        captionDesc.textContent = `${desc}`;
    };
   // start process
    apiFetch();

