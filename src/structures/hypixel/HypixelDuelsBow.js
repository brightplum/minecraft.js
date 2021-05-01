/**
 * Represents Hypixel Bow Duels
 * @typedef {HypixelDuelsBow} object
 */
class HypixelDuelsBow {
	constructor(data) {
		/**
		 * The amount of deaths in Bow Duels
		 * @type {number}
		 */
		this.deaths = data.bow_duel_deaths;
		/**
		 * The amount of games played in Bow Duels
		 * @type {number}
		 */
		this.playedDuels = data.bow_duel_rounds_played;
		/**
		 * The amount of health regenerated in Bow Duels
		 * @type {number}
		 */
		this.regeneratedHealth = data.bow_duel_health_regenerated;
		/**
		 * The amount of losses in Bow Duels
		 * @type {number}
		 */
		this.losses = data.bow_duel_losses;
		/**
		 * The amount of wins in Bow Duels
		 * @type {number}
		 */
		this.wins = data.bow_duel_wins;
		/**
		 * The ratio of wins to losses in Bow Duels
		 * @type {number}
		 */
		this.WLR = this.wins / this.losses;
		/**
		 * The total amount of damage dealt in Bow Duels
		 * @type {number}
		 */
		this.totalDamageDealt = data.bow_duel_damage_dealt;
		/**
		 * The amount of bow shots made in Bow Duels
		 * @type {number}
		 */
		this.bowShots = data.bow_duel_bow_shots;
		/**
		 * The amount of bow shots made and hit the opponent in Bow Duels
		 * @type {number}
		 */
		this.bowHits = data.bow_duel_bow_hits;
		/**
		 * The ratio of bow hits to shots in Bow Duels
		 * @type {number}
		 */
		this.HSR = this.bowHits / this.bowShots;
		/**
		 * The amount of kills in Bow Duels
		 * @type {number}
		 */
		this.kills = data.bow_duel_kills;
		/**
		 * The ratio of kills to deaths in Bow Duels
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
	}
}

module.exports = {
	HypixelDuelsBow
}