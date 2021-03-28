
const darkSideButton = document.querySelector('.dark-side-button');
const calculateButton = document.querySelector('.calculate-button');

//If darkside button bestaat, dan event listener erop zetten.
if (darkSideButton) {
	darkSideButton.addEventListener("click", enterTheDarkSide);
}

if (calculateButton) {
	calculateButton.addEventListener("click", calculateStuff);
}

function enterTheDarkSide()	{
	const pageBody = document.querySelector('#page-body');

	// If light, then dark. If dark, then light..
	if (pageBody.classList.contains('dark-side')) {
		console.log("Enter the light side..");
		pageBody.classList.remove('dark-side');
		pageBody.classList.add('light-side');
	} else {
		console.log("Enter the dark side..");
		pageBody.classList.remove('light-side');
		pageBody.classList.add('dark-side');
	}
}

function calculateStuff() {
	const form = document.forms.calculator;
    const elementOne = document.querySelector('.inputfield-1').value;
	const elementTwo = document.querySelector('.inputfield-2').value;
	const result = elementOne + elementTwo;
    const resultLabel = document.querySelector('.result-label');

	console.log(`Number one is ${elementOne} and number two is ${elementTwo} and the result is: ${result}`);
	resultLabel.textContent = result;//result.value;
}