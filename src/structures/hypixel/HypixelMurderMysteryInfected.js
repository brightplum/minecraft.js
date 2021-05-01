/**
 * Infected Murder Mystery Mode
 * @typedef {HypixelMurderMysteryInfected} object
 */
class HypixelMurderMysteryInfected {
	constructor(data) {
		/**
		 * The total amount of coins picked up in infected
		 * @type {number}
		 */
		this.pickedUpCoins = data.coins_pickedup_MURDER_INFECTION;
		/**
		 * How many kills you have total
		 * @type {number}
		 */
		this.kills = data.kills_as_infected_MURDER_INFECTION + data.kills_as_survivor_MURDER_INFECTION;
		/**
		 * How many kills you have as an infected
		 * @type {number}
		 */
		this.infectionKills = data.kills_as_infected_MURDER_INFECTION;
		/**
		 * How many kills you have as a survivor
		 * @type {number}
		 */
		this.survivorKills = data.kills_as_survivor_MURDER_INFECTION;
		/**
		 * How many games you have played in infected mode
		 * @type {number}
		 */
		this.playedGames = data.games_MURDER_INFECTION;
		/**
		 * How many wins you have in infected mode
		 * @type {number}
		 */
		this.wins = data.wins_MURDER_INFECTION;
	}
}

module.exports = {
	HypixelMurderMysteryInfected
}