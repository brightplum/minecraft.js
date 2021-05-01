/**
 * Hypixel's Classic Murder Mystery
 * @typedef {HypixelMurderMysteryClassic}
 */
class HypixelMurderMysteryClassic {
	constructor(data) {
		/**
		 * The amount of picked up coins in classic mode
		 * @type {number}
		 */
		this.pickedUpCoins = data.coins_pickedup_MURDER_CLASSIC;
		/**
		 * The amount of games played in classic mode
		 * @type {number} 
		 */
		this.playedGames = data.games_MURDER_CLASSIC;
		/**
		 * The amount of wins gotten in classic mode
		 * @type {number}
		 */
		this.wins = data.wins_MURDER_CLASSIC;
		/**
		 * The amount of deaths in classic mode
		 * @type {number}
		 */
		this.deaths = data.deaths_MURDER_CLASSIC;		
	}
}