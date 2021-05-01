const leveling = require('./leveling.json');
/**
 * Represents Slayer Data
 * @typedef {HypixelSkyblockMemberSlayers} object
 */
class HypixelSkyblockMemberSlayers {
	constructor(data) {
		function xpToLevel(xp, type) {
			const levelingXP = leveling.slayerXP[type];
			let i = 0;
			let oldXP = xp;
			let xpNeeded = 0;
			while (i <= 9 && xp >= 0) {
				xp -= levelingXP[i];
				i++;
			}
			xp = oldXP;
			if (i < 9) {
				xpNeeded = levelingXP[i - 1] - oldXP
			}
			if (i >= 9) {
				return {
					level: 9,
					needed: xpNeeded,
				}
			} else {
				return {
					level: i - 1,
					needed: xpNeeded,
				}
			}
		}
		/**
		 * Revenant (zombie) slayer data
		 * @type {{exp: number,}}
		 */
		this.revenant = {
			exp: data.zombie.xp,
			level: xpToLevel(data.zombie.xp, 'revenant').level,
			needed: xpToLevel(data.zombie.xp, 'revenant').needed
		};
		/**
		 * Tarantula (spider) slayer data
		 * @type {{exp: number}}
		 */
		this.tarantula = {
			exp: data.spider.xp,
			level: xpToLevel(data.spider.xp, 'tara').level,
			needed: xpToLevel(data.spider.xp, 'tara').needed
		};
		/**
		 * Sven Packmaster (wolf) slayer data
		 * @type {{exp: number}}
		 */
		this.sven = {
			exp: data.wolf.xp,
			level: xpToLevel(data.wolf.xp, 'sven').level,
			needed: xpToLevel(data.wolf.xp, 'sven').needed
		};
	}
}

module.exports = {
	HypixelSkyblockMemberSlayers
}