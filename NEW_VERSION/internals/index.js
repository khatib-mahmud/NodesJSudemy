// const request = require("./request");
// const response = require("./response");

// module.exports = {
//   send: request.send,
//   REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
//   read: response.read,

//   };

module.exports = {
  // Unpacking with spread operation
  ...require("./request"),
  ...require("./response"),
};
