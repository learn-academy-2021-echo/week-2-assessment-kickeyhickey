// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer: Each letter will be iterated through and logged separately in an array.
// b) Verify and explain: I was correct. The split method takes in a string and iterates through each index value. Depending on the parameter placed in the (), the values can be divided up in an assortment of different ways. 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: I'll admit it, I missed the second line of the function not having a return in front of the string.
// A return is nesscessary so the function knows when a task it is given is complete.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: I was correct. The .map function iterates through the given array and completes the directions given in its parameters.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11,13,15]
// b) Verify and explain: Like .map, .filter will iterate through each value contained in the array and impliment it's parameters. In this case, each value is divided by two to see if there is a remainder of 0, which would show only even numbers. The !== in the equation calls to exclude these even numbers, giving us back the opposite. Odd numbers.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: We are logging the information contained in the myCodingSkills object. The .languages[0] calls on specifically the first index of the languages portion.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: { student: "George", cohort: "Delta", year: 2021}
// b) Verify and explain: The new variable contains the class that holds "George" as a parameter. When logged it shows all the information or instances of the class. In this case, the parameter contained in the constructor was replaced by the argument "George". 
