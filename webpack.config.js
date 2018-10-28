let path = require("path");
let webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "frontend"),
  entry: "./entry.jsx",
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "env"]
          }
        }
      }
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};
