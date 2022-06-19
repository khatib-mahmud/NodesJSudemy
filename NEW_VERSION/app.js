const { get } = require("https");

get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  res.on("end", () => {
    console.log("NO data");
  });
});
