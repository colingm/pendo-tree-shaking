const path = require( 'path' );

module.exports = {
	entry: './pendo-agent.mjs',
	output: {
		path: path.resolve( __dirname ),
		filename: 'pendo-agent.js',
	},
};
