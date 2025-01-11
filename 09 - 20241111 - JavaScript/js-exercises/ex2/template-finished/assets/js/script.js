

// always declare your variables first

const colors = ["green", "red", "orange", "teal", "turquoise", "yellow", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn-color-toggle");
const color = document.querySelector(".color");

// then declare your functions

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// then declare your event listeners

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});


