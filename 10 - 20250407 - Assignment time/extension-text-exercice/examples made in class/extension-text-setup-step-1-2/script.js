


// 1) simple text-based feature, replace the webpage's main heading

const heading1 = document.querySelector('h1');

heading1.textContent = 'Alternate title';

// 2) something a bit more complicated, replace selected elements with lorem ipsum

function replaceText(){

    const headingElements = document.querySelectorAll('h2, h3, h4, h5, h6, figcaption');
    const textElements = document.querySelectorAll('p');
    const buttonElements = document.querySelectorAll('button, a');

    headingElements.forEach(function(headingElement){

        headingElement.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    });

    textElements.forEach(function(textElement){

        textElement.textContent = 'Sed dictum sit amet arcu posuere maximus. Maecenas in mauris accumsan, congue risus eu, vestibulum metus. Maecenas id quam a velit vulputate sagittis ac pretium purus. Quisque aliquam tincidunt tempor. Curabitur pulvinar feugiat nunc, eget porttitor magna auctor eget. Sed vitae dapibus nulla. Nunc fermentum consequat lacus, ac scelerisque ante euismod vitae. Pellentesque at eleifend nisi. Praesent tempus metus sed sapien tristique, eget luctus nisi tincidunt. Phasellus ac euismod risus. Nunc pretium nibh ut commodo lacinia. Fusce pulvinar tempor luctus. Nulla id venenatis risus.';

    });

    buttonElements.forEach(function(buttonElement){

        buttonElement.textContent = 'Lorem ipsum.';

    });

}

// using the function for the first time

replaceText();

// then looping it every second (in case of dynamically loaded website content)

setInterval(function(){

    replaceText();

},1000);




