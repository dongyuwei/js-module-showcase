var path = require("path");
module.exports = {
    entry: {
        app: ["./tests/input/entry-webpack.js"]
    },
    output: {
        path: path.resolve(__dirname, "tests/output/webpack"),
        publicPath: "/assets/",
        filename: "entry_bundled.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
};