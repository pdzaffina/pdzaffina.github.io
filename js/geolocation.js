/**
 * Sources:
 * https://www.w3schools.com/html/html5_geolocation.asp
 */

/**
 * Called by Blazor to check if we can use the Geolocation API
 * Cat the property's existence to a boolean.
 */

function createAlert() {
    alert("Hey this is an alert");
}

function createPrompt(question) {
    return prompt(question);
}

function setElementTextById(id, text) {
    document.getElementById(id).innerText = text;
}

// geolocation.js

window.geoLocation = {
    getCurrentPosition: function (dotnetHelper) {
        navigator.geolocation.getCurrentPosition(function (position) {
            dotnetHelper.invokeMethodAsync("GetPosition", position.coords.latitude, position.coords.longitude, position.coords.accuracy);
        });
    }
};


