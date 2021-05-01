const { HypixelSkyblockMemberStatsAuctions } = require('./HypixelSkyblockMemberStatsAuctions.js');

/**
 * Represents Statistics of the Skyblock Member
 * @typedef {HypixelSkyblockMemberStats} object
 */
class HypixelSkyblockMemberStats {
	constructor(data) {
		/**
		 * Total amount of kills
		 * @type {number}
		 */
		this.totalKills = data.kills;
		
		/**
		 * Total amount of deaths
		 * @type {number}
		 */
		this.totalDeaths = data.deaths;

		/**
		 * Total amount of gits given to another player
		 * @type {number}
		 */
		this.placedGifts = data.gifts_given;

		/**
		 * Total amount of gifts received from another player
		 * @type {number}
		 */
		this.receivedGifts = data.gifts_received;

		/**
		 * Highest critical damage made my this player
		 * @type {number}
		 */
		this.highestCrit = data.highest_critical_damage;

		/**
		 * Total amount of items fished
		 * @type {number}
		 */
		this.fishedItems = data.items_fished;

		/**
		 * Total amount of non-treasure items fished
		 * @type {number}
		 */
		this.fishedNormalItems = data.items_fished_normal;
		/**
		 * Total amount of treasure items fished
		 * @type {number}
		 */
		this.fishedTreasureItems = data.items_fished_treasure;

		/**
		 * Auction Statistics for this player
		 * @type {HypixelSkyblockMemberStatsAuctions}
		 */
		this.auctionStats = new HypixelSkyblockMemberStatsAuctions(data);
	}
	/**
	 * Fetch kills from a specified mob
	 * @param {string} mob The mob (entity) to search for
	 * @returns {number}
	 * @example
	 * 
	 * member.stats.getMobKills('cow'); // Returns cow kills
	 * member.stats.getMobKills('zealot enderman'); // Returns zealot kills
	 */
	getMobKills(mob) {
		return (data[`kills_${mob.toString().replace(/[ -]/g, '_')}`.toLowerCase()]);
	}
	/**
	 * Fetch deaths from a specified mob
	 * @param {string} mob The mob (entity) to search for
	 * @returns {number}
	 * @example
	 * 
	 * member.stats.getMobDeaths('zealot enderman'); // Returns zealot deaths
	 * member.stats.getMobKills('zombie'); // Returns zombie deaths
	 */
	getMobDeaths(mob) {
		return (data[`deaths_${mob.toString().replace(/[ -]/g, '_')}`.toLowerCase()]);
	}
}

module.exports = {
	HypixelSkyblockMemberStats
}