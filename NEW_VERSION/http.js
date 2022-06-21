const request = require("./internals/request");

request.send = function (url, data) {
  console.log("custom send function");
};

request.send();
