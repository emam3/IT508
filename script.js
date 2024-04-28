const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const submitButton = document.getElementById('submit-button');

let validFields = {
    firstName: true,
    lastName: true,
    email: true,
    checkBox: true,
}
let valid = false;

const enableSubmit = () => {
    submitButton.disabled = false;
};

emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = 'Invalid email';
        validFields.lastName = false;
    } else {
        emailError.innerHTML = '';
        validFields.email = true;
    }
    enableSubmit();
});



firstNameInput.addEventListener('input', function () {
    const firstNameValue = firstNameInput.value;
    const nameRegex = /^.{0,2}$/;
    if (nameRegex.test(firstNameValue)) {
        firstNameError.innerHTML = 'Invalid name';
        validFields.firstName = false;
    } else {
        firstNameError.innerHTML = '';
        validFields.lastName = true;
    }
    enableSubmit();
});

lastNameInput.addEventListener('input', function () {
    const lastNameValue = lastNameInput.value;
    const nameRegex = /^.{0,2}$/;
    if (nameRegex.test(lastNameValue)) {
        lastNameError.innerHTML = 'Invalid name';
        validFields.lastName = false;
    }
    else {
        validFields.lastName = true;
        lastNameError.innerHTML = '';
    }
    enableSubmit();
});

const checkbox = document.getElementById('agree');

checkbox.addEventListener('click', function () {
    if (this.checked) validFields.checkBox = true;
    else validFields.checkBox = false;
    enableSubmit();
});