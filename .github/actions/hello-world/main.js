const core = require("@actions/core");

const firstGreeting = code.getInput("first-greeting");
const secondGreeting = code.getInput("second-greeting");
const thirdGreeting = code.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);
if (thirdGreeting) {
    console.log(`Hello ${thirdGreeting}`);
}
