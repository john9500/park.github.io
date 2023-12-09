function checkAccessCode() {
    var accessCode = prompt("Please enter the access code:");

    if (accessCode === "ags6587xf") {
        alert("Access granted! You entered the correct access code.");
    } else {
        alert("Access denied! The entered code is wrong.");
    }
}

