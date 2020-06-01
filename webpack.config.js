const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_FOLDER = path.join(__dirname, "dist");

module.exports = {
    entry: "./src/index.js",
    output: { 
        path: DIST_FOLDER, 
        filename: "bundlefile.js" 
    },
    devServer: {
      contentBase: DIST_FOLDER,
      hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
