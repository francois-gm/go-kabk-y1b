


// (step 5, JS), example 1, createElement

// The createElement() method in JavaScript is used to create a new HTML element dynamically. 
// It does not automatically insert the element into the DOM; 
// you must append it manually using methods like appendChild() or append().

// we first declare our function
/*
function addElement() {

  // set a variable corresponding to the element next to where we want to add our new element
  const target = document.querySelector("h1");

  // if this element exists, then we continue
  
  // if(target != null){
  if(target){

    // create a <p> HTML element variable
    const newElement = document.createElement("p");
    // set variables for the parent element and the parent after where we want to add our element
    const parent = target.parentNode;
    const nextSibling = target.nextSibling;
    // let's add an ID (not a class) to our new element
    newElement.id = "special-extension-subtitle";
    // newElement.classList.add("special-extension-subtitle");
    // let's add some text content inside
    newElement.textContent = "Warning: consuming too much online content can alter your mood.";

    // add the newly created element and its content into the DOM

    // The DOM (Document Object Model) is a representation of a webpage, 
    // (sometimes similar but not always) to a HTML document. 
    // JavaScript can use the DOM to find, change, add, or remove elements on the page, 
    // making it interactive without needing to reload.

    if (nextSibling) {
      parent.insertBefore(newElement, nextSibling); // Insert before the next sibling if it exists
    } else {
      parent.appendChild(newElement); // Otherwise, append at the end
    }

  }

}

// use our function on script load

addElement();

*/





// (step 6, JS), example 2, insertAdjacentHTML

/*
const target = document.querySelector("h1");

if(target){

  target.insertAdjacentHTML("afterend", "<p id='special-extension-subtitle'><a href='https://www.google.com/search?q=can+too+much+internet+cause+fun'>Read why</a> too much internet can alter your mood.</p>");

}
*/






// (step 7, JS), create a click function that hides elements when you click on it

/*
const textCollection = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, p, span, figcaption");
const imgCollection = document.querySelectorAll("img, figure, a, a *");

// Loop through all text elements
textCollection.forEach(text => {
  text.addEventListener("click", () => {
      text.style.opacity = 0; // Hide paragraph on click
  });
});

// Loop through all image elements
imgCollection.forEach(img => {
  
  img.addEventListener("click", function() {

    // Ensure opacity is set to 1 initially (if not already set)
    if (img.style.opacity === "") {
      img.style.opacity = 1;
    }

    let currentOpacity = parseFloat(img.style.opacity);

    // Decrease opacity by 0.1, ensuring it doesn't go below 0
    currentOpacity -= 0.1;

    // Set the new opacity, ensuring it doesn't go below 0
    img.style.opacity = Math.max(0, currentOpacity);

  });

});

// also switch click events for mousemove and mouseover and (document.addEventListener) scroll?
*/


