const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 8545,
			network_id: '*',
			gas: 8000000,
			from: process.env.SNX_DEPLOY_PUBLIC_KEY,
		},
		kovan: {
			provider: function() {
				return new HDWalletProvider(
					process.env.SNX_DEPLOY_PRIVATE_KEY,
					`https://kovan.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
				);
			},
			network_id: 42,
			gas: 7e6,
			from: process.env.SNX_DEPLOY_PUBLIC_KEY,
		},
		tenderly: {
			host: '127.0.0.1',
			port: 9545,
			network_id: '*',
			gasPrice: 0,
		},
	},
	mocha: {
		useColors: true,
		slow: 3000, // We only consider tests slow when they take more than 3 seconds.
	},
	compilers: {
		solc: {
			version: '0.4.25', // Version is managed in package.json as an NPM dependency.
			settings: {
				optimizer: {
					enabled: true,
					runs: 200,
				},
			},
		},
	},
};
