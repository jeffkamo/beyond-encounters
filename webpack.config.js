module.exports = {

	entry: {
		popup: './popup/index.js',
		background: './background/index.js',
		content: './content/index.js'
	},

	output: {
		path: 'assets',
		filename: "[name].js",
		publicPath: '/assets'
	},
	devServer: {
		contentBase: ['./popup', './background', './content']

	},
	watch:true,

	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
                test: /\.less$/,
                loader: 'style!css!less',
                exclude: /node_modules/
            },
			{
                test: /\.scss$/,
                // loader: 'style!css!scss',
                loader: 'css!sass',
                exclude: /node_modules/
            },
		],
	}
};
