// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

describe("divThree", () => {
  let num1 = 15
  let num2 = 0
  let num3 = -7
  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    // Expect each number to deliver the expected output

    expect(divThree(15)).toEqual("15 is divisable by 3")
    expect(divThree(0)).toEqual("0 is not divisable by 3")
    expect(divThree(-7)).toEqual("-7 is not divisable by 3")
  })
})
// Test fail. divThree is not defined.



// b) Create the function that makes the test pass.

// Create a function, capable of testing each argument. Use the parameter of num.
const divThree = (num) => {
  // create an if/else statement to map out the different out comes. 
  // If/else should decide for 0, else if num is div by 3 without a remainder. Create else for every other outcome.
  if (num === 0) {
    return `${num} is not divisable by 3`
  } else if (num % 3 === 0) {
    return `${num} is divisable by 3`
  } else {
    return `${num} is not divisable by 3`
  }
}
// log function with argument.
// console.log(divThree(num1));
// returns ---> 15 is divisable by 3
// console.log(divThree(num2));
// returns ---> 0 is not divisable by 3
// console.log(divThree(num3));
// returns ---> -7 is not divisable by 3

// FINAL
// const divThree = (num)=>{
//   if (num === 0) {
//     return `${num} is not divisable by 3`
//   } else if (num % 3 === 0){
//     return `${num} is divisable by 3`
//   } else {
//     return `${num} is not divisable by 3`
//   }
// }
// console.log(divThree(num1));


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



describe("capitolized", () => {
  var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  it("a function that takes in an array of words and returns an array with all the words capitalized", () => {

    // Have the "expect" take in the array and .toEqual the capitolized first letter of every string.
    expect(capitolized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitolized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])

  })
})
//Test 1 failed. "capitolized is not defined"



// b) Create the function that makes the test pass.

// Function with the parameter of array. 
const capitolized = (array) => {
  // define a new variable that will take in "array" and iterate through it's values via .map().

  let firstCap = array.map(value => {
    // return value with toUpperCase(), use .substring comeplete each string with lowercase letters.
    return value[0].toUpperCase() + value.substring(1)
  })
  // return the variable
  return firstCap
}
// log each array to test results
// console.log(capitolized(randomNouns1));
// returns --->  [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]
// console.log(capitolized(randomNouns2));
// returns ---> [ 'Temperature', 'Database', 'Chopsticks', 'Mango', 'Deduction' ]

//FINAL

// const capitolized = (array) => {
//   let firstCap = array.map(value => {
//     return value[0].toUpperCase() + value.substring(1)
//   })
//   return firstCap
// }
// console.log(capitolized(randomNouns2));
//  console.log(capitolized(randomNouns1));
//  console.log(capitolized(randomNouns2));

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2


describe("firstVowel", () => {
  var vowelTester1 = "learn"
  // Expected output: 1
  var vowelTester2 = "academy"
  // Expected output: 0
  var vowelTester3 = "challenges"
  // Expected output: 2
  it("takes in a string and logs the index of the first vowel", () => {

    // Expects the variable and outputs the index number of the string.
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

//Test FAILED - "firstVowel is not defined."


// // b) Create the function that makes the test pass.

// A function that that takes in a string.

const firstVowel = (string) => {
  // create a variable that contains the string lets we want the iteration to look at
  let vowels = /[aeiou]/
  // use indexOf of to find the index of the values contained in the variable "vowels"
  // (after too much research) use .match() to iterate through and return the first index of the info contained in the variable "vowels".
  return string.indexOf(string.match(vowels))
}
// log function with argument 
//  console.log(firstVowel(vowelTester1))
// returns ---> 1
//  console.log(firstVowel(vowelTester2))
// returns ---> 0
//  console.log(firstVowel(vowelTester3))
// returns ---> 2

// Finished 

//  const firstVowel = (string) =>{
//   let vowels = /[aeiou]/
//   return string.indexOf(string.match(vowels))  
// }
//    console.log(firstVowel(vowelTester3))