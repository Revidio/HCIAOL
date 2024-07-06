function redirectToPage(userType) {
    if (userType === 'student') {
        window.location.href = '../roster/rosterS.html';
    } else if (userType === 'teacher') {
        window.location.href = '../roster/rosterT.html';
    }
}

function isAlphanumeric(password) {
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;

    if (!upperCasePattern.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!lowerCasePattern.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!numberPattern.test(password)) {
        return "Password must contain at least one number.";
    }
    return "";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("studentLogin").addEventListener("click", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username === "" || password === "") {
            alert("Please fill in both username and password.");
        } else {
            const passwordError = isAlphanumeric(password);
            if (passwordError !== "") {
                alert(passwordError);
            } else {
                redirectToPage('student');
            }
        }
    });

    document.getElementById("teacherLogin").addEventListener("click", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username === "" || password === "") {
            alert("Please fill in both username and password.");
        } else {
            const passwordError = isAlphanumeric(password);
            if (passwordError !== "") {
                alert(passwordError);
            } else {
                redirectToPage('teacher');
            }
        }
    });
});