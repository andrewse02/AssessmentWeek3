const randomRestaurants = [
    "https://www.chick-fil-a.com/locations/sc/carolina-forest",
    "https://www.chick-fil-a.com/locations/sc/seaboard-commons",
    "https://www.chick-fil-a.com/locations/sc/coastal-grand",
    "https://www.chick-fil-a.com/locations/sc/surfside",
    "https://www.chick-fil-a.com/locations/sc/church-street"
];
const randomButton = document.getElementById("random");

randomButton.addEventListener("click", (event) => {
    const randomElement = randomRestaurants[Math.floor(Math.random() * randomRestaurants.length)];
    window.open(randomElement, "_blank");
})