const path = require('path');

module.exports = {
	mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
	devServer:{
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 2504
	},
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.m?jsx?$/,
            use: ["babel-loader"]
        },
		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
					loader: 'file-loader',
				},
			],
		},
	    {
		    test: /\.svg$/,
		    use: [
			    {
				    loader: 'svg-url-loader',
				    options: {
					    limit: 10000,
				    },
			    },
		    ],
	    },
    ]
  }
};
