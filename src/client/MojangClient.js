const { fetchURL } = require('../utils/fetchURL.js');

const { MojangApp } = require('../structures/mojang/MojangApp.js');
const { MojangError } = require('../Errors.js')
const { MojangPlayer } = require('../structures/mojang/MojangPlayer.js');
const { MojangServer } = require('../structures/mojang/MojangServer.js');

let err = new TypeError('"type" must be a valid string equal to \'uuid\' or \'name\'.')
/**
 * Represents the Mojang API Client
 * @typedef {MojangClient} object
 */
class MojangClient {
	constructor() {
	}
	/**
	 * Fetch the Mojang App Status
	 * @returns {Promise<MojangApp>}
	 */
	async getMojangApp() {
		const data = await fetchURL('https://api.mojang.com', 'json');

		const app = new MojangApp(data);
		return app;
	}
	/**
	 * Fetch the UUID(s) of Blocked Mojang Servers
	 * @async
	 * @returns {Promise<string>}
	 */
	async getBlockedServers() {
		const data = await fetchURL('https://sessionserver.mojang.com/blockedservers', 'text');

		return data;
	}
	/**
	 * Fetch a player's mojang statistics that include their UUID and username.
	 * @async
	 * @param {string} type The method of fetching the player ('uuid' or 'name')
	 * @param {string}  id The value to search the player by
	 * @returns {Promise<MojangPlayer>}
	 * @example
	 * 
	 * const MCAPI = require('mc-api');
	 * 
	 * const mojang = new MCAPI.MojangClient();
	 * 
	 * async function getPlayer() {
	 * 	const player = await mojang.getPlayer('name', 'GamerCoder215');
	 * 	console.log(player.uuid) // My UUID
	 * }
	 * getPlayer();
	 */
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
	/**
	 * Pings a server
	 * @async
	 * @param {string} ip The server IP to ping
	 * @returns {MojangServer}
	 * @example
	 * 
	 * mojang.pingServer('mc.hypixel.net');
	 * .then(data => {
	 * 	console.log(data.online); // Expected: true
	 * })
	 */
	async pingServer(ip) {
		err = new MojangError('"ip" must be a valid string.');
		if (!ip || typeof ip !== 'string') throw err;
		
		const data = await fetchURL(`https://mc-api.net/v3/server/ping/${ip}`, 'json');

		if (data.error) {
			err = new MojangError(data.error);
			throw err;
		} else {
			return new MojangServer(data);
		}
	}
}

module.exports = {
	MojangClient
}
