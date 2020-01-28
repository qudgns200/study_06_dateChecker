var path = require("path");

const PATH = path.join(__dirname, '..', 'webapp/WEB-INF/views')

 
module.exports = {
    context: path.resolve(__dirname, './jsx'),
    entry : {
        "main" : "./MainPage.jsx"
    },
    devtool: 'sourcemaps',
    cache: true,
    output : {
        path: PATH,
        filename: './js/[name].bundle.js'
        //path: __dirname,
        //filename: './webapp/js/[name].bundle.js'
    },
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
}