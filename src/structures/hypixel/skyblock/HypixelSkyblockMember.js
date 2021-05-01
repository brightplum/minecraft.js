const { HypixelSkyblockMemberStats } = require('./HypixelSkyblockMemberStats.js');
const { HypixelSkyblockMemberMinions } = require('./HypixelSkyblockMemberMinions.js');
const { HypixelSkyblockMemberPet } = require('./HypixelSkyblockMemberPet.js');
const { HypixelSkyblockMemberDungeons } = require('./HypixelSkyblockMemberDungeons.js');
const { HypixelSkyblockMemberSlayers } = require('./HypixelSkyblockMemberSlayers.js');
const { HypixelSkyblockMemberSkills } = require('./HypixelSkyblockMemberSkills.js');

/**
 * Represents a member on a Hypixel Skyblock Profile
 * @typedef {HypixelSkyblockMember} object
 */
class HypixelSkyblockMember {
	constructor(data) {
		/**
		 * Timestamp of the last save on the profile
		 * @type {number}
		 */
		this.saveTimestamp = data.last_save;

		/**
		 * Timestamp of when this member joined the profile
		 * @type {number}
		 */
		this.joinedTimestamp = data.first_join;

		/**
		 * Fairy Soul Data of this member
		 * @type {object}
		 */
		this.fairySouls = {
			/**
			 * Current fairy souls in this player's inventory
			 * @type {number}
			 */
			current: data.fairy_souls,
			/**
			 * Total amount of fairy souls ever collected
			 * @type {number}
			 */
			total: data.fairy_souls_collected,
			/**
			 * Times player has exchanged the souls for stat buffs
			 * @type {number}
			 */
			exchanges: data.fairy_exchanges
		};

		let pets = data.pets;

		let realPets = [];

		function pushRealPets(item, index) {
			realPets.push(new HypixelSkyblockMemberPet(item));
		}

		pets.forEach(pushRealPets);

		/**
		 * Represents the player's current skyblock pets
		 * @type {HypixelSkyblockMemberPet[]}
		 */
		this.pets = realPets;

		/**
		 * Current amount of coins in the player's purse
		 * @type {number}
		 */
		this.purse = data.coin_purse;

		/**
		 * Represents general statistics of this skyblock member
		 * @type {HypixelSkyblockMemberStats}
		 */
		this.stats = new HypixelSkyblockMemberStats(data.stats);

		/**
		 * Represents player's minion data
		 * @type {HypixelSkyblockMemberMinions}
		 */
		this.minions = new HypixelSkyblockMemberMinions(data.crafted_generators);

		/**
		 * Represents player's dungeon data
		 * @type {HypixelSkyblockMemberDungeons}
		 */
		this.dungeons = new HypixelSkyblockMemberDungeons(data.dungeons);

		/**
		 * Represents Jacob Farming data
		 * @type {object}
		 */
		this.jacob = {
			/**
			 * Amount of medals currently in their inventory
			 * @type {object}
			 */
			medalsInventory: data.jacob2.medals_inv,
			/**
			 * Perks obtained from Jacob
			 * @type {object}
			 */
			perks: data.jacob2.perks,
			/**
			 * Whether or not this player has talked to jacob
			 * @type {boolean}
			 */
			talkedToJacob: data.jacob2.talked
		};

		/**
		 * Represents player's slayer data
		 * @type {HypixelSkyblockMemberSlayers}
		 */
		this.slayers = new HypixelSkyblockMemberSlayers(data.slayer_bosses);

		/**
		 * Represents player's collection data
		 * @type {object}
		 * @example
		 * 
		 * member.collections['WHEAT'] // Wheat Collections;
		 */
		this.collection = data.collection;

		/**
		 * Represents inventory data inside current Sacks
		 * @type {Promise<object|null>}
		 */
		this.sackInventory = data.sacks_counts ? data.sacks_counts : null;

		/**
		 * Represents the current slot of the equipped wardrobe
		 * @type {number}
		 */
		this.currentWardrobeSlot = data.wardrobe_equipped_slot;

		/**
		 * Represents player's skills
		 * @type {HypixelSkyblockMemberSkills}
		 */
		this.skills = new HypixelSkyblockMemberSkills(data);
	}
}

module.exports = {
	HypixelSkyblockMember
}