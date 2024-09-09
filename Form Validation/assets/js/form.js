document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('email').focus();
});

function handleFormSubmit(e) {
    e.preventDefault();

    const addedPTags = document.querySelectorAll('p.added-after-submit');
    addedPTags.forEach(p => p.remove());

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    if (email === '') {
        const emailErrorText = document.createElement('p');
        emailErrorText.classList.add('added-after-submit');
        emailErrorText.style.color = 'red';
        emailErrorText.style.fontSize = '13px';
        emailErrorText.textContent = 'Email address is required';
        const emailInput = document.getElementById('email');
        emailInput.parentNode.insertBefore(emailErrorText, emailInput.nextSibling);
        emailInput.focus();
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'Please enter a valid email';
        const emailInput = document.getElementById('email');
        emailInput.parentNode.insertBefore(errorText, emailInput.nextSibling);
        emailInput.focus();
        isValid = false;
    }

    if (password === '') {
        const passwordErrorText = document.createElement('p');
        passwordErrorText.classList.add('added-after-submit');
        passwordErrorText.style.color = 'red';
        passwordErrorText.style.fontSize = '13px';
        passwordErrorText.textContent = 'Password is required';
        const passwordInput = document.getElementById('password');
        passwordInput.parentNode.insertBefore(passwordErrorText, passwordInput.nextSibling);
        passwordInput.focus();
        isValid = false;
    } else if (password.length < 6) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'Password must be at least 6 characters long';
        const passwordInput = document.getElementById('password');
        passwordInput.parentNode.insertBefore(errorText, passwordInput.nextSibling);
        passwordInput.focus();
        isValid = false;
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        const passwordInput = document.getElementById('password');
        passwordInput.parentNode.insertBefore(errorText, passwordInput.nextSibling);
        passwordInput.focus();
        isValid = false;
    }

    if (isValid) {
        printCredentials(email, password);
    }
}

function printCredentials(email, password) {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
}

document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const icon = this.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});