const { HypixelBedwarsDeaths } = require('./HypixelBedwarsDeaths.js');

const { HypixelBedwarsKills } = require('./HypixelBedwarsKills.js');

const { HypixelBedwarsCosmetics } = require('./HypixelBedwarsCosmetics.js');

const { HypixelBedwarsPractice } = require('./HypixelBedwarsPractice.js');

class HypixelBedwars {
	constructor(data) {
		this.experience = data.Experience;

		this.level = data.bedwars_level;

		this.wins = data.wins_bedwars;

		this.losses = data.losses_bedwars;

		this.WLR = this.wins / this.losses;

		this.bedsBroken = data.beds_broken_bedwars;

		this.resouces = {
			total: data.resources_collected_bedwars,
			iron: data.iron_resources_collected_bedwars,
			gold: data.gold_resources_collected_bedwars,
			diamond: data.diamond_resources_collected_bedwars,
			emerald: data.emerald_resources_collected_bedwars
		}

		this.purchasedResources = data.items_purchased_bedwars;

		this.quickMenuData = data.favourites_2.split(',');

		this.playedGames = data.games_played_bedwars;

		this.coins = data.coins;

		this.winstreak = data.winstreak;

		this.deaths = new HypixelBedwarsDeaths(data);

		this.kills = new HypixelBedwarsKills(data);

		this.KDR = data.kills_bedwars / data.deaths_bedwars;

		this.practiceMode = new HypixelBedwarsPractice(data);
	}
}

module.exports = {
	HypixelBedwars
}