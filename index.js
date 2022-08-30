function isPalindrome(word) {
  // Write your algorithm here
  /*
  
  initialize the function to inspect the given values.
  divides the number into half
  checks each character, how they correspond, comparing the first letter with the last, second with second last, untill reaching the middle.
  if the letters match implicitly, return true, else, false.
  */
  for(let a=0; a < word.length/2; a++){
    const b = word.length - 1 - a;
    const firstLetter = word[a];
    const endLetter = word[b];
    if(firstLetter == endLetter){
      return true;
    }
    else{
      return false;
    }
  }
  
}

/* 
  Add your pseudocode here
  iterates over the given number
  assigns the values to the given variable, a
  substract 1 from the word length
  check the character values in position a and b
  return bolean.
*/

/*
  Add written explanation of your solution here
  iterating the function identifies the number length
  the result of each check are stored in variable, a, b, firsLetter, and endLetter (substracting 1 from the a.length)
  if the values match, 
  return true
  else, false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
