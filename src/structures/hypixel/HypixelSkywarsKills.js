
class HypixelSkywarsKills {
	constructor(data) {
		this.totalKills = data.kills;
		this.totalHeads = data.heads;
		this.killStreak = data.killstreak;
		

		this.meleeKills = data.melee_kills;
		this.bowKills = data.bow_kills;
		this.voidKills = data.void_kills;

		this.soloKills = data.kills_solo;
		this.soloNormalKills = data.kills_solo_normal;
		this.soloInsaneKills = data.kills_solo_insane;

		this.teamKills = data.kills_team;
		this.teamNormalKills = data.kills_team_normal;
		this.teamInsaneKills = data.kills_team_insane;


	}
}