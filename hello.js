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

const viewer = 10;
console.log(viewer + 1);

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

if (viewer >= 12) {
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

//let variable = condition ? <return this if true> : <return this if false>;

//if firstNumber is larger than secondNumber, then assign firstNumber to biggestNumber, otherwise assign secondNumber
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;

//or do like this
let biggestNumbers;
if (firstNumber > secondNumber) {
  biggestNumbers = firstNumber;
} else {
  biggestNumbers = secondNumber;
}

let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo; // 15
let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let cardThree = 7;
sum += cardThree;
if (sum > 21) {
  console.log("You lost");
}
console.log(`You have ${sum} points`);

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;

if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
  console.log("You win");
  process.exit(1); // exit program
} else {
  console.log("Bank wins");
}

let viewers = 14;
let startStream = viewers >= 10;
let endStream = viewers < 5;

console.log(startStream);
console.log(endStream);

if (viewers >= 10) {
  console.log("Time to start the stream!");
}

if (startStream === true) {
  console.log("Time to start the stream!");
}

if (startStream === true) {
  console.log("Time to start the stream!");
} else {
  console.log("The stream will start soon!");
}

let lessonsDone = 5;
let lessonsTotal = 8 - lessonsDone;

let showLessons =
  lessonsDone >= lessonsTotal
    ? console.log("Congrats")
    : console.log("Keep going");
