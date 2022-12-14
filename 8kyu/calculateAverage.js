// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Soluton

function findAverage(array) {
    // your code here
    let avgArr = array.reduce((a, b)=> a + b, 0) / array.length
    if(avgArr){
      return avgArr
    }else {
      return 0
    }
  }