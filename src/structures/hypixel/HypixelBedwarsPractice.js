class HypixelBedwarsPractice {
	constructor(data) {
		let practice = data.practice;
		this.selectedMode = practice.selected;

		this.bridgingData = {
			success: practice.bridging.successful_attempts,
			fail: practice.bridging.failed_attempts,
			placedBlocks: practice.bridging.blocks_placed
		}

		this.mlgData = {
			success: practice.mlg.successful_attempts,
			fail: practice.mlg.failed_attempts,
			placedBlocks: practice.mlg.blocks_placed
		}

		this.fireballData = {
			success: practice.fireball_jumping.successful_attempts,
			fail: practice.fireball_jumping.failed_attempts,
			placedBlocks: practice.fireball_jumping.blocks_placed
		}
	}
}

module.exports = {
	HypixelBedwarsPractice
}