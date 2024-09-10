document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('email').focus();

    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    passwordInput.addEventListener('input', function () {
        if (passwordInput.value === '') {
            confirmPasswordInput.setAttribute('readonly', true);
        } else {
            confirmPasswordInput.removeAttribute('readonly');
        }
    });

    if (passwordInput.value === '') {
        confirmPasswordInput.setAttribute('readonly', true);
    } else {
        confirmPasswordInput.removeAttribute('readonly');
    }
});

function handleFormSubmit(e) {
    e.preventDefault();

    const addedPTags = document.querySelectorAll('p.added-after-submit');
    addedPTags.forEach(p => p.remove());

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true, goodPassword = true;

    if (email === '') {
        const emailErrorText = document.createElement('p');
        emailErrorText.classList.add('added-after-submit');
        emailErrorText.style.color = 'red';
        emailErrorText.style.fontSize = '13px';
        emailErrorText.textContent = 'ⓘ Email address is required';
        const emailInput = document.getElementById('email');
        emailInput.parentNode.insertBefore(emailErrorText, emailInput.nextSibling);
        emailInput.focus();
        isValid = false;
    } 
    else if (!email.includes('@') || !email.includes('.')) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'ⓘ Please enter a valid email';
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
        passwordErrorText.textContent = 'ⓘ Password is required';
        const passwordInput = document.getElementById('password');
        passwordInput.parentNode.insertBefore(passwordErrorText, passwordInput.nextSibling);
        passwordInput.focus();
        isValid = false;
        goodPassword = false;
    } 
    else if (password.length < 8) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'ⓘ Password must be at least 8 characters long';
        const passwordInput = document.getElementById('password');
        passwordInput.parentNode.insertBefore(errorText, passwordInput.nextSibling);
        passwordInput.focus();
        isValid = false;
        goodPassword = false;
    } 
    else if (password.includes('-') || password.includes('.')) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'ⓘ Password cannot contain "-" or "."';
        const passwordInput = document.getElementById('password');
        passwordInput.parentNode.insertBefore(errorText, passwordInput.nextSibling);
        passwordInput.focus();
        isValid = false;
        goodPassword = false;
    } 
    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\[\](){}])[A-Za-z\d@#$!%*+=-_,|:;"'/\\?&\[\](){}<>]{8,}$/)) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'ⓘ Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        const passwordInput = document.getElementById('password');
        passwordInput.parentNode.insertBefore(errorText, passwordInput.nextSibling);
        passwordInput.focus();
        isValid = false;
        goodPassword = false;
    }

    if (goodPassword && confirmPassword === '') {
        const confirmPasswordErrorText = document.createElement('p');
        confirmPasswordErrorText.classList.add('added-after-submit');
        confirmPasswordErrorText.style.color = 'red';
        confirmPasswordErrorText.style.fontSize = '13px';
        confirmPasswordErrorText.textContent = ' ⓘ Please confirm your password';
        const confirmPasswordInput = document.getElementById('confirmPassword');
        confirmPasswordInput.parentNode.insertBefore(confirmPasswordErrorText, confirmPasswordInput.nextSibling);
        confirmPasswordInput.focus();
        isValid = false;
    }
    else if (confirmPassword !== password) {
        const errorText = document.createElement('p');
        errorText.classList.add('added-after-submit');
        errorText.style.color = 'red';
        errorText.style.fontSize = '13px';
        errorText.textContent = 'ⓘ Passwords do not match';
        const confirmPasswordInput = document.getElementById('confirmPassword');
        confirmPasswordInput.parentNode.insertBefore(errorText, confirmPasswordInput.nextSibling);
        confirmPasswordInput.focus();
        isValid = false;
    }

    if (isValid) {
        printCredentials(email, password);
        showPopup();
        clearForm();
    }
}

function printCredentials(email, password) {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
}

function showPopup() {
    const popup = document.getElementById('accountCreatedPopup');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 5000);
}

function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('email').focus();
}

document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const icon = this.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        passwordInput.focus();
        passwordInput.setSelectionRange(passwordInput.value.length, passwordInput.value.length);
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        passwordInput.focus();
        passwordInput.setSelectionRange(passwordInput.value.length, passwordInput.value.length);
    }
});