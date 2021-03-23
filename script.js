
const darkSideButton = document.querySelector('.dark-side-button');

//If darkside button bestaat, dan event listener erop zetten.
if (darkSideButton) {
	darkSideButton.addEventListener("click", enterTheDarkSide);
}

function enterTheDarkSide()	{
	const pageBody = document.querySelector('.page-body');

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
	
	//pageBody.classList.toggle('dark-side');
}