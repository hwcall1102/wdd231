
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
