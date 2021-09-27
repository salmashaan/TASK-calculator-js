/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

//  console.log("Clicking", text);

let consoleText = "0";

function buttonClick(text) {
  if (text === "AC") {
    clear();
  } else if (isNumber(text)) {
    consoleText += text;
    printOnConsole(+consoleText);
  }
}

function isNumber(text) {
  return parseInt(text) >= 0 && parseInt(text) <= 9;
}

function clear() {
  printOnConsole("0");
  consoleText = "0";
}

// if (
//   text === "+" ||
//   text === "-" ||
//   text === "x" ||
//   text === "=" ||
//   text === "%" ||
//   text === "±" ||
//   text === "÷"
// ) {
//   printOnConsole(" ");
// }

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
printOnConsole("123");
updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);
