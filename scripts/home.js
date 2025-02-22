
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last Modification <span>${document.lastModified}</span>`;

// hamburger menu
const mainnav = document.querySelector('#animate-me')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// Course Array

const courseBox = document.getElementById("courses")
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const wddCourses = courses.filter((course) => course.subject == 'WDD')
const cseCourses = courses.filter((course) => course.subject == 'CSE')

document.querySelector("#all").addEventListener('click', () => {
    courseBox.innerHTML = ''
    displayCourses(courses)
})
document.querySelector("#cse").addEventListener('click', () => {
    courseBox.innerHTML = ''
    displayCourses(cseCourses)
})
document.querySelector("#wdd").addEventListener('click', () => {
    courseBox.innerHTML = ''
    displayCourses(wddCourses)
})
const modal = document.querySelector("#course-details");
const closeModal = doccument.querySelector(".closeModal");

function displayCourseDetails(course) {
    modal.innerHTML = '';
    modal.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;
    modal.showModal();
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}

function displayCourses(courseList) {
    courseList.forEach(course => {
        const card = document.createElement("section");
        card.innerHTML = `${course.subject}${course.number}`;
        card.setAttribute("class", course.completed)
        card.addEventListener("click", () => {displayCourseDetails(course)});
        courseBox.appendChild(card);
    })
}

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

displayCourses(courses);