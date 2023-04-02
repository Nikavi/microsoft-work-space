console.log("Hello world!");

const greet = "Hello Students, Welcome to the second week!";
console.log(greet);

console.log(greet.replace("second", "2nd"));
console.log(greet);

const students = "Students";
const index = greet.indexOf(students);

console.log("The index of the word students is " + index);

//console.log(concat);

console.log("This is\n" + "very long");
console.log(`This story is very long`);

console.log(`The length of the string is ${greet.length}`);

const viewerCount = 50 * 2;
console.log("The viewer count is " + viewerCount);
console.log(`The viewer count is + ${viewerCount}`);
console.log(`${viewerCount > 1 ? "great" : "not great"}`);

const viewers = 10;
console.log(viewers + 1);

function displayGreeting(name, salutation = "Hello") {
  console.log(`${salutation}, ${name}`);
}

displayGreeting("Christopher");
// displays "Hello, Christopher"

displayGreeting("Christopher", "Hi");
// displays "Hi, Christopher"

const bracelets = [
  {
    name: "baseblue",
    material: "leather",
    color: "yellow",
  },
];

if (viewers >= 12) {
  console.log("Time to start the stream!");
} else {
  console.log("Time is over");
}

if (startStream === true) {
  console.log("Time to start");
} else if (endStream === false) {
  console.log("The stream end");
}

//let variable = condition ? <return this is true > : <return this is not true>;

let lessonOne = 5;
let lessonTwo = lessonsDone - 8;

let showLessons =
  lessonsDone >= lessonsTotal
    ? console.log("Congrats")
    : console.log("Keep going");

let currentMoney = 800;
let laptopPrice = 1000;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition was true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition was true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}

let variable = condition ? <return this if true> : <return this if false></return>