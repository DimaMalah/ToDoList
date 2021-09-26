
const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#btn");
const resultEl = document.querySelector("#result");


btnEl.addEventListener("click", clickingBtn);



function clickingBtn() {
	if (inputEl.value) {
		resultEl.innerHTML += `<li>${inputEl.value}</li>`;
		console.log((inputEl.value));
		inputEl.value = "";
	}
};