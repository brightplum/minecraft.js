const { HypixelBedwars } = require('./HypixelBedwars.js');
const { HypixelArcade } = require('./HypixelArcade.js');
const { HypixelSkywars } = require('./HypixelSkywars.js');
const { HypixelTNTGames } = require('./HypixelTNTGames.js');

const { HypixelPlayerFriends } = require('./HypixelPlayerFriends.js');
const { HypixelSkyblock } = require('./HypixelSkyblock.js');

class HypixelPlayer {
	constructor(data, friendData, skyblockData) {
		this.friends = new HypixelPlayerFriends(friendData);

		this.success = data.success;

		let player = data.player;

		this.id = player._id;

		this.uuid = player.uuid;

		this.username = player.displayname;

		this.nameHistory = player.knownAliases;

		this.achievements = player.achievementsOneTime;

		this.karma = player.karma;

		this.chatChannel = player.channel;

		this.achievementPoints = player.achievementPoints;

		this.outfit = player.outfit;

		this.language = player.userLanguage;

		this.experience = player.networkExp;

		this.socials = player.socialMedia.links;

		this.stats = {
			bedwars: new HypixelBedwars(player.stats.Bedwars),
			arcade: new HypixelArcade(player.stats.Arcade),
			skywars: new HypixelSkywars(player.stats.Skywars),
			tntgames: new HypixelTNTGames(player.stats.TNTGames),
			skyblock: new HypixelSkyblock(skyblockData)
		};

		this.recentGame = player.mostRecentGameType;
	}
}

module.exports = {
	HypixelPlayer
}
