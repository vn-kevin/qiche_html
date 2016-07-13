var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/dist/",
    filename: "bundle.js"
  }, 
  module: {
        
    },
    resolve:{
        extensions:['','.js','.json']
    },
    devServer: {
        hot: true,
        inline: true
    }

};