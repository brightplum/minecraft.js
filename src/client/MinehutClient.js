const { fetchURL } = require('../utils/fetchURL.js');

const { MinehutError } = require('../Errors.js');
const { MinehutServer } = require('../structures/minehut/MinehutServer.js');
/**
 * Represents the Minehut API Client
 * @typedef {MinehutClient} object
 */
class MinehutClient {
	constructor() {
	}
	/**
	 * Fetches all registered minehut servers
	 * @async
	 * @returns {object}
	 * @example
	 * 
	 * let servers = minehut.getServers();
	 * 
	 * console.log(servers[0].platform); // "java"
	 * console.log(servers[100].motd); // "A Minehut Server."
	 * console.log(servers[12].online); // true
	 */
	async getServers() {
		const data = await fetchURL('https://api.minehut.com/servers', 'json');
		return data.servers;
	}
	/**
	 * Fetches a specific server
	 * @param {string} id The Minehut ID of the server
	 */
	async getServerID(id) {
		if (!id || typeof id !== 'string') throw err;

		const data = await fetchURL(`https://api.minehut.com/server/${id}`, 'json');
		return new MinehutServer(data);
	}
}

module.exports = {
	MinehutClient
}