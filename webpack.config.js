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
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: { extensions: [".js", ".jsx", ".sass"] },
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
