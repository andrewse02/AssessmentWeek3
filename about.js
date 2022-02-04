console.log("hello world");

const duckImage = document.getElementById("duck");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
duckImage.addEventListener("mouseover", () => {
	alert("You are an ABSOLUTE UNIT!!!");
})