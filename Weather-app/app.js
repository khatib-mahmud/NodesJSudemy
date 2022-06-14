const chalk = require("chalk");
const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=9a1d544279f6183f4308a4b1c1aedf37&query=23.73,%2090.40&units=f";

request({ url: url, json: true }, (err, response) => {
  if (err) {
    console.log("Something is wrong");
  } else if (response.body.error) {
    console.log("unable to find");
  } else {
    console.log(
      chalk.green.inverse(
        `It is currently ${response.body.current.temperature}F degrees out. And ${response.body.current.precip} % chance of raining.`
      )
    );
  }

  // console.log(response.body.current);
});
