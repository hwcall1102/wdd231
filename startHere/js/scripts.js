// grab entire get URL genrated including GET values
const currentURL = window.location.href;

//divide URL in half splitting on ?
const everything = currentURL.split('?');

// grab second half and divide into individual name value pair array
let formData = everything[1].split('&');

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result=element.split('=')[1].replace("%40", "@").replace("+", " ").replace("+", " ");
        };
    });
    return(result);
} // end show


const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p>Appointment for ${show("first")} ${show("last")}}</p>
    <p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple</p>
    <p>Your phone: ${show("phone")}</p>
    <p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
    `