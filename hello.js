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

displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"

const bracelets = [
  {
    name: "baseblue",
    material: "leather",
    color: "yellow",
  },
];