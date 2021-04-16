class HypixelSkywarsDeaths {
	constructor(data) {
		this.totalDeaths = data.deaths;

		this.soloDeaths = data.deaths_solo;
		this.soloNormalDeaths = data.deaths_solo_normal
		this.soloInsaneDeaths = data.deaths_solo_insane;

		this.teamDeaths = data.deaths_team;
		this.teamNormalDeaths = data.deaths_team_normal;
		this.teamInsaneDeaths = data.deaths_team_insane;
	}
}

module.exports = {
	HypixelSkywarsDeaths
}