/**
 * Represents a Hypixel Skyblock Member's Pet
 * @typedef {HypixelSkyblockMemberPet} object
 */
class HypixelSkyblockMemberPet {
	constructor(data) {
		/**
		 * Pet UUID (if any)
		 * @type {Promise<string|null>}
		 */
		this.uuid = data.uuid ? data.uuid : null;

		/**
		 * Amount of pet experience this pet has
		 * @type {number}
		 */
		this.experience = data.exp;

		/**
		 * Whether or not this pet is currently equipped
		 * @type {boolean}
		 */
		this.activePet = data.active;

		/**
		 * The rarity of this pet
		 * @type {string}
		 */
		this.rarity = data.tier;
		
		/**
		 * The amount of carrot candy used on this pet to level it up
		 * @type {number}
		 */
		this.usedCandy = data.candyUsed;
		
		/**
		 * The pet's item currently being held
		 * @type {Promise<string|null>}
		 * @example
		 * 
		 * member.pets[0].heldItem; // Expected: "TEXTBOOK"
		 */
		this.heldItem = data.heldItem ?  data.heldItem.replace('PET_ITEM_', '') : null;

		/**
		 * The name of the pet
		 * @type {string}
		 * @example
		 * 
		 * member.pets[0].type; // Expected: "SHEEP"
		 */
		this.type = data.type;
	}
}

module.exports = {
	HypixelSkyblockMemberPet
}