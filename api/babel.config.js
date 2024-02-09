module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@app': './src/app',
					'@controllers': './src/controllers',
					'@DB': './src/DB',
					'@graphql': './src/graphql',
					'@libs': './src/libs/',
					'@middlewares': './src/middlewares',
					'@routes': './src/routes',
					'@utils': './src/utils/',
				},
			},
		],
	],
};
