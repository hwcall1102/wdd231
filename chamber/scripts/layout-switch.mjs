const layoutSwitch = document.querySelector('#layoutSwitch');
const container = document.querySelector('.cards-grid');


export default function layout() {
    layoutSwitch.addEventListener('change', function() {
    if (this.checked) {
        container.classList.add('column');
    } else {
        container.classList.remove('column');
    }
    });
}