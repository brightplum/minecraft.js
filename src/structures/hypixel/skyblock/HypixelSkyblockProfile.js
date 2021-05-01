const { HypixelSkyblockMember } = require('./HypixelSkyblockMember.js');

const { HypixelSkyblockBank } = require('./HypixelSkyblockBank.js');

const { HypixelError } = require('../../../Errors.js');

let err = new HypixelError('"uuid" must be a valid string.');
/**
 * Represents a Hypixel Skyblock Profile
 * @typedef {HypixelSkyblockProfile} object
 */
class HypixelSkyblockProfile {
  constructor(data) {
		/**
		 * Array of raw member data
		 * @type {object[]}
		 * @private
		 */
		this._rawMemberData = data.members;
		
		/**
		 * Profiles's Hypixel ID
		 * @type {string}
		 */
		this.id = data.profile_id;

		/**
		 * Name of the profile
		 * @type {string}
		 */
		this.name = data.cute_name;

		/**
		 * Represents the Co-Op Bank of the profile
		 * @type {Promise<HypixelSkyblockBank|null>}
		 */
		this.coopBank = data.banking ? new HypixelSkyblockBank(data.banking) : null;
  }
	/**
	 * Fetch a member from a profile
	 * @param {string} uuid The Player UUID to search for
	 * @returns {Promise<HypixelSkyblockMember|null>}
	 * @example
	 * 
	 * profile.getMember('8069233e5b25410c9475daa6a044c365'); // Returns GamerCoder215's profile data
	 */
	getMember(uuid) {
		if (!uuid || typeof uuid !== 'string') throw err;
		return this._rawMemberData[`${uuid}`] ? new HypixelSkyblockMember(this._rawMemberData[`${uuid}`]) : null;
	}
}

module.exports = {
	HypixelSkyblockProfile
}