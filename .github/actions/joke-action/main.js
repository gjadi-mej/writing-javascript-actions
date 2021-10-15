const getJoke = require("./joke");
const core = require("@actions/core");

// async function run() {
//     core.setOutput('outputKey', 'outputVal');
//     const joke = await getJoke();
//     console.log(joke);
//     core.setOutput("joke-output", joke);
// }

// run();
core.setOutput('outputKey', 'outputVal');
const joke = getJoke();
console.log(joke);
core.setOutput("joke-output", joke);
