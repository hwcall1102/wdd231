const layoutSwitch = document.querySelector('#layoutSwitch');
const container = document.querySelector('.cards-grid');



layoutSwitch.addEventListener('change', function() {
if (this.checked) {
    container.classList.add('column');
} else {
    container.classList.remove('column');
}
});
