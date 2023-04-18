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

const bandMemberName = { name: "Justin" };
const bandPossition = { possition: "Lead Star" };

const bandMember = { ...bandMemberName, ...bandPossition };
console.log(bandMember);

// while loops
let student = 0;
let seats = 30;

while (student < seats) {
  student++;
  console.log(student);
}

// do while loops

// do {
// "Do this thing"
// } while (condition)

let studentCount = 0;

do {
  console.log("Hello Students");
} while (studentCount > 10);

// for loops

// for (start here; condition; update) {
// "Do this thing"
// }

const studentName = ["Nick", "AJ", "Kevin", "Brain", "Howie"];

// print each student in an array

for (let i = 0; i < studentName.length; i++) {
  console.log(studentName[i]);
}

// loop over an array then print
for (student in studentName) {
  console.log(studentName[student]);
}

students.forEach((student) => {
  console.log(student);
});

myPromise
  .then(DoThis)
  .then(DoThisNext)
  .then(DoThisAfter)
  .catch(DoThisIfItBreaks);

async function functionName() {
  await DoThis;
}

try {
  thisFunction();
} catch (error) {
  console.error(error);
}

// Fetch API
// Get Pokemon Data
async function getPokemonData() {
  const responce = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await responce.json();
  console.log(data);
}

getPokemonData();

// Limit the Results and Print them

// Limit the result and print out the Names and URLS of each pokemons

let pokemonData = [];

async function getPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8");
    const responseData = await response.json();
    pokemonData = responseData.results;
  } catch (error) {
    console.error(error);
  }
}

getPokemonData()
  .then(() => {
    pokemonData.forEach((pokemon) => {
      console.log(`Name: ${pokemon.name}, URL: ${pokemon.url}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

// Get Data for a Specific Pokempon

let pokemonDat = [];

async function fetchPokemon() {
  try {
    const responce = await fetch(
      "https://pokeapi.co/api/v2/pokemon/bulbassaur"
    );
    const data = await responce.json();
    pokemonDat.push(data);
  } catch (error) {
    console.log(error);
  }
}

fetchPokemon();

// Get Pokemon Data in Detail - print out the details we are interested in:

let pokeMonData = [];

async function getPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    const responseData = await response.json();
    pokeMonData.push(responseData); // push into the array
  } catch (error) {
    console.error(error);
  }
}

getPokemonData()
  .then(() => {
    const pokemon = pokemonData[0]; // get the first element from the array
    console.log(`Name: ${pokemon.name}`); // print the name to the console
    console.log(`Type: ${pokemon.types[0].type.name}`); // print the type to the console
    console.log(`Image: ${pokemon.sprites.front_default}`); //print the image to the console
  })
  .catch((error) => {
    console.error(error);
  });
