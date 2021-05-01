/**
 * Represents Hypixel Skywars Duels
 * @typedef {HypixelDuelsSkywars} object
 */
class HypixelDuelsSkywars {
	constructor(data) {
		/**
		 * The amount of deaths in Skywars Duels
		 * @type {number}
		 */
		this.deaths = data.sw_duel_deaths;
		/**
		 * The amount of games played in Skywars Duels
		 * @type {number}
		 */
		this.playedDuels = data.sw_duel_rounds_played;
		/**
		 * The amount of health regenerated in Skywars Duels
		 * @type {number}
		 */
		this.regeneratedHealth = data.sw_duel_health_regenerated;
		/**
		 * The amount of times the player has swung a melee weapon in Skywars Duels
		 * @type {number}
		 */
		this.meleeSwings = data.sw_duel_melee_swings;
		/**
		 * The amount of times the player has swung a melee weapon and hit the opponent in Skywars Duels
		 * @type {number}
		 */
		this.meleeHits = data.sw_duel_melee_hits;
		/**
		 * The ratio of melee hits to swings
		 * @type {number}
		 */
		this.HMR = this.meleeHits / this.meleeSwings;
		/**
		 * The amount of losses in Skywars Duels
		 * @type {number}
		 */
		this.losses = data.sw_duel_losses;
		/**
		 * The amount of wins in Skywars Duels
		 * @type {number}
		 */
		this.wins = data.sw_duel_wins;
		/**
		 * The ratio of wins to losses in Skywars Duels
		 * @type {number}
		 */
		this.WLR = this.wins / this.losses;
		/**
		 * The total amount of damage dealt in Skywars Duels
		 * @type {number}
		 */
		this.totalDamageDealt = data.sw_duel_damage_dealt;
		/**
		 * The amount of bow shots made in Skywars Duels
		 * @type {number}
		 */
		this.bowShots = data.sw_duel_bow_shots;
		/**
		 * The amount of bow shots made and hit the opponent in Skywars Duels
		 * @type {number}
		 */
		this.bowHits = data.sw_duel_bow_hits;
		/**
		 * The ratio of bow hits to shots in Skywars Duels
		 * @type {number}
		 */
		this.HSR = this.bowHits / this.bowShots;
		/**
		 * The amount of kills in Skywars Duels
		 * @type {number}
		 */
		this.kills = data.sw_duel_kills;
		/**
		 * The ratio of kills to deaths in Skywars Duels
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
	}
}

module.exports = {
	HypixelDuelsSkywars
}