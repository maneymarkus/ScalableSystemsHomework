const path = require('path');

module.exports = {
  entry : "./src/js/bundler.js",
  output : {
    path : path.resolve(__dirname, "./dist/js"),
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
      },
      {
        test : /\.css$/i,
        use : [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test : /\.(woff|woff2|ttf|eot)/i,
        use : [
          "url-loader",
        ]
      },
    ]
  },
  mode : "development",
};
