/**
 * Represents a Mojang Server
 * @typedef {MojangServer} object
 */
class MojangServer {
	constructor(data) {
		/**
		 * Whether or not the server is online
		 * @type {boolean}
		 */
		this.online = data.online;
		/**
		 * The favicon as a base64 string
		 * @type {?string}
		 */
		this.favicon = data.favicon_base64 ? data.favicon_base64.split(';base64,').pop() : null;
		/**
		 * The favicon as a URL
		 * @type {string}
		 */
		this.faviconURL = data.favicon;
		/**
		 * The amount of milliseconds it took to reach the server
		 * @type {number}
		 */
		this.ping = data.took;
		/**
		 * Server version information
		 * @type {{verName: string, protocol: number}}
		 */
		this.version = {
			verName: data.version.name,
			protocol: data.version.protocol
		}
		/**
		 * The maximum amount of players the server can have
		 * @type {number}
		 */
		this.maxPlayers = data.players.max;
		/**
		 * The amount of online players the server has
		 * @type {number}
		 */
		this.onlinePlayers = data.players.online;
		let realSample = [];

		function pushSample(item, index) {
			realSample.push({
				uuid: item.id,
				name: item.name.replace(/[§]/g, '&')
			})
		}

		if (data.sample) {
			data.sample.forEach(pushSample);
		}
		/**
		 * The sample of player usernames when hovering over the player count number
		 * @type {{uuid: string, name: string}[]}
		 */
		this.samplePlayers = realSample;
		/**
		 * Server DNS Data
		 * @type {?{type: string, port: number, ip: string}}
		 */
		this.dns = data.dns ? data.dns : null;
	}
}

module.exports = {
	MojangServer
}