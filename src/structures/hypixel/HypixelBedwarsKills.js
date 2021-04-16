class HypixelBedwarsKills {
	constructor(data) {
		this.totalKills = data.kills_bedwars;

		this.totalFinalKills = data.final_kills_bedwars;

		this.voidKills = data.void_kills_bedwars;

		this.voidFinalKills = data.void_final_kills_bedwars;

		this.meleeKills = data.entity_attack_kills_bedwars;

		this.meleeFinalKills = data.entity_attack_final_kills_bedwars;

		this.fallKills = data.fall_kills_bedwars;

		this.fallFinalKills = data.fall_final_kills_bedwars;

		this.projectileKills = data.projectile_kills_bedwars;

		this.projectileFinalKills = data.projectile_final_kills_bedwars;
	}
}

module.exports = {
	HypixelBedwarsKills
}