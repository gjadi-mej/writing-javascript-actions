const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent":
        "Writing JavaScript action GitHub Learning Lab course.  Visit lab.github.com to contact us."
    },
    json: true
};

function getJoke() {
    const res = request(options);
    return res.joke;
}

module.exports = getJoke;
