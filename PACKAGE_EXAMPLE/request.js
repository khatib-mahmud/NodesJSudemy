const axios = require("axios");

axios
  .get("https://www.google.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err, "BUL SHIT");
  })
  .then(() => {
    console.log("ALL done!");
  });
