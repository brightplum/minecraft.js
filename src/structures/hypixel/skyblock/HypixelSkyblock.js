const { fetchURL } = require('../../../utils/fetchURL.js');


const { HypixelSkyblockBazaar } = require('./HypixelSkyblockBazaar.js');
const { HypixelSkyblockProfile } = require('./HypixelSkyblockProfile.js');	
const { HypixelClient } = require('../../../client/HypixelClient.js')

/**
 * Represents Hypixel Skyblock
 * @typedef {HypixelSkyblock} object
 */
class HypixelSkyblock {
  constructor(data) {
		let profiles = data.profiles;

		let correctprofiles = [];
		function pushProfiles(item, index) {
			correctprofiles.push(new HypixelSkyblockProfile(item));
		}
		profiles.forEach(pushProfiles)

		/**
		 * An array of profiles that the member has
		 * @type {HypixelSkyblockProfile[]}
		 */
		this.memberProfiles = correctprofiles;	
  }
	/**
	 * Fetch Bazaar Statistics
	 * @async
	 * @returns {Promise<HypixelSkyblockBazaar>}
	 */
	async getBazaar() {
		let data = await fetchURL(`https://api.hypixel.net/skyblock/bazaar?key=${HypixelClient.key}`, 'json');

		let bazaar = new HypixelSkyblockBazaar(data);

		return bazaar;
	}
}

module.exports = {
	HypixelSkyblock
}