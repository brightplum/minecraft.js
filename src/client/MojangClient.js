const { fetchURL } = require('../utils/fetchURL.js');

const { MojangApp } = require('../structures/mojang/MojangApp.js');
const { MojangError } = require('../Errors.js')
const { MojangPlayer } = require('../structures/mojang/MojangPlayer.js');

let err = new TypeError('"type" must be a valid string equal to \'uuid\' or \'name\'.')
class MojangClient {
	constructor() {

	}
	async getMojangApp() {
		const data = await fetchURL('https://api.mojang.com', 'json');

		const app = new MojangApp(data);
		return app;
	}
	async getBlockedServers() {
		const data = await fetchURL('https://sessionserver.mojang.com/blockedservers', 'text');

		return data;
	}
	async getPlayer(type, id) {
		if (!type || typeof type !== 'string' || (type !== 'uuid' && type !== 'name')) throw err;
		err = new TypeError('"id" must be a valid string.');
		if (!id || typeof id !== 'string') throw err;

		let data = await fetchURL(`https://api.mojang.com/users/profiles/minecraft/${id}`, 'json');
		if (type == 'uuid') {
			data = await fetchURL(`https://api.mojang.com/user/profile/${id}`, 'json');
		}

		if (data.error) {
			err = new MojangError(`${data.error}: ${data.errorMessage}`);
			throw err;
		}

		let player = new MojangPlayer(data)
		return player;
	}
}

module.exports = {
	MojangClient
}
