/**
 * Represents Hypixel Sumo Duels
 * @typedef {HypixelDuelsSumo} object
 */
class HypixelDuelsSumo {
	constructor(data) {
		/**
		 * The amount of deaths in Sumo Duels
		 * @type {number}
		 */
		this.deaths = data.sumo_duel_deaths;
		/**
		 * The amount of games played in Sumo Duels
		 * @type {number}
		 */
		this.playedDuels = data.sumo_duel_rounds_played;
		/**
		 * The amount of health regenerated in Sumo Duels
		 * @type {number}
		 */
		this.regeneratedHealth = data.sumo_duel_health_regenerated;
		/**
		 * The amount of times the player has swung a melee weapon in Sumo Duels
		 * @type {number}
		 */
		this.meleeSwings = data.sumo_duel_melee_swings;
		/**
		 * The amount of times the player has swung a melee weapon and hit the opponent in Sumo Duels
		 * @type {number}
		 */
		this.meleeHits = data.sumo_duel_melee_hits;
		/**
		 * The ratio of melee hits to swings
		 * @type {number}
		 */
		this.HMR = this.meleeHits / this.meleeSwings;
		/**
		 * The amount of losses in Sumo Duels
		 * @type {number}
		 */
		this.losses = data.sumo_duel_losses;
		/**
		 * The amount of wins in Sumo Duels
		 * @type {number}
		 */
		this.wins = data.sumo_duel_wins;
		/**
		 * The ratio of wins to losses in Sumo Duels
		 * @type {number}
		 */
		this.WLR = this.wins / this.losses;
		/**
		 * The total amount of damage dealt in Sumo Duels
		 * @type {number}
		 */
		this.totalDamageDealt = data.sumo_duel_damage_dealt;
		/**
		 * The amount of kills in Sumo Duels
		 * @type {number}
		 */
		this.kills = data.sumo_duel_kills;
		/**
		 * The ratio of kills to deaths in Sumo Duels
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
	}
}

module.exports = {
	HypixelDuelsSumo
}