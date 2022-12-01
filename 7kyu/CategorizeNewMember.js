// 7kyu Categorize New Member

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
    return data.map(([a,b]) => (a > 54 && b > 7) ? 'Senior' : 'Open')
    // let data = [];
    // for(i=0; i<output.length; i++){
    //   if(output[i][0]>=55 && output[i][1]>7){
    //     data.push("Senior");
    //   }else{
    //     data.push("Open");
    //   }
    // }
    // return data;
    
}

console.log(openOrSenior([25, 7]))


//Pseudo Code

// 1. Westorn Suburbs Croquet Club has two categories: Senior and Open

// 2. application form to tell members which category that they will be put in.

// 3. to be a senior must be: senior >= 55 years old and a handicap > 7

// 4. Younger people has a handicap to either -2 to 26

// 5. Input: consists of an array pair. [age, handicap]

// 6. Output: if the age is handicap is to be collected, it should spit out, if they are 'senior' or 'open'
