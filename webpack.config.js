const path = require('path');

module.exports = {
  entry : "./src/js/script.js",
  output : {
    path : path.resolve(__dirname, "./src/js"),
    filename : "todo.bundle.js",
  },
  module : {
    rules : [
      {
        test : /\.s[ac]ss$/i,
        use : [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
  mode : "development",
};
