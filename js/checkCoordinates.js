// script.js

function checkCoordinates() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            if (latitude === 13.083694 && longitude === 80.270186) {
                alert("Correct map coordinates. Access granted!");
            } else {
                alert("Incorrect map coordinates. Access denied.");
            }
        }, function(error) {
            alert("Error getting location: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

