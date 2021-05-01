const { HypixelMurderMysteryInfected } = require('./HypixelMurderMysteryInfected.js');
const { HypixelMurderMysteryClassic } = require('./HypixelMurderMysteryClassic.js');
/**
 * Represents Hypixel Murder Mystery
 * @typedef {HypixelMurderMystery} object
 */
class HypixelMurderMystery {
	constructor(data) {
		/**
		 * The longest amount of time survived, in seconds
		 * @type {number}
		 */
		this.longestTimeSurvived = data.total_time_survived_seconds;
		/**
		 * The amount of coins the player has
		 * @type {number}
		 */
		this.coins = data.coins;
		/**
		 * The number of wins the player has
		 * @type {number}
		 */
		this.wins = data.wins;
		/**
		 * The amount of games you have played
		 * @type {number}
		 */
		this.playedGames = data.games;
		/**
		 * The amount of deaths the player has
		 * @type {number}
		 */
		this.deaths = data.deaths;
		/**
		 * The amount of kills as a survivor
		 * @type {number}
		 */
		this.survivorKills = data.kills_as_survivor;
		/**
		 * Murder Mystery Infected Data
		 * @type {Promise<HypixelMurderMysteryInfected>}
		 */
		this.infected = new HypixelMurderMysteryInfected(data);
		/**
		 * Murder Mystery Classic Data
		 * @type {Promise<HypixelMurderMysteryInfected>}
		 */
		this.classic = new HypixelMurderMysteryClassic(data);
	}
}

module.exports = {
	HypixelMurderMystery
}