
export default function form() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('name').value;
        const busName = document.getElementById('business-name').value;
        const email = document.getElementById('mail').value;
        const url = document.getElementById('url').value;
        const msg = document.getElementById('msg').value;

        const formData = {
            fullName: fullName,
            busName: busName,
            email: email,
            url: url,
            msg: msg
        };

        saveFormData(formData);
    });

    function saveFormData(formData) {
        const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

        storedFormData.push(formData);

        localStorage.setItem('formData', JSON.stringify(storedFormData));
    }
}