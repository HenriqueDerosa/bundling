module.exports = {
  entry: {
    web: __dirname + "/src/index.js",
  },
  output: {
    path: __dirname + "/lib",
    name: "bundle.js",
  },
  mode: "debug",
};
