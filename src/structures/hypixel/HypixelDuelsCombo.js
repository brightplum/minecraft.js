/**
 * Represents Hypixel Combo Duels
 * @typedef {HypixelDuelsCombo} object
 */
class HypixelDuelsCombo {
	constructor(data) {
		/**
		 * The amount of deaths in Combo Duels
		 * @type {number}
		 */
		this.deaths = data.combo_duel_deaths;
		/**
		 * The amount of games played in Combo Duels
		 * @type {number}
		 */
		this.playedDuels = data.combo_duel_rounds_played;
		/**
		 * The amount of health regenerated in Combo Duels
		 * @type {number}
		 */
		this.regeneratedHealth = data.combo_duel_health_regenerated;
		/**
		 * The amount of times the player has swung a melee weapon in Combo Duels
		 * @type {number}
		 */
		this.meleeSwings = data.combo_duel_melee_swings;
		/**
		 * The amount of times the player has swung a melee weapon and hit the opponent in Combo Duels
		 * @type {number}
		 */
		this.meleeHits = data.combo_duel_melee_hits;
		/**
		 * The ratio of melee hits to swings
		 * @type {number}
		 */
		this.HMR = this.meleeHits / this.meleeSwings;
		/**
		 * The amount of losses in Combo Duels
		 * @type {number}
		 */
		this.losses = data.combo_duel_losses;
		/**
		 * The amount of wins in Combo Duels
		 * @type {number}
		 */
		this.wins = data.combo_duel_wins;
		/**
		 * The ratio of wins to losses in Combo Duels
		 * @type {number}
		 */
		this.WLR = this.wins / this.losses;
		/**
		 * The total amount of damage dealt in Combo Duels
		 * @type {number}
		 */
		this.totalDamageDealt = data.combo_duel_damage_dealt;
		/**
		 * The amount of kills in Combo Duels
		 * @type {number}
		 */
		this.kills = data.combo_duel_kills;
		/**
		 * The ratio of kills to deaths in Combo Duels
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
	}
}

module.exports = {
	HypixelDuelsCombo
}