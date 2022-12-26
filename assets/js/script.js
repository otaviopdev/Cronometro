/*
Cronômetro

Tem como objetivo, realizar um cronómetro que tenha as opções de iniciar, reset (voltar o cronômetro a 0) e pausar.
*/

let spanMiliSeconds = document.querySelector("#spanMiliSeconds");
let spanSeconds = document.querySelector("#spanSeconds");
let spanMinutes = document.querySelector("#spanMinutes");

let reset = document.querySelector("#reset_button");
let pause = document.querySelector("#pause_button");
let play = document.querySelector("#play_button");

let miliSeconds = 00;
let seconds = 00;
let minutes = 00;

let interval = null;

// ----------------------------------------------------------------------------------------------

play.addEventListener("click", startChronometer);

function startChronometer(e) {
  console.log(e);

  clearInterval(interval);

  interval = setInterval(function () {
    miliSeconds++;

    if (miliSeconds < 10) {
      spanMiliSeconds.innerHTML = "0" + miliSeconds;
    }
    if (miliSeconds > 10) {
      spanMiliSeconds.innerHTML = miliSeconds;
    }
    if (miliSeconds > 99) {
      seconds++;

      spanSeconds.innerHTML = "0" + seconds;

      miliSeconds = 00;

      spanMiliSeconds.innerHTML = "0" + miliSeconds;
    }

    if (seconds > 9) {
      spanSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;

      spanMinutes.innerHTML = "0" + minutes;

      seconds = 00;

      spanSeconds.innerHTML = "0" + seconds;

      if (minutes > 9) {
        spanMinutes.innerHTML = minutes;
      }
    }
  }, 10);
}

// -----------------------------------------------------------------------------------------------------------------

pause.addEventListener("click", pauseChronometer);

function pauseChronometer(e) {
  console.log(e);

  clearInterval(interval);
}

// ---------------------------------------------------------------------------------------------

reset.addEventListener("click", resetChronometer);

function resetChronometer(e) {
  console.log(e);

  clearInterval(interval);

  miliSeconds = "00";
  seconds = "00";
  minutes = "00";

  spanMiliSeconds.innerHTML = miliSeconds;
  spanSeconds.innerHTML = seconds;
  spanMinutes.innerHTML = minutes;
}

// --------------------------------------------------------------------------------------------

document.addEventListener("keypress", startKey);

function startKey(event) {
  console.log(event);

  if (event.charCode === 13) {
    startChronometer();
  }
}

// -------------------------------------------------------------------------------------------------

document.addEventListener("keypress", pauseKey);

function pauseKey(event) {
  console.log(event);

  if (event.charCode === 32) {
    pauseChronometer();
  }
}

// -----------------------------------------------------------------------------------------------

document.addEventListener("keypress", resetKey);

function resetKey(event) {
  console.log(event);

  if (event.charCode === 114) {
    resetChronometer();
  }
}

// ------------------------------------------------------------------------------------------------
