/**
 * Represents Hypixel's Cops N Crims
 * @typedef {HypixelCopsCrims} object
 */
class HypixelCopsCrims {
	constructor(data) {
		/**
		 * The amount of Cops N Crims Coins
		 * @type {number}
		 */
		this.coins = data.coins;
		/**
		 * The amount of games won
		 * @type {number}
		 */
		this.wins = data.game_wins;
		/**
		 * The amount of rounds won
		 * @type {number}
		 */
		this.roundWins = data.round_wins;
		/**
		 * The amount of deathmatches won
		 * @type {number}
		 */
		this.deathmatchWins = data.game_wins_deathmatch;
		/**
		 * The amount of bombs planted
		 * @type {number}
		 */
		this.bombsPlanted = data.bombs_planted;
		/**
		 * The amount of bombs defused
		 * @type {number}
		 */
		this.bombsDefused = data.bombs_defused;
		/**
		 * The total amount of kills made
		 * @type {number}
		 */
		this.kills = data.kills + data.kills_deathmatch;
		/**
		 * The amount of kills in deathmatch
		 * @type {number}
		 */
		this.deathmatchKills = data.kills_deathmatch;
		/**
		 * The amount of kills that were headshots
		 * @type {number}
		 */
		this.headshotKills = data.headshot_kills;
		/**
		 * The total amount of deaths
		 * @type {number}
		 */
		this.deaths = data.deaths + data.deaths_deathmatch;
		/**
		 * The amount of deaths in deathmatch
		 * @type {number}
		 */
		this.deathmatchDeaths = data.deaths_deathmatch;
		/**
		 * The ratio of kills to deaths
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
		/**
		 * The amount of shots fired
		 * @type {number}
		 */
		this.shotsFired = data.shots_fired;
	}
}

module.exports = {
	HypixelCopsCrims
}