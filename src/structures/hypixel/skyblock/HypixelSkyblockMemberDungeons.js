/**
 * Represents Hypixel Skyblock Member's Dungeon Data
 * @typedef {HypixelSkyblockMemberDungeons} object
 */
class HypixelSkyblockMemberDungeons {
	constructor(data) {
		
		let cata = data.dungeon_types.catacombs;
		/**
		 * Represents Catacombs Data
		 * @type {{experience: number, highestFloor: object, mostDamage: object, mostHealing: object, }}
		 */
		this.catacombs = {
			/**
			 * Represents dungeoneering experience in the catacombs
			 * @type {number}
			 */
			experience: cata.experience,
			/**
			 * Represents the current highest catacombs floor the player has completed
			 * @type {Promise<number|null>}
			 */
			highestFloor: cata.highest_tier_completed ? cata.highest_tier_completed : null,
			/**
			 * Represents the most damage the player has made
			 * @type {{entrance: number, bonzo: number, scarf: number, professor: number, thorn: number, livid: number, sadan: number, necron: number}}
			 * @example
			 * 
			 * member.dungeons.catacombs.mostDamage.berserk.professor; // Most damage hit in F3
			 * member.dungeons.catacombs.mostDamage.berserk.entrance; // Most damage hit in Entrance Floor (or F0)
			 */
			mostDamage: {
				berserk: cata.most_damage_berserk ? {
					entrance: cata.most_damage_berserk["0"] ? cata.most_damage_berserk["0"] : null,
					bonzo: cata.most_damage_berserk["1"] ? cata.most_damage_berserk["1"] : null,
					scarf: cata.most_damage_berserk["2"] ? cata.most_damage_berserk["2"] : null,
					professor: cata.most_damage_berserk["3"] ? cata.most_damage_berserk["3"] : null,
					thorn: cata.most_damage_berserk["4"] ? cata.most_damage_berserk["4"] : null,
					livid: cata.most_damage_berserk["5"] ? cata.most_damage_berserk["5"] : null,
					sadan: cata.most_damage_berserk["6"] ? cata.most_damage_berserk["6"]: null,
					necron: cata.most_damage_berserk["7"] ? cata.most_damage_berserk["7"] : null
				} : null,
				mage: cata.most_damage_healer ? {
					entrance: cata.most_damage_mage["0"] ? cata.most_damage_mage["0"] : null,
					bonzo: cata.most_damage_mage["1"] ? cata.most_damage_mage["1"] : null,
					scarf: cata.most_damage_mage["2"] ? cata.most_damage_mage["2"] : null,
					professor: cata.most_damage_mage["3"] ? cata.most_damage_mage["3"] : null,
					thorn: cata.most_damage_mage["4"] ? cata.most_damage_mage["4"] : null,
					livid: cata.most_damage_mage["5"] ? cata.most_damage_mage["5"] : null,
					sadan: cata.most_damage_mage["6"] ? cata.most_damage_mage["6"] : null,
					necron: cata.most_damage_mage["7"] ? cata.most_damage_mage["7"] : null
				} : null,
				healer: cata.most_damage_healer ? {
					entrance: cata.most_damage_healer["0"] ? cata.most_damage_healer["0"] : null,
					bonzo: cata.most_damage_healer["1"] ? cata.most_damage_healer["1"] : null,
					scarf: cata.most_damage_healer["2"] ? cata.most_damage_healer["2"] : null,
					professor: cata.most_damage_healer["3"] ? cata.most_damage_healer["3"] : null,
					thorn: cata.most_damage_healer["4"] ? cata.most_damage_healer["4"] : null,
					livid: cata.most_damage_healer["5"] ? cata.most_damage_healer["5"] : null,
					sadan: cata.most_damage_healer["6"] ? cata.most_damage_healer["6"] : null,
					necron: cata.most_damage_healer["7"] ? cata.most_damage_healer["7"] : null
				} : null,
				archer: cata.most_damage_archer ? {
					entrance: cata.most_damage_archer["0"] ? cata.most_damage_archer["0"] : null,
					bonzo: cata.most_damage_archer["1"] ? cata.most_damage_archer["1"] : null,
					scarf: cata.most_damage_archer["2"] ? cata.most_damage_archer["2"] : null,
					professor: cata.most_damage_archer["3"] ? cata.most_damage_archer["3"] : null,
					thorn: cata.most_damage_archer["4"] ? cata.most_damage_archer["4"] : null,
					livid: cata.most_damage_archer["5"] ? cata.most_damage_archer["5"] : null,
					sadan: cata.most_damage_archer["6"] ? cata.most_damage_archer["6"] : null,
					necron: cata.most_damage_archer["7"] ? cata.most_damage_archer["7"] : null
				} : null,
				tank: cata.most_damage_tank ? {
					entrance: cata.most_damage_tank["0"] ? cata.most_damage_tank["0"] : null,
					bonzo: cata.most_damage_tank["1"] ? cata.most_damage_tank["1"] : null,
					scarf: cata.most_damage_tank["2"] ? cata.most_damage_tank["2"] : null,
					professor: cata.most_damage_tank["3"] ? cata.most_damage_tank["3"] : null,
					thorn: cata.most_damage_tank["4"] ? cata.most_damage_tank["4"]: null,
					livid: cata.most_damage_tank["5"] ? cata.most_damage_tank["5"] : null,
					sadan: cata.most_damage_tank["6"] ? cata.most_damage_tank["6"] : null,
					necron: cata.most_damage_tank["7"] ? cata.most_damage_tank["7"] : null
				} : null
			},
			/**
			 * Represents the most healing a player has made
			 * @type {Promise<{entrance: number, bonzo: number, scarf: number, professor: number, thorn: number, livid: number, sadan: number, necron: number}|null>}
			 * @example
			 * 
			 * member.dungeons.catacombs.mostHealing.scarf; // Most Health healed in F2
			 * member.dungeons.catacombs.mostHealing.thorn; // Most Health healed in F4
			 */
			mostHealing: cata.most_healing ? {
				entrance: cata.most_healing["0"] ? cata.most_healing["0"] : null,
				bonzo: cata.most_healing["1"] ? cata.most_healing["1"] : null,
				scarf: cata.most_healing["2"] ? cata.most_healing["2"] : null,
				professor: cata.most_healing["3"] ? cata.most_healing["3"] : null,
				thorn: cata.most_healing["4"] ? cata.most_healing["4"] : null,
				livid: cata.most_healing["5"] ? cata.most_healing["5"] : null,
				sadan: cata.most_healing["6"] ? cata.most_healing["6"] : null,
				necron: cata.most_healing["7"] ? cata.most_healing["7"] : null
			} : null,
			/**
			 * Represents the amount of times the watcher has been killed
			 * @type {{entrance: number, bonzo: number, scarf: number, professor: number, thorn: number, livid: number, sadan: number, necron: number}}
			 */
			watcherKills: cata.watcher_kills ? {
				entrance: cata.watcher_kills["0"] ? cata.watcher_kills["0"] : null,
				bonzo: cata.watcher_kills["1"] ? cata.watcher_kills["1"] : null,
				scarf: cata.watcher_kills["2"] ? cata.watcher_kills["2"] : null,
				professor: cata.watcher_kills["3"] ? cata.watcher_kills["3"] : null,
				thorn: cata.watcher_kills["4"] ? cata.watcher_kills["4"] : null,
				livid: cata.watcher_kills["5"] ? cata.watcher_kills["5"] : null,
				sadan: cata.watcher_kills["6"] ? cata.watcher_kills["6"] : null,
				necron: cata.watcher_kills["7"] ? cata.watcher_kills["7"] : null
			} : null,
			/**
			 * Represents the amount of times player has reached at least milestone level 3 in floors.
			 * @type {{entrance: number, bonzo: number, scarf: number, professor: number, thorn: number, livid: number, sadan: number, necron: number}}
			 * @example
			 * 
			 * member.dungeons.catacombs.milestoneCompletions.sadan; // Represents amount of times Milestone 3 in F6
			 * member.dungeons.catacombs.milestoneCompletions.necron; // Represents amount of times Milestone 3 in F7
			 */
			milestoneCompletions: {
				entrance: cata.milestone_completions["0"] ? cata.milestone_completions["0"] : null,
				bonzo: cata.milestone_completions["1"] ? cata.milestone_completions["1"] : null,
				scarf: cata.milestone_completions["2"] ? cata.milestone_completions["2"] : null,
				professor: cata.milestone_completions["3"] ? cata.milestone_completions["3"] : null,
				thorn: cata.milestone_completions["4"] ? cata.milestone_completions["4"] : null,
				livid: cata.milestone_completions["5"] ? cata.milestone_completions["5"] : null,
				sadan: cata.milestone_completions["6"] ? cata.milestone_completions["6"] : null,
				necron: cata.milestone_completions["7"] ? cata.milestone_completions["7"] : null
			},
			/**
			 * Represents amount of times player has cleared this floor
			 * @type {{entrance: number, bonzo: number, scarf: number, professor: number, thorn: number, livid: number, sadan: number, necron: number}}
			 * @example
			 * 
			 * member.dungeons.catacombs.clearedFloors.livid; // Amount of times F5 has been cleared
			 * member.dungeons.catacombs.clearedFloors.sadan; // Amount of times F6 has been cleared
			 */
			clearedFloors: {
				entrance: cata.tier_completions["0"] ? cata.tier_completions["0"] : null,
				bonzo: cata.tier_completions["1"] ? cata.tier_completions["1"] : null,
				scarf: cata.tier_completions["2"] ? cata.tier_completions["2"] : null,
				professor: cata.tier_completions["3"] ? cata.tier_completions["3"] : null,
				thorn: cata.tier_completions["4"] ? cata.tier_completions["4"] : null,
				livid: cata.tier_completions["5"] ? cata.tier_completions["5"] : null,
				sadan: cata.tier_completions["6"] ? cata.tier_completions["6"] : null,
				necron: cata.tier_completions["7"] ? cata.tier_completions["7"] : null
			},
			/**
			 * Number of Attemps at a floor
			 * @type {{entrance: number, bonzo: number, scarf: number, professor: number, thorn: number, livid: number, sadan: number, necron: number}}
			 * @example
			 * 
			 * member.dungeons.catacombs.timesPlayed.entrance; // Attemps at Entrance Floor (F0)
			 * member.dungeons.catacombs.timesPlayed.bonzo; // Attemps at F1
			 * member.dungeons.catacombs.timesPlayed.professor; // Attemps at F3
			 */
			timesPlayed: {
				entrance: cata.times_played["0"] ? cata.times_played["0"] : null,
				bonzo: cata.times_played["1"] ? cata.times_played["1"] : null,
				scarf: cata.times_played["2"] ? cata.times_played["2"] : null,
				professor: cata.times_played["3"] ? cata.times_played["3"] : null,
				thorn: cata.times_played["4"] ? cata.times_played["4"] : null,
				livid: cata.times_played["5"] ? cata.times_played["5"] : null,
				sadan: cata.times_played["6"] ? cata.times_played["6"] : null,
				necron: cata.times_played["7"] ? cata.times_played["7"] : null
			},
		}

		let classes = data.player_classes;
		/**
		 * Represents dungeoneering class experience
		 * @type {{healer: number, tank: number, berserk: number, archer: number, mage: number}}
		 * @example
		 * 
		 * member.dungeons.classExperience.archer; // Archer experience;
		 * 
		 * member.dungeons.classExperience.healer; // Healer experience;
		 */
		this.classExperience = {
			healer: classes.healer.experience,
			tank: classes.tank.experience,
			berserk: classes.berserk.experience,
			archer: classes.archer.experience,
			mage: classes.mage.experience
		}

		let journal = data.dungeon_journal;

		/**
		 * Represents Dungeon Journal Entries found throught floors
		 * @type {{study: number[], karyllesDiary: number[]}}
		 * @example
		 * 
		 * member.dungeons.jounral.entries.karyllesDiary; // Array of pages found of Karyelle's Diary
		 * member.dungeons.journal.entries.study; // Array of pages found of The Study
		 */
		this.journal = {
			entries: {
				study: journal.journal_entries.the_study,
				karyllesDiary: journal.journal_entries.karylles_diary
			}
		};

		/**
		 * The current selected class the player is using
		 * @type {string}
		 * @example
		 * 
		 * member.dungeons.currentClass // "healer"
		 */
		this.currentClass = data.selected_dungeon_class;
	}
}

module.exports = {
	HypixelSkyblockMemberDungeons
}