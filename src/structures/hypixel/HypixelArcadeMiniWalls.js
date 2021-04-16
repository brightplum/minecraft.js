class HypixelArcadeMiniWalls {
	constructor(data) {
		this.activeKit = data.miniwalls_activeKit;

		this.deaths = data.deaths_mini_walls;

		this.kills = data.kills_mini_walls;

		this.finalKills = data.final_kills_mini_walls;

		this.witherKills = data.wither_kills_mini_walls;

		this.wins = data.wins_mini_walls;

		this.arrowsShot = data.arrows_shot_mini_walls;

		this.arrowsHit = data.arrows_hit_mini_walls;

		this.KDR = this.kills / this.deaths;
	}
}

module.exports = {
	HypixelArcadeMiniWalls
}