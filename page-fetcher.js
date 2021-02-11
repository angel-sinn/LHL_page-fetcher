const request = require("request");
const fs = require("fs");

const URL = process.argv[2];
const path = process.argv[3];

request(URL, (error, response, body) => {
  if (error) {
    console.log(`Error: error`);
  }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log(`Error: error`);
    }
    console.log(
      `Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`
    );
  });
});
