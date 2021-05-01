/**
 * Represents auction statistics
 * @typedef {HypixelSkyblockMemberStatsAuctions} object
 */
class HypixelSkyblockMemberStatsAuctions {
	constructor(data) {
		/**
		 * The total amount of bids this player has made
		 * @type {number}
		 */
		this.totalBids = data.auctions_bids;
		/**
		 * The highest bid (in coins) that the player has made
		 * @type {number}
		 */
		this.highestBid = data.auctions_highest_bid;
		/**
		 * The amount of auctions won by having the highest bid
		 * @type {number}
		 */
		this.auctionsWon = data.auctions_won;
		/**
		 * The amount of gold spent on auction items
		 * @type {number}
		 */
		this.totalGoldSpent = data.auctions_gold_spent;
		/**
		 * The amount of gold earned from selling auction items
		 * @type {number}
		 */
		this.totalGoldEarned = data.auctions_gold_earned;

		/**
		 * The amount of created auctions the player has made
		 * @type {number}
		 */
		this.createdAuctions = data.auctions_created;
		/**
		 * The total amount of money paid to host auctions
		 * @type {number}
		 */
		this.totalPaidFees = data.auctions_fees;
		/**
		 * The total amount of auctions that have failed or have never been bought
		 * @type {number}
		 */
		this.unsucessfulAuctions = data.auctions_no_bids;

		/**
		 * The amount of auctions bought
		 * @type {{common: number, uncommon: number, rare: number, epic: number, legendary: number, special: number}}
		 * @example
		 * member.stats.auctionStats.boughtAuctions.common; // Amount of common items bought
		 */
		this.boughtAuctions = {
			common: data.auctions_bought_common,
			uncommon: data.auctions_bought_uncommon,
			rare: data.auctions_bought_rare,
			epic: data.auctions_bought_epic,
			legendary: data.auctions_bought_legendary,
			special: data.auctions_bought_special
		}
		/**
		 * The amount of auctions sold
		 * @type {{common: number, uncommon: number, rare: number, epic: number, legendary: number, special: number}}
		 * @example
		 * member.stats.auctionStats.soldAuctions.rare; // Amount of rare items sold
		 */
		this.soldAuctions = {
			common: data.auctions_sold_common,
			uncommon: data.auctions_sold_uncommon,
			rare: data.auctions_sold_rare,
			epic: data.auctions_sold_epic,
			legendary: data.auctions_sold_legendary,
			special: data.auctions_sold_special
		}
	}
}

module.exports = {
	HypixelSkyblockMemberStatsAuctions
}