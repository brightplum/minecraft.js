class MojangPlayer {
	constructor(data) {
		this.uuid = data.id;

		this.name = data.name;
	}
}

module.exports = {
	MojangPlayer
}
