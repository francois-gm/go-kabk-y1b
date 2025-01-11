

// always declare your variables first

// first, do a check if the page is the homepage or a page inside the 'content' folder in order to give the right link

let rootUrl = '';

if(document.getElementById("is-homepage")){
	rootUrl = '.';
}else{
	rootUrl = '..';
}

// then declare your array of links

const randomPages = [
	rootUrl+"/content/01.html", 
	rootUrl+"/content/02.html", 
	rootUrl+"/content/03.html", 
	rootUrl+"/content/04.html", 
	rootUrl+"/content/05.html", 
	rootUrl+"/content/06.html", 
	rootUrl+"/content/07.html", 
	rootUrl+"/content/08.html",
	rootUrl+"/content/09.html",
	rootUrl+"/content/10.html"
];

const randomButton = document.getElementById("btn-random-link");

// then declare your functions

function getRandomPage() {
	return Math.floor(Math.random() * randomPages.length);
}

// then declare your event listeners

randomButton.addEventListener("click", function () {

	const randomNumber = getRandomPage();
	
	// this one has no 'back/forward' browser button mechanism
	window.location.replace(randomPages[randomNumber]);

	// or this one allows the 'back/forward' browser button mechanism
	//window.location.href = randomPages[randomNumber];

});


