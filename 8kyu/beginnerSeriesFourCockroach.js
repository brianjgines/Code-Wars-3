// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// My Solution

function cockroachSpeed(s) {
    //Good Luck! 
    const secsInHour = 3600
    const  centInKilo = 100000;
    const speed = Math.floor((s * centInKilo) / secsInHour)
    return speed
    
  }