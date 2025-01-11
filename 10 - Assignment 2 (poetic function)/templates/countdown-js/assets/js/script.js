

// always declare your variables first

let timer;
// my control button
const resetCountdownButton = document.getElementById("btn-reset-countdown");

// then declare your functions

function startTimer(duration, display) {

  timer = duration;

  setInterval(function () {

    if(!document.body.classList.contains('is-timeout')){
    
      display.textContent = timer;

      timer--;

      if (timer < 0) {
        // reset timer
        timer = duration;
        // WHEN TIMER IS OVER, DO SOMETHING
        document.body.classList.add('is-timeout');
      }

    }

  }, 10);

}

function resetTimer() {
  timer = 5 * 100;
  document.body.classList.remove('is-timeout');
}

// then declare your event listeners

// on first load, set the countdown

window.onload = function () {
  // five seconds
  timeInSeconds = 5 * 100;
  display = document.querySelector('#timer');
  startTimer(timeInSeconds, display);
};

// on click of the button, reset the countdown

resetCountdownButton.addEventListener("click", function () {

  if(document.body.classList.contains("is-timeout")){

    resetTimer();

  }

});


