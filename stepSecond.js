// 1) Sum Zero
// Write a function that takes in an array of numbers. 
// The function should return True if any two numberss 
// in list sum to 0, and false otherwise.
// addToZero([]);
// // -> False
// addToZero([1]);
// // -> False
// addToZero([1, 2, 3]);
// // -> False
// addToZero([1, 2, 3, -2]);
// // -> True
function addToZero (arr) {
    let result = false
    count = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if ((arr[i] + arr[j] === 0) && (arr.length > 2) && (i !== j)) {
                return true
                count =+ 1
            } else {
                return false
            }
        }
    }  
    if (count > 0){ 
        console.log(true) 
        return true
    }  

}
addToZero([1,2,3,4, -4])


// 2) Unique Characters
// Write a function that takes in a single word, as a string. It 
// should return True if that word contains only unique characters. 
// Return False otherwise.
function uniqueChar(word) {
    var result = false
    var count = 0
    for(let i = 0; i < word.length; i++) {
        for(let j = 0; j < word.length; j++) {
            if (word[i] === word[j] && i !== j) {
                result = false
                count =+ 1
            } else {
                result = true
               
            }
        }
    }
    if (count > 0) {
      return false
      console.log(false)
    } else {
      return true
      console.log(true)
    }
}

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English 
// alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.
// For example:
// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True
// isPangram("I like cats, but not mice");
// // -> False





// 4) Longest Word
// Write a function, find_longest_word, that takes a 
// list of words and returns the length of the longest one.
// For example:
// findLongestWord(["hi", "hello"]);
// // -> 5
function findLongestWord(arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr.length; j++) {
         if (arr[i].length < arr[j].length && i !== j) {
           console.log(arr[i].length, arr[j].length)
           max = arr[j]
           console.log(max)
         }
      }
    }
    console.log(max.length)
 }
 
 findLongestWord(['hi', 'hello']);
