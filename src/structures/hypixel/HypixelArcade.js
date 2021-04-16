const { HypixelArcadeMiniWalls } = require('./HypixelArcadeMiniWalls.js');
const { HypixelArcadeZombies } = require('./HypixelArcadeZombies.js');

class HypixelArcade {
	constructor(data) {
		this.coins = data.coins;

		this.arcadeStats = {
			miniwalls: new HypixelArcadeMiniWalls(data),
			zombies: new HypixelArcadeZombies(data),
			party:  {
				wins: data.wins_party
			},
			soccer: {
				wins: data.wins_soccer,
				powerKicks: data.powerkicks_soccer
			},
			spleef: {
				wins: data.wins_ender
			},
			dragonwars: {
				kills: data.kills_dragonwars2
			},
			throwOut: {
				kills: data.kills_throw_out,
				deaths: data.deaths_throw_out,
				KDR: (data.kills_throw_out / data.deaths_throw_out)
			},
			simonSays: {
				rounds: data.rounds_simon_says
			},
			holeInTheWall: {
				rounds: data.rounds_hole_in_the_wall
			},
			hideNSeek: {
				hiderWins: data.hider_wins_hide_and_seek,
			},
			special: {
				grinchGifts: data.gifts_grinch_simulator_v2,
				easterEggs: data.eggs_found_easter_simulator
			}
		}

	}
}

module.exports = {
	HypixelArcade
}