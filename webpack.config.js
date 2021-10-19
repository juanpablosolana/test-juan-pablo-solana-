const babelRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env",
        ["@babel/preset-react", { "runtime": "automatic" }]],
      plugins: ["@babel/plugin-syntax-optional-chaining"],
    }
  }
}
const HtmlWebpackPlugin = require('html-webpack-plugin');

const saasRules = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}


module.exports = {
  output: {
    filename: "bundle.[hash].js",
    },
  module: {
    rules: [
     babelRules,
     saasRules
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
}