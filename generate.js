const fs = require("fs");

try {
  fs.unlinkSync("./.output/");
} catch (err) {
  console.error(err);
}
try {
  fs.unlinkSync("./dist/");
} catch (err) {
  console.error(err);
}
