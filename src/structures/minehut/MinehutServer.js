/**
 * Represents a Minehut Server
 * @typedef {MinehutServer} object
 */
class MinehutServer {
	constructor(data) {
		let server = data.server;

		let serverprop = server.server_properties;
		/**
		 * Server Properties Data
		 * @type {{maxPlayers: number, gamemode: number, allowFight: boolean, spawnAnimals: booleam, spawnMobs: boolean, forceGamemode: boolean, isHardcore: boolean, pvpAllowed: boolean, netherEnabled: boolean, generateStructures: boolean, commandBlocksEnabled: boolean, announceAchievements: boolean, level: {name: string, type: string }, spawnProtection: number, renderDistance: number}}
		 */
		this.properties = {
			maxPlayers: serverprop.max_players,
			gamemode: serverprop.gamemode,
			allowFlight: serverprop.allow_flight,
			spawnAnimals: serverprop.spawn_animals,
			spawnMobs: serverprop.spawn_mobs,
			forceGamemode: serverprop.force_gamemode,
			isHardcore: serverprop.hardcore,
			pvpAllowed: serverprop.pvp,
			netherEnabled: serverprop.allow_nether,
			generateStructures: serverprop.generate_structures,
			commandBlocksEnabled: serverprop.enable_command_block,
			announceAchievements: serverprop.announce_player_achievements,
			level: {
				name: serverprop.level_name,
				type: serverprop.level_type
			},
			spawnProtection: serverprop.spawn_protection,
			renderDistance: serverprop.view_distance
		};
		/**
		 * Whether or not the server is suspended
		 * @type {boolean}
		 */
		this.isSuspended = server.suspended;
		/**
		 * The amount of backup slots the server has
		 * @type {number}
		 */
		this.backupSlots = server.backup_slots;
		/**
		 * Server's Database ID
		 * @type {string}
		 */
		this.id = server._id;
		/**
		 * The platform the server is currently on
		 * @type {string}
		 */
		this.platform = server.platform;
		/**
		 * The amount of credits the server earns. daily
		 * @type {number}
		 */
		this.creditsPerDay = server.credits_per_day;
		/**
		 * The current minehut plan the server has
		 * @type {string}
		 */
		this.plan = server.server_plan.toLowerCase();
		/**
		 * The server's MOTD (message of the day)
		 * @type {string}
		 */
		this.motd = server.motd;
		/**
		 * The server owner's database ID
		 * @type {string}
		 */
		this.id = server.owner;
		/**
		 * The server name
		 * @type {string}
		 */
		this.name = server.name;
		/**
		 * Timestamp of when the server was last online
		 * @type {number}
		 */
		this.onlineTimestamp = server.last_online;
		/**
		 * Whether or not the server is currently online
		 * @type {boolean}
		 */
		this.isOnline = server.online;
		/**
		 * The maximum players allowed on the server
		 * @type {number}
		 */
		this.maxPlayers = server.maxPlayers;
		/**
		 * The current amount of players online
		 * @type {number}
		 */
		this.onlinePlayers = server.playerCount;
	}
}

module.exports = {
	MinehutServer
}