const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
    core.setOutput('outputKey', 'outputVal');
    const joke = await getJoke();
    console.log(joke);
    core.setOutput("joke-output", joke);
}

<<<<<<< HEAD
// run();
core.setOutput('outputKey', 'outputVal');
const joke = await getJoke();
console.log(joke);
core.setOutput("joke-output", joke);
=======
run();
>>>>>>> parent of 2eece40... Try without async stuff
