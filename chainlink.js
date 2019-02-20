// script to check chainlink

const ExchangeRates = artifacts.require('ExchangeRates');
const ccys = ['ETH', 'SNX', 'sEUR'];

const sleep = ms =>
	new Promise(resolve => {
		setTimeout(resolve, ms);
	});

module.exports = async function(cb) {
	try {
		const er = await ExchangeRates.deployed();
		// get prices
		// const rates = await er.ratesForCurrencies(ccys.map(web3.utils.asciiToHex));
		// console.log(rates.map((r, i) => `${ccys[i]}: ${web3.utils.fromWei(r)}`).join('\n'));

		// KOVAN jobID for ETH: 29fa9aa13bf1468788b7cc4a500a45b8
		// const txn = await er.requestEthPrice(
		// 	web3.utils.hexToBytes('0x29fa9aa13bf1468788b7cc4a500a45b8')
		// );
		// console.log(txn);

		// const txn = await er.requestCoinMarketCapPrice('BTC');
		// console.log(txn);

		const txn = await er.requestCryptoPrice('SNX');
		console.log(txn);
		await sleep(10000);

		const price = await er.getPrice('SNX');
		console.log(price.toString());
	} catch (err) {
		return cb(err);
	}

	// reque
	cb();
};
