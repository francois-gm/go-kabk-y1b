


// 1) simple text-based feature, replace the webpage's main heading

/*

// define your variables first
const heading1 = document.querySelector('h1');

// change the text content of the heading
heading1.textContent = "Why don't you go outside instead of reading this?";

*/


// 2) something a bit more complicated, replace selected elements with lorem ipsum

/*

// define your variables first
const headingElements = document.querySelectorAll('h2, h3, h4, h5, h6, figcaption');
const textElements = document.querySelectorAll('p');
const buttonElements = document.querySelectorAll('button, a');

// the text and button elements need to be looped first before each can individually be modified
headingElements.forEach(function(headingElement) {
    headingElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra aliquam tincidunt.";
});

textElements.forEach(function(textElement) {
    textElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra aliquam tincidunt. Phasellus quis orci lobortis, hendrerit neque non, eleifend neque. Pellentesque malesuada augue a ex euismod scelerisque. Vivamus iaculis venenatis dui vitae tristique. Fusce eu hendrerit ipsum. Phasellus venenatis elit ante, eget ullamcorper purus feugiat ac. Etiam metus erat, consectetur vel augue vel, blandit bibendum mi. Maecenas blandit nibh ut dolor luctus, nec lobortis neque placerat. Duis mattis in eros ut dapibus. Cras efficitur congue finibus.";
});

buttonElements.forEach(function(buttonElement) {
    buttonElement.textContent = "Don't click!";
});

*/



// 3) We wrap what we did in 2) in a function that we can loop every second 
//    (so we can apply our changes to dynamically loading pages)

/*

// we wrap the variables, the loop, and the text content change into a function that we name
function replaceText(){

    // define your variables first (this time I use "let" because their values might change later)
    let headingElements = document.querySelectorAll('h2, h3, h4, h5, h6, figcaption');
    let textElements = document.querySelectorAll('p');
    let buttonElements = document.querySelectorAll('button, a');

    // the text and button elements need to be looped first before each can individually be modified
    headingElements.forEach(function(headingElement) {
        headingElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra aliquam tincidunt.";
    });

    textElements.forEach(function(textElement) {
        textElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra aliquam tincidunt. Phasellus quis orci lobortis, hendrerit neque non, eleifend neque. Pellentesque malesuada augue a ex euismod scelerisque. Vivamus iaculis venenatis dui vitae tristique. Fusce eu hendrerit ipsum. Phasellus venenatis elit ante, eget ullamcorper purus feugiat ac. Etiam metus erat, consectetur vel augue vel, blandit bibendum mi. Maecenas blandit nibh ut dolor luctus, nec lobortis neque placerat. Duis mattis in eros ut dapibus. Cras efficitur congue finibus.";
    });

    buttonElements.forEach(function(buttonElement) {
        buttonElement.textContent = "Don't click!";
    });

}

// function triggered on page load
replaceText();

// function triggered again every second
setInterval(function(){
    replaceText();
},1000);

*/



// 4) Last example, we filter the text for words that we replace with other words









// first we set a "word map", it is a JavaScript "value/pair type of" object.
// The first word is the word to be replaced, and the second one the word to replace with

const wordMap = {
    "President": "Village Idiot",
    "president": "village idiot",
    "Prime Minister": "Chief Fool",
    "Chancellor": "Head Clown",
    "Minister": "Court Jester",
    "minister": "court jester"
};
  
// second, we set a "regex", a regex is short for a "regular expression"
// it is a (a weirdly looking) piece of code that allows to filter through textual content
// read more: https://en.wikipedia.org/wiki/Regular_expression
// this regex does the following: 
// ✔ Dynamically matches only the exact words in wordMap.
// ✔ Uses word boundaries (\b) to avoid partial matches.
// ✔ Uses the global flag (g) to replace all occurrences.

const regex = new RegExp(`\\b(${Object.keys(wordMap).join("|")})\\b`, "g");
  
// we create a general function that does the work of applying text modifications based on our word map
function replaceTextInNode(textNode) {
    textNode.nodeValue = textNode.nodeValue.replace(regex, match => wordMap[match]);
}

// we also create a function that does scan the whole document 
function scanAndReplace() {
    // we use a method called "create Tree Walker", it allows us filter between HTML tags and text
    // https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    // we loop through all the nodes of our tree walker
    while ((textNode = walker.nextNode())) {
        // we can then use our general function here to make the text modification
        replaceTextInNode(textNode);
    }
}
  
// function triggered on page load
scanAndReplace();

// function triggered again every second
setInterval(function(){
    scanAndReplace();
},1000);