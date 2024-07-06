document.getElementById('TeacherRegister').addEventListener('click', function() {
    if (validateForm()) {
        window.location.href = '../roster/rosterT.html';
    }
});

document.getElementById('StudentRegister').addEventListener('click', function() {
    if (validateForm()) {
        window.location.href = '../roster/rosterS.html';
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
        console.log('Form is valid and ready to be submitted.');
    }
});

function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!username || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'All fields are required.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    if (!validatePassword(password)) {
        errorMessage.textContent = 'Password must contain an uppercase letter, a lowercase letter, and a number.';
        return false;
    }

    errorMessage.textContent = '';
    return true;
}

function validatePassword(password) {
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;

    return upperCasePattern.test(password) && lowerCasePattern.test(password) && numberPattern.test(password);
}
