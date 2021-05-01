const { HypixelDuelsOp } = require('./HypixelDuelsOp');
const { HypixelDuelsUHC } = require('./HypixelDuelsUHC.js');
const { HypixelDuelsSkywars } = require('./HypixelDuelsSkywars.js');
const { HypixelDuelsCombo } = require('./HypixelDuelsCombo.js');
const { HypixelDuelsBow } = require('./HypixelDuelsBow.js');
const { HypixelDuelsSumo } = require('./HypixelDuelsSumo.js');
/**
 * Represents Hypixel's Duels mode
 * @typedef {HypixelDuels} object
 */
class HypixelDuels {
	constructor(data) {
		/**
		 * Raw Fetch Data (used for functions)
		 * @type {object}
		 * @private
		 */
		this._rawData = data;
		/**
		 * An array of the 3 most recent games the player has made
		 * @type {string[]}
		 * @example
		 * 
		 * member.duels.recentDuels[0]; // "op_doubles"
		 */
		this.recentDuels = data.duels_recently_played.toLowerCase().split('#');
		/**
		 * The amount of duels games the player played
		 * @type {number}
		 */
		this.playedDuels = data.games_played_duels;
		/**
		 * The total amount of wins the player has
		 * @type {number}
		 */
		this.wins = data.wins;
		/**
		 * The total amount of losses the player has
		 * @type {number}
		 */
		this.losses = data.losses;
		/**
		 * The ratio of wins to losses
		 * @type {number}
		 */
		this.WLR = this.wins / this.losses;
		/**
		 * The total amount of kills the player has
		 * @type {number}
		 */
		this.kills = data.kills;
		/**
		 * The total amount of deaths the player has
		 * @type {number}
		 */
		this.deaths = data.deaths;
		/**
		 * The ratio of kills to deaths
		 * @type {number}
		 */
		this.KDR = this.kills / this.deaths;
		/**
		 * Whether or not the player has chat enabled
		 * @type {boolean}
		 */
		this.chatEnabled = data.chat_enabled == 'on' ? true : false;
		/**
		 * An array of the maps the player has won on
		 * @type {string[]}
		 */
		this.mapsWon = data.maps_won_on;
		/**
		 * The amount of duel coins the player has
		 * @type {number}
		 */
		this.coins = data.coins;
		/**
		 * The total amount of blocks placed
		 * @type {number}
		 */
		this.placedBlocks = data.blocks_placed;
		/**
		 * The total amount of golden apples eaten
		 * @type {number}
		 */
		this.gapplesEaten = data.golden_apples_eaten;
		/**
		 * The current winstreak the player has
		 * @type {number}
		 */
		this.winstreak = data.current_winstreak;
		/**
		 * The longest winstreak the player has ever had
		 * @type {number}
		 */
		this.longestWinstreak = data.best_overall_winstreak;
		/**
		 * The total amount of health regenerated
		 * @type {number}
		 */
		this.regeneratedHealth = data.health_regenerated;
		/**
		 * The total amount of times the player has swung a melee weapon
		 * @type {number}
		 */
		this.meleeSwings = data.melee_swings;
		/**
		 * The total amount of times the player has swung a melee weapon and hit the opponent
		 * @type {number}
		 */
		this.meleeHits = data.melee_hits;
		/**
		 * The ratio of melee swings to hits
		 * @type {number}
		 */
		this.HMR = this.meleeHits / this.meleeWings;
		/**
		 * The total amount of times the player has shot a bow
		 * @type {number}
		 */
		this.bowShots = data.bow_shots;
		/**
		 * The total amount of times the player has shot a bow and hit the opponent
		 * @type {number}
		 */
		this.bowHits = data.bow_hits;
		/**
		 * The ratio of bow hits to shots
		 * @type {number}
		 */
		this.HSR = this.bowHits / this.bowHits;
		/**
		 * The total amount of damage dealt
		 * @type {number}
		 */
		this.totalDamageDealt = data.damage_dealt;
		/**
		 * Represents Hypixel OP Duels
		 * @type {HypixelDuelsOp}
		 */
		this.opDuels = new HypixelDuelsOp(data);
		/**
		 * Represents Hypixel UHC Duels
		 * @type {HypixelDuelsUHC}
		 */
		this.uhcDuels = new HypixelDuelsUHC(data);
		/**
		 * Represents Hypixel Skywars Duels
		 * @type {HypixelDuelsSkywars}
		 */
		this.skywarsDuels = new HypixelDuelsSkywars(data);
		/**
		 * Represents Hypixel Combo Duels
		 * @type {HypixelDuelsCombo}
		 */
		this.comboDuels = new HypixelDuelsCombo(data);
		/**
		 * Represents Hypixel Bow Duels
		 * @type {HypixelDuelsBow}
		 */
		this.bowDuels = new HypixelDuelsBow(data);
		/**
		 * Represents Hypixel Sumo Duels
		 * @type {HypixelDuelsSumo}
		 */
		this.sumoDuels = new HypixelDuelsSumo(data);
	}
	/**
	 * Fetches the prestige level of a rank
	 * @param {string} gamemode The gamemode to get the rank of
	 * @param {string} rank The rank title to get the prestige of
	 * @returns {?number}
	 * @example
	 * 
	 * member.duels.getPrestige('op', 'rookie'); // Fetches prestie of OP Duels in Rookie
	 * member.duels.getPrestige('all-modes', 'iron'); // Fetches prestige of All Modes in Iron
	 * member.duels.getPrestige('combo', 'master'); // Fetches prestige of Combo Duels in Master
	 */
	getPrestige(gamemode, rank) {
		let data = this._rawData[`${gamemode.toString().replace(/[ -]/g, '_').toLowerCase()}_${rank.toString().replace(/[ -]/g, '_').toLowerCase()}_title_prestige`] ? this._rawData[`${gamemode.toString().replace(/[ -]/g, '_').toLowerCase()}_${rank.toString().replace(/[ -]/g, '_').toLowerCase()}_title_prestige`] : null;
		
		return data;
	}
}

module.exports = {
	HypixelDuels
}