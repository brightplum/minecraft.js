/**
 * Represents Hypixel OP Duels
 * @typedef {HypixelDuelsOp} object
 */
class HypixelDuelsOp {
	constructor(data) {
		/**
		 * The amount of deaths in OP Duels
		 * @type {number}
		 */
		this.deaths = data.op_duel_deaths;
		/**
		 * The amount of games played in OP Duels
		 * @type {number}
		 */
		this.playedDuels = data.op_duel_rounds_played;
		/**
		 * The amount of health regenerated in OP Duels
		 * @type {number}
		 */
		this.regeneratedHealth = data.op_duel_health_regenerated;
		/**
		 * The amount of times the player has swung a melee weapon in OP Duels
		 * @type {number}
		 */
		this.meleeSwings = data.op_duel_melee_swings;
		/**
		 * The amount of times the player has swung a melee weapon and hit the opponent in OP duels
		 * @type {number}
		 */
		this.meleeHits = data.op_duel_melee_hits;
		/**
		 * The ratio of melee hits to swings
		 * @type {number}
		 */
		this.HMR = this.meleeHits / this.meleeSwings;
		/**
		 * The amount of losses in OP Duels
		 * @type {number}
		 */
		this.losses = data.op_duel_losses;
		/**
		 * The amount of wins in OP Duels
		 * @type {number}
		 */
		this.wins = data.op_duel_wins;
		/**
		 * The ratio of wins to losses in OP Duels
		 * @type {number}
		 */
		this.WLR = this.wins / this.losses;
		/**
		 * The total amount of damage dealt in OP Duels
		 * @type {number}
		 */
		this.totalDamageDealt = data.op_duel_damage_dealt;
		/**
		 * The amount of bow shots made in OP Duels
		 * @type {number}
		 */
		this.bowShots = data.op_duel_bow_shots;
		/**
		 * The amount of bow shots made and hit the opponent in OP Duels
		 * @type {number}
		 */
		this.bowHits = data.op_duel_bow_hits;
		/**
		 * The ratio of bow hits to shots in OP Duels
		 * @type {number}
		 */
		this.HSR = this.bowHits / this.bowShots;
		/**
		 * The amount of kills in OP Duels
		 * @type {number}
		 */
		this.kills = data.op_duel_kills;
		/**
		 * The ratio of kills to deaths in OP Duels
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
	}
}

module.exports = {
	HypixelDuelsOp
}