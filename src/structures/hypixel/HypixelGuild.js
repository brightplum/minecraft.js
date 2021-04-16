const { HypixelError } = require('../../Errors.js');
const { HypixelGuildColor } = require('./HypixelGuildColor.js');

class HypixelGuild {
	constructor(data) {
		this.success = data.success;

		if (this.success != true) {
			throw new HypixelError(`${data.cause}`);
		}

		let guild = data.guild;

		this.id = guild._id;

		this.name = guild.name;

		this.legacyCoins = guild.coins;

		this.legacyCoinsEver = guild.coinsEver;

		this.description = guild.description;

		this.createdTimestamp = guild.created;

		this.guildEXP = guild.exp;

		this.tagColor = new HypixelGuildColor(guild.tagColor);

		if (this.guildEXP < 2750000) this.tagColor = null;
	}
}

module.exports = {
	HypixelGuild
}