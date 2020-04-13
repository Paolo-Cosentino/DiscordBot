const fetch = require('node-fetch');
const url = "https://api.kanye.rest/";

let q = null;
exports.getQuote = function () {
    fetch(url).then(res => res.json()).then(data => {
        q = data.quote;
    });

    return '"' + q + '" \t-Kanye';
};