// get current date
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last Modification <span>${document.lastModified}</span>`;
//

// hamburger menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

//mywork js

// image content
const workImages = [
	{
        image: "images/home-card.png",
        alt: "Home page example",
        onclick: "enlargeImage(this)"
    },
    {
        image: "images/home-card2.png",
        alt: "Home page footer example",
        onclick: "enlargeImage(this)"
    },
    {
        image: "images/sub-card.png",
        alt: "sub page example",
        onclick: "enlargeImage(this)"
    },
    {
        image: "images/sub-card2.png",
        alt: "extended sub page example",
        onclick: "enlargeImage(this)"
    },
    {
        image: "images/sub-card3.png",
        alt: "extended sub page example",
        onclick: "enlargeImage(this)"
    },
    {
        image: "images/contact-card.png",
        alt: "contact page example",
        onclick: "enlargeImage(this)"
    }

];

createMyWorkCards(workImages);

function createMyWorkCards(myWork) {
	document.querySelector("#image-container").innerHTML = "";
	myWork.forEach( image => {
		let card = document.createElement("section");
		let img = document.createElement("img");
		img.setAttribute("src", image.image);
		img.setAttribute("alt", image.alt);
        img.setAttribute("onclick", image.onclick);
        img.setAttribute("class", "work-images");
		img.setAttribute("loading", "lazy");
		img.setAttribute("height", 250);
		
		card.appendChild(img);

		document.querySelector("#image-container").appendChild(card);
	});
}

function enlargeImage(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

