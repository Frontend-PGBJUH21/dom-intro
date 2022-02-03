/*//hoisted();

function hoisted() {
  console.log("This is hoisted");
}
// Declaration

//notHoisted();

const notHoisted = function () {
  console.log("This is not hoisted");
};
// Expression

//notHoisted();

// LOOPAR

//console.log("Lifting weight rep 1");

//for (let rep = 1; rep <= 10; rep++) {
//  console.log(`Lifting weight rep ${rep}`);
//}

const helena = ["Helena", "Johansson", 36, "Developer"];

for (let i = 0; i < 4; i++) {
  console.log(helena[i]);
}

const types = [];

console.log(types);
for (let i = 0; i < helena.length; i++) {
  // reading from the array
  console.log(helena[i], typeof helena[i]);
  //fill new array
  types.push(typeof helena[i]);
}

console.log(types);

// Continue
console.log("ONLY STRINGS");
for (let i = 0; i < helena.length; i++) {
  if (typeof helena[i] !== "string") continue;
  console.log(helena[i], typeof helena[i]);
}

// Break
console.log("BREAK WITH NUMBERS");
for (let i = 0; i < helena.length; i++) {
  if (typeof helena[i] === "number") break;
  console.log(helena[i], typeof helena[i]);
}

// WHILE LOOP
//let rep = 1;
//while (rep <= 10) {
//  console.log(`Doing rep nr ${rep}`);
//  rep++;
//}

let dice = Math.trunc(Math.random() * 6);
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled ${dice}`);

  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end");
  }
}*/

// we now know what the DOM is so lets learn how to make our code actually do something
// like react to something that happens in the DOM
// and for that we need an event listener
// an event is something that happens on the page for example:
// a mouse click, keypress, mouse moving or many other events
// with a event listener we can wait for a certain event to happens and then react to it

// in order to listen for events we first need to select the element
// where the event should happen
// in this example we will listen to the button element
// so when we click something should happen

// first we collect the element
// we need to grab the classname first so lets check our html
// we can select it by class and use the .btn-select or we can select the id 'btn'
document.querySelector(".btn-click").addEventListener("click", function () {
  // the first need to pass in the type of event => click
  // and then tell the event listener what to do - specify the reaction to the event
  // we do that by defining a function and the function will be containing exactly the code that
  // will be executed whenever this clikc event happens on this button
  // this is called the event handler
  // REMEMBER that a function is just a value, and if a function is a value then we can also pass it
  // as an argument into another function like any other value string/nr etc
  //console.log("Event happened!");
  document.querySelector(".message").textContent = "You clicked the button!";
  // we can aslo manipulate the dom on events for example this text
  // there are multiple ways to listen to events in js but this is the best way
  // and also the most used one
});
// notice that we do not call the event handler function
// it is the javascript engine who will call this function as soon as the event happens
// meaning as soon as the button is clicked
