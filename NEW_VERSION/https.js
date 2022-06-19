const { send } = require("./request.js");
const { read } = require("./response.js");

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https://google.com", "dhello");
console.log(responseData);
