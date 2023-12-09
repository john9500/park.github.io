function client() {
    var Username = prompt("Enter given code correctly to Navigate Employee Login Portal");

    if (Username === "ags6587xf") {
        var Password = prompt("Password");
        alert("Logged in");
    } else if (Username === null) {
    
    } else {
        alert("Portal Access denied!!! The entered code is wrong.");
    }
}
