class MojangError extends Error {
	constructor(message) {
		super(message);
		this.name = "MojangError";
	}
}

class HypixelError extends Error {
	constructor(message) {
		super(message);
		this.name = "HypixelError";
	}
}

class HiveError extends Error {
	constructor(message) {
		super(message);
		this.name = "HiveError";
	}
}
module.exports = {
	MojangError, HypixelError, HiveError
}