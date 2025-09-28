const userInput = prompt("Please enter your name:");
if (userInput !== null) {
   alert(`Hello, ${userInput}!`);
} else {
   alert("You canceled the input.");
}