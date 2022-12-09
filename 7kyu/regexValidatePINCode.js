// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false




// My Solution

function validatePIN (pin) {
    //return true or false
    // find length of pin
    // find set correct length
    // set only numbers
    // condiionals of true or false
   let pinLen = pin.length
   let isCorrectLen = (pinLen === 4 || pinLen === 6)
   let onlyNum = pin.match(/^\d+$/)
   
   if(isCorrectLen && onlyNum){
     return true
   }else {
     return false
   }
   
  }