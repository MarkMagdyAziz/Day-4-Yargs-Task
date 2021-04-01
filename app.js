const myFunctions = require("./functions");
const yargs = require("yargs");

yargs.command({
  command: "playWithData",
  describe: "get data from specific api and insert data in json.file",
  builder: {
    url: { demandOption: true, type: "string" },
    fileName: { demandOption: true, type: "string" },
  },
  handler: function (argv) {
    let api = argv.url;
    let fileN = argv.fileName;
    myFunctions.getData(api, fileN);
  },
});

yargs.argv;
