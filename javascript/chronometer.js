class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(/*callback*/) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }

  getMinutes() {
    const res = (this.currentTime - this.currentTime % 60) / 60
    console.log(" inside the method >>>" )
    return res; 
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    //verify the length of the value and add a 0 if needed
    return String(value).length === 2 ? String(value) : "0" + String(value)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    //retrieve the minutes in the right format
    const min = this.computeTwoDigitNumber(this.getMinutes())
    //retrieve the seconds in the right format
    const sec = this.computeTwoDigitNumber(this.getSeconds())

    let res = min +":"+ sec
    return res
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}





//tests//

/*
let test = 65
console.log((test -test%60 )/60,65%1)
const chrono = new Chronometer

chrono.currentTime = 5


console.log(chrono.split())
*/