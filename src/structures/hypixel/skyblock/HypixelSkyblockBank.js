/**
 * Represents the Hypixel Skyblock Banking information
 * @typedef {HypixelSkyblockBank} object
 */
class HypixelSkyblockBank {
	constructor(data) {
		/**
		 * Current balance in the bank
		 * @type {number}
		 */
		this.balance = data.balance;

		let bankHistory = [];

		function getBankHistory(item, index) {
			bankHistory.push({
				/**
				 * The amount of money that was used in the action
				 * @type {number}
				 */
				amount: item.amount,
				/**
				 * Timestamp of when the action was used
				 * @type {number}
				 */
				timestamp: item.timestamp,
				/**
				 * Raw Data of the action that was used (DEPOSIT, WITHDRAW, etc)
				 * @type {number}
				 */
				action: item.action,
				/**
				 * The Username of the Person responsible for the action
				 * @type {string}
				 */
				initiator: item.initiator_name.replace('§6', '').replace('§a', '').replace('§b', '')
			})
		}
		
		let banking = data.transactions;

		/**
		 * Represents the history of banking transactions
		 * @type {object[]}
		 */
		this.bankHistory = banking.forEach(getBankHistory);
	}
}

module.exports = {
	HypixelSkyblockBank
}