export default function images(){

    document.querySelector("#image-container").innerHTML = "";
    const modal = document.querySelector("#enlarged-images");
    async function getImageData() {

        const response = await fetch("data/workImages.json")
        const data = await response.json();
        // console.table(data.members);
        createMyWorkCards(data.workImages);
    }

    function displayModal(image) {
        modal.innerHTML = '';
        modal.innerHTML = `
            <button id="closeModal">❌</button>
            <img src=${image.image} alt=${image.alt} class="enlarged-image" loading="lazy">
            <p>${image.alt}</p> 
        `;
        modal.showModal();
        closeModal.addEventListener("click", () => {
            modal.close();
        });
    };


    function createMyWorkCards(myWork) {
        myWork.forEach( image => {
            let card = document.createElement("section");
            let img = document.createElement("img");
            img.setAttribute("src", image.image);
            img.setAttribute("alt", image.alt);
            img.setAttribute("class", "work-images");
            img.setAttribute("loading", "lazy");
            img.addEventListener("click", () => {displayModal(image)})
            
            card.appendChild(img);

            document.querySelector("#image-container").appendChild(card);
        });
    }

    getImageData();
}