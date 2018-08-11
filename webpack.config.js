const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
   mode: 'production',
   entry: './src/index.jsx',
   module: {
      rules: [
         { 
            test: /\.js$/, 
            exclude: /node_modules/,
            use: { loader: 'babel-loader' } 
         },
         { 
            test: /\.jsx$/, 
            exclude: /node_modules/,
            use: { loader: 'babel-loader' } 
         },
      ],
   },
   performance: { hints: process.env.NODE_ENV === 'production' ? "warning" : false },
   plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      })
   ]
};