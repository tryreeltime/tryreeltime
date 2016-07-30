var debug = process.env.NODE_ENV !== "production";
process.env.AWS_SERVICES = 's3';
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/client",
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./index.jsx",
  resolve: {
    modulesDirectories: ['node_modules', 'components'],
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + "/client/",
    filename: "client.min.js"
  },
  module: {
    noParse: [/aws-sdk/],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', "es2015"]
        }
      },
      {
        test: /aws-sdk/,
        loaders: [
         'transform?aws-sdk/dist-tools/transform'
        ]
      },
      {
        test: /\.json$/, loaders: ['json']
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  // node: {
  //   fs: "empty"
  // },
};
