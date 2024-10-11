// grab entire get URL genrated including GET values
const currentURL = window.location.href;

//divide URL in half splitting on ?
const everything = currentURL.split('?');

// grab second half and divide into individual name value pair array
let formData = everything[1].split('&');

let result = "";

function show(cup) {
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace('%40', '@').replaceAll('+', ' ');
            
        }
    })
    return(result)
}; // end show

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
    <p>${show("firstName")} ${show("lastName")}</p>
    <p>${show("organizationalTitle")} of ${show("businessName")}</p>
    <p> Phone: ${show("mobilePhone")}</p>
    <p> Email: ${show("email")}</p>
    <p> Description of Business: ${show("description")}</p>
    <button id="return-button" class="body-button"><a href="https://hwcall1102.github.io/wdd231/chamber/join.html">Return to Form</button>
`
