const path = require("path");
const miniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js",
	},
	devServer: {
		port: 1000,
		watchContentBase: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: [miniCSSExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
				},
			},
		],
	},
	plugins: [new miniCSSExtractPlugin()],
};
