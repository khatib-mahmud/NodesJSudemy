const fs = require("fs");

// const book = {
//   title: "Ego is the Enemey",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// console.log(bookJSON);
// const parseData = JSON.parse(bookJSON);
// console.log(parseData.title);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);

// // console.log(data.title);

// get data from a json and overwrite it
const chlngData = JSON.parse(fs.readFileSync("chlng.json").toString());

chlngData.name = "TAKKU";
chlngData.age = 50;

updateJSON = JSON.stringify(chlngData);

fs.writeFileSync("chlng.json", updateJSON);
