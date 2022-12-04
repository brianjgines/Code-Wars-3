// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// My Solution

function past(h, m, s){
    //#Happy Coding! ^_^
    // Clock showing H, M, S
    // Task take each para and convert the time in milliseconds
    // example = past(0, 1, 1) = 61000
    // asking us to create a variable to cnvert hrs to ms by mult h to 60
    // multiply 60 again for min
    // then multi final to 1000
    // then return it
    const hour = h * 60 * 60 * 1000;
    const min = m * 60 * 1000;
    const sec = s * 1000;
    return hour + min + sec;
    
    
    
  }