const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node-modules/
            },
            {
                test: /\.(less|css)$/,
                use: ["style-loader", "css-loader", "less-loader"],
                exclude: /node-modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './public/index.html')})
    ],
    performance: {
        hints: false
    }
}