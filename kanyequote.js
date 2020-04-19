const fetch = require('node-fetch');
const url = "https://api.kanye.rest/";

async function getKanyeAsync() {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

module.exports.getKanyeAsync = getKanyeAsync;