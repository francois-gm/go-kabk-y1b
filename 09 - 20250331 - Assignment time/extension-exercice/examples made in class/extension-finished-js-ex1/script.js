
// example 1, insert html with insertAdjacentHTML


const target = document.querySelector("h1");

if(target){

  target.insertAdjacentHTML("afterend", "<p id='special-extension-subtitle'><a href='https://www.google.com/search?q=can+too+much+internet+cause+fun'>Read why</a> too much internet can alter your mood.</p>");

}
