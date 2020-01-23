// console.log("linked");

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/v1/places")
    .then(res => res.json())
    .then(data => console.log(data));
});