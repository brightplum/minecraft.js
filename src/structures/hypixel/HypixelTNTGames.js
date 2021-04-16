class HypixelTNTGames {
	constructor(data) {
		this.wins = {
			total: data.wins,
			wizards: data.wins_capture,
			pvprun: data.wins_pvprun,
			tag: data.wins_tntag,
			tntrun: data.wins_tntrun
		}

		this.coins = data.coins;

		this.winstreak = data.winstreak;

		this.kills = {
			tag: data.kills_tntag,
			pvprun: data.kills_pvprun,
			wizards: data.kills_capture
		};

		this.deaths = {
			tntrun: data.deaths_tntrun,
			bowspleef: data.deaths_bowspleef,
			pvprun: data.deaths_pvprun,
			wizards: data.deaths_capture
		}
	}
}

module.exports = {
	HypixelTNTGames
}