// applies to all pages

const today = new Date();
const year = document.querySelector("#currentyear");
export default function() {
    year.innerHTML = `<span>${today.getFullYear()}</span>`;

    const modified = document.querySelector("#lastModified");
    modified.innerHTML = `Last Modification <span>${document.lastModified}</span>`;
}