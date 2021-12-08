const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  const time = chronometer.split();
  //Check if the clock actually runs
  console.log(time);
  printMinutes(time);
  printSeconds(time);
}

function printMinutes(time) {
  minDecElement.textContent = time[0];
  minUniElement.textContent = time[1];
}

function printSeconds(time) {
  secDecElement.textContent = time[3];
  secUniElement.textContent = time[4];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn(evt) {
  //Stop the chrono
  chronometer.stop();
  //modify the text
  btnLeftElement.textContent = 'START';
  btnRightElement.textContent = 'RESET';
  //change the buttons
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
}

function setSplitBtn() {
  //create the new HTML element
  const newHTML = document.createElement('li');
  //fill the new HTML element with the value of the split
  newHTML.textContent = chronometer.split();
  //append the HTML element to splitsElement
  splitsElement.appendChild(newHTML);
}

function setStartBtn() {
  //Start the chrono
  chronometer.start();

  //modify the text
  btnLeftElement.textContent = 'STOP';
  btnRightElement.textContent = 'SPLIT';
  //change the buttons
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
}

function setResetBtn() {
  //reset chrono
  chronometer.reset()
  //delete all Li
  splitsElement.innerHTML = ""

}

// Start/Stop Button
btnLeftElement.addEventListener('click', (evt) => {
  //DONT UNDERSTAND THIS : why aren't evt.target and evt.target.textContent not coherent ?
  /*
  console.log(">>>",evt,evt.target,evt.target.textContent)
  console.log(">>>",btnLeftElement,btnLeftElement.textContent)
  */

  if (evt.target.textContent === 'START') {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (evt) => {
  if (evt.target.textContent === 'SPLIT') {
    setSplitBtn();
  }
  else {
    setResetBtn()
  }
});

//Set initial state and values
setInterval(printTime, 1000);
