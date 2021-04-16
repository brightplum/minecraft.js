const { fetchURL } = require('../utils/fetchURL.js');
const { HypixelError } = require('../Errors.js');
const { HypixelGuild } = require('../structures/hypixel/HypixelGuild.js');
const { HypixelPlayer } = require('../structures/hypixel/HypixelPlayer.js');

let err = new TypeError('"key" must be defined.')

class HypixelClient {
	constructor(key) {
		if (!key) throw err;
		this.key = key;
	}
	async getHypixelPlayer(uuid) {
		const data = await fetchURL
		(`https://api.hypixel.net/player?uuid=${uuid}&key=${this.key}`, 'json');

		const friendData = await fetchURL(`https://api.hypixel.net/friends?uuid=${uuid}&key=${this.key}`, 'json');
		if (data.success != true) {
			err = new HypixelError(`${data.cause}`);
			throw err;
		} else if (data.player == null) {
			return null;
		} else {
			const player = new HypixelPlayer(data, friendData);
			return player;
		}
	}
	async getHypixelGuild(method, value) {
		err = new TypeError('"method" must be a valid string equal to \'id\', \'player\', or \'name\'.');
		if (!method || typeof method !== 'string' || (method.toLowerCase() !== 'id' && method.toLowerCase() !== 'player' && method.toLowerCase() !== 'name')) throw err;
		err = new TypeError('"value" must be a valid string.');
		if (!value || typeof value !== 'string') throw err;

		if (method.toLowerCase() == 'id') {
			const data = await fetchURL(`https://api.hypixel.net/guild?id=${value}&key=${this.key}`, 'json');
			const guild = new HypixelGuild(data);
			return guild;
		} else if (method.toLowerCase() == 'name') {
			const data = await fetchURL(`https://api.hypixel.net/guild?name=${value}&key=${this.key}`, 'json');
			const guild = new HypixelGuild(data);
			return guild;
		} else if (method.toLowerCase() == 'player') {
			const data = await fetchURL(`https://api.hypixel.net/guild?player=${value}&key=${this.key}`, 'json');
			const guild = new HypixelGuild(data);
			return guild;
		} else return null;
	}
}

module.exports = {
	HypixelClient
}