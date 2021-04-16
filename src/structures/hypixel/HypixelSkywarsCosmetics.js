class HypixelSkywarsCosmetics {
	constructor(data) {
		this.sprays = data.active_sprays;

		this.cage = data.active_cage;

		this.victoryDance = data.active_victory_dance;

		this.balloon = data.active_balloon;

		this.killMessage = data.active_killmessages
	}
}

module.exports = {
	HypixelSkywarsCosmetics
}