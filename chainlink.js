// script to check chainlink

const ExchangeRates = artifacts.require('ExchangeRates');
const ccys = ['ETH', 'SNX', 'sEUR'];

module.exports = async function(cb) {
	try {
		const er = await ExchangeRates.deployed();
		// get prices
		// const rates = await er.ratesForCurrencies(ccys.map(web3.utils.asciiToHex));
		// console.log(rates.map((r, i) => `${ccys[i]}: ${web3.utils.fromWei(r)}`).join('\n'));

		// KOVAN jobID for ETH: 29fa9aa13bf1468788b7cc4a500a45b8
		const txn = await er.requestEthPrice(
			web3.utils.hexToBytes('0x29fa9aa13bf1468788b7cc4a500a45b8')
		);
		console.log(txn);
	} catch (err) {
		return cb(err);
	}

	// reque
	cb();
};
