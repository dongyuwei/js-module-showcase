var path = require("path");
module.exports = {
  entry: {
    app: ["./tests/input/entry.js"]
  },
  output: {
    path: path.resolve(__dirname, "tests/output/webpack"),
    publicPath: "/assets/",
    filename: "entry_bundled.js"
  }
};