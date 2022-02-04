const colorButton = document.getElementById("color");
const placeButton = document.getElementById("place");
const foodButton = document.getElementById("food");

colorButton.addEventListener("click", (event) => {
    alert("My favorite color is blue.");
});

placeButton.addEventListener("click", (event) => {
    alert("My favorite place is my bed.")
});

foodButton.addEventListener("click", (event) => {
    alert("My favorite food is Chick-Fil-A.");
});
