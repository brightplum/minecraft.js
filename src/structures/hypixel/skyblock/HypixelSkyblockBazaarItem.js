/**
 * Represents an Item in the Hypixel Skyblock Bazaar
 * @typedef {HypixelSkyblockBazaarItem} object
 */
class HypixelSkyblockBazaarItem {
	constructor(data) {
		/**
		 * Raw data of the product ID
		 * @type {string}
		 */
		this.productID = data.product_id;
		
		/**
		 * Raw data of the status of the item
		 * @type {object}
		 * @example
		 * 
		 * bazaar.getItem('wheat').status.buyVolume // Volume Price of Wheat
		 */
		this.status = data.quick_status;	
	}
}

module.exports = {
	HypixelSkyblockBazaarItem
}