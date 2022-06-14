setTimeout(() => {
  console.log("2 sec pass");
}, 2000);

const names = ["Anda", "Montu", "Jhontu"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
