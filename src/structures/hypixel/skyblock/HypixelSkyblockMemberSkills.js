const leveling = require('./leveling.json');
/**
 * Represents Hypixel Skyblock Skills
 * @typedef {HypixelSkyblockMemberSkills} object
 */
class HypixelSkyblockMemberSkills {
	constructor(data) {
		function xpToLevel(xp, cap) {
			const levelingXP = leveling.levelingXP;
			let i = 0;
			let xpNeeded = 0;
			while (i <= cap && xp >= 0) {
				xp -= levelingXP[i];
				i++;
			}
			let xpPlayerHasToNext = 0;
			if (i < cap) {
				xpPlayerHasToNext = levelingXP[i - 1] + xp;
				xpNeeded = levelingXP[i - 1] - xpPlayerHasToNext
			}
			if (xp <= 0) {
				return {
					level: i - 1,
					needed: xpNeeded,
					currentXp: xpPlayerHasToNext
				}
			} else if (i >= cap) {
				return {
					level: cap,
					needed: xpNeeded,
					currentXp: xpPlayerHasToNext
				}
			} else {
				return {
					level: i,
					needed: xpNeeded,
					currentXp: xpPlayerHasToNext
				}
			}
		}
		function xpToLevelRune(xp) {
			const levelingXP = leveling.runeXP;
			let i = 0;
			let xpNeeded = 0;
			while (i <= 25 && xp >= 0) {
				xp -= levelingXP[i];
				i++;
			}
			let xpPlayerHasToNext = 0;
			if (i < 25) {
				xpPlayerHasToNext = levelingXP[i - 1] + xp;
				xpNeeded = levelingXP[i - 1] - xpPlayerHasToNext
			}
			if (xp <= 0) {
				return {
					level: i - 1,
					needed: xpNeeded,
					currentXp: xpPlayerHasToNext
				}
			} else if (i >= 25) {
				return {
					level: 25,
					needed: xpNeeded,
					currentXp: xpPlayerHasToNext
				}
			} else {
				return {
					level: i,
					needed: xpNeeded,
					currentXp: xpPlayerHasToNext
				}
			}
		}
		/**
		 * The Farming Skill
		 * @type {{exp: number, level: number, needed: number, currentXp: number}}
		 * @example
		 * 
		 * member.skills.farming.exp; // Farming experience
		 * member.skills.farming.needed; // XP needed until next level
		 */
		this.farming = {
			exp: data["experience_skill_farming"],
			level: xpToLevel(data["experience_skill_farming"], 60).level,
			needed: xpToLevel(data["experience_skill_farming"], 60).needed,
			currentXp: xpToLevel(data["experience_skill_farming"], 60).currentXp
		}
		/**
		 * The Mining Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.mining = {
			exp: data["experience_skill_mining"],
			level: xpToLevel(data["experience_skill_mining"], 60).level,
			needed: xpToLevel(data["experience_skill_mining"], 60).needed,
			currentXp: xpToLevel(data["experience_skill_mining"], 60).currentXp
		}
		/**
		 * The Enchanting Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.enchanting = {
			exp: data["experience_skill_enchanting"],
			level: xpToLevel(data["experience_skill_enchanting"], 60).level,
			needed: xpToLevel(data["experience_skill_enchanting"], 60).needed,
			currentXp: xpToLevel(data["experience_skill_enchanting"], 60).currentXp
		}
		/**
		 * The Combat Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.combat = {
			exp: data["experience_skill_combat"],
			level: xpToLevel(data["experience_skill_combat"], 60).level,
			needed: xpToLevel(data["experience_skill_combat"], 60).needed,
			currentXp: xpToLevel(data["experience_skill_combat"], 60).currentXp
		}
		/**
		 * The Alchemy Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.alchemy = {
			exp: data["experience_skill_alchemy"],
			level: xpToLevel(data["experience_skill_alchemy"], 50).level,
			needed: xpToLevel(data["experience_skill_alchemy"], 50).needed,
			currentXp: xpToLevel(data["experience_skill_alchemy"], 50).currentXp
		}
		/**
		 * The Taming Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.taming = {
			exp: data["experience_skill_taming"],
			level: xpToLevel(data["experience_skill_taming"], 50).level,
			needed: xpToLevel(data["experience_skill_taming"], 50).needed,
			currentXp: xpToLevel(data["experience_skill_taming"], 50).currentXp
		}
		/**
		 * The Fishing Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.fishing = {
			exp: data["experience_skill_fishing"],
			level: xpToLevel(data["experience_skill_fishing"], 50).level,
			needed: xpToLevel(data["experience_skill_fishing"], 50).needed,
			currentXp: xpToLevel(data["experience_skill_fishing"], 50).currentXp
		}
		/**
		 * The Foraging Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.foraging = {
			exp: data["experience_skill_foraging"],
			level: xpToLevel(data["experience_skill_foraging"], 50).level,
			needed: xpToLevel(data["experience_skill_foraging"], 50).needed,
			currentXp: xpToLevel(data["experience_skill_foraging"], 50).currentXp
		}
		/**
		 * The Runecrafting Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.runecrafting = {
			exp: data["experience_skill_runecrafting"],
			level: xpToLevelRune(data["experience_skill_runecrafting"]).level,
			needed: xpToLevelRune(data["experience_skill_runecrafting"]).needed,
			currentXp: xpToLevelRune(data["experience_skill_runecrafting"]).currentXp
		}
		/**
		 * The Carpentry Skill
		 * @type{{exp: number, level: number, needed: number, currentXp: number}}
		 */
		this.carpentry = {
			exp: data["experience_skill_carpentry"],
			level: xpToLevel(data["experience_skill_carpentry"], 50).level,
			needed: xpToLevel(data["experience_skill_carpentry"], 50).needed,
			currentXp: xpToLevel(data["experience_skill_carpentry"], 50).currentXp
		}
	}
}

module.exports = {
	HypixelSkyblockMemberSkills
}