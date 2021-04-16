class HypixelBedwarsCosmetics {
	constructor(data) {
		this.cratesOpened = {
			total: data.Bedwars_openedChests,
			common: data.Bedwars_openedCommons,
			rare: data.Bedwars_openedRares,
			epic: data.Bedwars_openedEpics,
			legendary: data.Bedwars_openedLegendaries
		}

		this.spray = data.activeSprays;

		this.projTrail = data.activeProjectileTrail;

		this.killMessage = data.activeKillMessages;

		this.killEffect = data.activeKillEffect;

		this.deathCry = data.activeDeathCry;

		this.victoryDance = data.activeVictoryDance;

		this.islandTopper = data.activeIslandTopper;

		this.glyph = data.activeGlyph;

		this.npcskin = data.activeNPCSkin;

		this.bedDestroyEffect = data.activeBedDestroy;
	}
}

module.exports = {
	HypixelBedwarsCosmetics
}