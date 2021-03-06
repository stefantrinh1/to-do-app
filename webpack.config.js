const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "/public/"),
    filename: "app.js"
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  devtool: "cheap-module-eval-source-map",
  
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      meta: {
        viewpoint: "width=device-width, initial-scale=1",
        description:"Task Manger to organise your tasks."
      }
    })
  ]
}