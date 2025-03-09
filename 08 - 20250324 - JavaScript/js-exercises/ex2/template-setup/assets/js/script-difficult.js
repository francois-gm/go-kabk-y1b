

// always declare your variables first


const btn = document.getElementById("btn-color-toggle");
const color = document.querySelector(".color");

// then declare your functions

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// then declare your event listeners

btn.addEventListener("click", function () {
  

  
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});


