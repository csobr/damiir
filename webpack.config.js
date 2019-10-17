
const HtmlWebPackPlugin = require ("html-webpack-plugin");
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");



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
        
            },
           {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]},
            {
            test: /\.(jpf|png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
          test: /\.mp4$/,
          use: 'file-loader?name=videos/[name].[ext]',
   },
              
        ]},
      
    plugins: [
    
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filname: "./index.html"
        }),
         new MiniCssExtractPlugin ({
             filename: "[name].css",
             chunkFilename: "[id].css"
         })
    
  
    ]

};