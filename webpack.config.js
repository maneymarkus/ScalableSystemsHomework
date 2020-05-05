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
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer') //TODO: install autoprefixer maybe
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
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
