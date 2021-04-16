const { HypixelSkywarsKills } = require('./HypixelSkywarsHeads.js');
const { HypixelSkywarsHeads } = require('./HypixelSkywarsHeads.js');
const { HypixelSkywarsCosmetics } = require('./HypixelSkywarsCosmetics.js');
const { HypixelSkywarsDeaths } = require('./HypixelSkywarsDeaths.js');

class HypixelSkywars {
	constructor(data) {
		this.souls = data.souls;

		this.headCollection = new HypixelSkywarsHeads(data.head_collection);

		this.lastPlayedMode = data.lastMode;

		this.coins = data.coins;

		this.wins = data.wins;

		this.losses = data.losses;

		this.WLR = this.wins / this.losses;

		this.deaths = new HypixelSkywarsDeaths(data);
		
		this.kills = new HypixelSkywarsKills(data);

		this.cosmetics = new HypixelSkywarsCosmetics(data);
	}
}

module.exports = {
	HypixelSkywars
}