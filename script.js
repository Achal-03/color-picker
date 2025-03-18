// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let container = document.getElementById("colorPickerContainer");
    let span = document.getElementById("selectedColorHexCode");
});

function but1() {
    let container = document.getElementById("colorPickerContainer");
    let span = document.getElementById("selectedColorHexCode");
    container.style.backgroundColor = "#e0e0e0";
    span.textContent = "#e0e0e0";
}

function but2() {
    let container = document.getElementById("colorPickerContainer");
    let span = document.getElementById("selectedColorHexCode");
    container.style.backgroundColor = "#6fcf97";
    span.textContent = "#6fcf97";
}

function but3() {
    let container = document.getElementById("colorPickerContainer");
    let span = document.getElementById("selectedColorHexCode");
    container.style.backgroundColor = "#56ccf2";
    span.textContent = "#56ccf2";
}

function but4() {
    let container = document.getElementById("colorPickerContainer");
    let span = document.getElementById("selectedColorHexCode");
    container.style.backgroundColor = "#bb6bd9";
    span.textContent = "#bb6bd9";
}