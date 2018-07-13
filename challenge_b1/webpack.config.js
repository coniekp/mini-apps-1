module.exports = {
  module: {
    rules: [{
     test: /\.jsx$/,
     exclude: /node_modules/,
     use: {
      loader: 'babel-loader'
     } 
    }],
    entry: __dirname + '/client/src.index.jsx',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/client/public'
    }
  }
}