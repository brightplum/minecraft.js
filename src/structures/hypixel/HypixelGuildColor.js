class HypixelGuildColor {
	constructor(colordata) {
		this.color = colordata;

		let hex = '#AAAAAA';

		if (colordata == 'GOLD') {
			hex = '#FFAA00';
		} else if (colordata == 'DARK_AQUA') {
			hex = '#00AAAA';
		} else if (colordata == 'YELLOW') {
			hex = '#FFFF55';
		} else hex = '#AAAAAA';

		this.colorHex = hex;

		this.colorRGB = hex.replace(/[#]/g, '').match(/.{1,2}/g);
	}
}

module.exports = {
	HypixelGuildColor
}