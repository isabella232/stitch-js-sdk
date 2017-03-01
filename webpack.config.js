 webpack = require('webpack')
 module.exports = {
   entry: {
     "baas": './distribution/client.js',
     "baas.min": './distribution/client.js'
   },
   devtool: "source-map",
   plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
      })
   ],
   output: {
     path: __dirname + "/library",
     // export itself to a global var
     libraryTarget: "var",
     // name of the global var: "Foo"
     library: "Baas",
     filename: '[name].js'
   },
   externals: {},
};