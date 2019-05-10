const path = require('path');
const HWP = require(`html-webpack-plugin`);

module.exports = {
   entry: path.join(__dirname, '/client/index.jsx'),
   output: {
       filename: 'build.js',
       path: path.join(__dirname, '/dist')},
   module:{
       rules:[{
          test: /\.jsx$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        }]
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname, '/public/index.html')}
        )
    ]
}
