// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//Pseudo code

// 1. A function that returns the sum of two of the lowest positive numbers
  
// 2. The numbers will be gather from an array of numbers

// 3. No floats or non-pos numbers will be passed

function sumTwoSmallestNumbers(numbers){
    // let lowest = Math.min(numbers[0], numbers[1]),
    //       secondLowest = Math.max(numbers[0], numbers[1]);
    //   for(let i = 2; i < numbers.length; i++){
    //     if(numbers[i] < lowest){
    //       secondLowest = lowest;
    //       lowest = numbers[i];
    //     }else if(numbers[i] < secondLowest){
    //       secondLowest = numbers[i]
    //     }

    //   }
    //   return lowest + secondLowest

    let result = numbers.sort((a, b) => a - b)
    return result[0] + result[1]
  }
    
