
const HtmlWebPackPlugin = require ("html-webpack-plugin");


module.exports = {
    devtool: "source-map",

    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'

},
    module: {
        rules:[
            
            {
                test: /\.(js|jsx)$/,
                 exclude: /node_modules/, 
                 loader: "babel-loader",
        
            }
        ]},
      
    plugins: [
    
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filname: "./index.html"
        }),
    
  
    ]

};