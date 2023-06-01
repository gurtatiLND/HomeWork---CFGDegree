
// To run this file
// type "node AlgorithmQuestions.js" on terminal in current file directory 


// TASK 1 

function isPalindrome(str) {
  const str_length = str.length;
  const middle = Math.floor(str_length/2);

  for ( let i = 0; i < middle; i++ ) {
      if (str[i] !== str[str_length - 1 - i]) {
          return false;
      }
  }
  return true;
}

console.log(isPalindrome("abcdcba")) // TRUE 
console.log(isPalindrome("aba")) // TRUE 
console.log(isPalindrome("c")) // TRUE
console.log(isPalindrome("radar")) // TRUE
console.log(isPalindrome("level")) // TRUE 
console.log(isPalindrome("pencil")) // FALSE
console.log(isPalindrome("ark")) // FALSE
console.log(isPalindrome("aa")) // TRUE

//ANSWERS:
//what is its Big O Time & Space complexity? --> O(N) linear.
//Why have you chosen this approach? --> it's just the first simple solution that came up to my mind
//Could there be a more efficient way (and if so, how)? --> I think yes, maybe if use some already created functions from libraries


// TASK 2

 const isMissing = (arr) => {
    const missing = 0
    
    //check for negative numbers or non-numeric value
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        return "Invalid input, non-numeric value detected";
      } else if (arr[i] < 0) {
        return "Invalid input, negative number detected";
      }
    }
    //I hope it will be understandable:
    // next step I think I should create 2 loops: one will count the missing number, like i=1 and < length, i++ and missing number=i; 
    //and then 
    //I will check in another loop with j starts from 0, j<length -1, j++ and check if the all j won't be the same for this i, 
    // then I will increase the i and start again. 
    //the end will be when I find that no numbers in array are the same like missing number on this level.
    

    // I think it will be the O(N'2) complexity, because of two loops.

    return `${missing} is missing`
}


// console.log(isMissing([1, 2, 3, 4, 5])) // nothing is missing 
// console.log(isMissing([4,5,1,3, 5, 6])) // 2 is missing 
// console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // 4 is missing
// console.log(isMissing([4,5,-1,3, 5])) // THROW ERROR Invalid input, non-numeric value detected 
// console.log(isMissing([ 1, 3, 7, 5, 6, 2 ])) // THROW ERROR Invalid input, non-numeric value detected
