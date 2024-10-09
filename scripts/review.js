function displayCourseDetails(courses) {
    const courseDetails = document.getElementById("course-details");
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${courses.subject} ${courses.number}</h2>
        <h3>${courses.title}</h3>
        <p><strong>Credits</strong>: ${courses.credits}</p>
        <p><strong>Certificate</strong>: ${courses.certificate}</p>
        <p>${courses.description}</p>
        `;
    courseDetails.showModal();
    const closeModal = document.querySelector("#closeModal");
    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
};

createCourseCard(courses);

const allLink = document.querySelector("#all");
const cseLink = document.querySelector("#cse");
const wddLink = document.querySelector("#wdd");

allLink.addEventListener("click", () => {
    createCourseCard(courses);
});

cseLink.addEventListener("click", () => {
    createCourseCard(courses.filter(courses => courses.subject.includes('CSE')));
});

wddLink.addEventListener("click", () => {
    createCourseCard(courses.filter(courses => courses.subject.includes('WDD')));
});

function createCourseCard(filteredCourses) {
    document.querySelector("#courses").innerHTML = "";
    filteredCourses.forEach(courses => {
        let card = document.createElement("section");
        let name = document.createElement("a");

        card.setAttribute("class", courses.completed); 
        name.innerHTML = `${courses.subject} ${courses.number}`;
        card.appendChild(name);

        card.addEventListener('click', () => {
            displayCourseDetails(filteredCourses);
        });
        document.querySelector("#courses").appendChild(card);
    });
};

createCreditsCard(courses);

function createCreditsCard(filteredCourses) {
    document.querySelector("#credits").innerHTML;
    let creditsCard = document.createElement("p");
    creditsCard.setAttribute("Class", "credits");

    const completedCredits = courses.reduce((total,earned) => {
        return total + (earned.credits);
    }, -2);
    const totalCredits = courses.reduce((total, earned) => {
        return total + (earned.credits);
    }, 0);
    
    creditsCard.innerHTML =`${completedCredits}/${totalCredits} Credits Completed`;

    document.querySelector("#credits").appendChild(creditsCard);
};