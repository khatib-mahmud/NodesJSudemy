// import { send } from "./request.mjs";
// import { read } from "./response.mjs";
// const { send } = require("./internals/request.js");
// const { read } = require("./internals/response.js");
// const { REQUEST_TIMEOUT } = require("./internals/request");
const { read, send } = require("./internals");

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest("https://google.com", "dhello");
console.log(responseData);
