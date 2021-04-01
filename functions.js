const fs = require("fs");
const fetch = require("node-fetch");
const chalk = require("chalk");

const getData = async (api, fileN) => {
  console.log("Processing ...");
  const url = api ? api : "https://jsonplaceholder.typicode.com/posts/10";

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log("Results: ", json);

    fs.writeFileSync(`${fileN}.json`, JSON.stringify(json), (err) => {
      if (err) {
        console.error("error!", err);
        throw err;
      } else {
        console.log("file has been created");
      }
    });
  } catch (err) {
    console.log(err.response.body);
    throw err;
  }
};

// read file
// fs.readFile("./message.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

module.exports = { getData };
