class HypixelBedwarsDeaths {
	constructor(data) {
		this.totalDeaths = data.deaths_bedwars;

		this.totalFinalDeaths = data.final_deaths_bedwars;

		this.meleeDeaths = data.entity_attack_deaths_bedwars;

		this.meleeFinalDeaths = data.entity_attack_final_deaths_bedwars;

		this.voidDeaths = data.void_deaths_bedwars;

		this.voidFinalDeaths = data.void_final_deaths_bedwars;

		this.fallDeaths = data.fall_deaths_bedwars;

		this.fallFinalDeaths = data.fall_final_deaths_bedwars;

		this.projectileDeaths = data.projectile_deaths_bedwars;

		this.projectileFinalDeaths = data.projectile_final_deaths_bedwars;

		this.explosionDeaths = data.entity_explosion_deaths_bedwars;

		this.explosionFinalDeaths = data.entity_explosion_final_deaths_bedwars;

		this.magicDeaths = data.magic_deaths_bedwars;

		this.magicFinalDeaths = data.magic_final_deaths_bedwars;
	}
}

module.exports = {
	HypixelBedwarsDeaths
};
