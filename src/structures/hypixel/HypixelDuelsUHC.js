/**
 * Represents Hypixel UHC Duels
 * @typedef {HypixelDuelsUHC} object
 */
class HypixelDuelsUHC {
	constructor(data) {
		/**
		 * The amount of deaths in UHC Duels
		 * @type {number}
		 */
		this.deaths = data.uhc_duel_deaths;
		/**
		 * The amount of games played in UHC Duels
		 * @type {number}
		 */
		this.playedDuels = data.uhc_duel_rounds_played;
		/**
		 * The amount of health regenerated in UHC Duels
		 * @type {number}
		 */
		this.regeneratedHealth = data.uhc_duel_health_regenerated;
		/**
		 * The amount of times the player has swung a melee weapon in UHC Duels
		 * @type {number}
		 */
		this.meleeSwings = data.uhc_duel_melee_swings;
		/**
		 * The amount of times the player has swung a melee weapon and hit the opponent in UHC Duels
		 * @type {number}
		 */
		this.meleeHits = data.uhc_duel_melee_hits;
		/**
		 * The ratio of melee hits to swings
		 * @type {number}
		 */
		this.HMR = this.meleeHits / this.meleeSwings;
		/**
		 * The amount of losses in UHC Duels
		 * @type {number}
		 */
		this.losses = data.uhc_duel_losses;
		/**
		 * The amount of wins in UHC Duels
		 * @type {number}
		 */
		this.wins = data.uhc_duel_wins;
		/**
		 * The ratio of wins to losses in UHC Duels
		 * @type {number}
		 */
		this.WLR = this.wins / this.losses;
		/**
		 * The total amount of damage dealt in UHC Duels
		 * @type {number}
		 */
		this.totalDamageDealt = data.uhc_duel_damage_dealt;
		/**
		 * The amount of bow shots made in UHC Duels
		 * @type {number}
		 */
		this.bowShots = data.uhc_duel_bow_shots;
		/**
		 * The amount of bow shots made and hit the opponent in UHC Duels
		 * @type {number}
		 */
		this.bowHits = data.uhc_duel_bow_hits;
		/**
		 * The ratio of bow hits to shots in UHC Duels
		 * @type {number}
		 */
		this.HSR = this.bowHits / this.bowShots;
		/**
		 * The amount of kills in UHC Duels
		 * @type {number}
		 */
		this.kills = data.uhc_duel_kills;
		/**
		 * The ratio of kills to deaths in UHC Duels
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
	}
}

module.exports = {
	HypixelDuelsUHC
}