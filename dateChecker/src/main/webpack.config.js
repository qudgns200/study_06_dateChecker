const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'front'),
  entry: {
    SignIn : ['babel-polyfill','./SignInPage.jsx'],
    SignUp : ['babel-polyfill','./SignUpPage.jsx'],
    Main : ['babel-polyfill','./MainPage.jsx']
  },

  output: {
    path: path.resolve(__dirname, 'webapp/resources'),
    filename: '[name].bundle.js',
    publicPath: '/study6/resources',
  },
  devtool: 'sourcemaps',
  cache: true,
  mode: 'none',
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env', '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    }
};