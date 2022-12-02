// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My Solution  

function squareSum(numbers){
    let square = numbers.reduce((x, num) => {
      return x + num ** 2;
    }, 0)
    return square
  }