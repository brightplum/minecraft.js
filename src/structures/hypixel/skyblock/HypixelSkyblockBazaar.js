const { HypixelSkyblockBazaarItem } = require('./HypixelSkyblockBazaarItem.js');

const { HypixelError } = require('../../../Errors.js');
/**
 * Represents the Hypixel Skyblock Bazaar
 * @typedef {HypixelSkyblockBazaar} object
 */
class HypixelSkyblockBazaar {
	constructor(data) {
		/**
		 * Whether or not fetching the bazaar data was sucessful
		 * @type {boolean}
		 */
		this.success = data.success;

		/**
		 * Timestamp of when the Bazaar was last updated
		 * @type {number}
		 */
		this.lastUpdated = data.lastUpdated;
	}
	/**
	 * Fetch Item Statistics
	 * @param {string} item The item to fetch
	 * @returns {Promise<HypixelSkyblockBazaarItem|null>}
	 * @example
	 * 
	 * // Function auto replaces spaces and '-' and sets it to uppercase
	 * bazaar.getItem('wheat');
	 * bazaar.getItem('ink sack:3');
	 * bazaar.getItem('log:2');
	 */
	getItem(item) {
		if (!item || typeof item !== 'string') throw new HypixelError('getItem() requires an item as a valid string.');

		let bzItem = data[`${item.toString().replace(/[ -]/g, '_').toUpperCase()}`] ? new HypixelSkyblockBazaarItem(data[`${item.toString().replace(/[ -]/g, '_').toUpperCase()}`]) : null;
		return (bzItem);
	}
}

module.exports = {
	HypixelSkyblockBazaar
}