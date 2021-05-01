/**
 * Represents Hypixel Skyblock Minions
 * @typedef {HypixelSkyblockMemberMinions} object
 */
class HypixelSkyblockMemberMinions {
	/**
	 * @param {object} data Hypixel "crafted_minions" data
	 */
	constructor(data) {
		/**
		 * Raw Data of Hypixel Skyblock Minions
		 * @type {string[]}
		 */
		this.minions = data;
	}
	/**
	 * Fetch an array of the unique amount of minions the player has collected
	 * @returns {string[]}
	 * @example
	 * 
	 * member.minions.getUniqueTypes().includes('ENDERMAN'); // Expected: true
	 */
	getUniqueTypes() {
		function sortMinions(minion) {
			return minion.endsWith('_1');
		}

		let filteredMinions = this.minions.filter(sortMinions);

		function removeTier(item, index) {
			return item.replace(/[_1]/g, '');
		}

		let uniqueMinions = filteredMinions.forEach(removeTier);

		return uniqueMinions;
	}
	/**
	 * Fetch an array of all of the level 11/level 12 minions
	 * @returns {string[]}
	 * @example
	 * 
	 * member.minions.getMaxedMinions().includes('CLAY') // Expected: true
	 */
	getMaxedMinions() {
		function sortMinions(minion) {
			return minion.endsWith('_11');
		}

		let filteredMinions = this.minions.filter(sortMinions);

		function removeEnd(item, index) {
			return item.replace('_11', '');
		}

		let realMinions = filteredMinions.forEach(removeEnd);

		return (realMinions);
	}
}

module.exports = {
	HypixelSkyblockMemberMinions
}