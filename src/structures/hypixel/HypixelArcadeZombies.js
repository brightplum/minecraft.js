class HypixelArcadeZombies {
	constructor(data) {
		this.maxWave = data.max_wave;

		this.headshots = data.headshots_zombies;

		this.revivedPlayers = data.players_revived_zombies;

		this.deaths = data.deaths_zombies;

		this.knockedDown = data.times_knocked_down_zombies;

		this.doorsOpened = data.doors_opened_zombies;

		this.firedBullets = data.bullets_shot_zombies;

		this.kills = data.zombie_kills_zombies;

		this.hitBullets = data.bullets_hit_zombies;

		this.survivedRounds = data.total_rounds_survived_zombies;

		this.bestRound = data.best_round_zombies;

		this.repairedWindows = data.windows_repaired_zombies;
	}
}

module.exports = {
	HypixelArcadeZombies
}